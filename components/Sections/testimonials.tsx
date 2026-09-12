"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const EASE = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    name: "James Harward",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    review:
      "Outstanding service from start to finish. The team were helpful, honest and made the whole process so easy.",
  },
  {
    name: "Sarah Lewwan",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    review:
      "Bought my Porsche 911 from YM Motors and couldn’t be happier. Beautiful car and fantastic experience.",
  },
  {
    name: "David Romeo",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
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
        bg-[#080B10]
        py-16
        sm:py-20
        lg:py-24
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

      {/* SUBTLE BLUE AMBIENCE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-220px]
          top-[8%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#00A8E8]/[0.035]
          blur-[160px]
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
          px-5
          sm:px-7
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            TOP HEADING
        ====================================================== */}
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
            mx-auto
            mb-10
            max-w-[760px]
            text-center
            sm:mb-12
            lg:mb-14
          "
        >
          <h2
            className="
              font-[var(--font-display)]
              text-[34px]
              font-semibold
              leading-[1.02]
              tracking-[-0.035em]
              text-white

              sm:text-[40px]
              md:text-[44px]
              lg:text-[48px]
              xl:text-[52px]
            "
          >
            Trusted by{" "}
            <span className="text-[#00A8E8]">
              Our Customers
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[580px]
              font-[var(--font-body)]
              text-[13px]
              leading-[1.75]
              text-white/45
              sm:text-[14px]
            "
          >
            Real feedback from customers who chose YM Motors for
            quality vehicles, straightforward service and a smooth
            buying experience.
          </p>
        </motion.div>

        {/* =====================================================
            REVIEW CARDS
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-5

            md:grid-cols-2

            lg:grid-cols-3
          "
        >
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
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
                margin: "-50px",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: EASE,
              }}
              className="
                group
                relative
                overflow-hidden

                rounded-[12px]

                border
                border-white/[0.08]

                bg-[linear-gradient(180deg,#0D131A_0%,#090E14_100%)]

                p-6

                transition-all
                duration-300

                hover:-translate-y-[3px]
                hover:border-white/[0.14]
              "
            >
              {/* TOP ACCENT */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  h-px
                  w-full

                  bg-gradient-to-r
                  from-transparent
                  via-[#00A8E8]/55
                  to-transparent

                  opacity-0
                  transition-opacity
                  duration-300

                  group-hover:opacity-100
                "
              />

              {/* CUSTOMER HEADER */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      h-[58px]
                      w-[58px]
                      shrink-0
                      overflow-hidden
                      rounded-full
                      border
                      border-white/[0.12]
                      bg-white/[0.04]
                    "
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>

                  <div className="min-w-0">
                    <h3
                      className="
                        truncate
                        font-[var(--font-body)]
                        text-[14px]
                        font-semibold
                        text-white
                      "
                    >
                      {item.name}
                    </h3>

                    <div
                      className="
                        mt-1.5
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <FcGoogle size={16} />

                      <span
                        className="
                          font-[var(--font-body)]
                          text-[10px]
                          font-medium
                          text-white/40
                        "
                      >
                        Google Review
                      </span>
                    </div>
                  </div>
                </div>

                <Quote
                  size={28}
                  strokeWidth={1.2}
                  className="
                    shrink-0
                    text-[#00A8E8]/55
                  "
                />
              </div>

              {/* STARS */}
              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-[5px]
                "
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                    strokeWidth={0}
                    className="text-[#F5B301]"
                  />
                ))}

                <span
                  className="
                    ml-2
                    font-[var(--font-body)]
                    text-[10px]
                    font-medium
                    text-white/30
                  "
                >
                  5.0
                </span>
              </div>

              {/* REVIEW */}
              <p
                className="
                  mt-5
                  min-h-[92px]
                  font-[var(--font-body)]
                  text-[14px]
                  leading-[1.8]
                  text-white/58
                "
              >
                “{item.review}”
              </p>

              {/* BOTTOM */}
              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/[0.07]
                  pt-4
                "
              >
                <span
                  className="
                    font-[var(--font-body)]
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.13em]
                    text-white/30
                  "
                >
                  Verified Customer
                </span>

                <span
                  className="
                    h-[6px]
                    w-[6px]
                    rounded-full
                    bg-[#00A8E8]
                  "
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}