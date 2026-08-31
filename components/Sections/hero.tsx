"use client";

import { motion, useReducedMotion } from "framer-motion";
import AiAssistant from "../Layout/AIchatboard/AI-Assistant";
import VehicleSearchBar from "./VehicleSearchBar";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-[#07101a]
      "
    >
      {/* =====================================================
          MOBILE BACKGROUND
      ====================================================== */}
      <img
        src="/images/hero-mobile.png"
        alt=""
        aria-hidden="true"
        className="
          absolute
          inset-0

          block
          h-full
          w-full

          object-cover
          object-[66%_center]

          md:hidden
        "
      />

      {/* =====================================================
          STATIC HERO BACKGROUND
          No video - premium cinematic image treatment
      ====================================================== */}
      <img
        src="/images/home-desktop-hero.png"
        alt=""
        aria-hidden="true"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* subtle chrome glow behind heading */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[220px]
          h-[360px]
          w-[520px]
          rounded-full
          bg-[#00A8E8]/20
          blur-[120px]
          animate-pulse
        "
      />

      {/* =====================================================
          VERY LIGHT GENERAL TONE
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-black/[0.05]

          md:bg-black/[0.03]
        "
      />

      {/* =====================================================
          MOBILE TEXT SHADE
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          left-0
          top-[72px]

          h-[590px]
          w-full

          md:hidden
        "
        style={{
          background:
            "radial-gradient(ellipse at 17% 38%, rgba(2,8,14,0.78) 0%, rgba(2,8,14,0.58) 27%, rgba(2,8,14,0.34) 48%, rgba(2,8,14,0.12) 67%, transparent 84%)",
        }}
      />

      {/* =====================================================
          MOBILE CINEMATIC GRADIENT
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          md:hidden
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(2,8,14,0.24) 0%, transparent 30%, transparent 67%, rgba(2,8,14,0.44) 100%)",
        }}
      />

      {/* =====================================================
          DESKTOP TEXT SHADE
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          left-0
          top-[125px]

          hidden
          h-[540px]
          w-[860px]

          md:block
        "
        style={{
          background:
            "radial-gradient(ellipse at 18% 48%, rgba(2,8,14,0.50) 0%, rgba(2,8,14,0.36) 27%, rgba(2,8,14,0.20) 48%, rgba(2,8,14,0.08) 64%, transparent 79%)",
        }}
      />

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-x-0
          bottom-0

          h-[30%]
        "
        style={{
          background:
            "linear-gradient(0deg, rgba(2,8,14,0.52) 0%, rgba(2,8,14,0.17) 52%, transparent 100%)",
        }}
      />

      {/* =====================================================
          TOP HEADER SHADE
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-x-0
          top-0

          h-[115px]

          bg-gradient-to-b
          from-black/25
          to-transparent

          md:h-[120px]
          md:from-black/20
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10

          mx-auto

          flex
          min-h-[100svh]
          w-full
          max-w-[1920px]
          flex-col

          px-5
          pb-7
          pt-[96px]

          sm:px-7
          sm:pb-8
          sm:pt-[104px]

          md:px-8
          md:pb-6
          md:pt-[120px]

          lg:px-10
          lg:pt-[126px]

          xl:px-12

          2xl:px-14
        "
      >
        {/* =================================================
            HERO TEXT
        ================================================== */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -20,
                }
          }
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: EASE_OUT,
          }}
          className="
            mt-[5vh]

            max-w-[390px]

            sm:mt-[6vh]
            sm:max-w-[540px]

            md:mt-[9vh]
            md:max-w-[720px]

            lg:mt-[10vh]
            lg:max-w-[790px]

            xl:mt-[11vh]
            xl:max-w-[850px]
          "
        >
          {/* =================================================
              LUXURY LABEL
          ================================================== */}
          <div
            className="
              mb-5

              flex
              items-center
              gap-3

              sm:mb-6
              sm:gap-4

              md:mb-7
            "
          >
            <span
              className="
                h-px
                w-9
                shrink-0

                bg-gradient-to-r
                from-[#f2f4f5]
                via-[#aeb5ba]
                to-transparent

                opacity-80

                sm:w-11
                md:w-14
              "
            />

            <span
              className="
                whitespace-nowrap

                font-[var(--font-body)]

                text-[13px]
                font-medium
                uppercase
                leading-none
                tracking-[0.14em]

                bg-clip-text
                text-transparent

                min-[380px]:text-[14px]

                sm:text-[16px]
                sm:tracking-[0.16em]

                md:text-[18px]
                md:tracking-[0.17em]

                lg:text-[20px]

                xl:text-[22px]
              "
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #ffffff 0%, #e7eaec 22%, #aeb5ba 48%, #f7f8f8 68%, #a2a9ae 100%)",
              }}
            >
              Japanese Import Specialists
            </span>
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}
          <h1
            className="
              font-[var(--font-display)]

              text-[48px]
              font-semibold
              leading-[0.92]
              tracking-[-0.01em]

              text-white

              min-[380px]:text-[52px]

              sm:text-[62px]

              md:text-[72px]

              lg:text-[82px]

              xl:text-[90px]

              2xl:text-[96px]
            "
          >
            <span className="text-[#f5f5f3]">
              Fewer kilometres.
            </span>

            <br />

            <span className="text-[#129cff]">
              Better cars.
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}
          <p
            className="
              mt-5
              max-w-[350px]

              font-[var(--font-body)]

              text-[13px]
              font-normal
              leading-[1.65]

              text-white/72

              min-[380px]:text-[14px]

              sm:mt-6
              sm:max-w-[430px]
              sm:text-[15px]

              md:max-w-[500px]
              md:text-[16px]

              xl:max-w-[530px]
              xl:text-[17px]
            "
          >
            Low mileage Japanese vehicles, sourced at auction,
            graded on arrival and supplied with full documentation.
            Every car we import can be checked before you commit to it.
          </p>

          {/* =================================================
              BUTTONS
          ================================================== */}
          <div
            className="
              mt-7

              grid
              w-full
              max-w-[380px]
              grid-cols-1
              gap-4

              sm:mt-8
              sm:max-w-[430px]
              sm:gap-4

              md:mt-9
              md:flex
              md:max-w-none
              md:items-center
              md:gap-4
            "
          >
            {/* BROWSE STOCK */}
            <motion.a
              href="#models"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                inline-flex

                min-h-[50px]

                items-center
                justify-center

                rounded-[4px]

                bg-[#158ff3]

                px-5

                font-[var(--font-body)]

                text-[12px]
                font-semibold
                tracking-[0.01em]

                text-white

                

                transition-all
                duration-200

                hover:bg-[#2a9fff]
                hover:shadow-[0_12px_32px_rgba(21,143,243,0.28)]

                min-[380px]:text-[13px]

                sm:min-h-[54px]
                sm:px-8
                sm:text-[14px]

                md:min-h-[56px]
                md:min-w-[165px]
                md:px-9
                md:text-[15px]

                lg:min-w-[175px]
              "
            >
              Browse Stock
            </motion.a>

            {/* SELL CAR */}
            <motion.a
              href="#contact"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                inline-flex

                min-h-[50px]

                items-center
                justify-center

                rounded-[4px]

                border
                border-white/35

                bg-black/[0.12]

                px-5

                font-[var(--font-body)]

                text-[12px]
                font-semibold
                tracking-[0.01em]

                text-white

                backdrop-blur-[3px]

                transition-all
                duration-200

                hover:border-white/65
                hover:bg-white/[0.08]

                min-[380px]:text-[13px]

                sm:min-h-[54px]
                sm:px-8
                sm:text-[14px]

                md:min-h-[56px]
                md:min-w-[165px]
                md:px-9
                md:text-[15px]

                lg:min-w-[175px]
              "
            >
              Sell your car
            </motion.a>
          </div>
        </motion.div>

        {/* =====================================================
            MOBILE FLEX SPACE
        ====================================================== */}
        <div
          className="
            min-h-[50px]
            flex-1

            md:min-h-[80px]
          "
        />

        {/* =====================================================
            VEHICLE SEARCH BAR

            MOBILE = HIDDEN
            MD+ = VISIBLE
        ====================================================== */}
        <motion.div
          initial={
            reduceMotion
              ? false
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
            duration: 0.75,
            delay: 0.15,
            ease: EASE_OUT,
          }}
          className="
            relative
            z-20

            hidden
            w-full

            md:mt-12
            md:block
          "
        >
        </motion.div>
      </div>

      {/* =====================================================
          AI ASSISTANT
          ====================================================== */}
          <VehicleSearchBar />
      <AiAssistant />
    </section>
  );
}