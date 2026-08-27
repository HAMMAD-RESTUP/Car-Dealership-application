"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const ease = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    name: "James H.",
    review:
      "Outstanding service from start to finish. The team were helpful, honest and made the whole process so easy.",
  },
  {
    name: "Sarah L.",
    review:
      "Bought my Porsche 911 from YM Motors and couldn’t be happier. Beautiful car and fantastic experience.",
  },
  {
    name: "David R.",
    review:
      "Great selection of cars and very transparent service. Professional, friendly and highly recommended.",
  },
];

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#090A0C]

        py-20

        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[linear-gradient(180deg,#090A0C_0%,#0D0E10_48%,#090A0C_100%)]
        "
      />

      {/* RED AMBIENCE */}

      <div
        className="
          pointer-events-none
          absolute

          right-[-180px]
          top-[12%]

          h-[430px]
          w-[430px]

          rounded-full

          bg-[#E5484D]/[0.045]

          blur-[145px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          bottom-[-180px]
          left-[-180px]

          h-[380px]
          w-[380px]

          rounded-full

          bg-[#E5484D]/[0.025]

          blur-[140px]
        "
      />

      {/* =====================================================
          WRAPPER
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          w-full
          max-w-[1720px]

          px-5

          sm:px-7
          md:px-9
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        <div
          className="
            grid

            gap-10

            lg:grid-cols-[0.85fr_2.15fr]
            lg:items-start
            lg:gap-12

            xl:grid-cols-[0.75fr_2.25fr]
            xl:gap-16
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {
                    opacity: 0,
                    x: -28,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
          >
            {/* EYEBROW */}

            <div
              className="
                mb-4

                flex
                items-center

                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-8

                  bg-[#E5484D]

                  shadow-[0_0_8px_rgba(229,72,77,0.25)]
                "
              />

              <span
                className="
                  font-sans

                  text-[9px]
                  font-semibold
                  uppercase

                  tracking-[0.16em]

                  text-[#E5484D]/85
                "
              >
                What Our Customers Say
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                max-w-[430px]

                font-heading

                text-[34px]
                font-bold

                leading-[0.98]

                tracking-[-0.045em]

                text-[#F4F2EE]

                sm:text-[40px]

                lg:text-[44px]

                xl:text-[48px]
              "
            >
              Trusted by Drivers
              <br />

              <span className="text-[#E5484D]">
                Across Surrey
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-5

                max-w-[360px]

                font-sans

                text-[12px]
                font-normal

                leading-[1.7]

                text-white/40

                sm:text-[13px]
              "
            >
              Real experiences from customers who chose YM Motors for
              quality vehicles, trusted service and a smooth buying
              experience.
            </p>
          </motion.div>

          {/* =====================================================
              TESTIMONIAL CARDS
          ====================================================== */}

          <div
            className="
              grid

              grid-cols-1

              gap-4

              md:grid-cols-3
            "
          >
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                initial={
                  reduceMotion
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        y: 28,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.65,
                  delay: reduceMotion ? 0 : index * 0.09,
                  ease,
                }}
                className="
                  group
                  relative

                  min-h-[230px]

                  overflow-hidden

                  rounded-[16px]

                  border
                  border-white/[0.09]

                  bg-white/[0.035]

                  p-5

                  shadow-[0_14px_45px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.045)]

                  backdrop-blur-[18px]
                  backdrop-saturate-[140%]

                  transition-all
                  duration-500

                  hover:-translate-y-[4px]

                  hover:border-[#E5484D]/40

                  hover:bg-white/[0.055]

                  hover:shadow-[0_22px_55px_rgba(0,0,0,0.26),0_0_24px_rgba(229,72,77,0.055)]
                "
              >
                {/* GLASS HIGHLIGHT */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0

                    h-[45%]

                    bg-gradient-to-b
                    from-white/[0.04]
                    to-transparent
                  "
                />

                {/* RED HOVER LINE */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0

                    h-px
                    w-0

                    bg-[#E5484D]

                    shadow-[0_0_9px_rgba(229,72,77,0.35)]

                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />

                <div
                  className="
                    relative
                    z-10

                    flex
                    h-full
                    flex-col
                  "
                >
                  {/* TOP ICONS */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    {/* QUOTE */}

                    <div
                      className="
                        flex
                        h-9
                        w-9

                        items-center
                        justify-center

                        rounded-[10px]

                        border
                        border-[#E5484D]/25

                        bg-[#E5484D]/[0.06]

                        text-[#E5484D]
                      "
                    >
                      <Quote
                        strokeWidth={1.4}
                        className="
                          h-[17px]
                          w-[17px]
                        "
                      />
                    </div>

                    {/* GOOGLE */}

                    <div
                      className="
                        flex
                        h-9
                        w-9

                        items-center
                        justify-center

                        rounded-full

                        bg-white

                        shadow-[0_4px_14px_rgba(0,0,0,0.20)]
                      "
                    >
                      <FcGoogle
                        className="
                          h-[18px]
                          w-[18px]
                        "
                      />
                    </div>
                  </div>

                  {/* REVIEW */}

                  <p
                    className="
                      mt-5

                      flex-1

                      font-sans

                      text-[12px]
                      font-normal

                      leading-[1.7]

                      text-white/58

                      lg:text-[11px]

                      xl:text-[12px]
                    "
                  >
                    “{item.review}”
                  </p>

                  {/* FOOTER */}

                  <div
                    className="
                      mt-6

                      flex
                      items-end
                      justify-between

                      gap-4
                    "
                  >
                    {/* CUSTOMER */}

                    <div>
                      <span
                        className="
                          block

                          font-sans

                          text-[11px]
                          font-semibold

                          text-white/85
                        "
                      >
                        {item.name}
                      </span>

                      <span
                        className="
                          mt-[2px]

                          block

                          font-sans

                          text-[8px]
                          font-medium

                          tracking-[0.03em]

                          text-white/28
                        "
                      >
                        Google Review
                      </span>
                    </div>

                    {/* YELLOW STARS */}

                    <div
                      className="
                        flex
                        items-center

                        gap-[3px]
                      "
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          fill="currentColor"
                          strokeWidth={0}
                          className="
                            h-[12px]
                            w-[12px]

                            text-[#F5B301]

                            drop-shadow-[0_0_4px_rgba(245,179,1,0.20)]
                          "
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}