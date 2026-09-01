"use client";

import { motion, useReducedMotion } from "framer-motion";


const EASE = [0.22, 1, 0.36, 1] as const;

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
        rounded-t-[18px]
        bg-[#07101a]

        sm:rounded-t-[22px]
        lg:rounded-t-[32px]
      "
    >
      {/* =====================================================
          HERO VIDEO
          Same video now plays on mobile too — muted/looped/
          inline + preload metadata keeps it autoplay-safe on
          iOS/Android. Poster matches the old desktop still so
          first paint looks identical while it loads.
      ====================================================== */}
      <motion.video
        initial={reduceMotion ? false : { scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: EASE }}
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      >
        <source src="/images/demo-video.mp4" type="video/mp4" />
      </motion.video>
      {/* subtle chrome glow behind heading — dimmed so it reads
          as ambient light, not a competing animated element */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[220px]
          h-[360px]
          w-[520px]
          rounded-full
       
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
          top-0

          h-[590px]
          w-full

          md:hidden
        "
        style={{
          background:
            "radial-gradient(ellipse at 17% 38%, rgba(2,8,14,0.92) 0%, rgba(2,8,14,0.74) 27%, rgba(2,8,14,0.38) 48%, rgba(2,8,14,0.14) 67%, transparent 84%)",
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
            "linear-gradient(180deg, rgba(2,8,14,0.28) 0%, transparent 30%, transparent 67%, rgba(2,8,14,0.48) 100%)",
        }}
      />

      {/* =====================================================
          DESKTOP TEXT SHADE
          Wider and stronger than before — a moving video needs
          a more reliable scrim than a static photo does, so text
          stays legible no matter what's playing behind it.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          left-0
          top-0

          hidden
          h-full
          w-[1000px]

          md:block
        "
        style={{
          background:
            "linear-gradient(105deg, rgba(2,8,14,0.82) 0%, rgba(2,8,14,0.62) 32%, rgba(2,8,14,0.32) 55%, rgba(2,8,14,0.08) 75%, transparent 88%)",
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
            "linear-gradient(0deg, rgba(2,8,14,0.55) 0%, rgba(2,8,14,0.18) 52%, transparent 100%)",
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
          from-black/30
          to-transparent

          md:h-[130px]
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

          px-6
          pb-8
          pt-[150px]

          sm:px-9
          sm:pb-9
          sm:pt-[145px]

          md:px-11
          md:pb-7
          md:pt-[160px]

          lg:px-14
          lg:pt-[172px]

          xl:px-16

          2xl:px-20
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
            ease: EASE,
          }}
          className="
            mt-[6vh]

            max-w-[350px]

            sm:mt-[7vh]
            sm:max-w-[540px]

            md:mt-[10vh]
            md:max-w-[720px]

            lg:mt-[12vh]
            lg:max-w-[790px]

            xl:mt-[13vh]
            xl:max-w-[850px]
          "
        >
          {/* =================================================
              LUXURY LABEL
          ================================================== */}
          <div
            className="
              mb-6

              flex
              items-center
              gap-3

              sm:mb-8
              sm:gap-4

              md:mb-9
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

              drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]

              min-[380px]:text-[46px]

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
              mt-7
              max-w-[330px]

              font-[var(--font-body)]

              text-[13px]
              font-normal
              leading-[1.65]

              text-white/78

              drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)]

              min-[380px]:text-[14px]

              sm:mt-8
              sm:max-w-[430px]
              sm:text-[15px]

              md:mt-9
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
              Solid fill + a defined border on the secondary gives
              both a real physical presence against moving footage,
              instead of relying on blur alone to separate them
              from the background.
          ================================================== */}
          <div
            className="
              mt-9

              grid
              w-full
              max-w-[380px]
              grid-cols-1
              gap-4

              sm:mt-10
              sm:max-w-[430px]
              sm:gap-4

              md:mt-11
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

                shadow-[0_10px_30px_rgba(21,143,243,0.35)]

                transition-all
                duration-200

                hover:bg-[#2a9fff]
                hover:shadow-[0_14px_36px_rgba(21,143,243,0.45)]

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
                border-white/45

                bg-black/[0.22]

                px-5

                font-[var(--font-body)]

                text-[12px]
                font-semibold
                tracking-[0.01em]

                text-white

                backdrop-blur-[6px]

                transition-all
                duration-200

                hover:border-white/75
                hover:bg-white/[0.10]

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
            ease: EASE,
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


    </section>
  );
}