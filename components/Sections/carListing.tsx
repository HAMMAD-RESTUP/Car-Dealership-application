"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  CalendarDays,
  Gauge,
  Settings2,
  ArrowUpRight,
} from "lucide-react";

const cars = [
  {
    name: "Ferrari 488 GTB",
    image: "/images/cars/ferrari.jpeg",
    price: "£175,000",
    year: "2023",
    mileage: "2,500 Miles",
    transmission: "Automatic",
    position: "center center",
  },
  {
    name: "Porsche 911 Turbo S",
    image: "/images/cars/porsche.jpeg",
    price: "£125,000",
    year: "2022",
    mileage: "8,900 Miles",
    transmission: "Automatic",
    position: "center center",
  },
  {
    name: "Rolls Royce Cullinan",
    image: "/images/cars/Rolls Royce Cullinan.jpeg",
    price: "£325,000",
    year: "2023",
    mileage: "5,200 Miles",
    transmission: "Automatic",
    position: "center center",
  },
  {
    name: "Lamborghini Aventador",
    image: "/images/cars/Lamborghini.jpeg",
    price: "£420,000",
    year: "2022",
    mileage: "3,500 Miles",
    transmission: "Automatic",
    position: "center center",
  },
];

/* =========================================================
   CAR CARD
========================================================= */

