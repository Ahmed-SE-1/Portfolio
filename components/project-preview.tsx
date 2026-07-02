"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/site-data";

// ─── helpers ──────────────────────────────────────────────────────────────────

/** Returns true for any publicly accessible web URL (not GitHub). */
function isLiveWebsite(href: string): boolean {
  try {
    const url = new URL(href);
    const host = url.hostname;
    if (host === "github.com" || host === "www.github.com") return false;
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

/** Builds a microlink.io screenshot URL — free tier, screenshots are cached CDN-side. */
function microlinkScreenshot(href: string): string {
  return `https://api.microlink.io/?url=${encodeURIComponent(href)}&screenshot=true&meta=false&embed=screenshot.url`;
}

/** Deterministic gradient pair per project title so each fallback has its own colour. */
const GRADIENT_PAIRS = [
  ["from-violet-500/20", "to-indigo-500/20"],
  ["from-rose-500/20", "to-orange-400/20"],
  ["from-sky-500/20", "to-cyan-400/20"],
  ["from-emerald-500/20", "to-teal-400/20"],
  ["from-amber-500/20", "to-yellow-400/20"],
  ["from-fuchsia-500/20", "to-pink-400/20"],
] as const;

function gradientFor(title: string): readonly [string, string] {
  let hash = 0;
  for (let i = 0; i < title.length; i++) hash = (hash * 31 + title.charCodeAt(i)) >>> 0;
  return GRADIENT_PAIRS[hash % GRADIENT_PAIRS.length];
}

/** Two-letter initials — first letter of first two words. */
function initials(title: string): string {
  const words = title.trim().split(/\s+/);
  return (words[0][0] + (words[1]?.[0] ?? words[0][1] ?? "")).toUpperCase();
}

// ─── sub-components ───────────────────────────────────────────────────────────

/** Shown on SSR and while the client hasn't mounted yet — no network, no state. */
function GradientFallback({ title }: { title: string }) {
  const [from, to] = gradientFor(title);
  const abbr = initials(title);

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${from} via-transparent ${to}`}
    >
      <span className="select-none font-mono text-5xl font-bold tracking-tight text-foreground/10 transition-colors duration-300 group-hover:text-foreground/20">
        {abbr}
      </span>
      <span className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/10" />
      <span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/10" />
      <span className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-foreground/10" />
      <span className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-foreground/10" />
    </div>
  );
}

function ManualImage({
  src,
  title,
  priority,
}: {
  src: string;
  title: string;
  priority: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={src}
        alt={`${title} preview`}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
    </div>
  );
}

function LiveScreenshot({
  href,
  title,
  priority,
}: {
  href: string;
  title: string;
  priority: boolean;
}) {
  // Track load state purely client-side — never touches SSR.
  const [imgStatus, setImgStatus] = useState<"loading" | "loaded" | "error">("loading");
  const src = microlinkScreenshot(href);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Shimmer skeleton visible until image resolves */}
      {imgStatus === "loading" && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-border/60 to-border/20" />
      )}

      {imgStatus !== "error" ? (
        <Image
          src={src}
          alt={`${title} live preview`}
          fill
          unoptimized        // microlink already serves optimised WebP/AVIF
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          className={`object-cover object-top transition-all duration-500 group-hover:scale-105 ${
            imgStatus === "loaded" ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
          onLoad={() => setImgStatus("loaded")}
          onError={() => setImgStatus("error")}
        />
      ) : (
        /* If microlink fails (rate-limit, CORS, etc) gracefully fall back */
        <GradientFallback title={title} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-transparent" />
    </div>
  );
}

// ─── public component ─────────────────────────────────────────────────────────

export interface ProjectPreviewProps {
  project: Pick<Project, "title" | "href" | "image">;
  /**
   * Pass `true` for the first 1–2 cards visible above the fold.
   * Adds `priority` + `loading="eager"` to avoid the LCP warning.
   */
  priority?: boolean;
}

export function ProjectPreview({ project, priority = false }: ProjectPreviewProps) {
  const { title, href, image } = project;

  /**
   * `mounted` starts false on both server and client — so the initial
   * client render matches the server render exactly (GradientFallback).
   * After mount, we swap in the real preview client-side only.
   * This completely eliminates the hydration mismatch.
   */
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="relative h-full w-full">
      {!mounted ? (
        <GradientFallback title={title} />
      ) : image ? (
        <ManualImage src={image} title={title} priority={priority} />
      ) : isLiveWebsite(href) ? (
        <LiveScreenshot href={href} title={title} priority={priority} />
      ) : (
        <GradientFallback title={title} />
      )}
    </div>
  );
}