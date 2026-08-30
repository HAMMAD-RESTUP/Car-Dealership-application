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
        bg-[#080b0f]

        px-5
        py-20

        sm:px-7
        sm:py-24

        lg:px-10
        lg:py-28

        xl:px-12
        xl:py-32
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[linear-gradient(180deg,#080b0f_0%,#0d1218_48%,#080b0f_100%)]
        "
      />

      {/* RIGHT BLUE GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-280px]
          top-[8%]

          h-[650px]
          w-[650px]

          rounded-full
          bg-[#00A8E8]/[0.075]
          blur-[180px]
        "
      />

      {/* LEFT LOWER GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-300px]
          left-[-250px]

          h-[600px]
          w-[600px]

          rounded-full
          bg-[#00A8E8]/[0.035]
          blur-[180px]
        "
      />

      {/* TOP CHROME LINE */}
      <div
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
          via-[#00A8E8]/50
          to-transparent

          shadow-[0_0_18px_rgba(0,168,232,0.20)]
        "
      />

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1500px]
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
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

            sm:mb-14

            lg:mb-16
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-[760px]">
            {/* EYEBROW */}
            <div
              className="
                mb-6

                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-10

                  bg-gradient-to-r
                  from-[#129cff]
                  via-[#129cff]/70
                  to-transparent

                  sm:w-12
                "
              />

              <span
                className="
                  font-[var(--font-body)]

                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]

                  text-[#61bdff]

                  sm:text-[12px]
                "
              >
                Selected Collection
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                font-[var(--font-display)]

                text-[48px]
                font-semibold
                leading-[0.88]
                tracking-[-0.035em]

                text-[#f5f5f3]

                sm:text-[58px]

                md:text-[66px]

                lg:text-[72px]

                xl:text-[78px]
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
                mt-7
                max-w-[570px]

                font-[var(--font-body)]

                text-[13px]
                leading-[1.8]

                text-white/55

                sm:text-[14px]

                lg:text-[15px]
              "
            >
              Exceptional vehicles carefully selected for performance,
              provenance and quality — ready for drivers who expect more.
            </p>
          </div>

          {/* DESKTOP VIEW ALL */}
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
              min-h-[50px]
              items-center
              justify-center
              gap-3

              rounded-[4px]

              border
              border-white/[0.13]

              bg-white/[0.025]

              px-6

              font-[var(--font-body)]

              text-[12px]
              font-semibold
              tracking-[0.02em]

              text-white

              backdrop-blur-md

              transition-all
              duration-300

              hover:border-[#129cff]/50
              hover:bg-[#129cff]/10

              md:inline-flex
            "
          >
            View all stock

            <ArrowUpRight
              size={16}
              strokeWidth={1.6}
              className="
                text-[#129cff]

                transition-transform
                duration-300

                group-hover:translate-x-[3px]
                group-hover:-translate-y-[3px]
              "
            />
          </motion.a>
        </motion.div>

        {/* =====================================================
            VEHICLE GRID
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2

            lg:grid-cols-3
            lg:gap-6

            xl:gap-8
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
                      y: 35,
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

                rounded-[10px]

                border
                border-white/[0.075]

                bg-[#0c1117]

                shadow-[0_24px_70px_rgba(0,0,0,0.32)]

                transition-all
                duration-500

                hover:-translate-y-[7px]
                hover:border-[#129cff]/30

                hover:shadow-[0_32px_90px_rgba(0,0,0,0.48)]
              "
            >
              {/* TOP HIGHLIGHT */}
              <span
                className="
                  pointer-events-none

                  absolute
                  left-1/2
                  top-0
                  z-30

                  h-px
                  w-[75%]

                  -translate-x-1/2

                  bg-gradient-to-r
                  from-transparent
                  via-[#129cff]/0
                  to-transparent

                  transition-all
                  duration-500

                  group-hover:via-[#129cff]/70
                "
              />

              {/* =================================================
                  FULL WIDTH VEHICLE IMAGE
              ================================================== */}
              <div
                className="
                  relative

                  aspect-[16/10]
                  w-full

                  overflow-hidden

                  bg-[#080b0f]
                "
              >
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
                    object-cover

                    transition-transform
                    duration-[900ms]
                    ease-out

                    group-hover:scale-[1.055]
                  "
                />

                {/* DARK IMAGE GRADIENT */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-[#0c1117]
                    via-transparent
                    to-black/10
                  "
                />

                {/* SIDE VIGNETTE */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-[linear-gradient(90deg,rgba(0,0,0,0.12),transparent_40%,transparent)]
                  "
                />

                {/* BADGE */}
                <span
                  className="
                    absolute
                    left-4
                    top-4

                    inline-flex
                    min-h-[30px]
                    items-center

                    rounded-[3px]

                    border
                    border-[#129cff]/30

                    bg-black/55

                    px-3

                    font-[var(--font-body)]

                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]

                    text-[#85ceff]

                    backdrop-blur-[10px]

                    sm:left-5
                    sm:top-5
                  "
                >
                  {car.badge}
                </span>

                {/* TOP RIGHT CTA */}
                <a
                  href="#contact"
                  aria-label={`View ${car.name}`}
                  className="
                    absolute
                    right-4
                    top-4

                    flex
                    h-[40px]
                    w-[40px]
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/[0.13]

                    bg-black/40

                    text-white

                    backdrop-blur-[10px]

                    opacity-100

                    transition-all
                    duration-300

                    hover:border-[#129cff]/60
                    hover:bg-[#129cff]

                    sm:right-5
                    sm:top-5

                    lg:opacity-0
                    lg:group-hover:opacity-100
                  "
                >
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.6}
                  />
                </a>
              </div>

              {/* =================================================
                  CARD CONTENT
              ================================================== */}
              <div
                className="
                  flex
                  flex-1
                  flex-col

                  px-5
                  pb-5
                  pt-4

                  sm:px-6
                  sm:pb-6
                  sm:pt-5
                "
              >
                {/* VEHICLE NAME */}
                <div>
                  <h3
                    className="
                      font-[var(--font-display)]

                      text-[28px]
                      font-semibold
                      leading-[1]

                      tracking-[-0.025em]

                      text-[#f7f7f5]

                      sm:text-[31px]
                    "
                  >
                    {car.name}
                  </h3>

                  <p
                    className="
                      mt-2.5

                      font-[var(--font-body)]

                      text-[11px]
                      leading-[1.6]

                      text-white/42

                      sm:text-[12px]
                    "
                  >
                    {car.subtitle}
                  </p>
                </div>

                {/* =================================================
                    SPECS
                ================================================== */}
                <div
                  className="
                    mt-6

                    grid
                    grid-cols-3

                    rounded-[5px]

                    border
                    border-white/[0.055]

                    bg-white/[0.018]

                    px-3
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

                {/* =================================================
                    PRICE / VIEW DETAILS
                ================================================== */}
                <div
                  className="
                    mt-auto

                    flex
                    items-end
                    justify-between
                    gap-4

                    pt-6
                  "
                >
                  <div>
                    <p
                      className="
                        font-[var(--font-body)]

                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.17em]

                        text-white/35
                      "
                    >
                      Asking Price
                    </p>

                    <p
                      className="
                        mt-2

                        font-[var(--font-display)]

                        text-[30px]
                        font-semibold
                        leading-none

                        tracking-[-0.025em]

                        text-[#129cff]

                        sm:text-[34px]
                      "
                    >
                      {car.price}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="
                      group/button

                      inline-flex
                      min-h-[44px]
                      items-center
                      justify-center
                      gap-2

                      rounded-[4px]

                      border
                      border-white/[0.10]

                      bg-white/[0.025]

                      px-4

                      font-[var(--font-body)]

                      text-[11px]
                      font-semibold

                      text-white/75

                      transition-all
                      duration-300

                      hover:border-[#129cff]/40
                      hover:bg-[#129cff]
                      hover:text-white
                    "
                  >
                    Details

                    <ArrowUpRight
                      size={14}
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

        {/* =====================================================
            MOBILE VIEW ALL
        ====================================================== */}
        <div className="mt-8 md:hidden">
          <a
            href="#models"
            className="
              flex
              min-h-[52px]
              w-full
              items-center
              justify-center
              gap-2

              rounded-[4px]

              border
              border-white/[0.11]

              bg-white/[0.025]

              font-[var(--font-body)]

              text-[12px]
              font-semibold

              text-white

              transition-colors
              duration-300

              hover:border-[#129cff]/40
              hover:bg-[#129cff]/10
            "
          >
            View all stock

            <ArrowUpRight
              size={15}
              className="text-[#129cff]"
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
            ? "border-x border-white/[0.07]"
            : ""
        }
      `}
    >
      <div
        className="
          flex
          items-center
          gap-[6px]

          text-[#129cff]
        "
      >
        {icon}

        <span
          className="
            font-[var(--font-body)]

            text-[8px]
            font-semibold
            uppercase
            tracking-[0.09em]

            text-white/35

            sm:text-[9px]
          "
        >
          {label}
        </span>
      </div>

      <p
        className="
          mt-2

          truncate

          font-[var(--font-body)]

          text-[10px]
          font-semibold

          text-white/72

          sm:text-[11px]
        "
      >
        {value}
      </p>
    </div>
  );
}