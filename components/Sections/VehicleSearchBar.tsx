"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Search,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const makes = [
  "Any Make",
  "Toyota",
  "Honda",
  "Nissan",
  "Lexus",
  "Mazda",
  "Subaru",
  "Mitsubishi",
  "Suzuki",
];

const models = [
  "Any Model",
  "Land Cruiser",
  "Civic",
  "GT-R",
  "Skyline",
  "RX",
  "CX-5",
  "Impreza",
  "Outlander",
];

const maxPrices = [
  "Any Price",
  "£10,000",
  "£15,000",
  "£20,000",
  "£25,000",
  "£30,000",
  "£40,000",
  "£50,000",
  "£75,000",
  "£100,000+",
];

const minPrices = [
  "Any Price",
  "£5,000",
  "£10,000",
  "£15,000",
  "£20,000",
  "£25,000",
  "£30,000",
  "£40,000",
  "£50,000",
];

const bodyTypes = [
  "Any Body Type",
  "SUV",
  "Saloon",
  "Hatchback",
  "Coupe",
  "Estate",
  "Convertible",
  "MPV",
  "Pickup",
];

const fuelTypes = [
  "Any Fuel Type",
  "Petrol",
  "Diesel",
  "Hybrid",
  "Plug-in Hybrid",
  "Electric",
];

