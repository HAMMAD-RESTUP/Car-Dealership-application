"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const brands = [
  { name: "Mercedes", logo: "/images/mercedes.png" },
  { name: "Ford", logo: "/images/ford.png" },
  { name: "Peugoet", logo: "/images/peugoet-logo.png" },
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
        border-white/[0.08]

        bg-[#0B0E13]

        py-7

        sm:py-9
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(180deg,#070b10_0%,#101720_50%,#070b10_100%)]
        "
      />

      <div
        className="
          absolute
          inset-0

          bg-white/[0.025]

          backdrop-blur-[20px]
        "
      />


      {/* HEADING */}
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity:0,
                y:20
              }
        }

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.7,
          ease
        }}

        className="
          relative
          z-10

          mb-6

          flex
          items-center
          justify-center

          text-center
        "
      >

        <h2
          className="
            font-[var(--font-display)]

            text-[28px]

            font-semibold

            tracking-[-0.03em]

            text-white

            sm:text-[34px]

            lg:text-[40px]
          "
        >
          Search{" "}
          <span className="text-[#00A8E8]">
            Manufacturers
          </span>

        </h2>

      </motion.div>



      {/* MARQUEE */}

      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity:0,
                y:15
              }
        }

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.7,
          ease
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
                  x:["0%","-50%"]
                }
          }

          transition={{
            x:{
              duration:35,
              repeat:Infinity,
              ease:"linear"
            }
          }}

          className="
            flex
            w-max
            items-center
          "
        >


          {[...brands,...brands].map((brand,index)=>(

            <div
              key={`${brand.name}-${index}`}

              className="
                group

                relative

                flex

                h-[90px]

                w-[150px]

                shrink-0

                items-center
                justify-center


                sm:h-[100px]

                sm:w-[190px]


                lg:h-[110px]

                lg:w-[220px]
              "
            >


              {/* GLASS CARD */}

              <div
                className="
                  absolute

                  inset-x-3

                  inset-y-2

                  rounded-xl

                  border

                  border-white/[0.08]

                  bg-white/[0.025]

                  opacity-0

                  backdrop-blur-xl

                  transition-all

                  duration-500

                  group-hover:opacity-100

                  group-hover:border-[#00A8E8]/30

                  group-hover:bg-white/[0.06]
                "
              />


              <Image
                src={brand.logo}

                alt={brand.name}

                width={220}

                height={100}

                className="
                  relative
                  z-10

                  max-h-[55px]

                  max-w-[150px]

                  sm:max-h-[65px]

                  sm:max-w-[180px]

                  object-contain

                  select-none

                  grayscale

                  brightness-[1.7]

                  opacity-55

                  transition-all

                  duration-500

                  group-hover:scale-110

                  group-hover:grayscale-0

                  group-hover:opacity-100

                  group-hover:brightness-125
                "
              />


            </div>

          ))}


        </motion.div>


      </motion.div>


    </section>
  );
}