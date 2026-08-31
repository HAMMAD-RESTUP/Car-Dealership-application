"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function VideoSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        min-h-[600px]
        w-full
        overflow-hidden

        border-y
        border-white/[0.05]

        bg-[#0B0D0F]

        sm:min-h-[640px]
        lg:min-h-[700px]
      "
    >
      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}
      <motion.video
        initial={
          reduceMotion
            ? false
            : {
                scale: 1.05,
              }
        }
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.8,
          ease: EASE,
        }}
        autoPlay
        muted
        loop
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
          src="/images/car-video.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* =====================================================
          LIGHT GENERAL OVERLAY
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0
          z-10

          bg-black/[0.30]
        "
      />

      {/* =====================================================
          CENTER FOCUS
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0
          z-10

          bg-[radial-gradient(ellipse_at_center,rgba(5,10,15,0.02)_0%,rgba(5,10,15,0.08)_38%,rgba(5,10,15,0.42)_72%,rgba(5,10,15,0.70)_100%)]
        "
      />

      {/* =====================================================
          TOP + BOTTOM DEPTH
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0
          z-10

          bg-[linear-gradient(180deg,#0B0D0F_0%,rgba(11,13,15,0.16)_17%,transparent_38%,transparent_62%,rgba(11,13,15,0.20)_82%,#0B0D0F_100%)]
        "
      />

      {/* =====================================================
          SIDE DEPTH
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0
          z-10

          bg-[linear-gradient(90deg,rgba(5,8,12,0.22)_0%,transparent_25%,transparent_75%,rgba(5,8,12,0.22)_100%)]
        "
      />

      {/* =====================================================
          BLUE AMBIENCE
      ====================================================== */}
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

          bg-[#00A8E8]/[0.045]

          blur-[150px]
        "
      />

      {/* =====================================================
          TOP DETAIL LINE
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
          via-[#00A8E8]/45
          to-transparent

          shadow-[0_0_14px_rgba(0,168,232,0.15)]
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
          min-h-[600px]
          w-full
          max-w-[1500px]

          items-center
          justify-center

          px-5
          py-20

          sm:min-h-[640px]
          sm:px-7
          sm:py-24

          lg:min-h-[700px]
          lg:px-10

          xl:px-12
        "
      >
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
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
            ease: EASE,
          }}
          className="
            mx-auto
            w-full
            max-w-[780px]

            text-center
          "
        >
          {/* =================================================
              EYEBROW / SECTION HEADING
          ================================================== */}
          <div
            className="
              mb-7

              flex
              items-center
              justify-center
              gap-3

              sm:gap-4
            "
          >
            <span
              className="
                h-px
                w-8

                bg-gradient-to-l
                from-[#00A8E8]
                to-transparent

                sm:w-10
                md:w-12
              "
            />

            <p
              className="
                whitespace-nowrap

                font-[var(--font-body)]

                text-[12px]
                font-semibold
                uppercase
                tracking-[0.20em]

                text-[#7cc9ff]

                sm:text-[13px]
                sm:tracking-[0.22em]

                md:text-[14px]

                lg:text-[15px]
                lg:tracking-[0.24em]
              "
            >
              The YM Motors Experience
            </p>

            <span
              className="
                h-px
                w-8

                bg-gradient-to-r
                from-[#00A8E8]
                to-transparent

                sm:w-10
                md:w-12
              "
            />
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}
          <div className="overflow-hidden py-1">
            <motion.h2
              initial={
                reduceMotion
                  ? false
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
                ease: EASE,
              }}
              className="
                font-[var(--font-display)]

                text-[43px]
                font-semibold
                leading-[0.94]
                tracking-[-0.035em]

                text-[#f5f5f3]

                sm:text-[52px]

                md:text-[60px]

                lg:text-[68px]

                xl:text-[72px]
              "
            >
              Experience Luxury.
              <br />

              <span className="text-[#129cff]">
                Feel the Drive.
              </span>
            </motion.h2>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}
          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 16,
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
              delay: 0.26,
              ease: EASE,
            }}
            className="
              mx-auto
              mt-6
              max-w-[530px]

              font-[var(--font-body)]

              text-[13px]
              font-normal
              leading-[1.75]

              text-white/62

              sm:text-[14px]

              md:text-[15px]
            "
          >
            Discover exceptional engineering, considered design
            and unforgettable performance across our carefully
            selected collection.
          </motion.p>

          {/* =================================================
              ACTIONS
          ================================================== */}
          <motion.div
            initial={
              reduceMotion
                ? false
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
              delay: 0.4,
              ease: EASE,
            }}
            className="
              mt-8

              flex
              flex-col
              items-center
              justify-center
              gap-3

              sm:flex-row
            "
          >
            {/* =================================================
                WATCH EXPERIENCE
            ================================================== */}
            <motion.button
              type="button"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.18,
              }}
              className="
                group

                flex
                h-[48px]
                min-w-[190px]
                items-center
                justify-center
                gap-[10px]

                rounded-[3px]

                border
                border-[#2a9fff]/30

                bg-[#158ff3]

                px-6

                font-[var(--font-body)]

                text-[12px]
                font-semibold

                text-white

                shadow-[0_9px_25px_rgba(21,143,243,0.20)]

                transition-all
                duration-300

                hover:bg-[#2a9fff]
                hover:shadow-[0_12px_30px_rgba(21,143,243,0.27)]

                sm:h-[50px]
              "
            >
              <span
                className="
                  flex
                  h-[25px]
                  w-[25px]
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/20

                  bg-black/[0.10]
                "
              >
                <Play
                  size={10}
                  fill="currentColor"
                  strokeWidth={1.5}
                  className="
                    ml-[1px]

                    transition-transform
                    duration-300

                    group-hover:scale-110
                  "
                />
              </span>

              Watch Experience
            </motion.button>

            {/* =================================================
                EXPLORE STOCK
            ================================================== */}
            <motion.a
              href="#stock"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.18,
              }}
              className="
                group
                relative

                flex
                h-[48px]
                min-w-[175px]
                items-center
                justify-center
                gap-2

                overflow-hidden

                rounded-[3px]

                border
                border-white/[0.18]

                bg-black/[0.18]

                px-6

                font-[var(--font-body)]

                text-[12px]
                font-semibold

                text-white

                backdrop-blur-[8px]

                transition-all
                duration-300

                hover:border-[#00A8E8]/45
                hover:bg-white/[0.05]

                sm:h-[50px]
              "
            >
              <span>
                Explore Stock
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.6}
                className="
                  text-[#00A8E8]

                  transition-transform
                  duration-300

                  group-hover:translate-x-[2px]
                  group-hover:-translate-y-[2px]
                "
              />

              <span
                className="
                  absolute
                  bottom-0
                  left-1/2

                  h-[2px]
                  w-0

                  -translate-x-1/2

                  bg-[#00A8E8]

                  transition-all
                  duration-300

                  group-hover:w-[45%]
                "
              />
            </motion.a>
          </motion.div>

          {/* =================================================
              BOTTOM DETAIL
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="
              mx-auto
              mt-10

              h-px
              w-[90px]

              bg-gradient-to-r
              from-transparent
              via-white/[0.16]
              to-transparent
            "
          />
        </motion.div>
      </div>
    </section>
  );
}