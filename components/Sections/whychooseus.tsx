"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Landmark,
  Repeat2,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Approved Cars",
    desc: "Every car is handpicked and rigorously inspected to ensure premium quality and reliability.",
  },
  {
    icon: Landmark,
    title: "Flexible Finance Options",
    desc: "Competitive rates and tailored finance solutions designed around your budget and lifestyle.",
  },
  {
    icon: Repeat2,
    title: "Part Exchange Welcome",
    desc: "We offer fair, competitive valuations and make upgrading your car simple and hassle-free.",
  },
  {
    icon: BadgeCheck,
    title: "Warranty & Peace of Mind",
    desc: "All vehicles come with warranty options and reliable support for complete peace of mind.",
  },
];

const financePoints = [
  {
    title: "Competitive APR",
    desc: "Low rates on all finance plans",
  },
  {
    title: "Quick & Easy Approval",
    desc: "Get approved in minutes",
  },
  {
    title: "Tailored to You",
    desc: "Plans that fit your budget",
  },
];

export default function WhyChooseUs() {
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
      {/* BACKGROUND */}

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

          right-[-220px]
          top-[15%]

          h-[520px]
          w-[520px]

          rounded-full

          bg-[#E5484D]/[0.045]

          blur-[155px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          bottom-[-220px]
          left-[-180px]

          h-[450px]
          w-[450px]

          rounded-full

          bg-[#E5484D]/[0.025]

          blur-[150px]
        "
      />

      {/* WRAPPER */}

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
        {/* SECTION HEADER */}

        <motion.div
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
            duration: 0.75,
            ease,
          }}
          className="
            mb-10

            sm:mb-12
          "
        >
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

                shadow-[0_0_8px_rgba(229,72,77,0.24)]
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
              Why Choose YM Motors
            </span>
          </div>

          <h2
            className="
              font-heading

              text-[34px]
              font-bold

              leading-[0.98]

              tracking-[-0.045em]

              text-[#F4F2EE]

              sm:text-[40px]
              md:text-[46px]
              lg:text-[52px]
            "
          >
            Driven by Trust.
            <span className="text-[#E5484D]">
              {" "}
              Built on Quality.
            </span>
          </h2>
        </motion.div>

        {/* TOP FEATURE CARDS */}

        <div
          className="
            grid
            grid-cols-1

            gap-4

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease,
                }}
                className="
                  group
                  relative

                  min-h-[150px]

                  overflow-hidden

                  rounded-[16px]

                  border
                  border-white/[0.10]

                  bg-white/[0.045]

                  p-5

                  shadow-[0_12px_40px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.05)]

                  backdrop-blur-[20px]
                  backdrop-saturate-[145%]

                  transition-all
                  duration-500

                  hover:-translate-y-[4px]
                  hover:border-[#E5484D]/40
                  hover:bg-white/[0.065]
                  hover:shadow-[0_20px_55px_rgba(0,0,0,0.24),0_0_25px_rgba(229,72,77,0.06)]

                  sm:p-6
                "
              >
                {/* GLASS TOP HIGHLIGHT */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0

                    h-[44%]

                    bg-gradient-to-b
                    from-white/[0.045]
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

                    shadow-[0_0_8px_rgba(229,72,77,0.28)]

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
                    items-start

                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10

                      shrink-0

                      items-center
                      justify-center

                      rounded-[10px]

                      border
                      border-[#E5484D]/25

                      bg-[#E5484D]/[0.07]

                      text-[#E5484D]

                      shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]

                      transition-all
                      duration-500

                      group-hover:border-[#E5484D]/50
                      group-hover:bg-[#E5484D]/[0.12]
                    "
                  >
                    <Icon
                      strokeWidth={1.45}
                      className="
                        h-[19px]
                        w-[19px]
                      "
                    />
                  </div>

                  <div>
                    <h3
                      className="
                        font-sans

                        text-[13px]
                        font-semibold

                        leading-[1.25]

                        tracking-[-0.015em]

                        text-[#F2F0EC]

                        sm:text-[14px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2

                        font-sans

                        text-[10px]
                        font-normal

                        leading-[1.6]

                        text-white/40

                        sm:text-[11px]
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FINANCE PANEL */}

        <motion.div
          initial={
            reduceMotion
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 34,
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
            duration: 0.85,
            delay: reduceMotion ? 0 : 0.15,
            ease,
          }}
          className="
            relative

            mt-5

            min-h-[330px]

            overflow-hidden

            rounded-[18px]

            border
            border-white/[0.10]

            bg-[#0D0F12]/90

            shadow-[0_22px_70px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.05)]

            backdrop-blur-[22px]
            backdrop-saturate-[140%]

            lg:min-h-[300px]
          "
        >
          {/* GLASS HIGHLIGHT */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              rounded-[inherit]

              bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0.01)_30%,transparent_70%)]
            "
          />

          {/* PANEL BACKGROUND */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[linear-gradient(90deg,rgba(13,15,18,0.96)_0%,rgba(16,17,20,0.92)_48%,rgba(13,15,18,0.72)_70%,rgba(13,15,18,0.18)_100%)]
            "
          />

          {/* RED AMBIENCE */}

          <div
            className="
              pointer-events-none
              absolute

              bottom-[-140px]
              right-[8%]

              h-[360px]
              w-[520px]

              rounded-full

              bg-[#E5484D]/[0.07]

              blur-[120px]
            "
          />

          {/* RED LIGHT LINE */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-[28%]
              right-0

              h-px
              w-[44%]

              bg-[linear-gradient(90deg,transparent,#E5484D_60%,transparent)]

              opacity-55

              shadow-[0_0_16px_rgba(229,72,77,0.45)]
            "
          />

          {/* CAR IMAGE */}

          <div
            className="
              pointer-events-none

              relative

              h-[260px]
              w-full

              lg:absolute
              lg:bottom-0
              lg:right-[-2%]
              lg:h-full
              lg:w-[48%]
            "
          >
            <Image
              src="/images/finance-car-display.png"
              alt="YM Motors finance vehicle"
              fill
              sizes="
                (max-width: 1023px) 100vw,
                48vw
              "
              className="
                object-contain
                object-bottom

                lg:object-right-bottom
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0

                bg-[linear-gradient(180deg,transparent_52%,#0D0F12_100%)]

                lg:bg-[linear-gradient(90deg,#0D0F12_0%,transparent_42%)]
              "
            />
          </div>

          {/* CONTENT */}

          <div
            className="
              relative
              z-10

              grid

              gap-10

              px-6
              py-8

              sm:px-8
              sm:py-10

              lg:grid-cols-[1.15fr_0.9fr_1.3fr]
              lg:items-center
              lg:gap-8
              lg:px-10
              lg:py-10

              xl:px-12
            "
          >
            {/* LEFT */}

            <div>
              <p
                className="
                  font-sans

                  text-[9px]
                  font-semibold
                  uppercase

                  tracking-[0.15em]

                  text-[#E5484D]/85
                "
              >
                Drive Now, Pay Monthly
              </p>

              <h3
                className="
                  mt-3

                  max-w-[380px]

                  font-heading

                  text-[30px]
                  font-bold

                  leading-[0.98]

                  tracking-[-0.04em]

                  text-[#F4F2EE]

                  sm:text-[34px]

                  lg:text-[36px]
                "
              >
                Flexible Finance
                <br />
                for Your Next Car
              </h3>

              <p
                className="
                  mt-4

                  max-w-[330px]

                  font-sans

                  text-[11px]
                  font-normal

                  leading-[1.65]

                  text-white/42

                  sm:text-[12px]
                "
              >
                Spread the cost with affordable monthly payments tailored
                around your budget.
              </p>

              {/* CTA */}

              <a
                href="#finance"
                className="
                  group
                  relative

                  mt-6

                  inline-flex
                  h-[50px]
                  min-w-[210px]

                  items-center
                  justify-center

                  overflow-hidden

                  rounded-[6px]

                  border
                  border-[#E5484D]

                  bg-[#E5484D]

                  px-7

                  font-sans

                  text-[13px]
                  font-semibold

                  tracking-[0.005em]

                  text-white

                  shadow-[0_12px_34px_rgba(0,0,0,0.24)]

                  transition-all
                  duration-500

                  hover:-translate-y-[2px]
                  hover:border-[#F05A5F]
                  hover:bg-[#F05A5F]
                  hover:shadow-[0_16px_42px_rgba(229,72,77,0.20)]

                  sm:text-[14px]
                "
              >
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0

                    h-[46%]

                    bg-gradient-to-b
                    from-white/[0.18]
                    to-transparent
                  "
                />

                <span
                  className="
                    pointer-events-none
                    absolute
                    -left-[50%]
                    top-0

                    h-full
                    w-[34%]

                    -skew-x-[22deg]

                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.42]
                    to-transparent

                    opacity-0

                    transition-all
                    duration-700

                    group-hover:left-[120%]
                    group-hover:opacity-100
                  "
                />

                <span className="relative z-10">
                  Explore Finance Options
                </span>
              </a>
            </div>

            {/* MIDDLE FEATURES */}

            <div
              className="
                space-y-5

                lg:py-2
              "
            >
              {financePoints.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={
                    reduceMotion
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {
                          opacity: 0,
                          x: 18,
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
                    duration: 0.55,
                    delay: reduceMotion ? 0 : 0.25 + index * 0.08,
                    ease,
                  }}
                  className="
                    flex
                    items-start

                    gap-3
                  "
                >
                  <div
                    className="
                      mt-[2px]

                      flex
                      h-7
                      w-7

                      shrink-0

                      items-center
                      justify-center

                      rounded-[8px]

                      border
                      border-[#E5484D]/25

                      bg-[#E5484D]/[0.07]

                      text-[#E5484D]
                    "
                  >
                    <CheckCircle2
                      strokeWidth={1.5}
                      className="
                        h-[14px]
                        w-[14px]
                      "
                    />
                  </div>

                  <div>
                    <h4
                      className="
                        font-sans

                        text-[11px]
                        font-semibold

                        text-white/85

                        sm:text-[12px]
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-1

                        font-sans

                        text-[9px]

                        text-white/36

                        sm:text-[10px]
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SPACE FOR CAR */}

            <div className="hidden lg:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}