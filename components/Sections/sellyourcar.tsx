"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BadgePoundSterling,
  CalendarCheck,
  HandCoins,
  WalletCards,
  ArrowRight,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    icon: BadgePoundSterling,
    title: "Get Your Valuation",
    desc: "Enter your registration and a few details to receive a quick, no-obligation valuation.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Book an Inspection",
    desc: "Choose a convenient time for us to inspect and professionally assess your vehicle.",
  },
  {
    number: "03",
    icon: HandCoins,
    title: "Receive an Offer",
    desc: "We’ll provide a fair and competitive offer with no hidden charges or unnecessary delays.",
  },
  {
    number: "04",
    icon: WalletCards,
    title: "Get Paid",
    desc: "Accept your offer and receive secure payment directly to your bank account.",
  },
];

export default function SellYourCar() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="sell"
      className="
        relative
        overflow-hidden

        bg-[#090A0C]

        py-20

        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[linear-gradient(180deg,#090A0C_0%,#0D0E10_45%,#090A0C_100%)]
        "
      />

      {/* RED ATMOSPHERE */}

      <div
        className="
          pointer-events-none
          absolute

          left-[-220px]
          top-[5%]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#E5484D]/[0.035]

          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          bottom-[-220px]
          right-[-180px]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#E5484D]/[0.025]

          blur-[160px]
        "
      />

      {/* =====================================================
          WRAPPER
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          w-full
          max-w-[1720px]

          px-5

          sm:px-7
          md:px-9
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        {/* =====================================================
            SECTION HEADER
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
                  y: 30,
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
            duration: 0.75,
            ease,
          }}
          className="
            mb-10

            sm:mb-12
            lg:mb-14
          "
        >
          {/* EDITORIAL LABEL */}

          <div
            className="
              mb-4

              flex
              items-center

              gap-3
            "
          >
            <span
              className="
                h-px
                w-7

                bg-[#E5484D]

                shadow-[0_0_8px_rgba(229,72,77,0.24)]
              "
            />

            <span
              className="
                font-sans

                text-[9px]
                font-semibold
                uppercase

                tracking-[0.14em]

                text-[#E5484D]/80
              "
            >
              Sell Your Car
            </span>
          </div>

          {/* SAME STYLE AS CAR LISTING HEADING */}

          <h2
            className="
              max-w-[760px]

              font-heading

              text-[36px]
              font-bold

              leading-[0.96]

              tracking-[-0.045em]

              text-[#F4F2EE]

              sm:text-[42px]

              md:text-[48px]

              lg:text-[54px]

              xl:text-[58px]
            "
          >
            We Make Selling
            <br />

            <span className="text-[#E5484D]">
              Your Car Simple.
            </span>
          </h2>

          <p
            className="
              mt-5

              max-w-[520px]

              font-sans

              text-[12px]
              font-normal

              leading-[1.7]

              text-white/42

              sm:text-[13px]
            "
          >
            A straightforward way to sell your vehicle. Get a fair
            valuation, professional inspection and secure payment without
            the usual hassle.
          </p>
        </motion.div>

        {/* DIVIDER */}

        <div
          className="
            mb-8

            h-px
            w-full

            bg-white/[0.08]

            sm:mb-10
          "
        />

        {/* =====================================================
            MAIN LAYOUT
        ====================================================== */}

        <div
          className="
            grid

            gap-6

            lg:grid-cols-[0.68fr_2.32fr]
            lg:items-stretch
          "
        >
          {/* =====================================================
              LEFT CTA PANEL
          ====================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {
                    opacity: 0,
                    x: -28,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="
              relative

              flex
              min-h-[255px]

              flex-col
              justify-between

              overflow-hidden

              rounded-[16px]

              border
              border-white/[0.09]

              bg-white/[0.03]

              p-6

              shadow-[0_18px_55px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.045)]

              backdrop-blur-[18px]

              sm:p-7
              lg:min-h-[290px]
            "
          >
            {/* GLASS HIGHLIGHT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0

                h-[45%]

                bg-gradient-to-b
                from-white/[0.04]
                to-transparent
              "
            />

            {/* SMALL RED GLOW */}

            <div
              className="
                pointer-events-none
                absolute

                bottom-[-90px]
                left-[-80px]

                h-[220px]
                w-[220px]

                rounded-full

                bg-[#E5484D]/[0.07]

                blur-[85px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  font-sans

                  text-[9px]
                  font-semibold
                  uppercase

                  tracking-[0.14em]

                  text-[#E5484D]/80
                "
              >
                Ready to Sell?
              </p>

              <h3
                className="
                  mt-4

                  max-w-[320px]

                  font-heading

                  text-[25px]
                  font-bold

                  leading-[1]

                  tracking-[-0.04em]

                  text-[#F2F0EC]

                  sm:text-[28px]
                "
              >
                Start with a Free Valuation.
              </h3>

              <p
                className="
                  mt-4

                  max-w-[330px]

                  font-sans

                  text-[11px]

                  leading-[1.65]

                  text-white/40

                  sm:text-[12px]
                "
              >
                Tell us about your car and we’ll take care of the rest.
              </p>
            </div>

            {/* BUTTON */}

            <a
              href="#valuation"
              className="
                group
                relative
                z-10

                mt-7

                inline-flex
                h-[50px]
                w-fit
                min-w-[185px]

                items-center
                justify-center

                overflow-hidden

                rounded-[6px]

                border
                border-[#E5484D]

                bg-[#E5484D]

                px-7

                font-sans

                text-[13px]
                font-semibold

                tracking-[0.005em]

                text-white

                shadow-[0_12px_34px_rgba(0,0,0,0.24)]

                transition-all
                duration-500

                hover:-translate-y-[2px]
                hover:border-[#F05A5F]
                hover:bg-[#F05A5F]
                hover:shadow-[0_16px_42px_rgba(229,72,77,0.18)]
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

              {/* SWEEP */}

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

                  transition-all
                  duration-700

                  group-hover:left-[120%]
                  group-hover:opacity-100
                "
              />

              <span className="relative z-10">
                Value Your Car
              </span>
            </a>
          </motion.div>

          {/* =====================================================
              PROCESS PANEL
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
                    y: 30,
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
              duration: 0.8,
              ease,
            }}
            className="
              relative

              overflow-hidden

              rounded-[16px]

              border
              border-white/[0.09]

              bg-white/[0.032]

              shadow-[0_20px_60px_rgba(0,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.045)]

              backdrop-blur-[20px]
              backdrop-saturate-[140%]
            "
          >
            {/* GLASS TOP */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0

                h-[44%]

                bg-gradient-to-b
                from-white/[0.04]
                to-transparent
              "
            />

            {/* SUBTLE RED LIGHT */}

            <div
              className="
                pointer-events-none
                absolute

                right-[-100px]
                top-[-100px]

                h-[300px]
                w-[300px]

                rounded-full

                bg-[#E5484D]/[0.05]

                blur-[110px]
              "
            />

            <div
              className="
                relative
                z-10

                grid
                grid-cols-1

                sm:grid-cols-2

                lg:grid-cols-4
              "
            >
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={
                      reduceMotion
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {
                            opacity: 0,
                            y: 24,
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
                      duration: 0.6,
                      delay: reduceMotion ? 0 : index * 0.08,
                      ease,
                    }}
                    className="
                      group
                      relative

                      flex
                      min-h-[260px]

                      flex-col

                      items-center
                      justify-center

                      px-5
                      py-8

                      text-center

                      transition-all
                      duration-500

                      hover:bg-white/[0.025]

                      lg:min-h-[290px]
                    "
                  >
                    {/* VERTICAL SEPARATOR */}

                    {index !== 0 && (
                      <span
                        className="
                          pointer-events-none

                          absolute
                          left-0
                          top-[16%]

                          hidden
                          h-[68%]
                          w-px

                          bg-gradient-to-b
                          from-transparent
                          via-white/[0.09]
                          to-transparent

                          lg:block
                        "
                      />
                    )}

                    {/* STEP NUMBER */}

                    <span
                      className="
                        font-sans

                        text-[9px]
                        font-semibold

                        tracking-[0.08em]

                        text-[#E5484D]/65
                      "
                    >
                      STEP {step.number}
                    </span>

                    {/* ICON */}

                    <div
                      className="
                        mt-4

                        flex
                        h-12
                        w-12

                        items-center
                        justify-center

                        rounded-[12px]

                        border
                        border-[#E5484D]/25

                        bg-[#E5484D]/[0.065]

                        text-[#E5484D]

                        shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]

                        transition-all
                        duration-500

                        group-hover:-translate-y-[2px]
                        group-hover:border-[#E5484D]/50
                        group-hover:bg-[#E5484D]/[0.12]
                        group-hover:shadow-[0_10px_25px_rgba(229,72,77,0.08)]
                      "
                    >
                      <Icon
                        strokeWidth={1.4}
                        className="
                          h-[20px]
                          w-[20px]
                        "
                      />
                    </div>

                    {/* CONNECTOR ARROW */}

                    {index < steps.length - 1 && (
                      <ArrowRight
                        strokeWidth={1.15}
                        className="
                          absolute
                          right-[-8px]
                          top-[72px]

                          z-20

                          hidden

                          h-[15px]
                          w-[15px]

                          text-[#E5484D]/45

                          lg:block
                        "
                      />
                    )}

                    {/* TITLE */}

                    <h3
                      className="
                        mt-5

                        font-sans

                        text-[13px]
                        font-semibold

                        tracking-[-0.015em]

                        text-[#F2F0EC]

                        xl:text-[14px]
                      "
                    >
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-3

                        max-w-[205px]

                        font-sans

                        text-[10px]
                        font-normal

                        leading-[1.65]

                        text-white/38

                        xl:text-[11px]
                      "
                    >
                      {step.desc}
                    </p>

                    {/* HOVER BOTTOM BAR */}

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

                        shadow-[0_0_10px_rgba(229,72,77,0.32)]

                        transition-all
                        duration-500

                        group-hover:w-[42%]
                      "
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}