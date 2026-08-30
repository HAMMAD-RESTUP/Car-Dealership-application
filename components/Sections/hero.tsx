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
        src="/images/home-mobile-hero.png"
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
          DESKTOP VIDEO
      ====================================================== */}
      {!reduceMotion ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/home-desktop-hero.png"
          className="
            absolute
            inset-0
            hidden
            h-full
            w-full
            object-cover
            object-center
            md:block
          "
        >
          <source
            src="/images/cinematic-vieo.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <img
          src="/images/desktop-mock.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            hidden
            h-full
            w-full
            object-cover
            object-center
            md:block
          "
        />
      )}

      {/* =====================================================
          GENERAL DARK TONE
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
          h-[620px]
          w-full
          md:hidden
        "
        style={{
          background:
            "radial-gradient(ellipse at 17% 38%, rgba(2,8,14,0.80) 0%, rgba(2,8,14,0.60) 28%, rgba(2,8,14,0.35) 49%, rgba(2,8,14,0.12) 68%, transparent 85%)",
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
          top-[120px]
          hidden
          h-[580px]
          w-[900px]
          md:block
        "
        style={{
          background:
            "radial-gradient(ellipse at 18% 48%, rgba(2,8,14,0.52) 0%, rgba(2,8,14,0.37) 28%, rgba(2,8,14,0.21) 48%, rgba(2,8,14,0.08) 65%, transparent 80%)",
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
            mt-[4vh]
            w-full
            max-w-[390px]

            min-[380px]:mt-[5vh]

            sm:mt-[6vh]
            sm:max-w-[560px]

            md:mt-[8vh]
            md:max-w-[730px]

            lg:mt-[9vh]
            lg:max-w-[820px]

            xl:mt-[10vh]
            xl:max-w-[900px]
          "
        >
          {/* =================================================
              JAPANESE IMPORT LABEL
          ================================================== */}
          <div
            className="
              mb-6
              flex
              items-center
              gap-2.5

              min-[380px]:gap-3

              sm:mb-7
              sm:gap-4

              md:mb-8
            "
          >
            <span
              className="
                h-px
                w-7
                shrink-0

                bg-gradient-to-r
                from-white
                via-[#bdc3c7]
                to-transparent

                opacity-90

                min-[380px]:w-8
                sm:w-10
                md:w-12
                lg:w-14
              "
            />

            <span
              className="
                whitespace-nowrap

                font-[var(--font-body)]

                text-[14px]
                font-semibold
                uppercase
                leading-none
                tracking-[0.08em]

                bg-clip-text
                text-transparent

                min-[380px]:text-[15px]
                min-[380px]:tracking-[0.10em]

                sm:text-[18px]
                sm:tracking-[0.12em]

                md:text-[20px]
                md:tracking-[0.13em]

                lg:text-[22px]
                lg:tracking-[0.14em]

                xl:text-[24px]
              "
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #ffffff 0%, #f5f6f7 20%, #c4c9cd 48%, #ffffff 68%, #abb1b6 100%)",
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

              text-[44px]
              font-semibold
              leading-[0.92]
              tracking-[-0.04em]

              text-white

              min-[360px]:text-[48px]
              min-[400px]:text-[52px]

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
    mt-10
    max-w-[350px]

    font-[var(--font-body)]
    text-[13px]
    font-normal
    leading-[1.7]
    text-white/75

    min-[380px]:mt-11
    min-[380px]:max-w-[370px]
    min-[380px]:text-[14px]

    sm:mt-12
    sm:max-w-[450px]
    sm:text-[15px]

    md:mt-14
    md:max-w-[510px]
    md:text-[16px]

    lg:mt-16
    lg:max-w-[540px]

    xl:mt-[72px]
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
              max-w-[390px]
              grid-cols-2
              gap-3

              sm:mt-8
              sm:max-w-[450px]
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

                px-4

                font-[var(--font-body)]

                text-[12px]
                font-semibold
                tracking-[0.01em]

                text-white

                shadow-[0_10px_28px_rgba(21,143,243,0.22)]

                transition-all
                duration-200

                hover:bg-[#2a9fff]
                hover:shadow-[0_12px_32px_rgba(21,143,243,0.28)]

                min-[380px]:min-h-[52px]
                min-[380px]:text-[13px]

                sm:min-h-[56px]
                sm:px-8
                sm:text-[14px]

                md:min-h-[58px]
                md:min-w-[175px]
                md:px-9
                md:text-[15px]

                lg:min-w-[185px]
                lg:text-[16px]
              "
            >
              Browse Stock
            </motion.a>

            {/* SELL YOUR CAR */}
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

                bg-black/[0.15]

                px-4

                font-[var(--font-body)]

                text-[12px]
                font-semibold
                tracking-[0.01em]

                text-white

                backdrop-blur-[4px]

                transition-all
                duration-200

                hover:border-white/65
                hover:bg-white/[0.09]

                min-[380px]:min-h-[52px]
                min-[380px]:text-[13px]

                sm:min-h-[56px]
                sm:px-8
                sm:text-[14px]

                md:min-h-[58px]
                md:min-w-[175px]
                md:px-9
                md:text-[15px]

                lg:min-w-[185px]
                lg:text-[16px]
              "
            >
              Sell your car
            </motion.a>
          </div>
        </motion.div>

        {/* =====================================================
            FLEX SPACE
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
          <VehicleSearchBar />
        </motion.div>
      </div>

      {/* =====================================================
          AI ASSISTANT
      ====================================================== */}
      <AiAssistant />
    </section>
  );
}