"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { type ReactNode, useRef } from "react";

// 1. Updated interface to accept ALL standard HTML anchor/button properties (like target, rel, etc.)
interface MagneticButtonProps extends React.ComponentPropsWithoutRef<typeof motion.a> {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
}

/**
 * A button that gently pulls toward the cursor on hover, then springs
 * back to rest. Disabled automatically when the user prefers reduced motion.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 0.35,
  ...props // 2. Collect any extra HTML props like target="_blank" or rel="..."
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 });

  function handleMouseMove(e: React.MouseEvent) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Component = motion[href ? "a" : "button"] as typeof motion.a;

  return (
    <Component
      ref={ref as never}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium transition-colors ${className}`}
      {...props} // 3. CRITICAL FIX: Spreads extra props onto the native element so target="_blank" actually executes!
    >
      {children}
    </Component>
  );
}