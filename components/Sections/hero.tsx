"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Gauge,
  FileCheck2,
  ArrowUpRight,
} from "lucide-react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const proofPoints = [
  {
    title: "GRADED",
    text: "Independently scored at auction",
    icon: BadgeCheck,
  },
  {
    title: "VERIFIED",
    text: "Mileage confirmed, not estimated",
    icon: Gauge,
  },
  {
    title: "DOCUMENTED",
    text: "Paperwork open before purchase",
    icon: FileCheck2,
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      {/* VIDEO */}
      <motion.video
        src="/images/cinematic-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        initial={reduceMotion ? false : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.2,
          ease: EASE_OUT,
        }}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[70%_center]
          md:object-[72%_center]
          xl:object-center
        "
      />

      {/* ONLY LEFT SIDE SHADOW */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          w-[72%]
          bg-[linear-gradient(90deg,rgba(11,14,19,0.94)_0%,rgba(11,14,19,0.78)_32%,rgba(11,14,19,0.42)_58%,rgba(11,14,19,0.08)_82%,transparent_100%)]
          md:w-[66%]
          lg:w-[60%]
          xl:w-[56%]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          min-h-[100svh]
          w-full
          max-w-[1600px]
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* LEFT AREA */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 28 }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: EASE_OUT,
          }}
          className="
            absolute
            left-6
            top-[19%]
            w-[calc(100%-48px)]
            max-w-[670px]

            sm:left-8
            sm:top-[20%]

            lg:left-12
            lg:top-[19%]

            xl:left-16
            xl:top-[18%]
          "
        >
          {/* EYEBROW */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#00A8E8]" />

            <p
              className="
                font-[var(--font-inter)]
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#F6F8FA]
                sm:text-[13px]
              "
            >
              JAPANESE IMPORT SPECIALISTS
            </p>
          </div>

          {/* HEADLINE */}
          <h1
            className="
              max-w-[650px]
              font-[var(--font-cormorant)]
              text-[48px]
              font-semibold
              leading-[0.96]
              tracking-[-0.015em]
              text-[#F6F8FA]

              sm:text-[58px]
              md:text-[64px]
              lg:text-[68px]
              xl:text-[72px]
            "
          >
            Fewer kilometres.
            <br />

            <span className="text-[#C9D2DC]">
              Better cars.
            </span>
          </h1>

          {/* SUB HEADLINE */}
          <p
            className="
              mt-6
              max-w-[555px]
              font-[var(--font-inter)]
              text-[14px]
              font-normal
              leading-[1.75]
              text-[#C9D2DC]
              lg:text-[15px]
            "
          >
            Low mileage Japanese vehicles, sourced at auction, graded on
            arrival and supplied with full documentation. Every car we import
            can be checked before you commit to it.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#stock"
              className="
                group
                inline-flex
                h-[50px]
                min-w-[190px]
                items-center
                justify-between
                bg-[#00A8E8]
                px-6
                font-[var(--font-inter)]
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-white
                transition-all
                duration-300
                hover:opacity-90
              "
            >
              Browse Stock

              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

            <a
              href="#sell"
              className="
                group
                inline-flex
                h-[50px]
                min-w-[185px]
                items-center
                justify-between
                border
                border-[#C9D2DC]/40
                px-6
                font-[var(--font-inter)]
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-[#F6F8FA]
                transition-all
                duration-300
                hover:border-[#F6F8FA]
              "
            >
              Sell Your Car

              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>

          {/* PROOF POINTS */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 16 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: EASE_OUT,
            }}
            className="
              mt-8
              hidden
              max-w-[650px]
              grid-cols-3
              gap-0
              border-t
              border-[#C9D2DC]/25
              sm:grid
            "
          >
            {proofPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    py-5
                    ${
                      index === 0
                        ? "pr-5"
                        : "border-l border-[#C9D2DC]/20 px-5"
                    }
                  `}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <Icon
                      size={20}
                      strokeWidth={1.35}
                      className="text-[#C9D2DC]"
                    />

                    <span
                      className="
                        font-[var(--font-inter)]
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-[#F6F8FA]
                      "
                    >
                      {item.title}
                    </span>
                  </div>

                  <p
                    className="
                      max-w-[155px]
                      font-[var(--font-inter)]
                      text-[11px]
                      font-normal
                      leading-[1.55]
                      text-[#C9D2DC]/80
                    "
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* RIGHT PARAGRAPH */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 30 }
          }
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: EASE_OUT,
          }}
          className="
            absolute
            bottom-[11%]
            right-12
            hidden
            w-[390px]
            lg:block
            xl:right-16
            xl:w-[420px]
          "
        >
          <div className="border-t border-[#C9D2DC]/35 pt-5">
            <div className="mb-4 h-[2px] w-10 bg-[#00A8E8]" />

            <p
              className="
                font-[var(--font-inter)]
                text-[13px]
                font-normal
                leading-[1.8]
                text-[#C9D2DC]
              "
            >
              We buy at Japanese auction, where mileage is verified and
              condition is independently graded. Every vehicle arrives with
              its auction sheet, its service record and its import paperwork
              ready for inspection.
            </p>
          </div>
        </motion.div>

        {/* MOBILE PROOF */}
        <div
          className="
            absolute
            bottom-5
            left-6
            right-6
            grid
            grid-cols-3
            border-t
            border-[#C9D2DC]/20
            pt-4
            sm:hidden
          "
        >
          {proofPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title}>
                <Icon
                  size={17}
                  strokeWidth={1.4}
                  className="mb-2 text-[#C9D2DC]"
                />

                <span
                  className="
                    font-[var(--font-inter)]
                    text-[8px]
                    font-semibold
                    tracking-[0.1em]
                    text-white
                  "
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}