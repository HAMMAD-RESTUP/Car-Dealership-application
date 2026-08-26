"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Gauge,
  Fuel,
} from "lucide-react";

const cars = [
  {
    name: "Ferrari 488 GTB",
    subtitle: "3.9 V8 GTB F1 DCT Euro 6",
    image: "/images/cars/ferrari.jpeg",
    price: "£175,000",
    year: "2023",
    mileage: "2,500 miles",
    fuel: "Petrol",
    badge: "LOW MILEAGE",
  },
  {
    name: "Porsche 911 Turbo S",
    subtitle: "3.7T 992 Turbo S PDK 4WD",
    image: "/images/cars/porsche.jpeg",
    price: "£125,000",
    year: "2022",
    mileage: "8,900 miles",
    fuel: "Petrol",
    badge: "ONE OWNER",
  },
  {
    name: "Rolls Royce Cullinan",
    subtitle: "6.75 V12 Auto 4WD Euro 6",
    image: "/images/cars/Rolls Royce Cullinan.jpeg",
    price: "£325,000",
    year: "2023",
    mileage: "5,200 miles",
    fuel: "Petrol",
    badge: "PREMIUM",
  },
  {
    name: "Lamborghini Aventador",
    subtitle: "6.5 V12 LP 780-4 Ultimae",
    image: "/images/cars/Lamborghini.jpeg",
    price: "£420,000",
    year: "2022",
    mileage: "3,500 miles",
    fuel: "Petrol",
    badge: "LOW MILEAGE",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function CarCard({
  car,
  index,
}: {
  car: (typeof cars)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
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
        delay: index * 0.07,
        ease,
      }}
      className="
        group
        relative

        overflow-hidden

        rounded-[7px]

        border
        border-white/[0.10]

        bg-[#0A1117]

        transition-all
        duration-500

        hover:-translate-y-[4px]
        hover:border-[#5788B5]/45
        hover:shadow-[0_22px_55px_rgba(0,0,0,0.32)]
      "
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div
        className="
          relative

          aspect-[16/9]
          w-full

          overflow-hidden

          bg-[#0C1217]
        "
      >
        {/* background fill */}

        <Image
          src={car.image}
          alt=""
          fill
          aria-hidden="true"
          className="
            scale-110
            object-cover

            opacity-30
            blur-[15px]
          "
        />

        {/* main car */}

        <motion.div
          whileHover={{
            scale: 1.035,
          }}
          transition={{
            duration: 0.55,
            ease,
          }}
          className="
            absolute
            inset-[7px]
            z-10
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
              object-contain
              object-center
            "
          />
        </motion.div>

        {/* image grading */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-20

            bg-gradient-to-t
            from-[#071018]/70
            via-transparent
            to-black/10
          "
        />

        {/* BADGE */}

        <span
          className="
            absolute
            left-3
            top-3
            z-30

            rounded-[3px]

            bg-[#5788B5]

            px-2.5
            py-[5px]

            font-sans

            text-[7px]
            font-bold

            uppercase
            tracking-[0.08em]

            text-white

            shadow-[0_5px_16px_rgba(87,136,181,0.25)]
          "
        >
          {car.badge}
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          px-4
          pb-4
          pt-4

          sm:px-[17px]
          sm:pb-[17px]
        "
      >
        {/* NAME */}

        <h3
          className="
            font-heading

            text-[15px]
            font-semibold

            uppercase

            leading-[1.2]

            tracking-[-0.025em]

            text-[#F1F4F6]

            lg:text-[14px]

            xl:text-[15px]
          "
        >
          {car.name}
        </h3>

        {/* MODEL */}

        <p
          className="
            mt-1.5

            min-h-[32px]

            font-sans

            text-[9px]
            font-medium

            leading-[1.55]

            text-white/44

            sm:text-[10px]
          "
        >
          {car.subtitle}
        </p>

        {/* =================================================
            SPECS
        ================================================== */}

        <div
          className="
            mt-3.5

            flex
            flex-wrap
            items-center

            gap-x-4
            gap-y-2
          "
        >
          <div
            className="
              flex
              items-center
              gap-1.5

              text-[8px]
              font-medium

              text-white/48
            "
          >
            <CalendarDays
              strokeWidth={1.5}
              className="
                h-[12px]
                w-[12px]

                text-white/35
              "
            />

            {car.year}
          </div>

          <div
            className="
              flex
              items-center
              gap-1.5

              text-[8px]
              font-medium

              text-white/48
            "
          >
            <Gauge
              strokeWidth={1.5}
              className="
                h-[12px]
                w-[12px]

                text-white/35
              "
            />

            {car.mileage}
          </div>

          <div
            className="
              flex
              items-center
              gap-1.5

              text-[8px]
              font-medium

              text-white/48
            "
          >
            <Fuel
              strokeWidth={1.5}
              className="
                h-[12px]
                w-[12px]

                text-white/35
              "
            />

            {car.fuel}
          </div>
        </div>

        {/* =================================================
            BOTTOM
        ================================================== */}

        <div
          className="
            mt-4

            flex
            items-end
            justify-between

            gap-3

            border-t
            border-white/[0.07]

            pt-4
          "
        >
          {/* PRICE */}

          <p
            className="
              font-heading

              text-[18px]
              font-semibold

              tracking-[-0.035em]

              text-[#69A2D2]

              sm:text-[19px]

              xl:text-[20px]
            "
          >
            {car.price}
          </p>

          {/* BUTTON */}

          <a
            href="#"
            className="
              group/button

              flex
              h-[34px]

              items-center
              justify-center
              gap-2

              rounded-[3px]

              border
              border-white/[0.16]

              bg-white/[0.02]

              px-3

              text-[8px]
              font-bold

              uppercase
              tracking-[0.04em]

              text-white/75

              transition-all
              duration-300

              hover:border-[#5788B5]/60
              hover:bg-[#5788B5]
              hover:text-white
            "
          >
            View Details

            <ArrowRight
              strokeWidth={1.5}
              className="
                h-[11px]
                w-[11px]

                transition-transform
                duration-300

                group-hover/button:translate-x-[2px]
              "
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function CarListing() {
  return (
    <section
      id="stock"
      className="
        relative
        overflow-hidden

        bg-[#071018]

        py-16

        sm:py-20

        lg:py-24
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

          bg-[radial-gradient(circle_at_50%_0%,rgba(87,136,181,0.08),transparent_30%),linear-gradient(180deg,#071018_0%,#09131B_45%,#071018_100%)]
        "
      />

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
          via-[#5788B5]/25
          to-transparent
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
        "
      >
        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mb-7

            flex
            items-end
            justify-between

            border-b
            border-white/[0.07]

            pb-5

            sm:mb-8
          "
        >
          {/* LEFT */}

          <div>
            <div
              className="
                mb-2.5

                flex
                items-center
                gap-2.5
              "
            >
              <span
                className="
                  h-px
                  w-6

                  bg-[#5788B5]
                "
              />

              <span
                className="
                  font-sans

                  text-[8px]
                  font-bold

                  uppercase
                  tracking-[0.17em]

                  text-[#7FA2C3]
                "
              >
                YM Motors Collection
              </span>
            </div>

            <h2
              className="
                font-serif

                text-[26px]
                font-normal

                leading-none

                tracking-[-0.03em]

                text-[#F1F3F4]

                sm:text-[30px]

                md:text-[34px]

                lg:text-[36px]
              "
            >
              Featured Vehicles
            </h2>
          </div>

          {/* VIEW ALL */}

          <a
            href="#"
            className="
              group

              hidden

              items-center
              gap-3

              pb-1

              font-sans

              text-[9px]
              font-bold

              uppercase
              tracking-[0.05em]

              text-white/58

              transition-colors
              duration-300

              hover:text-[#8FB3D4]

              sm:flex
            "
          >
            View All Stock

            <ArrowRight
              strokeWidth={1.5}
              className="
                h-[14px]
                w-[14px]

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </a>
        </motion.div>

        {/* =================================================
            VEHICLE GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1

            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-4
            lg:gap-4

            xl:gap-5
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

        {/* =================================================
            MOBILE VIEW ALL
        ================================================== */}

        <div
          className="
            mt-7
            flex
            justify-center

            sm:hidden
          "
        >
          <a
            href="#"
            className="
              flex
              h-[46px]

              items-center
              justify-center
              gap-3

              rounded-[4px]

              border
              border-white/[0.13]

              px-5

              text-[10px]
              font-bold

              uppercase
              tracking-[0.04em]

              text-white/75
            "
          >
            View All Stock

            <ArrowRight
              strokeWidth={1.5}
              className="
                h-[13px]
                w-[13px]
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}