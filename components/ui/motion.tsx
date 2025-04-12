"use client"

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  fullWidth?: boolean;
  padding?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  fullWidth = false,
  padding = false,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const directionOffset = {
    up: 50,
    down: -50,
    left: 50,
    right: -50,
  };

  const initial: Variant = {
    opacity: 0,
    y: direction === "up" || direction === "down" ? directionOffset[direction] : 0,
    x: direction === "left" || direction === "right" ? directionOffset[direction] : 0,
  };

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, x: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 1.02, 0.73, 0.99],
      }}
      className={`${className} ${fullWidth ? "w-full" : ""} ${padding ? "p-4" : ""}`}
    >
      {children}
    </motion.div>
  );
};

export { FadeIn };