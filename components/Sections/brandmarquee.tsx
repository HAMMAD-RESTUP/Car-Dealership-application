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

export default function BrandMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden

        border-y
        border-white/[0.055]

        bg-[#08111A]

        py-7

        sm:py-8
        lg:py-9
      "
    >
      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(circle_at_50%_100%,rgba(87,136,181,0.055),transparent_40%),linear-gradient(180deg,#08111A_0%,#09131B_50%,#08111A_100%)]
        "
      />

      {/* TOP LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0

          h-px
          w-[60%]

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-[#5788B5]/20
          to-transparent
        "
      />

      {/* MARQUEE */}

      <motion.div
        initial={
          reduceMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 15 }
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
          ease: [0.22, 1, 0.36, 1],
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
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={65}
                className="
                  max-h-[34px]
                  max-w-[95px]

                  select-none

                  object-contain

                  grayscale
                  brightness-[1.3]

                  opacity-[0.40]

                  transition-all
                  duration-500

                  group-hover:scale-[1.05]
                  group-hover:grayscale-0
                  group-hover:brightness-100
                  group-hover:opacity-100

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

        {/* LEFT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20

            w-14

            bg-gradient-to-r
            from-[#08111A]
            via-[#08111A]/90
            to-transparent

            sm:w-20
            lg:w-32
          "
        />

        {/* RIGHT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-20

            w-14

            bg-gradient-to-l
            from-[#08111A]
            via-[#08111A]/90
            to-transparent

            sm:w-20
            lg:w-32
          "
        />
      </motion.div>
    </section>
  );
}