"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

const strips = [0, 1, 2, 3];

const ACCENT = "#CD777A";

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
          FULLSCREEN VIDEO
      ====================================================== */}

      <motion.video
        initial={
          reduceMotion
            ? { scale: 1 }
            : { scale: 1.08 }
        }
        animate={{ scale: 1 }}
        transition={{
          duration: 2.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-mock.jpeg"
        className="
          absolute
          inset-0

          h-full
          w-full

          object-cover
          object-center
        "
      >
        <source
          src="/images/demo-video.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* =====================================================
          4 HORIZONTAL REVEAL PANELS
      ====================================================== */}

      {!reduceMotion && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[50]
          "
        >
          {strips.map((strip, index) => {
            const moveLeft =
              index % 2 === 0;

            return (
              <motion.div
                key={strip}
                initial={{
                  x: "0%",
                }}
                animate={{
                  x: moveLeft
                    ? "-102%"
                    : "102%",
                }}
                transition={{
                  duration: 1.25,
                  delay:
                    0.08 +
                    index * 0.1,
                  ease: [
                    0.76,
                    0,
                    0.24,
                    1,
                  ],
                }}
                className="
                  absolute
                  left-0

                  h-1/4
                  w-full

                  bg-[#050505]
                "
                style={{
                  top: `${
                    index * 25
                  }%`,
                }}
              >
                <div
                  className="
                    absolute
                    inset-0

                    bg-[linear-gradient(90deg,#050505_0%,#141416_50%,#050505_100%)]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.025]
                    to-transparent
                  "
                />
              </motion.div>
            );
          })}
        </div>
      )}

      {/* =====================================================
          CINEMATIC GRADING
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-gradient-to-b
          from-black/30
          via-black/[0.04]
          to-black/65
        "
      />

      {/* vignette */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.42)_100%)]
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

          h-[160px]

          bg-gradient-to-b
          from-black/60
          via-black/20
          to-transparent
        "
      />

      {/* bottom depth */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-10

          h-[40%]

          bg-gradient-to-t
          from-black/65
          via-black/20
          to-transparent
        "
      />

      {/* =====================================================
          VERY SUBTLE ACCENT ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-240px]
          left-1/2
          z-10

          h-[480px]
          w-[850px]
          max-w-[90vw]

          -translate-x-1/2

          rounded-full

          bg-[#CD777A]/[0.055]

          blur-[160px]
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
            x: "700%",
            opacity: [0, 0.7, 0],
          }}
          transition={{
            delay: 1.05,
            duration: 2.2,
            ease: [
              0.76,
              0,
              0.24,
              1,
            ],
          }}
          className="
            pointer-events-none
            absolute
            -top-[30%]
            left-0
            z-20

            h-[160%]
            w-[10%]

            rotate-[13deg]

            bg-gradient-to-r
            from-transparent
            via-white/[0.065]
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

          px-4

          pt-[20px]

          sm:px-6

          md:px-8
          md:pt-[30px]
        "
      >
        <div
          className="
            w-full
            text-center
          "
        >
          {/* LOCATION */}

          <motion.div
            initial={
              reduceMotion
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 22,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: reduceMotion
                ? 0
                : 1.08,
              duration: 0.7,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              mb-4

              flex
              items-center
              justify-center
              gap-3

              font-sans

              text-[8px]
              font-bold
              uppercase
              tracking-[0.28em]

              text-white/65

              sm:text-[9px]

              lg:mb-5
              lg:text-[10px]
            "
          >
            <span
              className="
                h-px
                w-5

                bg-[#CD777A]/80

                sm:w-7
              "
            />

            Surrey · United Kingdom

            <span
              className="
                h-px
                w-5

                bg-[#CD777A]/80

                sm:w-7
              "
            />
          </motion.div>

          {/* =================================================
              YM MOTORS
          ================================================== */}

          <div
            className="
              overflow-hidden
              py-2
            "
          >
            <motion.h1
              initial={
                reduceMotion
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      y: "120%",
                      opacity: 0,
                    }
              }
              animate={{
                y: "0%",
                opacity: 1,
              }}
              transition={{
                delay: reduceMotion
                  ? 0
                  : 0.82,
                duration: 1.05,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                font-heading

                text-[clamp(48px,10vw,155px)]

                font-semibold

                leading-[0.86]

                tracking-[-0.07em]

                text-[#F5F4F2]

                drop-shadow-[0_15px_50px_rgba(0,0,0,0.45)]
              "
            >
              YM MOTORS
            </motion.h1>
          </div>

          {/* TAGLINE */}

          <motion.p
            initial={
              reduceMotion
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: reduceMotion
                ? 0
                : 1.27,
              duration: 0.7,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              mx-auto
              mt-3

              max-w-[520px]

              font-sans

              text-[8px]
              font-semibold
              uppercase

              tracking-[0.17em]

              text-white/58

              sm:mt-4
              sm:text-[10px]
              sm:tracking-[0.21em]

              md:text-[11px]
            "
          >
            Exceptional Cars ·
            Distinctive Experiences
          </motion.p>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: reduceMotion
                ? 0
                : 1.5,
              duration: 0.75,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              mt-7

              flex
              flex-col
              items-center
              justify-center
              gap-3

              sm:mt-8
              sm:flex-row
            "
          >
            {/* =============================================
                EXPLORE CARS
            ============================================== */}

            <a
              href="#stock"
              className="
                group

                flex
                h-[50px]

                w-full
                max-w-[220px]

                items-center
                justify-between

                rounded-full

                bg-[#CD777A]

                px-6

                font-sans

                text-[9px]
                font-bold
                uppercase
                tracking-[0.13em]

                text-white

                shadow-[0_14px_45px_rgba(205,119,122,0.20)]

                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:bg-[#D8878A]
                hover:shadow-[0_18px_55px_rgba(205,119,122,0.30)]

                sm:w-auto
                sm:min-w-[188px]
              "
            >
              Explore Used Cars

              <ArrowUpRight
                strokeWidth={1.6}
                className="
                  h-4
                  w-4

                  transition-transform
                  duration-300

                  group-hover:-translate-y-[2px]
                  group-hover:translate-x-[2px]
                "
              />
            </a>

            {/* =============================================
                SELL YOUR CAR
            ============================================== */}

            <a
              href="#sell"
              className="
                group

                flex
                h-[50px]

                w-full
                max-w-[220px]

                items-center
                justify-between

                rounded-full

                border
                border-white/[0.18]

                bg-black/25

                px-6

                font-sans

                text-[9px]
                font-bold
                uppercase
                tracking-[0.13em]

                text-white

                backdrop-blur-xl

                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:border-[#CD777A]/70
                hover:bg-[#CD777A]/[0.12]

                sm:w-auto
                sm:min-w-[170px]
              "
            >
              Sell Your Car

              <ArrowUpRight
                strokeWidth={1.6}
                className="
                  h-4
                  w-4

                  text-[#CD777A]

                  transition-all
                  duration-300

                  group-hover:-translate-y-[2px]
                  group-hover:translate-x-[2px]
                  group-hover:text-white
                "
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#stock"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: reduceMotion
            ? 0
            : 1.9,
          duration: 0.7,
        }}
        className="
          group

          absolute
          bottom-5
          left-1/2
          z-40

          hidden
          -translate-x-1/2

          items-center
          justify-center

          md:flex
        "
        aria-label="Scroll to stock"
      >
        <span
          className="
            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-full

            border
            border-white/[0.14]

            bg-black/20

            backdrop-blur-xl

            transition-all
            duration-300

            group-hover:border-[#CD777A]/60
            group-hover:bg-[#CD777A]/10
          "
        >
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
                h-4
                w-4
                text-[#CD777A]
              "
            />
          </motion.span>
        </span>
      </motion.a>
    </section>
  );
}