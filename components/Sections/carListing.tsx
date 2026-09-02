"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Fuel,
  Gauge,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const cars = [
  {
    name: "Ferrari 488 GTB",
    subtitle: "3.9 V8 GTB F1 DCT Euro 6",
    image: "/images/cars/ferrari-car.jpeg",
    price: "£175,000",
    year: "2023",
    mileage: "2,500",
    fuel: "Petrol",
    badge: "Low Mileage",
  },

  {
    name: "Porsche 911 Turbo S",
    subtitle: "3.7T 992 Turbo S PDK 4WD",
    image: "/images/cars/porsche-car.jpeg",
    price: "£125,000",
    year: "2022",
    mileage: "8,900 ",
    fuel: "Petrol",
    badge: "First Owner",
  },

  {
    name: "Rolls Royce Cullinan",
    subtitle: "6.75 V12 Auto 4WD Euro 6",
    image: "/images/cars/Rolls-Royce-car.jpeg",
    price: "£325,000",
    year: "2023",
    mileage: "5,200",
    fuel: "Petrol",
    badge: "Premium",
  },

  {
    name: "Lamborghini Aventador ",
    subtitle: "6.5 V12 LP770-4 ISR Coupe",
    image: "/images/cars/Lamborghini-car.jpeg",
    price: "£420,000",
    year: "2022",
    mileage: "1,800",
    fuel: "Petrol",
    badge: "Limited Edition",
  },

  {
    name: "Mercedes AMG GT ",
    subtitle: "4.0 V8 BiTurbo Coupe Premium",
    image: "/images/cars/Mercedes-sport.jpeg",
    price: "£210,000",
    year: "2023",
    mileage: "3,200",
    fuel: "Petrol",
    badge: "Performance",
  },

  {
    name: "Mustang  GT",
    subtitle: "6.0 W12 Mulliner Automatic AWD",
    image: "/images/cars/Mustang-sport.jpeg",
    price: "£260,000",
    year: "2024",
    mileage: "1,500 ",
    fuel: "Petrol",
    badge: "Luxury Choice",
  },
];

