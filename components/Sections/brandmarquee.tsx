"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const brands = [
  { name: "Mercedes", logo: "/images/mercedes.png" },
  { name: "Ford", logo: "/images/ford.png" },
  { name: "Peugeot", logo: "/images/peugoet-logo.png" },
];

export default function BrandMarquee() {
  const reduceMotion = useReducedMotion();

  const items = [...brands, ...brands, ...brands, ...brands];

  return (
    <section
      className="
        relative
        overflow-hidden
        border-y
        border-white/[0.06]
        bg-[#0B0E13]
        py-12
        sm:py-14
        lg:py-16
      "
    >
      {/* subtle background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(180deg,#0B0E13_0%,#101720_50%,#0B0E13_100%)]
        "
      />

      {/* heading */}
      <div
        className="
          relative
          z-10
          mb-9
          text-center
          sm:mb-11
        "
      >
        <h2
          className="
            font-[var(--font-display)]
            text-[30px]
            font-semibold
            leading-none
            tracking-[-0.025em]
            text-white

            sm:text-[36px]
            md:text-[40px]
            lg:text-[44px]
            xl:text-[48px]
          "
        >
          Search{" "}
          <span className="text-[#00A8E8]">
            Manufacturers
          </span>
        </h2>

        <div
          className="
            mx-auto
            mt-5
            h-px
            w-[52px]
            bg-[#00A8E8]/80
          "
        />
      </div>

      {/* marquee */}
      <div
        className="
          relative
          z-10
          overflow-hidden
        "
      >
        {/* left fade */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            top-0
            z-20
            w-[70px]
            bg-gradient-to-r
            from-[#0B0E13]
            to-transparent

            sm:w-[120px]
          "
        />

        {/* right fade */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            top-0
            z-20
            w-[70px]
            bg-gradient-to-l
            from-[#0B0E13]
            to-transparent

            sm:w-[120px]
          "
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: ["0%", "-50%"],
                }
          }
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="
            flex
            w-max
            items-center
          "
        >
          {items.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="
                group
                flex
                h-[90px]
                w-[180px]
                shrink-0
                items-center
                justify-center

                sm:h-[100px]
                sm:w-[220px]

                lg:h-[110px]
                lg:w-[250px]
              "
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={220}
                height={100}
                draggable={false}
                className="
                  max-h-[48px]
                  max-w-[130px]

                  object-contain

                  opacity-55
                  grayscale
                  brightness-[1.6]

                  transition-all
                  duration-300

                  group-hover:scale-[1.05]
                  group-hover:opacity-100
                  group-hover:grayscale-0
                  group-hover:brightness-110

                  sm:max-h-[56px]
                  sm:max-w-[155px]

                  lg:max-h-[62px]
                  lg:max-w-[175px]
                "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}