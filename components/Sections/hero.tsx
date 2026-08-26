"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const strips = [0, 1, 2, 3];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        h-[100svh]
        min-h-[600px]
        w-full
        overflow-hidden
        bg-[#050505]
      "
    >
      {/* =====================================================
          4 HORIZONTAL IMAGE SLICES
      ====================================================== */}

      <div className="absolute inset-0">
        {strips.map((strip, index) => {
          const fromLeft = index % 2 === 0;

          return (
            <motion.div
              key={strip}
              initial={
                reduceMotion
                  ? {
                      x: 0,
                      opacity: 1,
                    }
                  : {
                      x: fromLeft ? "-102%" : "102%",
                      opacity: 0.2,
                    }
              }
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.35,
                delay: reduceMotion ? 0 : index * 0.09,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                absolute
                left-0
                h-1/4
                w-full
                overflow-hidden
              "
              style={{
                top: `${index * 25}%`,
              }}
            >
              {/* =================================================
                  ONE CONTINUOUS IMAGE
              ================================================== */}

              <div
                className="
                  absolute
                  left-0
                  h-[400%]
                  w-full
                "
                style={{
                  top: `-${index * 100}%`,
                }}
              >
                {/* DESKTOP */}
                <Image
                  src="/images/hero-mock.jpeg"
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="
                    hidden
                    select-none
                    object-cover
                    object-center

                    md:block
                  "
                />

                {/* MOBILE */}
                <Image
                  src="/images/mobile-hero-banner.jpeg"
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="
                    select-none
                    object-cover
                    object-center

                    md:hidden
                  "
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* =====================================================
          DARK CINEMATIC GRADING
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-gradient-to-b
          from-black/35
          via-black/[0.06]
          to-black/65
        "
      />

      {/* side vignette */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.38)_100%)]
        "
      />

      {/* navbar readability */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-10

          h-[150px]

          bg-gradient-to-b
          from-black/55
          to-transparent
        "
      />

      {/* graphite tone */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-[#111315]/[0.06]
        "
      />

      {/* =====================================================
          LIGHT SWEEP
      ====================================================== */}

      {!reduceMotion && (
        <motion.div
          initial={{
            x: "-180%",
            opacity: 0,
          }}
          animate={{
            x: "600%",
            opacity: [0, 1, 0],
          }}
          transition={{
            delay: 0.75,
            duration: 2,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            pointer-events-none
            absolute
            -top-[30%]
            left-0
            z-20

            h-[160%]
            w-[12%]

            rotate-[12deg]

            bg-gradient-to-r
            from-transparent
            via-white/[0.07]
            to-transparent

            blur-[30px]
          "
        />
      )}

      {/* =====================================================
          CENTER CONTENT
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          z-30

          flex
          items-center
          justify-center

          px-5
          pt-[30px]

          sm:px-8
          lg:pt-[40px]
        "
      >
        <div className="w-full text-center">
          {/* SMALL LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: reduceMotion ? 0 : 0.95,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-4

              font-sans

              text-[8px]
              font-bold
              uppercase
              tracking-[0.28em]

              text-white/60

              sm:mb-5
              sm:text-[9px]

              lg:text-[10px]
            "
          >
            Surrey · United Kingdom
          </motion.div>

          {/* =================================================
              YM MOTORS REVEAL
          ================================================== */}

          <div className="overflow-hidden py-2">
            <motion.h1
              initial={
                reduceMotion
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      y: "115%",
                      opacity: 0,
                    }
              }
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: reduceMotion ? 0 : 0.72,
                duration: 1.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-heading

                text-[clamp(48px,10vw,155px)]

                font-semibold

                leading-[0.88]

                tracking-[-0.07em]

                text-[#F4F4F1]

                drop-shadow-[0_12px_40px_rgba(0,0,0,0.35)]
              "
            >
              YM MOTORS
            </motion.h1>
          </div>

          {/* SUBLINE */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: reduceMotion ? 0 : 1.2,
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-4
              max-w-[500px]

              font-sans

              text-[9px]
              font-semibold
              uppercase

              tracking-[0.18em]

              text-white/55

              sm:mt-5
              sm:text-[10px]
              sm:tracking-[0.22em]

              md:text-[11px]
            "
          >
            Exceptional Cars · Distinctive Experiences
          </motion.p>
        </div>
      </div>

      {/* =====================================================
          BOTTOM CINEMATIC SHADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20

          h-[30%]

          bg-gradient-to-t
          from-black/55
          via-black/15
          to-transparent
        "
      />

      {/* =====================================================
          SCROLL
      ====================================================== */}

      <motion.a
        href="#stock"
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: reduceMotion ? 0 : 1.55,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          group

          absolute
          bottom-6
          left-1/2
          z-40

          flex
          -translate-x-1/2
          items-center
          gap-3

          rounded-full

          border
          border-white/[0.14]

          bg-black/20

          px-4
          py-2.5

          backdrop-blur-xl

          transition-colors
          duration-300

          hover:bg-black/35

          sm:bottom-8
          sm:px-5
          sm:py-3
        "
      >
        <span
          className="
            font-sans

            text-[8px]
            font-bold
            uppercase
            tracking-[0.18em]

            text-white/65
          "
        >
          Explore
        </span>

        <motion.span
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, 4, 0],
                }
          }
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown
            strokeWidth={1.5}
            className="
              h-3.5
              w-3.5

              text-[#8FB3D4]
            "
          />
        </motion.span>
      </motion.a>
    </section>
  );
}