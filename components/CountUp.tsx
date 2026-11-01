"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

export default function CountUp({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const match = value.match(/^(\d+)(.*)$/);
  const numericTarget = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || numericTarget === null) return;
    const controls = animate(motionValue, numericTarget, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, numericTarget, duration, motionValue]);

  if (numericTarget === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