export default function CarListing() {
  const reduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCars = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-car-card]");
    const gap = 28;
    const amount = card ? card.offsetWidth + gap : container.clientWidth * 0.8;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="stock"
      className="
        relative
        overflow-hidden
        bg-transparent

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
      {/* BACKGROUND */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[linear-gradient(180deg,#080b0f_0%,#0d1218_48%,transparent)]
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
          max-w-[1800px]
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
            mb-6

            flex
            flex-col
            gap-8

            sm:mb-8

            lg:mb-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-[760px]">

           {/* HEADING */}
            <h2
              className="
                font-[var(--font-display)]

                text-[56px]
                font-bold
                leading-[0.92]
                tracking-[-0.035em]

                text-[#f5f5f3]

                sm:text-[72px]

                md:text-[82px]

                lg:text-[90px]

                xl:text-[96px]
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
            VEHICLE ROW — HORIZONTAL SCROLL
        ====================================================== */}
        <div className="relative">

          {/* SCROLL BUTTONS */}
          <button
            type="button"
            onClick={() => scrollCars("left")}
            className="
              absolute
              left-2
              top-1/2
              z-30
              hidden
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-black/50
              text-white
              backdrop-blur-xl
              transition
              hover:border-[#129cff]/50
              hover:bg-[#129cff]/20

              lg:flex
            "
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => scrollCars("right")}
            className="
              absolute
              right-2
              top-1/2
              z-30
              hidden
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-black/50
              text-white
              backdrop-blur-xl
              transition
              hover:border-[#129cff]/50
              hover:bg-[#129cff]/20

              lg:flex
            "
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="
              flex
              flex-col
              gap-5
              pb-2

              lg:flex-row
              lg:overflow-x-auto
              lg:overscroll-x-contain
              lg:scroll-smooth
              lg:snap-x
              lg:snap-mandatory
              lg:touch-pan-x

              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden

              lg:gap-7
              xl:gap-8
            "
          >
            {cars.map((car, index) => (
              <motion.a
                href="#contact"
                data-car-card
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
                  min-w-0
                  lg:shrink-0
                  lg:snap-start
                  cursor-pointer
                  flex-col

                  overflow-hidden

                  rounded-[8px]

                  border
                  border-white/[0.12]

                  bg-transparent

                  backdrop-blur-[6px]

                  

                  transition-all
                  duration-500

                  w-full

                  lg:basis-[33%]
                  xl:basis-[25%]
                  2xl:basis-[20%]

                  hover:-translate-y-[7px]
                  hover:border-[#129cff]/35
                  hover:bg-transparent

                  
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

                    aspect-[16/11]
                    w-full

                    overflow-hidden

                    bg-transparent
                  "
                >
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="
                      (max-width: 640px) 86vw,
                      (max-width: 1024px) 52vw,
                      (max-width: 1280px) 33vw,
                      (max-width: 1536px) 25vw,
                      20vw
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

                  {/* PRICE — FLUSH TOP-LEFT, GLASSY BLACK, NO GAP */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      z-20

                      rounded-br-[10px]

                      bg-black/60

                      px-4
                      py-2.5

                      backdrop-blur-xl
                      backdrop-saturate-150

                      shadow-[0_10px_25px_rgba(0,0,0,0.35)]
                    "
                  >
                    <span
                      className="
                        font-[var(--font-display)]

                        text-[17px]
                        font-bold
                        leading-none
                        tracking-[-0.01em]

                        text-white

                        sm:text-[18px]
                      "
                    >
                      {car.price}
                    </span>
                  </div>

                  {/* SECONDARY BADGE */}
                  <span
                    className="
                      absolute
                      bottom-3
                      left-3

                      inline-flex
                      min-h-[26px]
                      items-center

                      rounded-[3px]

                      border
                      border-[#129cff]/30

                      bg-black/55

                      px-2.5

                      font-[var(--font-body)]

                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.13em]

                      text-[#85ceff]

                      backdrop-blur-[10px]
                    "
                  >
                    {car.badge}
                  </span>

                  {/* HOVER CLICK INDICATOR */}
                  <span
                    className="
                      absolute
                      right-4
                      top-4

                      flex
                      h-[38px]
                      w-[38px]
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-white/[0.15]

                      bg-black/40

                      text-white

                      backdrop-blur-[10px]

                      opacity-0
                      scale-90

                      transition-all
                      duration-300

                      group-hover:opacity-100
                      group-hover:scale-100
                      group-hover:border-[#129cff]/60
                      group-hover:bg-[#129cff]

                      sm:right-5
                      sm:top-5
                    "
                  >
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.6}
                    />
                  </span>
                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================== */}
                <div
                  className="
                    flex
                    flex-1
                    flex-col

                    relative

                    px-3
                    pb-3
                    pt-3

                    sm:px-4
                    sm:pb-4
                    sm:pt-3

                    lg:px-4
                  "
                >
                  {/* VEHICLE NAME */}
                  <div>
                    <h3
                      className="
                        font-[var(--font-display)]

                        text-[16px]
                        font-semibold
                        leading-[1.08]

                        tracking-[-0.02em]

                        text-[#f7f7f5]

                        sm:text-[18px]

                        lg:text-[19px]
                      "
                    >
                      {car.name}
                    </h3>

                    <p
                      className="
                        mt-2

                        font-[var(--font-body)]

                        text-[10px]
                        leading-[1.6]

                        text-white/42

                        sm:mt-2.5
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
                      mt-3

                      grid
                      grid-cols-3
                      gap-1

                      rounded-[6px]

                      border
                      border-white/[0.14]

                      bg-white/[0.03]

                      backdrop-blur-[10px]

                      shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]

                      px-2
                      py-2

                      sm:mt-4
                      sm:px-2
                      sm:py-3
                    "
                  >
                    <Spec
                      icon={
                        <CalendarDays
                          size={13}
                          strokeWidth={1.6}
                        />
                      }
                      label="Year"
                      value={car.year}
                    />

                    <Spec
                      icon={
                        <Gauge
                          size={14}
                          strokeWidth={1.6}
                        />
                      }
                      label="Mileage"
                      value={car.mileage}
                      bordered
                    />

                    <Spec
                      icon={
                        <Fuel
                          size={13}
                          strokeWidth={1.6}
                        />
                      }
                      label="Fuel"
                      value={car.fuel}
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
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
          flex-col
          items-center
          justify-center
          gap-1

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
          text-center
          font-semibold

          text-white/72

          sm:text-xs
        "
      >
        {value}
      </p>
    </div>
  );
}