"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const strips = [0, 1, 2, 3];

const ease = [0.22, 1, 0.36, 1] as const;
const stripEase = [0.76, 0, 0.24, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        h-[100svh]
        min-h-[620px]
        w-full
        overflow-hidden
        bg-[#05080B]
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
                      opacity: 0.35,
                    }
              }
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.3,
                delay: reduceMotion ? 0 : 0.05 + index * 0.1,
                ease: stripEase,
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
                  CONTINUOUS FULL IMAGE INSIDE EACH STRIP
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
                {/* =============================================
                    DESKTOP IMAGE
                ============================================== */}

                <Image
                  src="/images/hero-mock-banner.png"
                  alt=""
                  fill
                  priority={index === 0}
                  aria-hidden="true"
                  sizes="100vw"
                  className="
                    hidden
                    select-none

                    object-cover

                    md:block
                  "
                  style={{
                    objectPosition: "center 40%",
                  }}
                />

                {/* =============================================
                    MOBILE IMAGE
                ============================================== */}

                <Image
                  src="/images/mobile-hero-showroom.png"
                  alt=""
                  fill
                  priority={index === 0}
                  aria-hidden="true"
                  sizes="100vw"
                  className="
                    select-none
                    object-cover

                    md:hidden
                  "
                  style={{
                    objectPosition: "center 37%",
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* =====================================================
          DESKTOP LEFT GRADIENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          hidden

          bg-[linear-gradient(90deg,rgba(3,8,13,0.97)_0%,rgba(3,8,13,0.88)_23%,rgba(3,8,13,0.60)_40%,rgba(3,8,13,0.25)_56%,rgba(3,8,13,0.03)_76%)]

          md:block
        "
      />

      {/* =====================================================
          MOBILE GRADING
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-[linear-gradient(180deg,rgba(3,7,11,0.40)_0%,rgba(3,7,11,0.10)_32%,rgba(3,7,11,0.42)_58%,rgba(3,7,11,0.96)_100%)]

          md:hidden
        "
      />

      {/* =====================================================
          VIGNETTE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.38)_100%)]
        "
      />

      {/* =====================================================
          NAVBAR READABILITY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-10

          h-[150px]

          bg-gradient-to-b
          from-black/65
          via-black/20
          to-transparent
        "
      />

      {/* =====================================================
          BOTTOM DEPTH
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-10

          h-[36%]

          bg-gradient-to-t
          from-[#05080B]/90
          via-[#05080B]/25
          to-transparent
        "
      />

      {/* =====================================================
          SUBTLE STEEL-BLUE GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          left-[-100px]
          top-[25%]
          z-10

          h-[420px]
          w-[580px]

          rounded-full

          bg-[#5788B5]/[0.055]

          blur-[160px]
        "
      />

      {/* =====================================================
          CINEMATIC LIGHT SWEEP
      ====================================================== */}

      {!reduceMotion && (
        <motion.div
          initial={{
            x: "-180%",
            opacity: 0,
          }}
          animate={{
            x: "950%",
            opacity: [0, 0.8, 0],
          }}
          transition={{
            delay: 0.9,
            duration: 2.2,
            ease: stripEase,
          }}
          className="
            pointer-events-none
            absolute

            -top-[25%]
            left-0
            z-20

            h-[150%]
            w-[7%]

            rotate-[12deg]

            bg-gradient-to-r
            from-transparent
            via-white/[0.065]
            to-transparent

            blur-[28px]
          "
        />
      )}

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
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
          md:pt-[80px]

          lg:px-12

          xl:px-16

          2xl:px-20
        "
      >
        <div
          className="
            w-full

            max-w-[540px]

            lg:max-w-[590px]

            xl:max-w-[620px]
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
              delay: reduceMotion ? 0 : 0.85,
              duration: 0.65,
              ease,
            }}
            className="
              mb-4

              flex
              items-center
              gap-3

              md:mb-5
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
                delay: reduceMotion ? 0 : 1,
                duration: 0.6,
                ease,
              }}
              className="
                h-px
                w-7

                origin-left

                bg-[#5788B5]

                md:w-8
              "
            />

            <span
              className="
                font-sans

                text-[9px]
                font-bold
                uppercase

                tracking-[0.18em]

                text-[#8FB3D4]

                sm:text-[10px]
              "
            >
              Welcome to YM Motors
            </span>
          </motion.div>

          {/* =================================================
              HEADING
          ================================================== */}

          <div
            className="
              overflow-hidden
              pb-1
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
                      y: "110%",
                      opacity: 0,
                    }
              }
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: reduceMotion ? 0 : 0.72,
                duration: 0.95,
                ease,
              }}
              className="
                font-serif

                text-[36px]
                font-normal

                leading-[1.01]

                tracking-[-0.04em]

                text-[#F5F5F2]

                sm:text-[42px]

                md:text-[45px]

                lg:text-[52px]

                xl:text-[58px]

                2xl:text-[62px]
              "
            >
              Quality Used Cars.
              <br />

              <span className="text-[#70A9D8]">
                Trusted
              </span>{" "}
              Local Experts.
            </motion.h1>
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
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: reduceMotion ? 0 : 1.05,
              duration: 0.7,
              ease,
            }}
            className="
              mt-4

              max-w-[410px]

              font-sans

              text-[12px]
              font-medium

              leading-[1.75]

              text-white/60

              sm:text-[13px]

              md:mt-5

              lg:text-[14px]
            "
          >
            Carefully selected vehicles. Exceptional value.
            <br className="hidden sm:block" />
            Outstanding service.
          </motion.p>

          {/* =================================================
              BUTTONS
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
                    y: 22,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: reduceMotion ? 0 : 1.2,
              duration: 0.7,
              ease,
            }}
            className="
              mt-6

              flex
              flex-col

              items-start
              gap-3

              sm:flex-row

              md:mt-7
            "
          >
            {/* =============================================
                BROWSE STOCK
            ============================================== */}

            <a
              href="#stock"
              className="
                group

                flex

                h-[50px]

                w-full
                max-w-[205px]

                items-center
                justify-between

                rounded-[4px]

                bg-[#5788B5]

                px-5

                font-sans

                text-[11px]
                font-bold
                uppercase

                tracking-[0.02em]

                text-white

                shadow-[0_14px_40px_rgba(87,136,181,0.22)]

                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:bg-[#6899C4]
                hover:shadow-[0_18px_55px_rgba(87,136,181,0.28)]

                sm:w-[185px]

                lg:h-[52px]
                lg:w-[195px]
                lg:text-[12px]
              "
            >
              <span>Browse Stock</span>

              <ArrowRight
                strokeWidth={1.8}
                className="
                  h-4
                  w-4

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
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
                max-w-[205px]

                items-center
                justify-between

                rounded-[4px]

                border
                border-white/[0.28]

                bg-black/20

                px-5

                font-sans

                text-[11px]
                font-bold
                uppercase

                tracking-[0.02em]

                text-white

                backdrop-blur-sm

                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:border-[#5788B5]
                hover:bg-[#5788B5]/10

                sm:w-[180px]

                lg:h-[52px]
                lg:w-[190px]
                lg:text-[12px]
              "
            >
              <span>Sell Your Car</span>

              <ArrowRight
                strokeWidth={1.8}
                className="
                  h-4
                  w-4

                  text-[#8FB3D4]

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}