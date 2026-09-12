"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    title: "Current Stock",
    image: "/images/current-stock.jpg",
    href: "/used-vehicles",
  },
  {
    title: "Sell Your Car",
    image: "/images/sell-your-car.jpg",
    href: "#sell-your-car",
  },
  {
    title: "Finance",
    image: "/images/finance-card.jpg",
    href: "#finance",
  },
  {
    title: "News & Events",
    image: "/images/news-events.jpg",
    href: "#news",
  },
];

export default function CustomerJourney() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#080B10]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(180deg,#080B10_0%,#0D1218_50%,#080B10_100%)]
        "
      />

      {/* TOP LINE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-[72%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/[0.10]
          to-transparent
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1720px]
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        {/* HEADING */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="
            mb-9
            text-center
            sm:mb-11
            lg:mb-12
          "
        >
          <h2
            className="
              font-[var(--font-display)]
              text-[34px]
              font-semibold
              leading-[1]
              tracking-[-0.035em]
              text-white

              sm:text-[40px]
              md:text-[46px]
              lg:text-[50px]
            "
          >
            Explore{" "}
            <span className="text-[#00A8E8]">
              YM Motors
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[560px]
              font-[var(--font-body)]
              text-[13px]
              leading-[1.7]
              text-white/45
              sm:text-[14px]
            "
          >
            Everything you need, from finding your next car to finance,
            selling your vehicle and staying up to date.
          </p>
        </motion.div>

        {/* =====================================================
            IMAGE CARDS
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2

            lg:grid-cols-4
            lg:gap-5
          "
        >
          {cards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
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
                margin: "-40px",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease: EASE,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                    }
              }
              className="
                group
                relative
                block

                h-[420px]

                overflow-hidden

                border
                border-white/[0.08]

                sm:h-[460px]

                lg:h-[500px]

                xl:h-[540px]
              "
            >
              {/* IMAGE */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  25vw
                "
                className="
                  object-cover
                  object-center

                  transition-transform
                  duration-[900ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:scale-[1.045]
                "
              />

              {/* DARK OVERLAY */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-[linear-gradient(180deg,rgba(4,7,10,0.12)_0%,rgba(4,7,10,0.15)_38%,rgba(4,7,10,0.88)_100%)]

                  transition-all
                  duration-500

                  group-hover:bg-[linear-gradient(180deg,rgba(4,7,10,0.08)_0%,rgba(4,7,10,0.12)_35%,rgba(4,7,10,0.82)_100%)]
                "
              />

              {/* SUBTLE BORDER LIGHT */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  border
                  border-white/[0.02]

                  transition-colors
                  duration-300

                  group-hover:border-[#00A8E8]/25
                "
              />

              {/* BOTTOM CONTENT */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-10

                  px-5
                  pb-6

                  sm:px-6
                  sm:pb-7
                "
              >
                {/* TOP LINE */}
                <span
                  className="
                    mb-5
                    block
                    h-px
                    w-full

                    bg-white/55

                    transition-colors
                    duration-300

                    group-hover:bg-[#00A8E8]/75
                  "
                />

                {/* TITLE */}
                <div
                  className="
                    flex
                    items-end
                    justify-between
                    gap-4
                  "
                >
                  <h3
                    className="
                      max-w-[220px]

                      font-[var(--font-display)]

                      text-[20px]
                      font-semibold
                      uppercase

                      leading-[1.08]

                      tracking-[0.16em]

                      text-white

                      sm:text-[22px]

                      lg:text-[20px]

                      xl:text-[22px]
                    "
                  >
                    {card.title}
                  </h3>

                  <ArrowUpRight
                    size={21}
                    strokeWidth={1.45}
                    className="
                      shrink-0
                      text-white/55

                      transition-all
                      duration-300

                      group-hover:-translate-y-[3px]
                      group-hover:translate-x-[3px]
                      group-hover:text-[#00A8E8]
                    "
                  />
                </div>

                {/* BOTTOM LINE */}
                <span
                  className="
                    mt-5
                    block
                    h-px
                    w-full

                    bg-white/35
                  "
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}