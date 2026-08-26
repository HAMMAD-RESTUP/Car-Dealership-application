"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="
        group
        flex
        cursor-pointer
        items-center
        gap-3

        sm:gap-4
      "
    >
      {/* =====================================================
          MONOGRAM
      ====================================================== */}

      <motion.div
        variants={{
          initial: {
            rotate: 0,
            scale: 1,
          },
          hover: {
            rotate: 3,
            scale: 1.03,
          },
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative

          flex
          h-[44px]
          w-[44px]

          shrink-0

          items-center
          justify-center

          sm:h-[48px]
          sm:w-[48px]

          lg:h-[50px]
          lg:w-[50px]
        "
      >
        {/* OUTER DIAMOND */}

        <motion.div
          variants={{
            initial: {
              rotate: 45,
            },
            hover: {
              rotate: 50,
            },
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-[3px]

            border
            border-[#CD777A]/75

            bg-black/[0.12]

            backdrop-blur-sm
          "
        />

        {/* INNER DIAMOND */}

        <div
          className="
            absolute
            inset-[8px]

            rotate-45

            border
            border-white/[0.12]

            bg-[#090909]/80
          "
        />

        {/* YM */}

        <motion.span
          variants={{
            initial: {
              y: 0,
            },
            hover: {
              y: -1,
            },
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            relative
            z-10

            font-heading

            text-[14px]
            font-semibold

            tracking-[-0.04em]

            text-[#F5F4F2]

            sm:text-[15px]
          "
        >
          YM
        </motion.span>

        {/* ACCENT DOT */}

        <motion.span
          variants={{
            initial: {
              opacity: 0.65,
              scale: 1,
            },
            hover: {
              opacity: 1,
              scale: 1.25,
            },
          }}
          className="
            absolute

            bottom-[1px]
            right-[1px]

            h-[4px]
            w-[4px]

            rounded-full

            bg-[#CD777A]

            shadow-[0_0_12px_rgba(205,119,122,0.7)]
          "
        />
      </motion.div>

      {/* =====================================================
          BRAND TEXT
      ====================================================== */}

      <div
        className="
          flex
          flex-col
          justify-center
        "
      >
        {/* MAIN NAME */}

        <div className="overflow-hidden">
          <motion.h1
            variants={{
              initial: {
                x: 0,
              },
              hover: {
                x: 2,
              },
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-heading

              text-[17px]
              font-medium

              uppercase

              leading-none

              tracking-[0.18em]

              text-[#F5F4F2]

              sm:text-[19px]

              lg:text-[20px]
            "
          >
            YM Motors
          </motion.h1>
        </div>

        {/* SUB LABEL */}

        <div
          className="
            mt-[7px]

            flex
            items-center
            gap-[9px]
          "
        >
          <motion.span
            variants={{
              initial: {
                width: 22,
              },
              hover: {
                width: 31,
              },
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              block
              h-px

              bg-[#CD777A]
            "
          />

          <p
            className="
              font-sans

              text-[7px]
              font-semibold

              uppercase

              leading-none

              tracking-[0.22em]

              text-white/45

              sm:text-[8px]
            "
          >
            UK & Europe
          </p>
        </div>
      </div>
    </motion.div>
  );
}