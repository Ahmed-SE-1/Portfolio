"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/site-data";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Arsenal
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools I reach for.
          </h2>
        </motion.div>
      </div>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-4">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="glass shrink-0 rounded-full px-5 py-2.5 font-mono text-sm text-foreground/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
