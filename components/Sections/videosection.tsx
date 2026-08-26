"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

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

        bg-[#08111A]

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

      {/* main darkness */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-black/45

          sm:bg-black/50
        "
      />

      {/* center focus */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-[radial-gradient(circle_at_center,rgba(7,16,24,0.04)_0%,rgba(7,16,24,0.20)_45%,rgba(5,11,17,0.72)_100%)]
        "
      />

      {/* top + bottom depth */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-[linear-gradient(180deg,#08111A_0%,rgba(8,17,26,0.08)_24%,rgba(8,17,26,0.04)_60%,#08111A_100%)]
        "
      />

      {/* steel-blue atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-10

          h-[400px]
          w-[720px]
          max-w-[90vw]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#5788B5]/[0.055]

          blur-[150px]
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
          via-[#5788B5]/30
          to-transparent
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

                bg-[#5788B5]

                sm:w-9
              "
            />

            <p
              className="
                font-sans

                text-[8px]
                font-bold
                uppercase

                tracking-[0.20em]

                text-[#8FB3D4]

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

                bg-[#5788B5]

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
                font-serif

                text-[36px]
                font-normal

                leading-[1.02]

                tracking-[-0.04em]

                text-[#F3F5F6]

                sm:text-[44px]

                md:text-[50px]

                lg:text-[56px]
              "
            >
              Experience Luxury.
              <br />

              <span className="text-[#76AAD5]">
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
              font-medium

              leading-[1.8]

              text-white/52

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
            {/* PLAY BUTTON */}

            <button
              type="button"
              aria-label="Play video"
              className="
                group

                flex
                h-[54px]

                items-center
                justify-center

                gap-3

                rounded-[5px]

                bg-[#5788B5]

                px-5

                font-sans

                text-[11px]
                font-bold
                uppercase

                tracking-[0.04em]

                text-white

                shadow-[0_14px_40px_rgba(87,136,181,0.22)]

                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:bg-[#6899C4]

                sm:h-[56px]
                sm:px-6
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7

                  items-center
                  justify-center

                  rounded-full

                  bg-white/[0.12]
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

              Watch Experience
            </button>

            {/* STOCK */}

            <a
              href="#stock"
              className="
                group

                flex
                h-[54px]

                items-center
                justify-center

                gap-4

                rounded-[5px]

                border
                border-white/[0.18]

                bg-[#08111A]/25

                px-5

                font-sans

                text-[11px]
                font-bold
                uppercase

                tracking-[0.04em]

                text-white/80

                backdrop-blur-md

                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:border-[#5788B5]/60
                hover:bg-[#5788B5]/10
                hover:text-white

                sm:h-[56px]
                sm:px-6
              "
            >
              Explore Stock

              <ArrowUpRight
                strokeWidth={1.6}
                className="
                  h-[15px]
                  w-[15px]

                  text-[#8FB3D4]

                  transition-transform
                  duration-300

                  group-hover:-translate-y-[2px]
                  group-hover:translate-x-[2px]
                "
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}