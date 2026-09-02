"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function VideoSection() {
  const reduceMotion = useReducedMotion();

  const words = [
    { text: "IMPORTED", color: "text-white" },
    { text: "JAPANESE", color: "text-[#00A8E8]" },
    { text: "EXCELLENCE", color: "text-[#00A8E8]" },
  ];

  return (
    <section
      className="
        relative
        min-h-[680px]
        w-full
        overflow-hidden
        bg-[#0B0D0F]

        sm:min-h-[720px]
        lg:min-h-[780px]
      "
    >
      <motion.div
        initial={reduceMotion ? false : { scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: EASE }}
        className="
          absolute
          inset-0
          h-full
          w-full
        "
      >
        <Image
          src="/images/introduction-image.png"
          alt="YM Motors — Imported Japanese Vehicles"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      <div
        className="
          absolute
          inset-0
          z-10
          bg-black/45
        "
      />

      <div
        className="
          absolute
          inset-0
          z-10
          bg-[linear-gradient(180deg,rgba(11,13,15,.75),transparent_32%,transparent_68%,rgba(11,13,15,.9))]
        "
      />

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[680px]
          w-full
          max-w-[1500px]
          flex-col
          items-center
          justify-center

          px-5
          pb-16
          pt-28

          sm:min-h-[720px]
          sm:pt-32

          lg:min-h-[780px]
          lg:pt-36
        "
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center"
        >
          {/* EYEBROW LINE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 14,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              ease: EASE,
            }}
            className="
              mb-5

              flex
              items-center
              justify-center
              gap-3

              sm:mb-7
            "
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#00A8E8]/70 sm:w-12" />
            <span
              className="
                font-[var(--font-body)]
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.4em]
                text-white/55

                sm:text-[11px]
              "
            >
              Established Excellence
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#00A8E8]/70 sm:w-12" />
          </motion.div>

          {/* HEADLINE — JAPANESE IMPORT FOCUS (no repeat of Welcome section) */}
          <h2
            className="
              font-[var(--font-display)]
              text-[32px]
              font-bold
              uppercase
              leading-[1.05]
              tracking-[0.02em]

              drop-shadow-[0_20px_55px_rgba(0,0,0,0.95)]

              sm:text-[52px]
              sm:tracking-[0.03em]

              lg:text-[72px]

              xl:text-[82px]
            "
          >
            {words.map((word, index) => (
              <motion.span
                key={word.text}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 60,
                        scale: 0.92,
                        filter: "blur(12px)",
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.18,
                  ease: EASE,
                }}
                className={`
                  relative
                  inline-block
                  mr-3

                  sm:mr-5

                  ${
                    word.color === "text-white"
                      ? "text-white"
                      : "bg-gradient-to-b from-[#7fd4ff] via-[#129cff] to-[#0a6fc2] bg-clip-text text-transparent"
                  }
                `}
                style={
                  word.color === "text-white"
                    ? undefined
                    : {
                        filter:
                          "drop-shadow(0 0 28px rgba(18,156,255,0.45))",
                      }
                }
              >
                {word.text}
              </motion.span>
            ))}
          </h2>

          {/* JAPANESE IMPORT SPECIALIST — BUSINESS COPY */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            className="
              mx-auto

              mt-7

              max-w-[720px]

              font-[var(--font-body)]

              text-[15px]
              font-normal

              leading-[1.9]

              text-white/75

              drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]

              sm:mt-9
              sm:text-[17px]

              lg:text-[18px]
            "
          >
            Crawley&apos;s trusted specialist in premium, low-mileage{" "}
            <span className="font-semibold text-white">
              Japanese imported vehicles
            </span>
            . From carefully sourced JDM icons to hand-picked used cars, every
            vehicle is inspected, verified and prepared to the highest
            standard — bringing rare quality and reliability you won&apos;t
            find on the average forecourt.
          </motion.p>

          {/* STAT / TRUST STRIP */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
            className="
              mx-auto

              mt-10

              flex
              max-w-[640px]
              flex-wrap
              items-center
              justify-center

              gap-x-10
              gap-y-6

              sm:mt-12
            "
          >
            {[
              { value: "JDM", label: "Import Specialists" },
              { value: "100%", label: "Inspected & Verified" },
              { value: "Top Rated", label: "CarGuru Dealer" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="
                    font-[var(--font-display)]
                    text-[20px]
                    font-bold

                    text-[#00A8E8]

                    drop-shadow-[0_0_18px_rgba(0,168,232,0.4)]

                    sm:text-[24px]
                  "
                >
                  {stat.value}
                </p>
                <p
                  className="
                    mt-1

                    font-[var(--font-body)]
                    text-[10px]
                    font-medium
                    uppercase

                    tracking-[0.14em]

                    text-white/50

                    sm:text-[11px]
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            href="#stocklist"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}
            whileHover={{ y: -2 }}
            className="
              group

              mt-10

              inline-flex
              items-center
              gap-2.5

              rounded-[3px]

              border
              border-[#00A8E8]/50

              bg-white/[0.04]

              px-8
              py-4

              font-[var(--font-body)]
              text-[12px]
              font-semibold
              uppercase

              tracking-[0.1em]

              text-white

              backdrop-blur-md

              shadow-[0_8px_28px_rgba(0,0,0,0.25)]

              transition-all
              duration-300

              hover:border-[#00A8E8]
              hover:bg-[#00A8E8]/[0.12]
              hover:shadow-[0_12px_36px_rgba(0,168,232,0.3)]

              sm:mt-12
            "
          >
            Explore Our Japanese Imports
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}