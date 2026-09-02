"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const words = [
  { text: "WELCOME", color: "text-white" },
  { text: "TO", color: "text-white" },
  { text: "YM", color: "text-[#00A8E8]" },
  { text: "MOTORS", color: "text-[#00A8E8]" },
  { text: "LTD", color: "text-[#00A8E8]" },
];

export default function Welcome() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#0B0D0F]
      "
    >
      {/* BACKGROUND AMBIENCE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[linear-gradient(180deg,#0B0D0F_0%,#11161D_50%,#0B0D0F_100%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          right-[-220px]
          top-[10%]

          h-[420px]
          w-[420px]

          rounded-full

          bg-[#00A8E8]/[0.05]

          blur-[150px]
        "
      />

      <div
        className="
          relative
          z-10

          grid
          grid-cols-1

          lg:grid-cols-2
        "
      >
        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="
            relative

            h-[380px]

            sm:h-[460px]

            lg:h-auto
          "
        >
          <Image
            src="/images/welcome.png"
            alt="YM Motors — Premium Vehicle"
            fill
            className="object-cover"
            priority
          />

          {/* subtle dark overlay to blend with theme */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-gradient-to-r
              from-[#0B0D0F]/10
              via-transparent
              to-[#0B0D0F]/40
            "
          />

          {/* blue edge accent where image meets text */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0

              hidden
              w-px

              bg-gradient-to-b
              from-transparent
              via-[#00A8E8]/50
              to-transparent

              shadow-[0_0_12px_rgba(0,168,232,0.25)]

              lg:block
            "
          />
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="
            flex
            flex-col
            justify-center

            px-6
            py-14

            sm:px-10
            sm:py-16

            md:px-14

            lg:px-16
            lg:py-20

            xl:px-20
          "
        >
    
          {/* HEADING */}
          <h2
            className="
              max-w-[600px]

              font-heading

              text-[32px]
              font-bold

              uppercase

              leading-[1.15]

              tracking-[-0.02em]

              sm:text-[40px]

              lg:text-[46px]
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

          <span
            className="
              mt-6
              mb-8

              h-[3px]
              w-16

              bg-[#00A8E8]

              shadow-[0_0_10px_rgba(0,168,232,0.35)]
            "
          />

          {/* INTRO LINES */}
          <p
            className="
              font-sans
              text-[15px]
              font-semibold

              leading-[1.8]

              text-white/90
            "
          >
            YM Motors — Great Deals on Premium Cars in Crawley
          </p>

          <p
            className="
              mt-3

              font-sans
              text-[15px]
              font-semibold

              leading-[1.8]

              text-white/90
            "
          >
            We&apos;re proud to be recognised as a Car Guru&apos;s Top Rated
            Dealer in 2021, 2022, 2023 &amp; 2024!
          </p>

          {/* BODY COPY */}
          <div
            className="
              mt-6

              space-y-5

              font-sans
              text-[15px]
              font-normal

              leading-[1.9]

              text-white/70
            "
          >
            <p>
              If you are looking for great savings on quality used cars in
              the Crawley area, you have reached the right place.
            </p>

            <p>
              YM Motors is a specialist used car dealer offering competitive
              pricing and a carefully selected range of vehicles to suit most
              budgets and lifestyles. We also specialise in sourcing low
              mileage Japanese imported vehicles, chosen for their quality
              and reliability. Our expertise in Japanese imports allows us to
              offer unique and high-quality vehicles that stand out from the
              crowd.
            </p>

            <p>
              We realise that buying a car can be a daunting experience, but
              don&apos;t worry — we are well established within the Crawley
              area and have built our reputation on trust, transparency and
              exceptional customer service from first enquiry to final
              handover.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#stock"
            className="
              group
              relative

              mt-9

              inline-flex
              w-max

              items-center
              gap-2.5

              border
              border-[#00A8E8]/50

              bg-[#00A8E8]/[0.08]

              px-7
              py-3.5

              font-sans
              text-[12px]
              font-semibold
              uppercase

              tracking-[0.08em]

              text-[#00A8E8]

              transition-all
              duration-300

              hover:bg-[#00A8E8]
              hover:text-white

              hover:shadow-[0_10px_30px_rgba(0,168,232,0.25)]
            "
          >
            View Our Stock
          </a>
        </motion.div>
      </div>
    </section>
  );
}