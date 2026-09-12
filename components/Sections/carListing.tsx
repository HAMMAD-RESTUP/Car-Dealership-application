"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Fuel,
  Gauge,
  Palette,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const cars = [
  {
    name: "Mercedes A-250",
    subtitle: "3.9 V8 GTB F1 DCT Euro 6",
    image: "/images/cars/mercedes.png",
    price: "£10,749",
    year: "2023",
    mileage: "2,500",
    fuel: "Petrol",
    colour: "Obsidian Black",
  },
  {
    name: "BMW 3-Series",
    subtitle: "3.7T 992 Turbo S PDK 4WD",
    image: "/images/cars/bmw.png",
    price: "£11,449",
    year: "2022",
    mileage: "8,900",
    fuel: "Petrol",
    colour: "Alpine White",
  },
  {
    name: "Audi A3",
    subtitle: "6.75 V12 Auto 4WD Euro 6",
    image: "/images/cars/audi.png",
    price: "£8,249",
    year: "2023",
    mileage: "5,200",
    fuel: "Petrol",
    colour: "Navarra Blue",
  },
  {
    name: "Toyota Prius",
    subtitle: "6.5 V12 LP770-4 ISR Coupe",
    image: "/images/cars/toyota.png",
    price: "£9,449",
    year: "2022",
    mileage: "1,800",
    fuel: "Petrol",
    colour: "Pearl White",
  },
  {
    name: "Mercedes AMG GT",
    subtitle: "4.0 V8 BiTurbo Coupe Premium",
    image: "/images/cars/mazda.png",
    price: "£210,000",
    year: "2023",
    mileage: "3,200",
    fuel: "Petrol",
    colour: "Graphite Grey",
  },
  {
    name: "Honda Insight",
    subtitle: "6.0 W12 Mulliner Automatic AWD",
    image: "/images/cars/honda.png",
    price: "£4,949",
    year: "2024",
    mileage: "1,500",
    fuel: "Petrol",
    colour: "Crystal Black",
  },
];

