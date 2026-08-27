"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function VideoSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        h-[560px]
        min-h-[560px]
        w-full
        overflow-hidden

        bg-[#090A0C]

        sm:h-[620px]
        lg:h-[680px]
      "
    >
      {/* =====================================================
          VIDEO
      ====================================================== */}

      <motion.video
        initial={
          reduceMotion
            ? { scale: 1 }
            : { scale: 1.06 }
        }
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.8,
          ease,
        }}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
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
          CINEMATIC OVERLAYS
      ====================================================== */}

      {/* MAIN DARKNESS */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-black/48

          sm:bg-black/52
        "
      />

      {/* CENTER FOCUS */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-[radial-gradient(circle_at_center,rgba(9,10,12,0.02)_0%,rgba(9,10,12,0.18)_44%,rgba(9,10,12,0.78)_100%)]
        "
      />

      {/* TOP + BOTTOM DEPTH */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-[linear-gradient(180deg,#090A0C_0%,rgba(9,10,12,0.08)_24%,rgba(9,10,12,0.03)_60%,#090A0C_100%)]
        "
      />

      {/* SUBTLE RED ATMOSPHERE */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-10

          h-[420px]
          w-[760px]
          max-w-[92vw]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#E5484D]/[0.055]

          blur-[155px]
        "
      />

      {/* =====================================================
          TOP BORDER LIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-20

          h-px
          w-[65%]

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-[#E5484D]/40
          to-transparent

          shadow-[0_0_12px_rgba(229,72,77,0.16)]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-30

          mx-auto

          flex
          h-full
          w-full
          max-w-[1500px]

          items-center
          justify-center

          px-5

          sm:px-8
          lg:px-12
        "
      >
        <motion.div
          initial={
            reduceMotion
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            mx-auto
            w-full
            max-w-[720px]

            text-center
          "
        >
          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                  }
            }
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              mb-4

              flex
              items-center
              justify-center

              gap-3

              sm:mb-5
            "
          >
            <span
              className="
                h-px
                w-7

                bg-[#E5484D]

                shadow-[0_0_8px_rgba(229,72,77,0.28)]

                sm:w-9
              "
            />

            <p
              className="
                font-sans

                text-[8px]
                font-semibold
                uppercase

                tracking-[0.20em]

                text-[#E5484D]/85

                sm:text-[9px]
                md:text-[10px]
              "
            >
              The YM Motors Experience
            </p>

            <span
              className="
                h-px
                w-7

                bg-[#E5484D]

                shadow-[0_0_8px_rgba(229,72,77,0.28)]

                sm:w-9
              "
            />
          </motion.div>

          {/* =================================================
              HEADING
          ================================================== */}

          <div className="overflow-hidden py-1">
            <motion.h2
              initial={
                reduceMotion
                  ? {
                      y: 0,
                    }
                  : {
                      y: "105%",
                    }
              }
              whileInView={{
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease,
              }}
              className="
                font-heading

                text-[38px]
                font-bold

                leading-[0.98]

                tracking-[-0.045em]

                text-[#F4F2EE]

                sm:text-[46px]

                md:text-[52px]

                lg:text-[58px]
              "
            >
              Experience Luxury.
              <br />

              <span className="text-[#E5484D]">
                Feel The Drive.
              </span>
            </motion.h2>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

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
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.28,
              ease,
            }}
            className="
              mx-auto
              mt-5

              max-w-[520px]

              font-sans

              text-[12px]
              font-normal

              leading-[1.75]

              text-white/50

              sm:text-[13px]

              md:text-[14px]
            "
          >
            Discover exceptional engineering, considered design and
            unforgettable performance across our carefully selected
            collection.
          </motion.p>

          {/* =================================================
              ACTIONS
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
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.42,
              ease,
            }}
            className="
              mt-7

              flex
              flex-col
              items-center
              justify-center

              gap-4

              sm:mt-8
              sm:flex-row
            "
          >
            {/* =================================================
                WATCH EXPERIENCE
                Same visual language as Enquire / Browse Stock
            ================================================== */}

            <button
              type="button"
              aria-label="Play video"
              className="
                group
                relative

                flex
                h-[54px]
                min-w-[195px]

                items-center
                justify-center

                gap-3

                overflow-hidden

                border
                border-[#E5484D]

                bg-[#E5484D]

                px-6

                font-sans

                text-[12px]
                font-semibold

                tracking-[0.01em]

                text-white

                shadow-[0_12px_34px_rgba(0,0,0,0.24)]

                transition-all
                duration-500

                hover:-translate-y-[2px]
                hover:border-[#F05A5F]
                hover:bg-[#F05A5F]
                hover:shadow-[0_16px_42px_rgba(229,72,77,0.18)]

                active:translate-y-0
                active:scale-[0.99]

                sm:h-[56px]
                sm:px-7
              "
            >
              {/* TOP GLOSS */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0

                  h-[46%]

                  bg-gradient-to-b
                  from-white/[0.18]
                  to-transparent
                "
              />

              {/* HOVER LIGHT SWEEP */}

              <span
                className="
                  pointer-events-none
                  absolute
                  -left-[50%]
                  top-0

                  h-full
                  w-[34%]

                  -skew-x-[22deg]

                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.42]
                  to-transparent

                  opacity-0
                  blur-[1px]

                  transition-all
                  duration-700

                  group-hover:left-[120%]
                  group-hover:opacity-100
                "
              />

              <span
                className="
                  relative
                  z-10

                  flex
                  h-7
                  w-7

                  items-center
                  justify-center

                  border
                  border-white/[0.18]

                  bg-black/[0.08]
                "
              >
                <Play
                  fill="currentColor"
                  strokeWidth={1.5}
                  className="
                    ml-[1px]
                    h-3
                    w-3
                  "
                />
              </span>

              <span className="relative z-10">
                Watch Experience
              </span>
            </button>

            {/* =================================================
                EXPLORE STOCK
                Dark glass secondary + red animated underline
            ================================================== */}

            <a
              href="#stock"
              className="
                group
                relative

                flex
                h-[54px]
                min-w-[175px]

                items-center
                justify-center

                overflow-hidden

                border
                border-white/[0.16]

                bg-black/[0.16]

                px-6

                font-sans

                text-[12px]
                font-semibold

                tracking-[0.01em]

                text-white/82

                backdrop-blur-md

                transition-all
                duration-500

                hover:-translate-y-[2px]
                hover:border-[#E5484D]/70
                hover:bg-[#E5484D]/[0.07]
                hover:text-white

                sm:h-[56px]
                sm:px-7
              "
            >
              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-1/2

                  h-[2px]
                  w-0

                  -translate-x-1/2

                  bg-[#E5484D]

                  shadow-[0_0_10px_rgba(229,72,77,0.42)]

                  transition-all
                  duration-500

                  group-hover:w-[48%]
                "
              />

              <span className="relative z-10">
                Explore Stock
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
