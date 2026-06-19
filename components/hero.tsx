"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";
import { profile } from "@/lib/site-data";
import { SignatureName } from "@/components/signature-name";

const lineOne = ["Building", "Products"];
const lineTwo = ["that", "people", "Remembers."];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Cursor-reactive gradient mesh — two motion values smoothed with springs
  // so the blobs glide rather than snap to the pointer.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 1 });
  const blobBX = useTransform(springX, (v) => v * -0.7);
  const blobBY = useTransform(springY, (v) => v * -0.7);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (prefersReducedMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(relX * 80);
    mouseY.set(relY * 80);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-background px-6 pt-28 pb-20"
    >
      {/* Ambient gradient mesh */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          style={prefersReducedMotion ? undefined : { x: springX, y: springY }}
          className="animate-blob-a absolute left-[6%] top-[14%] h-[26rem] w-[26rem] rounded-full bg-accent-violet/25 blur-[110px] dark:bg-accent-violet/20"
        />
        <motion.div
          style={prefersReducedMotion ? undefined : { x: blobBX, y: blobBY }}
          className="animate-blob-b absolute bottom-[10%] right-[8%] h-[24rem] w-[24rem] rounded-full bg-accent-coral/20 blur-[110px] dark:bg-accent-coral/15"
        />
      </div>

      {/* Dot-grid texture, faded toward the edges */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.5] [mask-image:radial-gradient(ellipse_55%_45%_at_50%_20%,black,transparent)]" />

      {/* Grain for a premium, non-flat finish */}
      <div className="bg-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.035] mix-blend-overlay" />

      <div className="mx-auto w-full max-w-5xl">
        {/* Handwritten signature accent — draws itself in above the pill */}
        <SignatureName name={profile.name} className="mb-4" />

        {profile.availableForWork && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="glass mb-8 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs text-foreground/70">
              Available for new projects
            </span>
          </motion.div>
        )}

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl text-[13vw] font-semibold leading-[0.98] tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="block overflow-hidden">
            {lineOne.map((w) => (
              <motion.span key={w} variants={word} className="mr-4 inline-block">
                {w}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden">
            {lineTwo.map((w, i) => (
              <motion.span
                key={w}
                variants={word}
                className={`mr-4 inline-block ${i === lineTwo.length - 1 ? "text-gradient" : ""}`}
              >
                {w}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.9 }}
          className="mt-7 max-w-lg text-balance text-base text-muted sm:text-lg"
        >
          {profile.description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <MagneticButton
            href="#work"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            View my work
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Say hello
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Scroll
        </span>
        <motion.span
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-muted" />
        </motion.span>
      </motion.div>
    </section>
  );
}