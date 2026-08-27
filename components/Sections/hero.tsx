"use client";

import { useRef } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { ArrowRight, ArrowDown } from "lucide-react";

const strips = [0, 1, 2, 3];

const ease = [0.22, 1, 0.36, 1] as const;
const stripEase = [0.76, 0, 0.24, 1] as const;

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  /* ============================================================
     SCROLL PROGRESS
  ============================================================ */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 28,
    mass: 0.32,
  });

  /* ============================================================
     HERO EXIT
  ============================================================ */

  const heroY = useTransform(
    smoothProgress,
    [0, 0.16, 1],
    [0, 0, 58]
  );

  const heroScale = useTransform(
    smoothProgress,
    [0, 0.14, 1],
    [1, 1, 0.975]
  );

  const bottomRadius = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    ["0px", "0px", "22px", "30px"]
  );

  const contentY = useTransform(
    smoothProgress,
    [0, 0.25, 1],
    [0, 0, 36]
  );

  const contentOpacity = useTransform(
    smoothProgress,
    [0, 0.42, 0.82, 1],
    [1, 1, 0.84, 0.55]
  );

  const scrollIndicatorOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.4],
    [1, 0.6, 0]
  );

  return (
    <section
      ref={heroRef}
      className="
        relative
        z-10

        h-[200svh]
        w-full

        -mb-[100svh]

        bg-[#0B0D0F]
      "
    >
      {/* =========================================================
          STICKY HERO
      ========================================================== */}

      <motion.div
        style={
          reduceMotion
            ? undefined
            : {
                y: heroY,
                scale: heroScale,
                borderBottomLeftRadius: bottomRadius,
                borderBottomRightRadius: bottomRadius,
              }
        }
        className="
          sticky
          top-0

          isolate

          h-[100svh]
          min-h-[680px]
          w-full

          origin-top

          overflow-hidden

          bg-[#0B0D0F]

          will-change-transform
        "
      >
        {/* =========================================================
            4 STRIP IMAGE REVEAL

            IMPORTANT:

            Mobile and desktop DO NOT use two separate img elements.

            Browser chooses the correct source using <picture>.

            MOBILE  <= 767px
            DESKTOP >= 768px
        ========================================================== */}

        <div className="absolute inset-0 z-0">
          {strips.map((strip, index) => {
            const fromLeft = index % 2 === 0;

            return (
              <motion.div
                key={`hero-strip-${strip}`}
                initial={
                  reduceMotion
                    ? {
                        x: 0,
                      }
                    : {
                        x: fromLeft ? "-102%" : "102%",
                      }
                }
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 1.28,
                  delay: reduceMotion
                    ? 0
                    : 0.04 + index * 0.1,
                  ease: stripEase,
                }}
                className="
                  absolute
                  left-0

                  h-1/4
                  w-full

                  overflow-hidden

                  will-change-transform
                "
                style={{
                  top: `${index * 25}%`,
                }}
              >
                {/* =================================================
                    CONTINUOUS FULL IMAGE

                    Wrapper becomes full hero height:
                    strip = 25%
                    wrapper = 400%
                    => 100% hero height
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
                  <picture className="absolute inset-0 block">
                    {/* =============================================
                        MOBILE IMAGE ONLY
                        0px - 767px
                    ============================================== */}

                    <source
                      media="(max-width: 767px)"
                      srcSet="/images/mountains-mobile-mock.png"
                    />

                    {/* =============================================
                        DESKTOP IMAGE ONLY
                        768px+
                    ============================================== */}

                    <source
                      media="(min-width: 768px)"
                      srcSet="/images/mountains-mock.png"
                    />

                    {/* =============================================
                        FALLBACK

                        Desktop image intentionally used as fallback.
                    ============================================== */}

                    <img
                      src="/images/mountains-mock.png"
                      alt=""
                      aria-hidden="true"
                      draggable={false}
                      className="
                        absolute
                        inset-0

                        h-full
                        w-full

                        select-none

                        object-cover

                        object-[60%_center]

                        md:object-[center_40%]
                      "
                    />
                  </picture>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            DESKTOP LEFT CONTENT GRADIENT

            Desktop only.
            Does NOT affect mobile.
        ========================================================== */}

        <div
          className="
            pointer-events-none

            absolute
            inset-y-0
            left-0
            z-10

            hidden

            w-[62%]

            bg-[linear-gradient(90deg,#0B0D0F_0%,rgba(11,13,15,0.99)_18%,rgba(11,13,15,0.93)_36%,rgba(11,13,15,0.72)_53%,rgba(11,13,15,0.35)_70%,rgba(11,13,15,0.08)_86%,transparent_100%)]

            md:block
          "
        />

        {/* =========================================================
            DESKTOP LOWER LEFT BLEND
        ========================================================== */}

        <div
          className="
            pointer-events-none

            absolute
            bottom-0
            left-0
            z-10

            hidden

            h-[28%]
            w-[48%]

            bg-[linear-gradient(0deg,#0B0D0F_0%,rgba(11,13,15,0.18)_50%,transparent_100%)]

            md:block
          "
        />

        {/* =========================================================
            MOBILE BOTTOM GRADING

            Mobile only.
        ========================================================== */}

        <div
          className="
            pointer-events-none

            absolute
            inset-x-0
            bottom-0
            z-10

            h-[69%]

            bg-[linear-gradient(0deg,#0B0D0F_7%,rgba(11,13,15,0.94)_28%,rgba(11,13,15,0.55)_54%,rgba(11,13,15,0.12)_80%,transparent_100%)]

            md:hidden
          "
        />

        {/* =========================================================
            MOBILE LEFT READABILITY

            Helps heading remain readable.
            Does not heavily darken the car.
        ========================================================== */}

        <div
          className="
            pointer-events-none

            absolute
            inset-y-0
            left-0
            z-10

            w-[72%]

            bg-[linear-gradient(90deg,rgba(11,13,15,0.55)_0%,rgba(11,13,15,0.20)_55%,transparent_100%)]

            md:hidden
          "
        />

        {/* =========================================================
            NAV READABILITY
        ========================================================== */}

        <div
          className="
            pointer-events-none

            absolute
            inset-x-0
            top-0
            z-10

            h-[120px]

            bg-[linear-gradient(180deg,rgba(5,7,8,0.28)_0%,transparent_100%)]
          "
        />

        {/* =========================================================
            HERO CONTENT
        ========================================================== */}

        <motion.div
          style={
            reduceMotion
              ? undefined
              : {
                  y: contentY,
                  opacity: contentOpacity,
                }
          }
          className="
            relative
            z-30

            mx-auto

            flex
            h-full
            w-full
            max-w-[1720px]

            items-end

            px-5
            pb-12
            pt-[100px]

            sm:px-7
            sm:pb-14

            md:items-center
            md:px-9
            md:pb-0
            md:pt-[72px]

            lg:px-12

            xl:px-16

            2xl:px-20
          "
        >
          <div
            className="
              w-full

              max-w-[510px]

              sm:max-w-[530px]

              lg:max-w-[600px]

              xl:max-w-[650px]
            "
          >
            {/* =====================================================
                EYEBROW
            ====================================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 14,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: reduceMotion ? 0 : 0.72,
                duration: 0.65,
                ease,
              }}
              className="
                mb-4

                flex
                items-center
                gap-3

                md:mb-6
              "
            >
              <motion.span
                initial={
                  reduceMotion
                    ? {
                        scaleX: 1,
                      }
                    : {
                        scaleX: 0,
                      }
                }
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  delay: reduceMotion ? 0 : 0.9,
                  duration: 0.6,
                  ease,
                }}
                className="
                  h-px
                  w-7

                  origin-left

                  bg-[#97A2A8]

                  md:w-8
                "
              />

              <span
                className="
                  font-sans

                  text-[8px]
                  font-medium
                  uppercase

                  tracking-[0.13em]

                  text-[#C2C1BC]

                  sm:text-[10px]
                "
              >
                Welcome to YM Motors
              </span>
            </motion.div>

            {/* =====================================================
                HEADING
            ====================================================== */}

            <div className="overflow-hidden pb-2">
              <motion.h1
                initial={
                  reduceMotion
                    ? {
                        y: 0,
                        opacity: 1,
                      }
                    : {
                        y: "108%",
                        opacity: 0,
                      }
                }
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: reduceMotion ? 0 : 0.58,
                  duration: 1,
                  ease,
                }}
                className="
                  max-w-[650px]

                  font-serif

                  text-[39px]
                  font-normal

                  leading-[0.96]

                  tracking-[-0.04em]

                  text-[#F2F0EB]

                  min-[390px]:text-[42px]

                  sm:text-[48px]

                  md:text-[50px]

                  lg:text-[58px]

                  xl:text-[64px]

                  2xl:text-[68px]
                "
              >
                Quality Used Cars.
                <br />

                <span className="text-[#C6C4BE]">
                  Trusted Local
                </span>

                <br />

                Experts.
              </motion.h1>
            </div>

            {/* =====================================================
                DESCRIPTION
            ====================================================== */}

            <motion.p
              initial={
                reduceMotion
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 16,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: reduceMotion ? 0 : 0.94,
                duration: 0.7,
                ease,
              }}
              className="
                mt-4

                max-w-[390px]

                font-sans

                text-[11px]
                font-normal

                leading-[1.7]

                text-[#C0C0BC]

                sm:text-[13px]

                md:mt-6

                lg:text-[14px]
              "
            >
              Carefully selected vehicles. Exceptional value.
              Personal service from first enquiry to final handover.
            </motion.p>

            {/* =====================================================
                BUTTONS
            ====================================================== */}

            <motion.div
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
                delay: reduceMotion ? 0 : 1.08,
                duration: 0.72,
                ease,
              }}
              className="
                mt-6

                flex
                w-full
                max-w-[410px]

                flex-col

                gap-3

                sm:flex-row

                md:mt-8
              "
            >
              {/* =================================================
                  PRIMARY BUTTON
              ================================================== */}

              <a
                href="#stock"
                className="
                  group

                  flex

                  h-[50px]
                  w-full

                  items-center
                  justify-between

                  rounded-[4px]

                  bg-[#ECE9E2]

                  px-5

                  font-sans

                  text-[10px]
                  font-semibold

                  tracking-[0.01em]

                  text-[#111315]

                  transition-all
                  duration-300

                  hover:bg-white

                  sm:h-[52px]
                  sm:flex-1
                  sm:min-w-[190px]

                  lg:h-[54px]
                "
              >
                <span>Browse Stock</span>

                <span
                  className="
                    flex

                    h-7
                    w-7

                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-black/[0.06]

                    transition-all
                    duration-300

                    group-hover:bg-black/[0.10]
                  "
                >
                  <ArrowRight
                    strokeWidth={1.5}
                    className="
                      h-[13px]
                      w-[13px]

                      transition-transform
                      duration-300

                      group-hover:translate-x-[2px]
                    "
                  />
                </span>
              </a>

              {/* =================================================
                  SECONDARY BUTTON
              ================================================== */}

              <a
                href="#sell"
                className="
                  group

                  flex

                  h-[50px]
                  w-full

                  items-center
                  justify-between

                  rounded-[4px]

                  border
                  border-white/[0.20]

                  bg-[#111416]/75

                  px-5

                  font-sans

                  text-[10px]
                  font-semibold

                  tracking-[0.01em]

                  text-[#ECEAE5]

                  transition-all
                  duration-300

                  hover:border-white/[0.36]
                  hover:bg-[#171A1D]

                  sm:h-[52px]
                  sm:flex-1
                  sm:min-w-[190px]

                  lg:h-[54px]
                "
              >
                <span>Sell Your Car</span>

                <span
                  className="
                    flex

                    h-7
                    w-7

                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/[0.12]

                    bg-white/[0.035]

                    transition-all
                    duration-300

                    group-hover:border-white/[0.24]
                    group-hover:bg-white/[0.07]
                  "
                >
                  <ArrowRight
                    strokeWidth={1.5}
                    className="
                      h-[13px]
                      w-[13px]

                      text-[#BFC2C2]

                      transition-transform
                      duration-300

                      group-hover:translate-x-[2px]
                      group-hover:text-white
                    "
                  />
                </span>
              </a>
            </motion.div>

            {/* =====================================================
                TRUST LINE

                Hidden on small mobile so hero remains clean.
            ====================================================== */}

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
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: reduceMotion ? 0 : 1.3,
                duration: 0.8,
                ease,
              }}
              className="
                mt-4

                hidden

                items-center
                gap-3

                font-sans

                text-[9px]

                text-white/35

                sm:flex
              "
            >
              <span>Carefully selected</span>

              <span
                className="
                  h-[2px]
                  w-[2px]

                  rounded-full

                  bg-white/25
                "
              />

              <span>Professionally presented</span>

              <span
                className="
                  h-[2px]
                  w-[2px]

                  rounded-full

                  bg-white/25
                "
              />

              <span>Personal service</span>
            </motion.div>
          </div>
        </motion.div>

        {/* =========================================================
            DESKTOP SCROLL INDICATOR
        ========================================================== */}

        <motion.div
          style={
            reduceMotion
              ? undefined
              : {
                  opacity: scrollIndicatorOpacity,
                }
          }
          className="
            pointer-events-none

            absolute
            bottom-8
            right-8
            z-30

            hidden

            items-center
            gap-3

            lg:flex

            xl:right-12

            2xl:right-16
          "
        >
          <span
            className="
              font-sans

              text-[8px]
              font-medium
              uppercase

              tracking-[0.13em]

              text-white/35
            "
          >
            Explore
          </span>

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 4, 0],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex

              h-8
              w-8

              items-center
              justify-center

              rounded-full

              border
              border-white/10

              text-white/45
            "
          >
            <ArrowDown
              strokeWidth={1.2}
              className="
                h-[12px]
                w-[12px]
              "
            />
          </motion.div>
        </motion.div>

        {/* =========================================================
            CLEAN BOTTOM EDGE
        ========================================================== */}

        <div
          className="
            pointer-events-none

            absolute
            inset-x-0
            bottom-0
            z-40

            h-px

            bg-white/[0.05]
          "
        />
      </motion.div>
    </section>
  );
}