"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const brands = [
  {
    name: "Ferrari",
    logo: "/images/ferrari.png",
  },
  {
    name: "Porsche",
    logo: "/images/porsche.png",
  },
  {
    name: "Mercedes",
    logo: "/images/mercedes.jpeg",
  },
  {
    name: "Lamborghini",
    logo: "/images/brands/lamborghini.png",
  },
  {
    name: "Rolls Royce",
    logo: "/images/brands/rolls.png",
  },
  {
    name: "Range Rover",
    logo: "/images/brands/range.png",
  },
  {
    name: "Audi",
    logo: "/images/brands/audi.png",
  },
  {
    name: "Ford",
    logo: "/images/brands/ford.png",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function BrandMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden

        border-y
        border-white/[0.06]

        bg-[#090A0C]

        py-7

        sm:py-8
        lg:py-9
      "
    >
      {/* =========================================================
          DARK CINEMATIC BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[linear-gradient(180deg,#090A0C_0%,#0D0E10_48%,#090A0C_100%)]
        "
      />

      {/* =========================================================
          SUBTLE RED AMBIENCE
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          left-1/2
          top-1/2

          h-[260px]
          w-[720px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#E5484D]/[0.055]

          blur-[115px]
        "
      />

      {/* =========================================================
          TOP RED DETAIL LINE
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0

          h-px
          w-[64%]

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-[#E5484D]/55
          to-transparent

          shadow-[0_0_10px_rgba(229,72,77,0.18)]
        "
      />

      {/* =========================================================
          BOTTOM SOFT REFLECTION
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2

          h-px
          w-[42%]

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-white/[0.07]
          to-transparent
        "
      />

      {/* =========================================================
          MARQUEE
      ========================================================== */}

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
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          ease,
        }}
        className="
          relative
          z-10

          overflow-hidden
        "
      >
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: ["0%", "-50%"],
                }
          }
          transition={
            reduceMotion
              ? {}
              : {
                  x: {
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }
          }
          className="
            flex
            w-max

            items-center
          "
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="
                group
                relative

                flex

                h-[58px]
                w-[130px]

                shrink-0

                items-center
                justify-center

                px-5

                sm:h-[64px]
                sm:w-[160px]

                md:w-[185px]

                lg:w-[205px]
              "
            >
              {/* SUBTLE ITEM SEPARATOR */}

              <span
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-1/2

                  h-[28px]
                  w-px

                  -translate-y-1/2

                  bg-gradient-to-b
                  from-transparent
                  via-white/[0.055]
                  to-transparent
                "
              />

              {/* RED HOVER GLOW */}

              <span
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2

                  h-[42px]
                  w-[90px]

                  -translate-x-1/2
                  -translate-y-1/2

                  rounded-full

                  bg-[#E5484D]/0

                  blur-[28px]

                  transition-all
                  duration-500

                  group-hover:bg-[#E5484D]/[0.10]
                "
              />

              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={65}
                className="
                  relative
                  z-10

                  max-h-[34px]
                  max-w-[95px]

                  select-none

                  object-contain

                  grayscale
                  brightness-[1.38]
                  contrast-[1.02]

                  opacity-[0.44]

                  transition-all
                  duration-500

                  group-hover:scale-[1.045]
                  group-hover:grayscale-0
                  group-hover:brightness-[1.05]
                  group-hover:contrast-100
                  group-hover:opacity-100
                  group-hover:drop-shadow-[0_0_14px_rgba(229,72,77,0.14)]

                  sm:max-h-[38px]
                  sm:max-w-[110px]

                  md:max-h-[40px]
                  md:max-w-[120px]

                  lg:max-h-[44px]
                  lg:max-w-[130px]
                "
              />
            </div>
          ))}
        </motion.div>

        {/* =========================================================
            LEFT FADE
        ========================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20

            w-14

            bg-gradient-to-r
            from-[#090A0C]
            via-[#090A0C]/92
            to-transparent

            sm:w-20
            lg:w-32
          "
        />

        {/* =========================================================
            RIGHT FADE
        ========================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-20

            w-14

            bg-gradient-to-l
            from-[#090A0C]
            via-[#090A0C]/92
            to-transparent

            sm:w-20
            lg:w-32
          "
        />
      </motion.div>
    </section>
  );
}
