"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Landmark,
  Repeat2,
  ShieldCheck,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Quality Approved Cars",
    desc: "Every car is handpicked and rigorously inspected to ensure premium quality and reliability.",
  },
  {
    icon: Landmark,
    number: "02",
    title: "Flexible Finance Options",
    desc: "Competitive rates and tailored finance solutions designed around your budget and lifestyle.",
  },
  {
    icon: Repeat2,
    number: "03",
    title: "Part Exchange Welcome",
    desc: "We offer fair valuations and make upgrading your vehicle simple and hassle-free.",
  },
  {
    icon: BadgeCheck,
    number: "04",
    title: "Warranty & Peace of Mind",
    desc: "All vehicles come with warranty options and reliable support throughout ownership.",
  },
];

const financePoints = [
  {
    title: "Competitive APR",
    desc: "Low rates across our finance plans.",
  },
  {
    title: "Quick & Easy Approval",
    desc: "A straightforward application process.",
  },
  {
    title: "Tailored to You",
    desc: "Flexible plans built around your budget.",
  },
];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden

        border-y
        border-white/[0.05]

        bg-[#0B0D0F]

        py-10

        sm:py-12

        md:py-14

        lg:py-16
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

          bg-[linear-gradient(180deg,#0B0D0F_0%,#11161D_48%,#0B0D0F_100%)]
        "
      />

      {/* =====================================================
          BLUE AMBIENCE
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          right-[-220px]
          top-[12%]

          h-[420px]
          w-[420px]

          rounded-full

          bg-transparent

          blur-[140px]

          sm:h-[500px]
          sm:w-[500px]
        "
      />

      <div
        className="
          pointer-events-none

          absolute
          bottom-[-200px]
          left-[-200px]

          h-[400px]
          w-[400px]

          rounded-full

          bg-transparent

          blur-[140px]
        "
      />

      {/* =====================================================
          TOP LINE
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-0

          h-px
          w-[70%]

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-[#00A8E8]/45
          to-transparent
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1500px]

          px-4
        py-12

        sm:px-5
        sm:py-16

        lg:px-7
        lg:py-20

        xl:px-8
        xl:py-24
        "
      >
        {/* =================================================
            HEADER
        ================================================== */}
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
            margin: "-60px",
          }}
          transition={{
            duration: 0.75,
            ease: EASE,
          }}
          className="
            mb-8

            max-w-[760px]

            sm:mb-9

            md:mb-10

            lg:mb-12
          "
        >


          {/* HEADING */}
          <h2
            className="
              font-[var(--font-display)]

              text-[32px]
              font-semibold
              leading-[0.96]
              tracking-[-0.035em]

              text-[#f5f5f3]

              min-[380px]:text-[36px]

              sm:text-[42px]

              md:text-[46px]

              lg:text-[54px]

              xl:text-[58px]
            "
          >
            Driven by Trust.
            <br />

            <span className="text-[#129cff]">
              Built on Quality.
            </span>
          </h2>

          <p
            className="
              mt-5

              max-w-[560px]

              font-[var(--font-body)]

              text-[12px]
              leading-[1.7]

              text-white/50

              sm:text-[13px]

              md:text-[14px]

              lg:text-[15px]
            "
          >
            From carefully selected vehicles to flexible finance
            and dependable aftercare, every part of the YM Motors
            experience is built around confidence.
          </p>
        </motion.div>

        {/* =================================================
            FEATURE CARDS
        ================================================== */}
        <div
          className="
            grid
            w-full

            grid-cols-1

            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-4
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
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
                  delay: index * 0.06,
                  ease: EASE,
                }}
                className="
                  group
                  relative

                  w-full
                  min-w-0

                  overflow-hidden

                  rounded-2xl

                  border
                  border-white/[0.12]

                  bg-white/[0.04]

                  backdrop-blur-xl

                  shadow-none

                  p-5

                  transition-all
                  duration-500

                  hover:-translate-y-[3px]
                  hover:border-[#00A8E8]/30
                  hover:bg-white/[0.06]

                  sm:min-h-[230px]
                  sm:p-5
                "
              >


                {/* HOVER LIGHT */}
                <span
                  className="
                    pointer-events-none

                    absolute
                    right-[-60px]
                    top-[-70px]

                    h-[170px]
                    w-[170px]

                    rounded-full

                    bg-[#00A8E8]/0

                    blur-[60px]

                    transition-all
                    duration-500

                    group-hover:bg-[#00A8E8]/[0.05]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-[linear-gradient(120deg,#0B0D0F_0%,#101720_55%,#0B0D0F_100%)]

                    opacity-70
                  "
                />

                <div className="relative z-10 text-center">
                  {/* TOP */}
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span
                      className="
                        flex
                        h-[82px]
                        w-[82px]
                        shrink-0
                        items-center
                        justify-center

                        

                     

                        text-[#4db8ff]

                        sm:h-[88px]
                        sm:w-[88px]
                      "
                    >
                      <Icon
                        size={30}
                        strokeWidth={1.6}
                      />
                    </span>


                  </div>

                  {/* TITLE */}
                  <h4
                    className="
                  

                      font-[var(--font-display)]

                      text-[16px]
                      font-semibold
                      leading-[1.08]
                      tracking-[-0.02em]

                      text-white

                      sm:text-[17px]
                    "
                  >
                    {item.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-3

                      mx-auto
                      max-w-[260px]

                      font-[var(--font-body)]

                      text-[12px]
                      leading-[1.65]

                      text-white/55

                      sm:text-[13px]
                    "
                  >
                    {item.desc}
                  </p>

                  <span
                    className="
                      mt-6
                      block

                      h-px
                      w-8

                      bg-white/[0.09]

                      transition-all
                      duration-500

                      group-hover:w-14
                      group-hover:bg-[#00A8E8]/55
                    "
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
        {/* =====================================================
            FINANCE SECTION
        ====================================================== */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                opacity: 0,
                y: 30,
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
            duration: 0.8,
            delay: 0.1,
            ease: EASE,
          }}
          className="
            relative

            mt-4

            w-full
            min-w-0

            overflow-hidden

            rounded-2xl

            border
            border-white/[0.12]

            bg-white/[0.04]

            sm:mt-6
          "
        >
          {/* BACKGROUND */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[linear-gradient(120deg,#0B0D0F_0%,#101720_55%,#0B0D0F_100%)]
            "
          />

          {/* BLUE GLOW */}
          <div
            className="
              pointer-events-none

              absolute
              bottom-[-180px]
              right-[-160px]

              h-[420px]
              w-[420px]

              rounded-full

              bg-[#00A8E8]/[0.07]

              blur-[140px]

              md:h-[500px]
              md:w-[500px]
            "
          />

          {/* TOP LINE */}
          <div
            className="
              pointer-events-none

              absolute
              left-1/2
              top-0
              z-20

              h-px
              w-[65%]

              -translate-x-1/2

              bg-gradient-to-r
              from-transparent
              via-[#00A8E8]/45
              to-transparent
            "
          />

          {/* =================================================
              DESKTOP CAR
              ONLY XL SCREEN
          ================================================== */}
          <div
            className="
              pointer-events-none

              absolute
              bottom-[-20px]
              right-[-45px]
              z-10

              hidden

              h-[390px]
              w-[560px]

              xl:block

              2xl:h-[420px]
              2xl:w-[640px]
            "
          >
            <Image
              src="/images/finance-car-display.png"
              alt="Finance vehicle"
              fill
              sizes="800px"
              className="
                object-contain
                object-right-bottom
              "
            />
          </div>

          {/* DESKTOP CAR FADE */}
          <div
            className="
              pointer-events-none

              absolute
              inset-0
              z-20

              hidden

              bg-[linear-gradient(90deg,#0D1116_0%,rgba(13,17,22,0.98)_40%,rgba(13,17,22,0.76)_62%,transparent_86%)]

              xl:block
            "
          />

          {/* =================================================
              PANEL CONTENT
          ================================================== */}
          <div
            className="
              relative
              z-30

              w-full

              px-5
              pb-6
              pt-7

              sm:px-7
              sm:pt-8

              md:px-8
              md:pt-10

              lg:px-10
              lg:pt-12

              xl:min-h-[380px]
              xl:pr-[420px]
              xl:pb-12

              2xl:pr-[480px]
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}
            <div
              className="
                w-full
                max-w-[590px]
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-px
                    w-7
                    shrink-0

                    bg-gradient-to-r
                    from-[#00A8E8]
                    to-transparent
                  "
                />


              </div>

              <h2
                className="
                  mt-5

                  font-[var(--font-display)]

                  text-[36px]
                  font-semibold
                  leading-[0.96]
                  tracking-[-0.035em]

                  text-[#f5f5f3]

                  min-[380px]:text-[39px]

                  sm:text-[44px]

                  md:text-[48px]

                  lg:text-[52px]

                  xl:text-[54px]
                "
              >
                Flexible Finance
                <br />

                <span className="text-[#129cff]">
                  for Your Next Car.
                </span>
              </h2>

              <p
                className="
                  mt-5

                  max-w-[470px]

                  font-[var(--font-body)]

                  text-[12px]
                  leading-[1.7]

                  text-white/50

                  sm:text-[13px]

                  md:text-[14px]
                "
              >
                Spread the cost with affordable monthly payments,
                tailored around your budget and the vehicle you
                want to drive.
              </p>

              {/* CTA */}
              <motion.a
                href="#finance"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.18,
                }}
                className="
                  group

                  mt-6

                  flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-2

                  rounded-[3px]

                  border
                  border-[#2a9fff]/25

                  bg-[#158ff3]

                  px-5

                  font-[var(--font-body)]

                  text-[14px]
                  font-semibold

                  text-white

                  transition-all
                  duration-300

                  hover:bg-[#2a9fff]

                  sm:inline-flex
                  sm:w-auto
                  sm:px-6
                  sm:text-[16px]
                "
              >
                Explore Finance Options

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.6}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-[2px]
                    group-hover:-translate-y-[2px]
                  "
                />
              </motion.a>
            </div>

            {/* =================================================
                FINANCE POINTS
            ================================================== */}
            <div
              className="
                mt-8

                grid
                w-full
                grid-cols-1
                gap-2.5

                sm:grid-cols-3
                sm:gap-3

                xl:max-w-[680px]
              "
            >
              {financePoints.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-3

                    rounded-xl

                    border
                    border-white/[0.06]

                    bg-white/[0.05] backdrop-blur-xl

                    px-3
                    py-3

                    transition-all
                    duration-300

                    hover:border-[#00A8E8]/20
                    hover:bg-white/[0.035]

                    sm:flex-col
                    sm:items-start

                    md:flex-row
                    md:items-center

                    xl:min-h-[76px]
                  "
                >
                  <span
                    className="
                      flex
                      h-[34px]
                      w-[34px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-[3px]

                      border
                      border-[#00A8E8]/22

                      bg-[#00A8E8]/[0.07]

                      text-[#4db8ff]
                    "
                  >
                    <CheckCircle2
                      size={15}
                      strokeWidth={1.7}
                    />
                  </span>

                  <div className="min-w-0">
                    <h4
                      className="
                        font-[var(--font-body)]

                        text-[11px]
                        font-semibold

                        text-white

                        sm:text-[12px]
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-[3px]

                        font-[var(--font-body)]

                        text-[10px]
                        leading-[1.45]

                        text-white/35

                        sm:text-[10px]
                        lg:text-[11px]
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              MOBILE / TABLET CAR

              XL se pehle always normal document flow.
              Absolute positioning nahi.
          ================================================== */}
          <div
            className="
              relative
              z-30

              mx-auto

              mt-5

              h-[190px]
              w-full
              max-w-[520px]

              sm:mt-7
              sm:h-[250px]

              md:h-[300px]
              md:max-w-[620px]

              lg:h-[340px]
              lg:max-w-[720px]

              xl:hidden
            "
          >
            <Image
              src="/images/finance-car-display.png"
              alt="Finance vehicle"
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 620px,
                720px
              "
              className="
                object-contain
                object-center
              "
            />

            {/* CAR BOTTOM FADE */}
            <div
              className="
                pointer-events-none

                absolute
                inset-x-0
                bottom-0

                h-[40%]

                bg-gradient-to-t
                from-[#0D1116]
                to-transparent
              "
            />
          </div>
        </motion.div>


      </div>
    </section>
  );
}