function CarCard({ car, index }:any) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "center 62%"],
  });

  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    [90, 0]
  );

  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 0.45, 1]
  );

  const cardScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.94, 1]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.1, 1]
  );

  return (
    <motion.article
      ref={ref}
      style={{
        y: cardY,
        opacity: cardOpacity,
        scale: cardScale,
      }}
      className="
        group
        relative
        min-w-0
        overflow-hidden

        rounded-[22px]

        border
        border-white/[0.08]

        bg-[linear-gradient(145deg,#17191b_0%,#0e0f10_55%,#090a0b_100%)]

        shadow-[0_25px_70px_rgba(0,0,0,0.35)]

        transition-all
        duration-500

        hover:-translate-y-[5px]
        hover:border-[#5788B5]/40
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.5)]
      "
    >
      {/* subtle upper reflection */}
      <div
        className="
          pointer-events-none
          absolute
          left-[12%]
          top-0
          z-30

          h-px
          w-[55%]

          bg-gradient-to-r
          from-transparent
          via-white/[0.18]
          to-transparent
        "
      />

      {/* =================================================
          IMAGE
      ================================================== */}

      <div
        className="
          relative
          aspect-[16/10]
          w-full
          overflow-hidden

          bg-[#111315]

          sm:aspect-[16/11]

          lg:aspect-[16/10]
      "
      >
        {/* blurred cinematic background */}
        <Image
          src={car.image}
          alt=""
          fill
          aria-hidden="true"
          className="
            scale-110
            object-cover
            opacity-[0.28]
            blur-[22px]
          "
        />

        {/* graphite shading */}
        <div
          className="
            absolute
            inset-0
            z-[1]

            bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.30)_100%)]
          "
        />

        {/* ACTUAL FULL CAR */}
        <motion.div
          style={{
            scale: imageScale,
          }}
          className="
            absolute
            inset-2
            z-10

            sm:inset-3
            lg:inset-4
          "
        >
          <Image
            src={car.image}
            alt={car.name}
            fill
            sizes="
              (max-width: 639px) 100vw,
              (max-width: 1279px) 50vw,
              33vw
            "
            className="
              object-contain
            "
            style={{
              objectPosition: car.position,
            }}
          />
        </motion.div>

        {/* bottom depth */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-20
            h-[26%]

            bg-gradient-to-t
            from-black/30
            to-transparent
          "
        />
      </div>

      {/* =================================================
          CARD DETAILS
      ================================================== */}

      <div className="p-5 sm:p-6">
        {/* NAME */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#7FA2C3]
              "
            >
              M Cars Collection
            </span>

            <h3
              className="
                mt-2
                text-[19px]
                font-medium
                leading-[1.1]
                tracking-[-0.045em]
                text-white

                sm:text-[21px]
                lg:text-[22px]
              "
            >
              {car.name}
            </h3>
          </div>

          <span
            className="
              pt-1
              text-[9px]
              font-medium
              tracking-[0.1em]
              text-white/20
            "
          >
            0{index + 1}
          </span>
        </div>

        {/* PRICE */}
        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <div>
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.13em]
                text-white/30
              "
            >
              Asking Price
            </p>

            <p
              className="
                mt-1
                text-[23px]
                font-semibold
                tracking-[-0.05em]
                text-white

                sm:text-[25px]
              "
            >
              {car.price}
            </p>
          </div>

          <a
            href="#"
            aria-label={`View ${car.name}`}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center

              rounded-full

              border
              border-white/[0.12]

              bg-white/[0.025]

              text-white

              transition-all
              duration-300

              group-hover:border-[#5788B5]
              group-hover:bg-[#5788B5]
            "
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* =================================================
            SPECS
        ================================================== */}

        <div
          className="
            mt-5
            grid
            grid-cols-3
            gap-3

            border-t
            border-white/[0.08]

            pt-4
          "
        >
          {/* YEAR */}
          <div className="min-w-0">
            <CalendarDays
              strokeWidth={1.4}
              className="
                mb-2
                h-[15px]
                w-[15px]
                text-[#5788B5]
              "
            />

            <span
              className="
                block
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-white/30
              "
            >
              Year
            </span>

            <p
              className="
                mt-1
                text-[11px]
                font-medium
                text-white/70
              "
            >
              {car.year}
            </p>
          </div>

          {/* MILEAGE */}
          <div className="min-w-0">
            <Gauge
              strokeWidth={1.4}
              className="
                mb-2
                h-[15px]
                w-[15px]
                text-[#5788B5]
              "
            />

            <span
              className="
                block
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-white/30
              "
            >
              Mileage
            </span>

            <p
              className="
                mt-1
                truncate
                text-[11px]
                font-medium
                text-white/70
              "
            >
              {car.mileage}
            </p>
          </div>

          {/* GEARBOX */}
          <div className="min-w-0">
            <Settings2
              strokeWidth={1.4}
              className="
                mb-2
                h-[15px]
                w-[15px]
                text-[#5788B5]
              "
            />

            <span
              className="
                block
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-white/30
              "
            >
              Gearbox
            </span>

            <p
              className="
                mt-1
                truncate
                text-[11px]
                font-medium
                text-white/70
              "
            >
              {car.transmission}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function CarListing() {
  const headingRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start 95%", "center 62%"],
  });

  /* Heading now smaller but animation remains strong */
  const headingY = useTransform(
    scrollYProgress,
    [0, 1],
    [85, 0]
  );

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 0.5, 1]
  );

  const headingScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.92, 1]
  );

  const headingBlur = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["blur(9px)", "blur(0px)"]
  );

  const eyebrowY = useTransform(
    scrollYProgress,
    [0, 1],
    [25, 0]
  );

  const eyebrowOpacity = useTransform(
    scrollYProgress,
    [0, 0.45],
    [0, 1]
  );

  return (
    <section
      id="stock"
      className="
        relative
        overflow-hidden

        bg-[radial-gradient(circle_at_48%_0%,rgba(145,145,145,0.12),transparent_25%),radial-gradient(circle_at_8%_45%,rgba(95,95,95,0.07),transparent_25%),radial-gradient(circle_at_95%_80%,rgba(65,65,65,0.08),transparent_28%),linear-gradient(180deg,#050505_0%,#111214_35%,#090a0b_68%,#050505_100%)]

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* graphite light */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[150px]

          h-[600px]
          w-[1000px]
          max-w-[90vw]

          -translate-x-1/2

          rounded-full

          bg-white/[0.02]

          blur-[180px]
        "
      />

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1700px]

          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =================================================
            SECTION INTRO
        ================================================== */}

        <div
          ref={headingRef}
          className="
            mb-12
            overflow-hidden

            sm:mb-14
            lg:mb-16
          "
        >
          <motion.div
            style={{
              y: eyebrowY,
              opacity: eyebrowOpacity,
            }}
            className="
              mb-4
              flex
              items-center
              gap-3
            "
          >
            <span className="h-px w-8 bg-[#5788B5]" />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#7FA2C3]
              "
            >
              The Collection
            </span>
          </motion.div>

          <div className="overflow-hidden py-2">
            <motion.h2
              style={{
                y: headingY,
                opacity: headingOpacity,
                scale: headingScale,
                filter: headingBlur,
              }}
              className="
                text-[38px]
                font-semibold
                leading-[0.95]
                tracking-[-0.065em]
                text-[#F2F3F3]

                sm:text-[46px]
                md:text-[54px]
                lg:text-[64px]
                xl:text-[72px]
              "
            >
              Featured Vehicles
            </motion.h2>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
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
              delay: 0.15,
            }}
            className="
              mt-5
              max-w-[580px]

              text-[13px]
              leading-6
              text-white/40

              sm:text-[14px]
            "
          >
            An exclusive selection of exceptional vehicles, carefully
            chosen for their condition, specification and presence.
          </motion.p>
        </div>

        {/* =================================================
            RESPONSIVE GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-7

            md:grid-cols-2

            xl:grid-cols-3
            xl:gap-8
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
      </div>
    </section>
  );
}