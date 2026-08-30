"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Fuel,
  Gauge,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const cars = [
  {
    name: "Ferrari 488 GTB",
    subtitle: "3.9 V8 GTB F1 DCT Euro 6",
    image: "/images/cars/ferrari.jpeg",
    price: "£175,000",
    year: "2023",
    mileage: "2,500 miles",
    fuel: "Petrol",
    badge: "Low Mileage",
  },
  {
    name: "Porsche 911 Turbo S",
    subtitle: "3.7T 992 Turbo S PDK 4WD",
    image: "/images/cars/porsche.jpeg",
    price: "£125,000",
    year: "2022",
    mileage: "8,900 miles",
    fuel: "Petrol",
    badge: "One Owner",
  },
  {
    name: "Rolls Royce Cullinan",
    subtitle: "6.75 V12 Auto 4WD Euro 6",
    image: "/images/cars/Rolls Royce Cullinan.jpeg",
    price: "£325,000",
    year: "2023",
    mileage: "5,200 miles",
    fuel: "Petrol",
    badge: "Premium",
  },
];

export default function CarListing() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="stock"
      className="
        relative
        overflow-hidden

        border-y
        border-white/[0.05]

        bg-[#0B0D0F]

        px-5
        py-20

        sm:px-7
        sm:py-24

        lg:px-10
        lg:py-28

        xl:px-12
      "
    >
      {/* =====================================================
          SAME SITE BACKGROUND
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
          BLUE AMBIENCE - RIGHT
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          right-[-220px]
          top-[15%]

          h-[520px]
          w-[520px]

          rounded-full

          bg-[#00A8E8]/[0.07]

          blur-[150px]
        "
      />

      {/* =====================================================
          BLUE AMBIENCE - LEFT LOWER
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          bottom-[-240px]
          left-[-180px]

          h-[460px]
          w-[460px]

          rounded-full

          bg-[#00A8E8]/[0.035]

          blur-[150px]
        "
      />

      {/* =====================================================
          TOP DETAIL LINE
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-0

          h-px
          w-[65%]

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-[#00A8E8]/45
          to-transparent

          shadow-[0_0_15px_rgba(0,168,232,0.14)]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1500px]
        "
      >
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}
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
            margin: "-80px",
          }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="
            mb-12

            flex
            flex-col
            gap-8

            md:mb-14

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-[670px]">
            {/* EYEBROW */}
            <div
              className="
                mb-5

                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-9

                  bg-gradient-to-r
                  from-[#00A8E8]
                  to-transparent
                "
              />

              <span
                className="
                  font-[var(--font-body)]

                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]

                  text-[#00A8E8]

                  sm:text-[11px]
                "
              >
                Selected Collection
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                font-[var(--font-display)]

                text-[42px]
                font-semibold
                leading-[0.95]
                tracking-[-0.03em]

                text-[#f5f5f3]

                sm:text-[50px]

                lg:text-[58px]

                xl:text-[64px]
              "
            >
              Featured{" "}
              <span className="text-[#129cff]">
                Vehicles.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-[520px]

                font-[var(--font-body)]

                text-[13px]
                leading-[1.75]

                text-white/52

                sm:text-[14px]

                lg:text-[15px]
              "
            >
              Exceptional imported vehicles, carefully selected for
              performance, luxury and reliability.
            </p>
          </div>

          {/* VIEW ALL */}
          <motion.a
            href="#models"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group

              hidden
              h-[44px]
              items-center
              justify-center
              gap-2

              self-end

              rounded-[3px]

              border
              border-white/[0.14]

              bg-white/[0.025]

              px-5

              font-[var(--font-body)]

              text-[11px]
              font-semibold
              uppercase
              tracking-[0.08em]

              text-white

              transition-all
              duration-300

              hover:border-[#00A8E8]/40
              hover:bg-white/[0.05]

              md:inline-flex
            "
          >
            View all stock

            <ArrowUpRight
              size={14}
              strokeWidth={1.6}
              className="
                text-[#00A8E8]

                transition-transform
                duration-300

                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
            />
          </motion.a>
        </motion.div>

        {/* ===================================================
            VEHICLE GRID
        ==================================================== */}
        <div
          className="
            grid
            grid-cols-1

            gap-5

            md:grid-cols-2
            md:gap-6

            lg:grid-cols-3

            xl:gap-7
          "
        >
          {cars.map((car, index) => (
            <motion.article
              key={car.name}
              initial={
                reduceMotion
                  ? false
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
                margin: "-60px",
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: EASE,
              }}
              className="
                group
                relative

                flex
                h-full
                flex-col

                overflow-hidden

                rounded-[7px]

                border
                border-white/[0.08]

                bg-[rgba(13,18,24,0.72)]

                shadow-[0_20px_55px_rgba(0,0,0,0.20)]

                transition-all
                duration-500

                hover:-translate-y-[4px]

                hover:border-[#00A8E8]/30

                hover:shadow-[0_26px_70px_rgba(0,0,0,0.30)]
              "
            >
              {/* ===============================================
                  CARD TOP LIGHT
              ================================================ */}
              <span
                className="
                  pointer-events-none

                  absolute
                  left-1/2
                  top-0
                  z-30

                  h-px
                  w-[70%]

                  -translate-x-1/2

                  bg-gradient-to-r
                  from-transparent
                  via-[#00A8E8]/0
                  to-transparent

                  transition-all
                  duration-500

                  group-hover:via-[#00A8E8]/55
                "
              />

              {/* ===============================================
                  IMAGE
              ================================================ */}
              <div
                className="
                  relative

                  aspect-[16/10]
                  w-full

                  overflow-hidden

                  bg-[#090d11]
                "
              >
                {/* image backdrop */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.055),transparent_58%)]
                  "
                />

                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="
                    object-contain

                    p-4

                    transition-transform
                    duration-700

                    ease-out

                    group-hover:scale-[1.04]

                    sm:p-5
                  "
                />

                {/* BOTTOM IMAGE FADE */}
                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-[#0d1218]
                    via-transparent
                    to-transparent
                  "
                />

                {/* BADGE */}
                <span
                  className="
                    absolute
                    left-4
                    top-4

                    inline-flex
                    h-[28px]
                    items-center

                    rounded-[3px]

                    border
                    border-[#00A8E8]/25

                    bg-[rgba(5,10,14,0.66)]

                    px-3

                    font-[var(--font-body)]

                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]

                    text-[#7cc9ff]

                    backdrop-blur-[8px]

                    sm:left-5
                    sm:top-5
                    sm:text-[9px]
                  "
                >
                  {car.badge}
                </span>

                {/* VIEW ICON */}
                <span
                  className="
                    absolute
                    right-4
                    top-4

                    flex
                    h-[34px]
                    w-[34px]
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/[0.08]

                    bg-black/[0.30]

                    text-white/50

                    opacity-0

                    backdrop-blur-[8px]

                    transition-all
                    duration-300

                    group-hover:opacity-100

                    sm:right-5
                    sm:top-5
                  "
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                  />
                </span>
              </div>

              {/* ===============================================
                  CARD CONTENT
              ================================================ */}
              <div
                className="
                  flex
                  flex-1
                  flex-col

                  px-5
                  pb-5
                  pt-5

                  sm:px-6
                  sm:pb-6
                "
              >
                {/* TITLE */}
                <div>
                  <h3
                    className="
                      font-[var(--font-display)]

                      text-[24px]
                      font-semibold
                      leading-tight
                      tracking-[-0.02em]

                      text-white

                      sm:text-[26px]
                    "
                  >
                    {car.name}
                  </h3>

                  <p
                    className="
                      mt-2

                      font-[var(--font-body)]

                      text-[11px]
                      leading-[1.6]

                      text-white/38

                      sm:text-[12px]
                    "
                  >
                    {car.subtitle}
                  </p>
                </div>

                {/* =============================================
                    SPECS
                ============================================== */}
                <div
                  className="
                    mt-6

                    grid
                    grid-cols-3

                    border-y
                    border-white/[0.06]

                    py-4
                  "
                >
                  <Spec
                    icon={
                      <CalendarDays
                        size={15}
                        strokeWidth={1.5}
                      />
                    }
                    label="Year"
                    value={car.year}
                  />

                  <Spec
                    icon={
                      <Gauge
                        size={15}
                        strokeWidth={1.5}
                      />
                    }
                    label="Mileage"
                    value={car.mileage}
                    bordered
                  />

                  <Spec
                    icon={
                      <Fuel
                        size={15}
                        strokeWidth={1.5}
                      />
                    }
                    label="Fuel"
                    value={car.fuel}
                  />
                </div>

                {/* =============================================
                    PRICE + CTA
                ============================================== */}
                <div
                  className="
                    mt-auto
                    pt-5

                    flex
                    items-end
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <p
                      className="
                        font-[var(--font-body)]

                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]

                        text-white/32
                      "
                    >
                      Price
                    </p>

                    <p
                      className="
                        mt-[5px]

                        font-[var(--font-display)]

                        text-[26px]
                        font-semibold
                        leading-none
                        tracking-[-0.02em]

                        text-[#129cff]

                        sm:text-[28px]
                      "
                    >
                      {car.price}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    aria-label={`View ${car.name}`}
                    className="
                      group/button

                      flex
                      h-[40px]
                      w-[40px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-[3px]

                      border
                      border-white/[0.10]

                      bg-white/[0.025]

                      text-white/60

                      transition-all
                      duration-300

                      hover:border-[#00A8E8]/35
                      hover:bg-[#158ff3]
                      hover:text-white
                    "
                  >
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.6}
                      className="
                        transition-transform
                        duration-300

                        group-hover/button:translate-x-[2px]
                        group-hover/button:-translate-y-[2px]
                      "
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ===================================================
            MOBILE VIEW ALL
        ==================================================== */}
        <div className="mt-8 md:hidden">
          <a
            href="#models"
            className="
              flex
              min-h-[46px]
              w-full
              items-center
              justify-center
              gap-2

              rounded-[3px]

              border
              border-white/[0.10]

              bg-white/[0.025]

              font-[var(--font-body)]

              text-[11px]
              font-semibold
              uppercase
              tracking-[0.08em]

              text-white
            "
          >
            View all stock

            <ArrowUpRight
              size={14}
              className="text-[#00A8E8]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   VEHICLE SPEC
========================================================= */

function Spec({
  icon,
  label,
  value,
  bordered = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`
        flex
        min-w-0
        flex-col

        px-3

        first:pl-0
        last:pr-0

        ${
          bordered
            ? "border-x border-white/[0.06]"
            : ""
        }
      `}
    >
      <div
        className="
          flex
          items-center
          gap-[6px]

          text-[#00A8E8]
        "
      >
        {icon}

        <span
          className="
            font-[var(--font-body)]

            text-[8px]
            font-medium
            uppercase
            tracking-[0.10em]

            text-white/30
          "
        >
          {label}
        </span>
      </div>

      <p
        className="
          mt-[7px]

          truncate

          font-[var(--font-body)]

          text-[10px]
          font-medium

          text-white/65

          sm:text-[11px]
        "
      >
        {value}
      </p>
    </div>
  );
}