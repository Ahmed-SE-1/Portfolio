"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

interface SignatureNameProps {
  name: string;
  className?: string;
  /** Path to the cursive .ttf/.otf used for the signature glyphs */
  fontUrl?: string;
  /** Total time (s) the full signature takes to draw */
  duration?: number;
}

interface GlyphPath {
  d: string;
  length: number;
}

/**
 * Renders `name` as a hand-drawn signature: the actual cursive font outlines
 * are extracted client-side with opentype.js and converted into real SVG
 * <path> data, then revealed stroke-by-stroke via stroke-dashoffset — the
 * only way to get a believable "written by a pen" animation, since native
 * SVG <text> elements cannot be stroke-animated reliably across browsers.
 */
export function SignatureName({
  name,
  className = "",
  fontUrl = "/fonts/Caveat.ttf",
  duration = 1.8,
}: SignatureNameProps) {
  const prefersReducedMotion = useReducedMotion();
  const [glyphs, setGlyphs] = useState<GlyphPath[] | null>(null);
  const [viewBox, setViewBox] = useState("0 0 320 80");
  const cancelled = useRef(false);

  useEffect(() => {
    cancelled.current = false;

    async function build() {
      try {
        const opentype = await import("opentype.js");
        const response = await fetch(fontUrl);
        if (!response.ok) throw new Error(`Failed to fetch font: ${response.status}`);
        const arrayBuffer = await response.arrayBuffer();
        const font = opentype.parse(arrayBuffer);
        if (cancelled.current) return;

        const fontSize = 64;
        const path = font.getPath(name, 0, 0, fontSize);
        const { x1, y1, x2, y2 } = path.getBoundingBox();
        const pad = 6;

        // Split the combined path back into per-glyph paths so each
        // letter draws in sequence rather than the whole word at once.
        let cursorX = 0;
        const glyphData: GlyphPath[] = [];
        const glyphArray = font.stringToGlyphs(name);

        for (const glyph of glyphArray) {
          const gPath = glyph.getPath(cursorX, 0, fontSize);
          const d = gPath.toPathData(2);
          if (d) {
            // Rough arc-length estimate for animation timing weighting
            const bbox = gPath.getBoundingBox();
            const length =
              Math.hypot(bbox.x2 - bbox.x1, bbox.y2 - bbox.y1) || 1;
            glyphData.push({ d, length });
          }
          cursorX += (glyph.advanceWidth ?? fontSize * 0.5) * (fontSize / font.unitsPerEm);
        }

        if (!cancelled.current) {
          setViewBox(
            `${x1 - pad} ${y1 - pad} ${x2 - x1 + pad * 2} ${y2 - y1 + pad * 2}`
          );
          setGlyphs(glyphData);
        }
      } catch {
        // Font failed to load (offline, blocked, etc.) — fall back to
        // plain styled text below instead of breaking the hero.
        if (!cancelled.current) setGlyphs([]);
      }
    }

    build();
    return () => {
      cancelled.current = true;
    };
  }, [name, fontUrl]);

  const fallback = glyphs !== null && glyphs.length === 0;

  return (
    <div className={`select-none ${className}`} aria-hidden="true">
      <AnimatePresence mode="wait">
        {fallback ? (
          <motion.span
            key="fallback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="block font-serif text-3xl italic text-foreground/80 sm:text-4xl"
            style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
          >
            {name}
          </motion.span>
        ) : glyphs && glyphs.length > 0 ? (
          <motion.svg
            key="signature"
            viewBox={viewBox}
            className="h-12 w-auto text-foreground/85 sm:h-14"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {glyphs.map((g, i) => {
              const totalLength = glyphs.reduce((s, gl) => s + gl.length, 0);
              const startFrac =
                glyphs.slice(0, i).reduce((s, gl) => s + gl.length, 0) /
                totalLength;
              const fracShare = g.length / totalLength;
              const segDuration = prefersReducedMotion
                ? 0.01
                : Math.max(duration * fracShare, 0.12);
              const delay = prefersReducedMotion ? 0 : duration * startFrac;

              return (
                <motion.path
                  key={i}
                  d={g.d}
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    pathLength: {
                      duration: segDuration,
                      delay,
                      ease: "easeInOut",
                    },
                  }}
                />
              );
            })}
            {/* Ink fill fades in just behind the pen tip for a more natural look */}
            {glyphs.map((g, i) => {
              const totalLength = glyphs.reduce((s, gl) => s + gl.length, 0);
              const startFrac =
                glyphs.slice(0, i).reduce((s, gl) => s + gl.length, 0) /
                totalLength;
              const fracShare = g.length / totalLength;
              const delay = prefersReducedMotion
                ? 0
                : duration * startFrac + duration * fracShare * 0.6;

              return (
                <motion.path
                  key={`fill-${i}`}
                  d={g.d}
                  fill="currentColor"
                  stroke="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.92 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.01 : 0.35,
                    delay,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </motion.svg>
        ) : (
          // Loading state: reserve space, invisible, avoids layout shift
          <span className="block h-12 sm:h-14" />
        )}
      </AnimatePresence>
      <span className="sr-only">{name}</span>
    </div>
  );
}