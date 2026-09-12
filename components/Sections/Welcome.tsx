"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  CarFront,
  ShieldCheck,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const benefits = [
  {
    icon: BadgeCheck,
    title: "Top Rated Dealer",
    text: "Recognised by CarGurus in 2021, 2022, 2023 & 2024.",
  },
  {
    icon: CarFront,
    title: "Japanese Imports",
    text: "Low-mileage vehicles carefully sourced for quality and reliability.",
  },
  {
    icon: ShieldCheck,
    title: "Buy With Confidence",
    text: "Transparent service from first enquiry through to final handover.",
  },
];

export default function Welcome() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#080B10]
      "
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(180deg,#080B10_0%,#0D1218_50%,#080B10_100%)]
        "
      />

      {/* SUBTLE BLUE AMBIENCE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-260px]
          top-[20%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#00A8E8]/[0.045]
          blur-[170px]
        "
      />

      {/* TOP DIVIDER */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-[75%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/[0.10]
          to-transparent
        "
      />

      {/* MAIN GRID */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1800px]
          grid-cols-1
          lg:min-h-[740px]
          lg:grid-cols-[1.03fr_0.97fr]
        "
      >
        {/* =====================================================
            LEFT IMAGE
        ====================================================== */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -24,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.9,
            ease: EASE,
          }}
          className="
            relative
            h-[350px]
            sm:h-[450px]
            md:h-[520px]
            lg:h-auto
            lg:min-h-[740px]
          "
        >
          <Image
            src="/images/welcome.png"
            alt="Premium vehicle available from YM Motors"
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="
              object-cover
              object-center
              lg:object-[52%_center]
            "
          />

          {/* DESKTOP IMAGE BLEND */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              hidden
              bg-gradient-to-r
              from-transparent
              via-transparent
              to-[#080B10]/65
              lg:block
            "
          />

          {/* MOBILE IMAGE BLEND */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[130px]
              bg-gradient-to-t
              from-[#080B10]
              to-transparent
              lg:hidden
            "
          />

     
        </motion.div>

        {/* =====================================================
            RIGHT CONTENT
        ====================================================== */}
        <motion.div
          initial={
            reduceMotion
              ? false
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
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: EASE,
          }}
          className="
            flex
            flex-col
            justify-center
            px-5
            pb-16
            pt-10
            sm:px-8
            sm:pb-20
            sm:pt-12
            md:px-12
            lg:px-12
            lg:py-16
            xl:px-16
            2xl:px-20
          "
        >
          {/* =====================================================
              MAIN HEADING
              One line on normal screens.
              Mobile size automatically stays inside viewport.
          ====================================================== */}
          <h2
            className="
              whitespace-nowrap
              font-[var(--font-display)]
              text-[26px]
              font-semibold
              leading-none
              tracking-[-0.035em]
              text-white

              min-[360px]:text-[28px]
              min-[400px]:text-[31px]

              sm:text-[38px]
              md:text-[44px]

              lg:text-[38px]
              xl:text-[44px]
              2xl:text-[50px]
            "
          >
            Welcome to{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#6DD0FF]
                via-[#00A8E8]
                to-[#168BD5]
                bg-clip-text
                text-transparent
              "
            >
              YM Motors
            </span>
          </h2>

          {/* INTRO */}
          <p
            className="
              mt-6
              max-w-[620px]
              font-[var(--font-body)]
              text-[15px]
              font-medium
              leading-[1.75]
              text-white/80
              sm:text-[16px]
              lg:text-[16px]
              xl:text-[17px]
            "
          >
            Great deals on quality used cars in Crawley, with specialist
            knowledge in low-mileage Japanese imports.
          </p>

          <p
            className="
              mt-4
              max-w-[620px]
              font-[var(--font-body)]
              text-[14px]
              font-normal
              leading-[1.8]
              text-white/52
              sm:text-[15px]
            "
          >
            We carefully select vehicles for quality, reliability and value,
            while keeping the buying process clear, straightforward and
            personal from your first enquiry to final handover.
          </p>

          {/* =====================================================
              BENEFITS
          ====================================================== */}
          <div
            className="
              mt-8
              grid
              grid-cols-1
              border-y
              border-white/[0.07]
              sm:grid-cols-3
            "
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className={`
                    group
                    relative
                    py-5

                    sm:px-4
                    sm:py-6

                    xl:px-5

                    ${
                      index !== benefits.length - 1
                        ? "border-b border-white/[0.07] sm:border-b-0 sm:border-r"
                        : ""
                    }
                  `}
                >
                  <Icon
                    size={28}
                    strokeWidth={1.45}
                    className="
                      mb-5
                      text-[#00A8E8]
                      transition-transform
                      duration-300
                      group-hover:-translate-y-[2px]
                    "
                  />

                  <h3
                    className="
                      font-[var(--font-body)]
                      text-[12px]
                      font-semibold
                      leading-[1.3]
                      text-white
                      xl:text-[13px]
                    "
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      font-[var(--font-body)]
                      text-[11px]
                      font-normal
                      leading-[1.65]
                      text-white/45
                      xl:text-[12px]
                    "
                  >
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =====================================================
              BUTTONS
          ====================================================== */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-3
              min-[420px]:flex-row
            "
          >
            {/* VIEW STOCK — NO GLOW */}
            <motion.a
              href="#stock"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -2,
                    }
              }
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                inline-flex
                min-h-[50px]
                items-center
                justify-center
                gap-2.5
                rounded-[5px]
                border
                border-[#00A8E8]
                bg-[#00A8E8]
                px-7
                font-[var(--font-body)]
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                duration-300

                hover:border-[#12B7F4]
                hover:bg-[#12B7F4]

                sm:text-[12px]
              "
            >
              View Our Stock

              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-[2px]
                  group-hover:translate-x-[2px]
                "
              />
            </motion.a>

            {/* CONTACT */}
            <a
              href="#contact"
              className="
                inline-flex
                min-h-[50px]
                items-center
                justify-center
                rounded-[5px]
                border
                border-white/[0.13]
                bg-transparent
                px-7
                font-[var(--font-body)]
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white/75
                transition-all
                duration-300

                hover:border-white/[0.25]
                hover:bg-white/[0.055]
                hover:text-white

                sm:text-[12px]
              "
            >
              Contact Us
            </a>
          </div>

          {/* TRUST TEXT */}
          <p
            className="
              mt-6
              font-[var(--font-body)]
              text-[10px]
              leading-[1.6]
              tracking-[0.02em]
              text-white/30
              sm:text-[11px]
            "
          >
            CarGurus Top Rated Dealer — 2021, 2022, 2023 &amp; 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
}