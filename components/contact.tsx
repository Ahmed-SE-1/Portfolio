"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";
import { profile, socials } from "@/lib/site-data";

export function Contact() {
  // Safe web link that avoids broken desktop mail clients
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;

  return (
    <section id="contact" className="relative px-6 pb-10 pt-28 sm:pt-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:py-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-violet/20 blur-[100px]" />

          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Contact
          </span>
          <h2 className="mx-auto mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
            Have a project in mind? Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm text-muted sm:text-base">
            Currently {profile.availableForWork ? "available" : "not available"} for
            freelance work and full-time roles.
          </p>

          <div className="mt-9 flex justify-center">
            {/* Using the MagneticButton with clean web props */}
            <MagneticButton
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground text-background shadow-[0_0_40px_-10px_var(--accent-violet)] hover:bg-foreground/90"
            >
              Let&apos;s talk
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </MagneticButton>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}