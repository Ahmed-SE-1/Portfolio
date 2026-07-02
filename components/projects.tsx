"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-data";
import { ProjectPreview } from "@/components/project-preview";

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
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg hover:shadow-black/10 ${spanClass[project.size]}`}
            >
              {/* ── Preview image / screenshot / fallback ── */}
              <div className="relative h-44 w-full overflow-hidden rounded-t-2xl border-b border-border">
                <ProjectPreview project={project} priority={i < 2} />

                {/* Arrow badge — appears on hover, top-right corner */}
                <span className="absolute right-3 top-3 z-10 flex h-7 w-7 -translate-y-1 items-center justify-center rounded-full bg-background/80 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={14} className="text-foreground" />
                </span>
              </div>

              {/* ── Card body ── */}
              <div className="p-5">
                <h3 className="text-base font-medium leading-snug text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}