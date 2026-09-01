"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CarFront,
  ClipboardCheck,
  Handshake,
  BadgeCheck,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    icon: CarFront,
    number: "01",
    title: "Tell Us About Your Car",
    desc: "Share your vehicle details and receive a quick valuation from our specialists.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Professional Inspection",
    desc: "Our experts inspect your vehicle and provide a transparent assessment.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Receive Your Offer",
    desc: "Get a competitive offer with a simple and hassle-free process.",
  },
  {
    icon: BadgeCheck,
    number: "04",
    title: "Complete The Sale",
    desc: "We handle the paperwork while you enjoy a smooth transaction.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SellYourCar() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="sell"
      className="
        relative
        overflow-hidden

        border-y
        border-white/[0.05]

        bg-[#0B0D0F]

        py-14

        sm:py-16

        lg:py-20
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[linear-gradient(180deg,#0B0D0F_0%,#11161D_50%,#0B0D0F_100%)]
        "
      />

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1500px]

          px-5
          sm:px-7
          lg:px-10
          xl:px-12
        "
      >
        {/* HEADER */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="
            mb-8

            max-w-[700px]

            sm:mb-10
          "
        >
      

          <h2
            className="
              font-[var(--font-display)]

              text-[34px]

              font-semibold
              leading-[1]

              tracking-[-0.035em]

              text-white

              sm:text-[42px]

              lg:text-[52px]
            "
          >
            Sell Your Car
            <br />
            <span className="text-[#00A8E8]">
              The Easy Way.
            </span>
          </h2>

          <p
            className="
              mt-4

              max-w-[520px]

              text-[13px]

              leading-relaxed

              text-white/50

              sm:text-[14px]
            "
          >
            Get a fair valuation, expert guidance and a smooth selling
            experience with YM Motors.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div
          className="
            grid

            gap-5

            lg:grid-cols-[0.9fr_1.1fr]

            lg:gap-6
          "
        >
          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease: EASE,
            }}
            className="
              relative

              overflow-hidden

              rounded-3xl

              border
              border-white/[0.12]

              bg-white/[0.04]

              p-6

              backdrop-blur-xl

              sm:p-8
            "
          >
            <div
              className="
                pointer-events-none

                absolute
                right-[-80px]
                top-[-80px]

                h-[240px]
                w-[240px]

                rounded-full

                bg-[#00A8E8]/10

                blur-[100px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[12px]
                  uppercase
                  tracking-[0.22em]
                  font-bold

                  text-[#00A8E8]
                "
              >
                Start Today
              </p>

              <h3
                className="
                  mt-4

                  font-[var(--font-display)]

                  text-[30px]

                  font-semibold

                  leading-tight

                  text-white

                  sm:text-[36px]
                "
              >
                Ready To Sell
                <br />
                Your Car?
              </h3>

              <p
                className="
                  mt-4

                  text-[14px]

                  leading-relaxed

                  text-white/50
                "
              >
                Our team evaluates your vehicle and provides a competitive
                market offer.
              </p>

               <motion.a
                href="#finance"
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

                  mt-6

                  flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-2

                  rounded-[3px]

                  border
                  border-[#2a9fff]/25

                  bg-[#158ff3]

                  px-5

                  font-[var(--font-body)]

                  text-[14px]
                  font-semibold

                  text-white

                  transition-all
                  duration-300

                  hover:bg-[#2a9fff]

                  sm:inline-flex
                  sm:w-auto
                  sm:px-6
                  sm:text-[16px]
                "
              >
               Get Valuation

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.6}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-[2px]
                    group-hover:-translate-y-[2px]
                  "
                />
              </motion.a>
            </div>
          </motion.div>

          {/* STEPS */}
          <div
            className="
              grid

              gap-3

              sm:grid-cols-2
            "
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: EASE,
                  }}
                  className="
                    rounded-2xl

                    border
                    border-white/[0.12]

                    bg-white/[0.04]

                    p-5

                    backdrop-blur-xl

                    transition-all

                    hover:-translate-y-1

                    hover:border-[#00A8E8]/40
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div
                      className="
                        flex
                        h-14
                        w-14

                        items-center
                        justify-center

                        rounded-2xl

                        border
                        border-[#00A8E8]/30

                        bg-[#00A8E8]/10

                        text-[#4db8ff]
                      "
                    >
                      <Icon size={26} />
                    </div>

                    <span
                      className="
                        text-xs
                        text-white/30
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  <h4
                    className="
                      mt-5

                      text-[16px]

                      font-semibold

                      text-white
                    "
                  >
                    {step.title}
                  </h4>

                  <p
                    className="
                      mt-3

                      text-[12px]

                      leading-relaxed

                      text-white/45
                    "
                  >
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
