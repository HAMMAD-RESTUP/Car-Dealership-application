"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function VideoSection() {
  const reduceMotion = useReducedMotion();

  const words = [
    { text: "WELCOME", color: "text-white" },
    { text: "TO", color: "text-white" },
    { text: "YM", color: "text-[#00A8E8]" },
    { text: "MOTORS", color: "text-[#00A8E8]" },
    { text: "LTD", color: "text-[#00A8E8]" },
  ];

  return (
    <section
      className="
        relative
        min-h-[600px]
        w-full
        overflow-hidden
        bg-[#0B0D0F]

        sm:min-h-[640px]
        lg:min-h-[700px]
      "
    >
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

      <div
        className="
          absolute
          inset-0
          z-10
          bg-black/40
        "
      />

      <div
        className="
          absolute
          inset-0
          z-10
          bg-[linear-gradient(180deg,rgba(11,13,15,.7),transparent_35%,transparent_70%,rgba(11,13,15,.8))]
        "
      />

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[600px]
          w-full
          max-w-[1500px]
          justify-center

          px-5
          pt-28

          sm:min-h-[640px]
          sm:pt-36

          lg:min-h-[700px]
          lg:pt-40
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

          <h2
            className="
              font-[var(--font-display)]
              text-[36px]
              font-bold
              uppercase
              leading-[1.05]
              tracking-[0.02em]

              drop-shadow-[0_20px_55px_rgba(0,0,0,0.95)]

              sm:text-[58px]
              sm:tracking-[0.03em]

              lg:text-[80px]

              xl:text-[92px]
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


        </motion.div>
      </div>
    </section>
  );
}