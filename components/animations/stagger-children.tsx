"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface StaggerChildrenProps {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
  triggerOnce?: boolean;
  threshold?: number;
}

export function StaggerChildren({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = "",
  triggerOnce = true,
  threshold = 0.1,
}: StaggerChildrenProps) {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}