export default function CarListing() {
  const reduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCars = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const card =
      container.querySelector<HTMLElement>("[data-car-card]");

    if (!card) return;

    const gap = 24;
    const amount = card.offsetWidth + gap;

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
        py-16
        sm:px-5
        sm:py-20
        lg:px-7
        lg:py-24
        xl:px-8
        xl:py-28
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
          bg-[#00A8E8]/[0.07]
          blur-[180px]
        "
      />

      {/* LEFT BLUE GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-300px]
          left-[-250px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#00A8E8]/[0.03]
          blur-[180px]
        "
      />

      {/* TOP LINE */}
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
          via-white/10
          to-transparent
        "
      />

      <div className="relative z-10 mx-auto max-w-[1800px]">

        {/* =====================================================
            CENTER HEADING
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
            margin: "-80px",
          }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="
            mx-auto
            mb-10
            flex
            w-full
            flex-col
            items-center
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
    leading-[0.98]
    tracking-[-0.025em]

    drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]

    min-[380px]:text-[36px]
    sm:text-[40px]
    md:text-[44px]
    lg:text-[48px]
    xl:text-[52px]
    2xl:text-[56px]
  "
>
  <span className="text-white">
    Featured
  </span>{" "}

  <span className="text-[#00A8E8]">
    Vehicles
  </span>
</h2>

          <span
            className="
              mt-5
              block
              h-px
              w-[64px]
              bg-[#00A8E8]
              shadow-[0_0_14px_rgba(0,168,232,0.30)]
              lg:w-[54px]
            "
          />
        </motion.div>

        {/* =====================================================
            DESKTOP HORIZONTAL CAROUSEL
        ====================================================== */}

        <div className="relative hidden lg:block">

          {/* LEFT BUTTON */}
          <button
            type="button"
            onClick={() => scrollCars("left")}
            aria-label="Previous vehicles"
            className="
              absolute
              left-[-4px]
              top-[43%]
              z-20
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              border
              rounded-full
              border-white/[0.07]
              bg-[#0A0F15]/85
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#00A8E8]/45
              hover:bg-[#0D1720]
              hover:text-[#00A8E8]
            "
          >
            <ChevronLeft
              size={21}
              strokeWidth={1.5}
            />
          </button>

          {/* RIGHT BUTTON */}
          <button
            type="button"
            onClick={() => scrollCars("right")}
            aria-label="Next vehicles"
            className="
              absolute
              right-[-4px]
              top-[43%]
              z-20
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              border
              rounded-full
              border-white/[0.10]
              bg-[#0A0F15]/85
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#00A8E8]/45
              hover:bg-[#0D1720]
              hover:text-[#00A8E8]
            "
          >
            <ChevronRight
              size={21}
              strokeWidth={1.5}
            />
          </button>

          {/* SCROLL RAIL */}
          <div
            ref={scrollRef}
            className="
              flex
              gap-6
              overflow-x-auto
              scroll-smooth
              pb-3
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {cars.map((car, index) => (
              <VehicleCard
                key={car.name}
                car={car}
                index={index}
                reduceMotion={!!reduceMotion}
                desktop
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET VERTICAL
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-y-10
            lg:hidden
          "
        >
          {cars.map((car, index) => (
            <VehicleCard
              key={car.name}
              car={car}
              index={index}
              reduceMotion={!!reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   VEHICLE CARD
========================================================= */

function VehicleCard({
  car,
  index,
  reduceMotion,
  desktop = false,
}: {
  car: (typeof cars)[number];
  index: number;
  reduceMotion: boolean;
  desktop?: boolean;
}) {
  return (
    <motion.article
      data-car-card
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
        duration: 0.55,
        delay: index * 0.04,
        ease: EASE,
      }}
      className={`
        group
        relative
        ${
          desktop
            ? "w-[340px] shrink-0 xl:w-[360px] 2xl:w-[380px]"
            : "w-full"
        }
      `}
    >
      {/* =====================================================
          CAR IMAGE
      ====================================================== */}

      <a
        href="#contact"
        className="
          relative
          block
          aspect-[1.58/1]
          overflow-hidden
          rounded-t-[12px]
          border-x border-t border-white/[0.08]
          bg-[#11161d]
        "
      >
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes={
            desktop
              ? "370px"
              : "(max-width: 1024px) 100vw, 370px"
          }
          className="
            object-cover
            transition-transform
            duration-[900ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-[1.035]
          "
        />

        {/* IMAGE SHADOW */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#080B10]/45
            via-transparent
            to-transparent
          "
        />

        {/* HOVER ACCENT */}
        <span
          className="
            absolute
            left-0
            top-0
            h-[2px]
            w-0
            bg-[#00A8E8]
            transition-all
            duration-500
            group-hover:w-full
          "
        />
      </a>

      {/* =====================================================
          CARD CONTENT
      ====================================================== */}

      <div
        className="
          rounded-b-[12px]
          border-x
          border-b
          border-white/[0.08]
          bg-[linear-gradient(180deg,#0D131A_0%,#090E14_100%)]
          px-5
          pb-5
          pt-5
          shadow-[0_18px_50px_rgba(0,0,0,0.22)]
          transition-all
          duration-300
          group-hover:border-white/[0.15]
          group-hover:shadow-[0_22px_60px_rgba(0,0,0,0.30)]
        "
      >
        {/* NAME + PRICE */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <div className="min-w-0">
            <h3
              className="
                font-[var(--font-display)]
                text-[19px]
                font-semibold
                leading-none
                tracking-[-0.025em]
                text-white
                transition-colors
                duration-300
                group-hover:text-[#00A8E8]
                sm:text-[20px]
              "
            >
              {car.name}
            </h3>

            <p
              className="
                mt-2.5
                truncate
                font-[var(--font-body)]
                text-[12px]
                leading-[1.5]
                text-white/50
              "
            >
              {car.subtitle}
            </p>
          </div>

          <span
            className="
              shrink-0
              font-[var(--font-body)]
              text-[18px]
              font-semibold
              leading-none
              tracking-[-0.015em]
              text-[#8DD6FF]

              sm:text-[19px]
              xl:text-[20px]
            "
          >
            {car.price}
          </span>
        </div>

        {/* =====================================================
            SPECS
        ====================================================== */}

        <div
          className="
            mt-5
            grid
            grid-cols-2
            gap-x-5
            gap-y-5
            border-t
            border-white/[0.10]
            pt-5
          "
        >
          <SpecItem
            icon={<CalendarDays />}
            label="Year"
            value={car.year}
          />

          <SpecItem
            icon={<Palette />}
            label="Colour"
            value={car.colour}
          />

          <SpecItem
            icon={<Gauge />}
            label="Mileage"
            value={`${car.mileage} mi`}
          />

          <SpecItem
            icon={<Fuel />}
            label="Fuel"
            value={car.fuel}
          />
        </div>

        {/* =====================================================
            VIEW DETAILS
        ====================================================== */}

        <a
          href="#contact"
          className="
            group/details
            relative
            mt-6
            flex
            min-h-[46px]
            w-full
            items-end
            justify-between
            border-t
            border-white/[0.10]
            bg-transparent
            pt-4
            font-[var(--font-body)]
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-white/85
            transition-colors
            duration-300
            hover:text-white
          "
        >
          <span className="relative pb-1">
            View Details

            <span
              className="
                absolute
                bottom-[-3px]
                left-0
                h-px
                w-[24px]
                bg-[#00A8E8]
                transition-all
                duration-300
                ease-out
                group-hover/details:w-full
              "
            />
          </span>

          <ArrowUpRight
            size={20}
            strokeWidth={1.5}
            className="
              mb-[2px]
              text-[#00A8E8]
              transition-transform
              duration-300
              ease-out
              group-hover/details:-translate-y-[3px]
              group-hover/details:translate-x-[3px]
            "
          />
        </a>
      </div>
    </motion.article>
  );
}

/* =========================================================
   SPEC ITEM
========================================================= */

function SpecItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        flex
        min-w-0
        items-center
        gap-3.5
      "
    >
      {/* ICON — NO BOX / NO BORDER */}
      <span
        className="
          flex
          shrink-0
          items-center
          justify-center
          text-[#00A8E8]

          [&>svg]:h-[19px]
          [&>svg]:w-[19px]
          [&>svg]:stroke-[1.5]

          sm:[&>svg]:h-[20px]
          sm:[&>svg]:w-[20px]

          transition-transform
          duration-300
          group-hover:scale-[1.06]
        "
      >
        {icon}
      </span>

      {/* TEXT */}
      <div className="min-w-0">
        <span
          className="
            block
            font-[var(--font-body)]
            text-[10px]
            font-semibold
            uppercase
            leading-none
            tracking-[0.14em]
            text-white/42
          "
        >
          {label}
        </span>

        <span
          className="
            mt-[7px]
            block
            truncate
            font-[var(--font-body)]
            text-[13px]
            font-medium
            leading-none
            text-white/90
          "
        >
          {value}
        </span>
      </div>
    </div>
  );
}