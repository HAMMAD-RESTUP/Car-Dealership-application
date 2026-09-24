"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Sun,
  CarFront,
  Sparkles,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Car = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  price: string;
  year: string;
  mileage: string;
  fuel: string;
  colour: string;
  colourHex: string;
  // Total registered owners/keepers, not the number of previous owners.
  numberOfOwners?: number;
  // Set this only when a stock editor has verified the chosen badge.
  featuredFeature?: string;
  // Add only verified equipment or claims, e.g. "Sunroof" or "Low mileage".
  features?: string[];
  priceRating?: "Fair price" | "Low price";
};

function standoutFeature(car: Car): string | undefined {
  if (car.featuredFeature?.trim()) return car.featuredFeature.trim();

  const features = car.features ?? [];
  const details = [car.subtitle, ...features].join(" ");
  const hasFeature = (pattern: RegExp) =>
    features.some((feature) => pattern.test(feature.trim()));

  // Pick one buyer-facing fact; do not infer ownership or equipment.
  if (/\b(?:panoramic|pan)[\s-]?roof\b/i.test(details)) return "Panoramic Roof";
  if (/\bsun[\s-]?roof\b/i.test(details)) return "Sunroof";
  if (
    car.numberOfOwners === 1 ||
    hasFeature(/^(?:1st|1|one)[\s-]?(?:owner|keeper)$/i)
  ) return "1 Owner";
  if (hasFeature(/^low[\s-]?mileage$/i)) return "Low Mileage";
  if (/\bfull (?:dealer )?service history\b/i.test(details))
    return "Full Service History";
  if (/\b7[\s-]?seat(?:er|s)?\b/i.test(details)) return "7 Seats";
  if (/\bheated (?:front )?seats?\b/i.test(details))
    return "Heated Seats";
  if (/\b(?:4wd|4matic|quattro|4motion|xdrive|awd)\b/i.test(details))
    return "All-Wheel Drive";

  // Show a precise mileage figure without assuming "Low Mileage".
  const miles = Number(car.mileage.replace(/,/g, ""));
  if (Number.isFinite(miles) && miles > 0 && miles < 50_000)
    return `${miles.toLocaleString("en-GB")} Miles`;

  if (/\bm sport\b/i.test(details)) return "M Sport";
  if (/\b(?:automatic|auto|dsg|s[\s-]?tronic|g[\s-]?tronic|7g-dct|steptronic)\b/i.test(
    car.subtitle,
  )) return "Automatic";
  if (/\belectric\b/i.test(car.fuel)) return "Electric";
  if (/\bhybrid\b/i.test(car.fuel)) return "Hybrid";
  return undefined;
}

function FeatureIcon({ label }: { label: string }) {
  const text = label.toLowerCase();
  if (text.includes("mileage") || text.includes("miles"))
    return <Gauge size={14} strokeWidth={2} className="shrink-0 text-[#56CEF9]" />;
  if (text.includes("roof"))
    return <Sun size={14} strokeWidth={2} className="shrink-0 text-[#56CEF9]" />;
  if (text.includes("drive") || text.includes("automatic"))
    return <CarFront size={14} strokeWidth={2} className="shrink-0 text-[#56CEF9]" />;
  return <Sparkles size={14} strokeWidth={2} className="shrink-0 text-[#56CEF9]" />;
}

