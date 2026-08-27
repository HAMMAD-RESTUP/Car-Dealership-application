"use client";

import { useRef } from "react";
import Image from "next/image";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowUpRight,
  CalendarDays,
  Gauge,
  Fuel,
} from "lucide-react";

/* ============================================================
   VEHICLES
============================================================ */

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
  {
    name: "Lamborghini Aventador",
    subtitle: "6.5 V12 LP 780-4 Ultimae",
    image: "/images/cars/Lamborghini.jpeg",
    price: "£420,000",
    year: "2022",
    mileage: "3,500 miles",
    fuel: "Petrol",
    badge: "Low Mileage",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   CAR CARD
============================================================ */

function CarCard({
  car,
  index,
}: {
  car: (typeof cars)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 32,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-70px",
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        delay: reduceMotion ? 0 : index * 0.08,
        ease,
      }}
      className="
        group
        relative
      "
    >
      {/* ========================================================
          IMAGE
      ========================================================= */}

      <a
        href="#"
        aria-label={`View ${car.name}`}
        className="
          relative
          block
          overflow-hidden
          rounded-[6px]
          bg-[#14171A]
        "
      >
        <div
          className="
            relative
            aspect-[1.28/1]
            w-full

            sm:aspect-[1.34/1]

            lg:aspect-[1.30/1]
          "
        >
          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.025,
                  }
            }
            transition={{
              duration: 0.8,
              ease,
            }}
            className="
              absolute
              inset-0
            "
          >
            <Image
              src={car.image}
              alt={car.name}
              fill
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 1023px) 50vw,
                25vw
              "
              className="
                object-cover
                object-center
              "
            />
          </motion.div>

          {/* Very light natural image grading */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,transparent_42%,rgba(0,0,0,0.20)_100%)]
            "
          />

          {/* Badge */}

          <span
            className="
              absolute
              left-4
              top-4

              rounded-full

              border
              border-white/15

              bg-black/30

              px-3
              py-1.5

              font-sans

              text-[8px]
              font-medium

              tracking-[0.08em]

              text-white/85

              backdrop-blur-md
            "
          >
            {car.badge}
          </span>

          {/* Hover arrow */}

          <div
            className="
              absolute
              bottom-4
              right-4

              flex
              h-9
              w-9

              translate-y-2
              items-center
              justify-center

              rounded-full

              bg-[#F1EFEA]

              text-[#101214]

              opacity-0

              transition-all
              duration-500

              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <ArrowUpRight
              strokeWidth={1.5}
              className="
                h-[15px]
                w-[15px]
              "
            />
          </div>
        </div>
      </a>

      {/* ========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          pb-1
          pt-5
        "
      >
        {/* Name + price */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-5
          "
        >
          <div className="min-w-0">
            <h3
              className="
                font-sans

                text-[15px]
                font-medium

                leading-[1.2]

                tracking-[-0.025em]

                text-[#F0EEE9]

                lg:text-[14px]

                xl:text-[15px]
              "
            >
              {car.name}
            </h3>

            <p
              className="
                mt-2

                font-sans

                text-[10px]
                font-normal

                leading-[1.55]

                text-[#858A8E]

                xl:text-[11px]
              "
            >
              {car.subtitle}
            </p>
          </div>

          <p
            className="
              shrink-0

              font-serif

              text-[18px]
              font-normal

              leading-none

              tracking-[-0.02em]

              text-[#F0EEE9]

              xl:text-[20px]
            "
          >
            {car.price}
          </p>
        </div>

        {/* Specs */}

        <div
          className="
            mt-5

            flex
            flex-wrap
            items-center

            gap-x-5
            gap-y-2

            border-t
            border-white/[0.07]

            pt-4
          "
        >
          <div
            className="
              flex
              items-center
              gap-2

              font-sans

              text-[9px]
              font-normal

              text-[#7E8387]
            "
          >
            <CalendarDays
              strokeWidth={1.3}
              className="
                h-[12px]
                w-[12px]

                text-[#687078]
              "
            />

            {car.year}
          </div>

          <div
            className="
              flex
              items-center
              gap-2

              font-sans

              text-[9px]
              font-normal

              text-[#7E8387]
            "
          >
            <Gauge
              strokeWidth={1.3}
              className="
                h-[12px]
                w-[12px]

                text-[#687078]
              "
            />

            {car.mileage}
          </div>

          <div
            className="
              flex
              items-center
              gap-2

              font-sans

              text-[9px]
              font-normal

              text-[#7E8387]
            "
          >
            <Fuel
              strokeWidth={1.3}
              className="
                h-[12px]
                w-[12px]

                text-[#687078]
              "
            />

            {car.fuel}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ============================================================
   FEATURED VEHICLES
============================================================ */

export default function CarListing() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  /* ============================================================
     SCROLL PROGRESS

     Featured naturally travels from viewport bottom -> top.

     No scale on entire section.
     No Y transform on entire section.
  ============================================================ */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 30,
    mass: 0.3,
  });

  /* ============================================================
     PANEL TOP EDGE
  ============================================================ */

  const topRadius = useTransform(
    smoothProgress,
    [0, 0.45, 0.82, 1],
    ["30px", "24px", "10px", "0px"]
  );

  /* ============================================================
     INTERNAL MOTION
  ============================================================ */

  const headerY = useTransform(
    smoothProgress,
    [0, 0.45, 1],
    [34, 14, 0]
  );

  const headerOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.52],
    [0.35, 0.7, 1]
  );

  return (
    <motion.section
      ref={sectionRef}
      id="stock"
      style={
        reduceMotion
          ? undefined
          : {
              borderTopLeftRadius: topRadius,
              borderTopRightRadius: topRadius,
            }
      }
      className="
        relative
        z-20

        w-full
        min-h-screen

        overflow-hidden

        bg-[#0B0D0F]

        py-20

        sm:py-24

        lg:py-28

        xl:py-32
      "
    >
      {/* ========================================================
          CLEAN BACKGROUND
          
          No blue glow
          No radial cyber gradient
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0

          bg-[linear-gradient(180deg,#0B0D0F_0%,#0D1012_42%,#0B0D0F_100%)]
        "
      />

      {/* ========================================================
          VERY SUBTLE TOP SEPARATOR
      ========================================================= */}

      <div
        className="
          pointer-events-none

          absolute
          inset-x-0
          top-0
          z-[2]

          h-px

          bg-white/[0.06]
        "
      />

      {/* ========================================================
          WRAPPER
      ========================================================= */}

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
        {/* ======================================================
            SECTION HEADER
        ======================================================= */}

        <motion.div
          style={
            reduceMotion
              ? undefined
              : {
                  y: headerY,
                  opacity: headerOpacity,
                }
          }
          className="
            mb-10

            flex
            items-end
            justify-between

            sm:mb-12

            lg:mb-14
          "
        >
          {/* LEFT */}

          <div>
            {/* Small editorial label */}

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
                  w-7

                  bg-[#8499A8]
                "
              />

              <span
                className="
                  font-sans

                  text-[9px]
                  font-medium
                  uppercase

                  tracking-[0.14em]

                  text-[#8A9298]
                "
              >
                Selected Stock
              </span>
            </div>

            {/* Main heading */}

            <h2
              className="
                max-w-[760px]

                font-serif

                text-[34px]
                font-normal

                leading-[1]

                tracking-[-0.035em]

                text-[#F1EFEA]

                sm:text-[40px]

                md:text-[46px]

                lg:text-[52px]

                xl:text-[56px]
              "
            >
              Featured Vehicles
            </h2>

            <p
              className="
                mt-4

                max-w-[480px]

                font-sans

                text-[12px]
                font-normal

                leading-[1.7]

                text-[#858A8E]

                sm:text-[13px]
              "
            >
              A considered selection of exceptional vehicles,
              prepared and presented to our highest standards.
            </p>
          </div>

          {/* DESKTOP CTA */}

          <a
            href="#"
            className="
              group

              hidden

              items-center
              gap-3

              border-b
              border-white/15

              pb-2

              font-sans

              text-[10px]
              font-medium

              tracking-[0.02em]

              text-[#C5C4BF]

              transition-colors
              duration-300

              hover:border-white/50
              hover:text-white

              sm:flex
            "
          >
            View all vehicles

            <ArrowUpRight
              strokeWidth={1.4}
              className="
                h-[14px]
                w-[14px]

                transition-transform
                duration-300

                group-hover:-translate-y-[2px]
                group-hover:translate-x-[2px]
              "
            />
          </a>
        </motion.div>

        {/* ======================================================
            DIVIDER
        ======================================================= */}

        <div
          className="
            mb-8
            h-px
            w-full

            bg-white/[0.07]

            sm:mb-10
          "
        />

        {/* ======================================================
            VEHICLE GRID
        ======================================================= */}

        <div
          className="
            grid
            grid-cols-1

            gap-x-5
            gap-y-12

            sm:grid-cols-2
            sm:gap-x-6
            sm:gap-y-14

            lg:grid-cols-4
            lg:gap-x-5

            xl:gap-x-7
          "
        >
          {cars.map((car, index) => (
            <CarCard
              key={car.name}
              car={car}
              index={index}
            />
          ))}
        </div>

        {/* ======================================================
            BOTTOM EDITORIAL CTA
        ======================================================= */}

        <div
          className="
            mt-16

            flex
            items-center
            justify-between

            border-t
            border-white/[0.07]

            pt-7

            sm:mt-20

            lg:mt-24
          "
        >
          <p
            className="
              max-w-[460px]

              font-serif

              text-[18px]
              font-normal

              leading-[1.35]

              tracking-[-0.02em]

              text-[#C7C5BF]

              sm:text-[20px]
            "
          >
            Looking for something particular?
            <span className="text-[#747A7E]">
              {" "}
              We can help source it.
            </span>
          </p>

          <a
            href="#"
            className="
              group

              hidden

              h-[46px]

              items-center
              justify-center
              gap-3

              rounded-[3px]

              bg-[#E7E4DE]

              px-5

              font-sans

              text-[10px]
              font-medium

              text-[#111315]

              transition-colors
              duration-300

              hover:bg-white

              sm:flex
            "
          >
            Explore Stock

            <ArrowUpRight
              strokeWidth={1.4}
              className="
                h-[14px]
                w-[14px]

                transition-transform
                duration-300

                group-hover:-translate-y-[2px]
                group-hover:translate-x-[2px]
              "
            />
          </a>
        </div>

        {/* ======================================================
            MOBILE CTA
        ======================================================= */}

        <a
          href="#"
          className="
            mt-8

            flex
            h-[48px]
            w-full

            items-center
            justify-between

            rounded-[3px]

            bg-[#E7E4DE]

            px-5

            font-sans

            text-[10px]
            font-medium

            text-[#111315]

            sm:hidden
          "
        >
          View all vehicles

          <ArrowUpRight
            strokeWidth={1.4}
            className="
              h-[14px]
              w-[14px]
            "
          />
        </a>
      </div>
    </motion.section>
  );
}