export default function VehicleSearchBar() {
  const [make, setMake] = useState("Any Make");
  const [model, setModel] = useState("Any Model");
  const [maxPrice, setMaxPrice] = useState("Any Price");
  const [minPrice, setMinPrice] = useState("Any Price");
  const [bodyType, setBodyType] = useState("Any Body Type");
  const [fuelType, setFuelType] = useState("Any Fuel Type");

  const handleSearch = () => {
    console.log({
      make,
      model,
      maxPrice,
      minPrice,
      bodyType,
      fuelType,
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.3,
        ease: EASE,
      }}
      className="
        relative
        w-full
        overflow-hidden

        rounded-t-[18px]

        border
        border-white/[0.18]

        bg-white/[0.06]

        px-3
        py-3

        shadow-[0_-25px_70px_rgba(0,0,0,0.55)]
        backdrop-blur-[28px]
        backdrop-saturate-[1.6]

        

        
        

        sm:px-5
        sm:py-4
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

          bg-[linear-gradient(180deg,rgba(11,13,15,0.48)_0%,rgba(17,22,29,0.34)_50%,rgba(11,13,15,0.44)_100%)]
        "
      />

      {/* =====================================================
          BLUE AMBIENCE
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-1/2

          h-[230px]
          w-[760px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#00A8E8]/[0.035]

          blur-[110px]
        "
      />

      {/* =====================================================
          TOP CYAN DETAIL LINE
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-0

          h-px
          w-full

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-[#00A8E8]/45
          to-transparent

          shadow-[0_0_14px_rgba(0,168,232,0.16)]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10">
        {/* ===================================================
            HEADER
        ==================================================== */}
        <div
          className="
            mb-4

            flex
            items-center
            justify-between

            sm:mb-5
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

                bg-gradient-to-r
                from-[#00A8E8]
                to-transparent

                sm:w-9
              "
            />

            <h3
              className="
                font-[var(--font-body)]

                text-[12px]
                font-semibold
                uppercase
                leading-none
                tracking-[0.12em]

                text-white

                sm:text-[13px]
              "
            >
              Find Your Next Car
            </h3>
          </div>


        </div>

        {/* ===================================================
            SEARCH GRID
        ==================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-3

            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-[1.08fr_1.08fr_1fr_1fr_1fr_1fr_160px]
            xl:gap-[8px]
          "
        >
          <SearchSelect
            label="Make"
            value={make}
            options={makes}
            onChange={setMake}
          />

          <SearchSelect
            label="Model"
            value={model}
            options={models}
            onChange={setModel}
          />

          <SearchSelect
            label="Max Price"
            value={maxPrice}
            options={maxPrices}
            onChange={setMaxPrice}
          />

          <SearchSelect
            label="Min Price"
            value={minPrice}
            options={minPrices}
            onChange={setMinPrice}
          />

          <SearchSelect
            label="Body Type"
            value={bodyType}
            options={bodyTypes}
            onChange={setBodyType}
          />

          <SearchSelect
            label="Fuel Type"
            value={fuelType}
            options={fuelTypes}
            onChange={setFuelType}
          />

          {/* =================================================
              SEARCH CTA
          ================================================== */}
          <motion.button
            type="button"
            onClick={handleSearch}
            whileHover={{
              y: -1,
            }}
            whileTap={{
              scale: 0.985,
            }}
            transition={{
              duration: 0.18,
            }}
            className="
              group
              relative

              flex
              min-h-[56px]
              items-center
              justify-center
              gap-[8px]

              overflow-hidden

              rounded-[4px]

              border
              border-[#41adff]/20

              bg-[#158ff3]

              px-4

              font-[var(--font-body)]

              text-[11px]
              font-semibold
              uppercase
              tracking-[0.055em]

              text-white

              shadow-[0_12px_35px_rgba(0,168,232,0.28)]

              transition-all
              duration-300

              hover:border-[#56b5ff]/35
              hover:bg-[#2a9fff]
              hover:shadow-[0_12px_30px_rgba(21,143,243,0.28)]

              sm:text-[12px]

              lg:col-span-3

              xl:col-span-1
            "
          >
            {/* subtle button shine */}
            <span
              className="
                pointer-events-none

                absolute
                inset-x-0
                top-0

                h-px

                bg-gradient-to-r
                from-transparent
                via-white/55
                to-transparent

                opacity-60
              "
            />

            <Search
              size={15}
              strokeWidth={1.8}
              className="
                relative
                z-10

                transition-transform
                duration-300

                group-hover:scale-110
              "
            />

            <span className="relative z-10">
              Search Cars
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   SEARCH SELECT
========================================================= */

interface SearchSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function SearchSelect({
  label,
  value,
  options,
  onChange,
}: SearchSelectProps) {
  return (
    <div
      className="
        group
        relative

        min-h-[56px]

        overflow-hidden

        rounded-[4px]

        border
        border-white/[0.20]

        bg-white/[0.06]

        backdrop-blur-[14px]

        transition-all
        duration-300

        hover:border-white/[0.22]
        hover:bg-[rgba(8,13,18,0.38)]

        focus-within:border-[#00A8E8]/55
        focus-within:bg-[rgba(8,13,18,0.46)]
        focus-within:shadow-[0_0_0_1px_rgba(0,168,232,0.06)]
      "
    >
      {/* =====================================================
          SUBTLE TOP HIGHLIGHT
      ====================================================== */}
      <span
        className="
          pointer-events-none

          absolute
          left-3
          right-3
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/[0.11]
          to-transparent

          transition-opacity
          duration-300

          group-hover:via-white/[0.18]
        "
      />

      {/* =====================================================
          LEFT ACTIVE ACCENT
      ====================================================== */}
      <span
        className="
          pointer-events-none

          absolute
          bottom-[9px]
          left-0
          top-[9px]

          w-px

          bg-[#00A8E8]

          opacity-0

          transition-opacity
          duration-300

          group-focus-within:opacity-80
        "
      />

      {/* =====================================================
          LABEL
      ====================================================== */}
      <span
        className="
          pointer-events-none

          absolute
          left-[15px]
          top-[9px]

          z-10

          font-[var(--font-body)]

          text-[9px]
          font-medium
          uppercase
          leading-none
          tracking-[0.07em]

          text-white/42

          transition-colors
          duration-300

          group-hover:text-white/52
          group-focus-within:text-[#7cc9ff]
        "
      >
        {label}
      </span>

      {/* =====================================================
          SELECT
      ====================================================== */}
      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        aria-label={label}
        className="
          relative
          z-[2]

          h-[62px]
          w-full

          cursor-pointer

          appearance-none

          bg-transparent

          pb-[7px]
          pl-[15px]
          pr-10
          pt-[23px]

          font-[var(--font-body)]

          text-[13px]
          font-semibold
          tracking-[-0.01em]

          text-white

          outline-none

          sm:text-[14px]
        "
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="
              bg-[#0B0D0F]

              text-[14px]

              text-white
            "
          >
            {option}
          </option>
        ))}
      </select>

      {/* =====================================================
          CHEVRON
      ====================================================== */}
      <span
        className="
          pointer-events-none

          absolute
          right-[13px]
          top-1/2

          z-10

          flex
          h-[26px]
          w-[26px]
          -translate-y-1/2
          items-center
          justify-center

          rounded-full

          bg-white/[0.025]

          text-white/45

          transition-all
          duration-300

          group-hover:bg-white/[0.05]
          group-hover:text-white/80

          group-focus-within:bg-[#00A8E8]/10
          group-focus-within:text-[#7cc9ff]
        "
      >
        <ChevronDown
          size={14}
          strokeWidth={1.6}
        />
      </span>
    </div>
  );
}