const cars: Car[] = [
  {
    id: "mazda-cx5-2016",
    name: "Mazda CX-5",
    subtitle: "2.2 SKYACTIV-D Sport Nav 4WD Euro 6 (s/s) 5dr",
    image: "/images/cars/mazda-cx-5.jpg",
    price: "£5,995",
    year: "2016",
    mileage: "82,000",
    fuel: "Diesel",
    colour: "White",
    colourHex: "#ffffff",
    priceRating: "Fair price",
  },
  {
    id: "volkswagen-golf-gti-2010",
    name: "Volkswagen Golf",
    subtitle: "2.0 TSI GTI DSG Euro 5 5dr",
    image: "/images/cars/Volkswagen-Golf.jpg",
    price: "£9,250",
    year: "2010",
    mileage: "35,000",
    fuel: "Petrol",
    colour: "Silver",
    colourHex: "#C0C0C0",
  },
  {
    id: "bmw-520i-2012",
    name: "BMW 5 Series",
    subtitle: "2.0 520i M Sport Touring Steptronic Euro 5 (s/s) 5dr",
    image: "/images/cars/BMW-5-Series.jpg",
    price: "£11,995",
    year: "2012",
    mileage: "42,000",
    fuel: "Petrol",
    colour: "White",
    colourHex: "#ffffff",
    features: ["Low mileage"],
    priceRating: "Low price",
  },
  {
    id: "volkswagen-golf-2017",
    name: "Volkswagen Golf",
    // TODO: Replace this supplied placeholder; a 6.5 V12 is not a Golf specification.
    subtitle: "6.5 V12 LP770-4 ISR Coupe",
    image: "/images/cars/Volkswagen-Golf-2.jpg",
    price: "£11,995",
    year: "2017",
    mileage: "46,000",
    fuel: "Petrol",
    colour: "Black",
    colourHex: "#000000",
  },
  {
    id: "mercedes-a250-2016",
    name: "Mercedes-Benz A Class",
    subtitle: "2.0 A250 AMG (Premium) 7G-DCT 4MATIC Euro 6 (s/s) 5dr",
    image: "/images/cars/Mercedes-Benz-A-class.jpg",
    price: "£12,450",
    year: "2016",
    mileage: "52,000",
    fuel: "Petrol",
    colour: "Black",
    colourHex: "#000000",
  },
  {
    id: "bmw-m135i-2015",
    name: "BMW 1 Series",
    subtitle: "3.0 M135i Auto Euro 6 (s/s) 5dr",
    image: "/images/cars/BMW-Series-1.jpg",
    price: "£13,495",
    year: "2015",
    mileage: "80,000",
    fuel: "Petrol",
    colour: "White",
    colourHex: "#ffffff",
  },
  {
    id: "bmw-535i-2013",
    name: "BMW 5 Series",
    subtitle: "3.0 535i M Sport Touring Auto Euro 6 (s/s) 5dr",
    image: "/images/cars/BMW-series-5.jpg",
    price: "£13,995",
    year: "2013",
    mileage: "52,000",
    fuel: "Petrol",
    colour: "White",
    colourHex: "#ffffff",
  },
  {
    id: "toyota-estima-2014",
    name: "Toyota Estima",
    subtitle: "2.4 HYBRID AUTOMATIC PAN-ROOF 7 SEATS 5dr",
    image: "/images/cars/Toyota-Estima.jpg",
    price: "£13,995",
    year: "2014",
    mileage: "27,000",
    fuel: "Petrol Hybrid",
    colour: "Silver",
    colourHex: "#C0C0C0",
  },
  {
    id: "audi-s5-2013",
    name: "Audi S5",
    subtitle: "3.0 TFSI V6 Sportback 5dr Petrol S Tronic quattro Euro 6 (s/s) (333 ps)",
    image: "/images/cars/Audi-S5.jpg",
    price: "£14,250",
    year: "2013",
    mileage: "39,000",
    fuel: "Petrol",
    colour: "Black",
    colourHex: "#000000",
  },
  {
    id: "volkswagen-golf-r-2011",
    name: "Volkswagen Golf",
    subtitle: "2.0 TSI R Hatchback 5dr Petrol DSG 4Motion Euro 5 (270 ps)",
    image: "/images/cars/Volkswagen-Golf-3.jpg",
    price: "£14,895",
    year: "2011",
    mileage: "48,000",
    fuel: "Petrol",
    colour: "White",
    colourHex: "#ffffff",
  },
  {
    id: "audi-s3-2014",
    name: "Audi S3",
    subtitle: "2.0 TFSI Sportback S Tronic quattro Euro 6 (s/s) 5dr",
    image: "/images/cars/Audi-S3.jpg",
    price: "£15,750",
    year: "2014",
    mileage: "38,000",
    fuel: "Petrol",
    colour: "Blue",
    colourHex: "#0000FF",
  },
];

