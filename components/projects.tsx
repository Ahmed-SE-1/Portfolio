"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-data";

const spanClass: Record<string, string> = {
  large: "md:col-span-4",
  medium: "md:col-span-2",
  small: "md:col-span-2",
};

export function Projects() {
  return (
    <section id="work" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Featured work
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected projects.
            </h2>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 ${spanClass[project.size]}`}
            >
              {/* Placeholder visual — swap for a next/image project screenshot */}
              <div className="relative mb-6 flex h-40 items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-br from-accent-violet/15 via-transparent to-accent-coral/15">
                <span className="font-mono text-4xl font-semibold text-foreground/15 transition-colors duration-300 group-hover:text-foreground/25">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
                <ArrowUpRight
                  size={18}
                  className="absolute right-4 top-4 -translate-y-1 text-foreground/40 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                />
              </div>

              <h3 className="text-lg font-medium text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
