// YM Motors Midnight Chrome Hero.tsx
// Updated: cinematic video background for desktop + mobile
// Replace /public/images/cinematic-video.mp4 with your actual video file.

"use client";

import { motion, useReducedMotion } from "framer-motion";
import AiAssistant from "../Layout/AIchatboard/AI-Assistant";
import VehicleSearchBar from "./VehicleSearchBar";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0b0e13]"
    >
      {!reduceMotion && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="/images/cinematic-video.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-[#0b0e13]/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e13]/85 via-[#0b0e13]/45 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] items-center px-6 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "show"}
          className="max-w-[760px]"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 font-[var(--font-body)] text-sm font-semibold uppercase tracking-[0.16em] text-[#00A8E8]"
          >
            Japanese Import Specialists
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-[var(--font-display)] text-5xl font-medium leading-[0.95] tracking-[-0.01em] text-[#f6f8fa] md:text-7xl"
          >
            Fewer kilometres.
            <br />
            <span className="text-[#00A8E8]">Better cars.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[540px] font-[var(--font-body)] text-base font-light leading-relaxed text-[#c9d2dc]"
          >
            Low mileage Japanese vehicles, sourced at auction, graded on
            arrival and supplied with full documentation.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex gap-4">
            <a className="rounded-sm bg-[#00A8E8] px-8 py-4 font-[var(--font-body)] text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Browse Stock
            </a>

            <a className="rounded-sm border border-white/40 px-8 py-4 font-[var(--font-body)] text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Sell Your Car
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-20 hidden md:block">
        <VehicleSearchBar />
      </div>

      <AiAssistant />
    </section>
  );
}