export default function CarListing() {
  const reduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCars = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-car-card]");
    if (!card) return;

    container.scrollBy({
      left: direction === "left" ? -(card.offsetWidth + 24) : card.offsetWidth + 24,
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
            DESKTOP CAROUSEL — 4 / 5 VISIBLE CARDS
        ====================================================== */}

        <div className="relative hidden lg:block">
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
              rounded-full
              border
              border-white/[0.10]
              bg-[#0A0F15]/90
              text-white
              shadow-[0_10px_28px_rgba(0,0,0,0.35)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#00A8E8]/55
              hover:bg-[#0D1720]
              hover:text-[#00A8E8]
            "
          >
            <ChevronLeft size={21} strokeWidth={1.6} />
          </button>

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
              rounded-full
              border
              border-white/[0.10]
              bg-[#0A0F15]/90
              text-white
              shadow-[0_10px_28px_rgba(0,0,0,0.35)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#00A8E8]/55
              hover:bg-[#0D1720]
              hover:text-[#00A8E8]
            "
          >
            <ChevronRight size={21} strokeWidth={1.6} />
          </button>

          <div
            ref={scrollRef}
            role="region"
            aria-label="Featured vehicle carousel"
            tabIndex={0}
            className="
              flex
              snap-x
              snap-mandatory
              gap-6
              overflow-x-auto
              pb-3
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {cars.map((car, index) => (
              <VehicleCard
                key={car.id}
                car={car}
                index={index}
                reduceMotion={!!reduceMotion}
                desktop
              />
            ))}
          </div>
        </div>

        {/* MOBILE / TABLET GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {cars.map((car, index) => (
            <VehicleCard
              key={car.id}
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
  car: Car;
  index: number;
  reduceMotion: boolean;
  desktop?: boolean;
}) {
  const standout = standoutFeature(car);
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
        flex
        min-w-0
        flex-col
        overflow-hidden
        rounded-[10px]
        border
        border-white/[0.09]
        bg-[linear-gradient(180deg,#111922_0%,#0D141D_100%)]
        shadow-[0_14px_38px_rgba(0,0,0,0.16)]
        transition-all
        duration-300
        hover:-translate-y-[3px]
        hover:border-[#31556A]
        ${
          desktop
            ? "max-w-[325px] shrink-0 snap-start lg:w-[calc(25%_-_18px)] min-[1500px]:w-[calc(20%_-_19.2px)]"
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
          aspect-[1.68/1]
          overflow-hidden
          bg-[#17222E]
        "
      >
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, (max-width: 1499px) 25vw, 20vw"
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
            from-[#030A12]/55
            via-transparent
            to-transparent
          "
        />

        {/* VERIFIED VEHICLE HIGHLIGHT */}
        {standout && (
          <span
            className="
              absolute
              left-0
              top-0
              z-10
              inline-flex
              max-w-[calc(100%-16px)]
              items-center
              gap-1.5
              rounded-br-[8px]
              border-b
              border-r
              border-[#35566B]
              border-l-[4px]
              border-l-[#00A8E8]
              bg-[linear-gradient(135deg,#12344A_0%,#0A1D2B_100%)]
              px-2.5
              py-2
              font-[var(--font-body)]
              text-[11px]
              font-extrabold
              leading-none
              tracking-[0.01em]
              text-[#F2FAFF]
              shadow-[6px_8px_22px_rgba(0,11,18,0.56)]
            "
          >
            <FeatureIcon label={standout} />
            <span className="truncate">{standout}</span>
          </span>
        )}
      </a>

      {/* =====================================================
          CARD CONTENT
      ====================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          px-4
          pb-4
          pt-4
        "
      >
        <h3
          className="
            font-[var(--font-display)]
            text-[18px]
            font-semibold
            leading-[1.2]
            tracking-[-0.025em]
            text-white
            transition-colors
            duration-300
            group-hover:text-[#00A8E8]
          "
        >
          {car.name}
        </h3>

        {/* DESCRIPTION + PRICE RATING */}
        <div className="mt-2 grid min-h-[44px] grid-cols-[minmax(0,1fr)_auto] items-start gap-2">
          <p
            className="
              min-w-0
              font-[var(--font-body)]
              text-[11px]
              leading-[1.5]
              text-white/55
            "
          >
            {car.subtitle}
          </p>
          {car.priceRating && (
            <span
              className={`
                inline-flex
                min-h-[26px]
                shrink-0
                items-center
                justify-center
                whitespace-nowrap
                rounded-full
                border
                px-2
                py-1
                font-[var(--font-body)]
                text-[10px]
                font-extrabold
                leading-[1.35]
                shadow-[0_7px_16px_rgba(0,0,0,0.20)]
                ${
                  car.priceRating === "Fair price"
                    ? "border-[#F0BF58] bg-[#E2A82F] text-[#171005]"
                    : "border-[#36BDE9] bg-[#008FCB] text-white"
                }
              `}
            >
              {car.priceRating}
            </span>
          )}
        </div>

        {/* =====================================================
            INLINE VEHICLE DETAILS
        ====================================================== */}

        <div
          className="
            mb-4
            mt-3
            flex
            min-h-[28px]
            flex-wrap
            items-center
            gap-2
          "
        >
          <span
            className="
              inline-flex
              min-h-[28px]
              items-center
              gap-1.5
              rounded-[4px]
              border
              border-[#536273]
              bg-[#101A24]
              px-2
              py-1
              font-[var(--font-body)]
              text-[10px]
              font-bold
              leading-[1.4]
              text-white
            "
            aria-label={car.colour}
          >
            <i
              aria-hidden="true"
              className="h-3.5 w-3.5 min-w-[14px] rounded-full border-2 border-white shadow-[0_0_0_1px_#536273]"
              style={{ backgroundColor: car.colourHex }}
            />
            {car.colour}
          </span>

          <span className="inline-flex min-h-[28px] items-center rounded-[4px] border border-white/[0.07] bg-[#172330] px-2 py-1 font-[var(--font-body)] text-[10px] leading-[1.4] text-[#C2D1E3]">
            {car.mileage} miles
          </span>

          <span className="inline-flex min-h-[28px] items-center rounded-[4px] border border-white/[0.07] bg-[#172330] px-2 py-1 font-[var(--font-body)] text-[10px] leading-[1.4] text-[#C2D1E3]">
            {car.year}
          </span>
        </div>

        {/* =====================================================
            PRICE + VIEW DETAILS
        ====================================================== */}

        <div
          className="
            mt-auto
            flex
            flex-wrap
            items-center
            justify-between
            gap-3
            border-t
            border-white/[0.08]
            pt-4
          "
        >
          <div>
            <span className="mb-1.5 block font-[var(--font-body)] text-[9px] font-semibold uppercase tracking-[0.13em] text-[#8A9BAE]">
              Vehicle price
            </span>
            <strong className="font-[var(--font-body)] text-[20px] font-semibold leading-none tracking-[-0.025em] text-[#8DD6FF]">
              {car.price}
            </strong>
          </div>

          <a
            href="#contact"
            className="
              group/details
              inline-flex
              min-h-[36px]
              items-center
              justify-between
              gap-2
              border-b
              border-[#00A8E8]
              py-2
              font-[var(--font-body)]
              text-[11px]
              font-semibold
              text-white/90
              transition-colors
              duration-300
              hover:text-[#00A8E8]
            "
          >
            View details
            <ArrowUpRight
              size={16}
              strokeWidth={1.6}
              className="text-[#00A8E8] transition-transform duration-300 group-hover/details:-translate-y-0.5 group-hover/details:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
