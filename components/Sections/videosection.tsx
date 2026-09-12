"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  {
    value: "JDM",
    label: "Import Specialists",
  },
  {
    value: "100%",
    label: "Inspected & Verified",
  },
  {
    value: "Top Rated",
    label: "CarGurus Dealer",
  },
];

export default function VideoSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        min-h-[620px]
        w-full
        overflow-hidden
        bg-[#080B10]

        sm:min-h-[680px]
        lg:min-h-[740px]
      "
    >
      {/* BACKGROUND VIDEO */}
      <motion.video
        initial={
          reduceMotion
            ? false
            : {
                scale: 1.04,
              }
        }
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.8,
          ease: EASE,
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      >
        <source
          src="/images/demo-video.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* CINEMATIC OVERLAY */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[linear-gradient(180deg,rgba(3,6,10,0.58)_0%,rgba(3,6,10,0.28)_45%,rgba(3,6,10,0.76)_100%)]
        "
      />

      {/* SIDE SHADE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(5,8,12,0.02)_0%,rgba(5,8,12,0.18)_55%,rgba(5,8,12,0.42)_100%)]
        "
      />

      {/* BOTTOM BLEND */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0

          h-[230px]

          bg-gradient-to-t
          from-[#080B10]/90
          via-[#080B10]/40
          to-transparent
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          mx-auto

          flex

          min-h-[620px]
          w-full
          max-w-[1500px]

          px-5
          pb-8
          pt-20

          sm:min-h-[680px]
          sm:px-8
          sm:pb-10
          sm:pt-24

          lg:min-h-[740px]
          lg:px-12
          lg:pb-12
          lg:pt-28
        "
      >
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.85,
            ease: EASE,
          }}
          className="
            mx-auto

            flex
            min-h-0
            w-full
            max-w-[920px]
            flex-1
            flex-col

            text-center
          "
        >
          {/* TOP CONTENT */}
          <div>
            <h2
              className="
                font-[var(--font-display)]

                text-[36px]
                font-semibold

                leading-[1.02]

                tracking-[-0.035em]

                text-white

                min-[380px]:text-[40px]

                sm:text-[48px]

                md:text-[54px]

                lg:text-[60px]

                xl:text-[66px]
              "
            >
              Imported Japanese{" "}
              <span className="text-[#00A8E8]">
                Excellence
              </span>
            </h2>

            <p
              className="
                mx-auto

                mt-6

                max-w-[680px]

                font-[var(--font-body)]

                text-[14px]
                font-normal

                leading-[1.8]

                text-white/70

                sm:mt-7
                sm:text-[16px]

                lg:text-[17px]
              "
            >
              Low-mileage Japanese vehicles, carefully sourced,
              inspected and prepared to deliver the quality,
              reliability and specification discerning buyers expect.
            </p>
          </div>

          {/* PUSHES STATS + BUTTON TO BOTTOM */}
          <div className="flex-1" />

          {/* BOTTOM CONTENT */}
          <div
            className="
              mt-12

              sm:mt-14
              lg:mt-16
            "
          >
            {/* TRANSPARENT STATS BAR */}
            <div
              className="
                mx-auto

                grid
                max-w-[720px]
                grid-cols-1

                overflow-hidden

                border
                border-white/[0.14]

                bg-black/[0.16]

                backdrop-blur-[8px]

                sm:grid-cols-3
              "
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    px-5
                    py-4

                    text-center

                    sm:px-6
                    sm:py-5

                    ${
                      index !== stats.length - 1
                        ? "border-b border-white/[0.09] sm:border-b-0 sm:border-r"
                        : ""
                    }
                  `}
                >
                  <p
                    className="
                      font-[var(--font-display)]

                      text-[18px]
                      font-semibold

                      text-white

                      sm:text-[20px]
                      lg:text-[21px]
                    "
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      mt-1.5

                      font-[var(--font-body)]

                      text-[9px]
                      font-medium
                      uppercase

                      tracking-[0.14em]

                      text-white/45

                      sm:text-[10px]
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#stocklist"
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
                mt-5

                inline-flex
                min-h-[50px]

                items-center
                justify-center

                border
                border-white/35

                bg-transparent

                px-8

                font-[var(--font-body)]

                text-[11px]
                font-semibold
                uppercase

                tracking-[0.11em]

                text-white

                backdrop-blur-[4px]

                transition-all
                duration-300

                hover:border-[#00A8E8]
                hover:bg-[#00A8E8]

                sm:text-[12px]
              "
            >
              Explore Japanese Imports
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}