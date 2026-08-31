"use client";

import { motion, useReducedMotion } from "framer-motion";
import AiAssistant from "../Layout/AIchatboard/AI-Assistant";
import VehicleSearchBar from "./VehicleSearchBar";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/* Stagger container for the hero text block: label -> heading -> copy -> buttons */
const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

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
        bg-[#0b0e13]
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
          DESKTOP VIDEO
      ====================================================== */}
      {!reduceMotion ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-image.png"
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
          <source src="/images/cinematic-video.mp4" type="video/mp4" />
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
          BASE DARKENING PASS (Obsidian, not neutral black)
          Enough to guarantee legibility on any footage, before
          the stronger local scrim behind the text block.
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[#0b0e13]/35

          md:bg-[#0b0e13]/28
        "
      />

      {/* =====================================================
          MOBILE TEXT SHADE (stronger, tighter around the text)
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
            "radial-gradient(ellipse at 17% 38%, rgba(11,14,19,0.92) 0%, rgba(11,14,19,0.78) 30%, rgba(11,14,19,0.5) 52%, rgba(11,14,19,0.2) 72%, transparent 88%)",
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
            "linear-gradient(180deg, rgba(11,14,19,0.4) 0%, transparent 34%, transparent 64%, rgba(11,14,19,0.6) 100%)",
        }}
      />

      {/* =====================================================
          DESKTOP TEXT SHADE (widened + darkened so white text
          and the CTA row always sit on a controlled surface)
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          left-0
          top-[95px]

          hidden
          h-[620px]
          w-[1000px]

          md:block
        "
        style={{
          background:
            "radial-gradient(ellipse at 16% 46%, rgba(11,14,19,0.82) 0%, rgba(11,14,19,0.62) 30%, rgba(11,14,19,0.38) 52%, rgba(11,14,19,0.14) 70%, transparent 85%)",
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

          h-[32%]
        "
        style={{
          background:
            "linear-gradient(0deg, rgba(11,14,19,0.65) 0%, rgba(11,14,19,0.22) 52%, transparent 100%)",
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
          from-black/35
          to-transparent

          md:h-[120px]
          md:from-black/28
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
            HERO TEXT (staggered: label -> heading -> copy -> CTAs)
        ================================================== */}
        <motion.div
          variants={reduceMotion ? undefined : heroContainer}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "show"}
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
          <motion.div
            variants={fadeUp}
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
                font-semibold
                uppercase
                leading-none
                tracking-[0.14em]

                bg-clip-text
                text-transparent

                drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]

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
          </motion.div>

          {/* =================================================
              MAIN HEADING
              Cormorant Garamond, SemiBold 600 (max weight in use),
              minus-one-percent tracking per brand guideline.
          ================================================== */}
          <motion.h1
            variants={fadeUp}
            className="
              font-[var(--font-display)]

              text-[48px]
              font-semibold
              leading-[0.92]
              tracking-[-0.01em]

              text-white

              drop-shadow-[0_4px_20px_rgba(0,0,0,0.65)]

              min-[380px]:text-[52px]

              sm:text-[62px]

              md:text-[72px]

              lg:text-[82px]

              xl:text-[90px]

              2xl:text-[96px]
            "
          >
            <span className="text-[#f5f5f3]">Fewer kilometres.</span>

            <br />

            {/* Signal Blue, exact brand hex */}
            <span className="text-[#00A8E8]">Better cars.</span>
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}
          <motion.p
            variants={fadeUp}
            className="
              mt-5
              max-w-[350px]

              font-[var(--font-body)]

              text-[13px]
              font-normal
              leading-[1.65]

              text-white/85

              drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]

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
            Low mileage Japanese vehicles, sourced at auction, graded on
            arrival and supplied with full documentation. Every car we
            import can be checked before you commit to it.
          </motion.p>

          {/* =================================================
              BUTTONS
              Signal Blue fill, white Inter SemiBold, uppercase,
              +12% tracking, 14px minimum (contrast rule for
              white-on-Signal-Blue requires 14pt+ semibold).
          ================================================== */}
          <motion.div
            variants={fadeUp}
            className="
              mt-7

              grid
              w-full
              max-w-[380px]
              grid-cols-2
              gap-3

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
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -2,
                      boxShadow: "0 14px 34px rgba(0,168,232,0.38)",
                    }
              }
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="
                inline-flex

                min-h-[50px]

                items-center
                justify-center

                rounded-[4px]

                bg-[#00A8E8]

                px-5

                font-[var(--font-body)]

                text-[14px]
                font-semibold
                uppercase
                tracking-[0.12em]

                text-white

                shadow-[0_10px_28px_rgba(0,168,232,0.28)]

                transition-colors
                duration-200

                hover:bg-[#1fb4f2]

                sm:min-h-[54px]
                sm:px-8

                md:min-h-[56px]
                md:min-w-[175px]
                md:px-9

                lg:min-w-[185px]
              "
            >
              Browse Stock
            </motion.a>

            {/* SELL CAR */}
            <motion.a
              href="#contact"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -2,
                      borderColor: "rgba(255,255,255,0.75)",
                    }
              }
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="
                inline-flex

                min-h-[50px]

                items-center
                justify-center

                rounded-[4px]

                border
                border-white/40

                bg-black/[0.28]

                px-5

                font-[var(--font-body)]

                text-[14px]
                font-semibold
                uppercase
                tracking-[0.12em]

                text-white

                backdrop-blur-[4px]

                transition-colors
                duration-200

                hover:bg-white/[0.1]

                sm:min-h-[54px]
                sm:px-8

                md:min-h-[56px]
                md:min-w-[175px]
                md:px-9

                lg:min-w-[185px]
              "
            >
              Sell your car
            </motion.a>
          </motion.div>
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
            delay: 0.55,
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