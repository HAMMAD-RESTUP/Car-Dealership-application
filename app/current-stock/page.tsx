"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Search,
  SlidersHorizontal,
  X,
  CarFront,
  Sparkles,
  Gauge,
  Sun,
} from "lucide-react";
import Image from "next/image";



interface Car {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  images?: string[];
  price: string;
  year: string;
  mileage: string;
  fuel: string;
  colour: string;
  // Optional exact swatch colour. Falls back to the colour name when omitted.
  colourHex?: string;
  gearbox?: string;
  bodyType?: string;
  engineSize?: string;
  distanceMiles?: number;
  highlight?: string;
  // Total registered owners/keepers, not the number of previous owners.
  numberOfOwners?: number;
  // Set one verified standout feature to override the automatic badge selection.
  featuredFeature?: string;
  // Add only verified equipment or claims, e.g. "Sunroof" or "Low mileage".
  features?: string[];
  // Editorial price assessment, never inferred from the price alone.
  priceRating?: "Fair price" | "Low price" | "Lower price" | "Great price";
  registration?: string;
  detailHref?: string;
}
function standoutFeature(car: Car): string | undefined {
  // The featured feature is a deliberate, verified choice by the stock editor.
  if (car.featuredFeature?.trim()) return car.featuredFeature.trim();

  const features = car.features ?? [];
  const details = [car.subtitle, ...features].join(" ");
  const hasFeature = (pattern: RegExp) =>
    features.some((feature) => pattern.test(feature.trim()));

  // Select one factual, buyer-facing detail; never invent ownership or equipment.
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

  // An exact figure is useful on a low-mileage listing without making a
  // subjective "Low Mileage" claim about an unverified stock record.
  const miles = Number(car.mileage.replace(/,/g, ""));
  if (Number.isFinite(miles) && miles > 0 && miles < 50_000)
    return `${miles.toLocaleString("en-GB")} Miles`;

  if (/\bm sport\b/i.test(details)) return "M Sport";
  if (/\b(?:automatic|auto|dsg|s[\s-]?tronic|g[\s-]?tronic|7g-dct|steptronic)\b/i.test(
    `${car.gearbox ?? ""} ${car.subtitle}`,
  )) return "Automatic";
  if (/\belectric\b/i.test(car.fuel)) return "Electric";
  if (/\bhybrid\b/i.test(car.fuel)) return "Hybrid";
  return undefined;
}

function vehicleColourSwatch(car: Car): string {
  if (car.colourHex && /^#[0-9a-f]{6}$/i.test(car.colourHex)) {
    return car.colourHex;
  }

  const colour = car.colour.toLowerCase();
  if (colour.includes("black")) return "#111419";
  if (colour.includes("white")) return "#f3f2ed";
  if (colour.includes("blue")) return "#244d7c";
  if (colour.includes("grey") || colour.includes("gray")) return "#6b737c";
  if (colour.includes("silver")) return "#b8bec5";
  if (colour.includes("red")) return "#a9333c";
  if (colour.includes("green")) return "#3f6b50";
  if (colour.includes("orange")) return "#d36b28";
  if (colour.includes("yellow")) return "#d5aa2b";
  if (colour.includes("brown")) return "#6c4935";
  if (colour.includes("beige")) return "#c8b99c";
  if (colour.includes("purple")) return "#6e4d85";
  if (colour.includes("gold")) return "#b79045";
  return "#82909e";
}

function FeatureIcon({ label }: { label: string }) {
  const text = label.toLowerCase();
  if (text.includes("mileage") || text.includes("miles"))
    return <Gauge size={16} />;
  if (text.includes("roof")) return <Sun size={16} />;
  if (text.includes("drive") || text.includes("automatic"))
    return <CarFront size={16} />;
  return <Sparkles size={16} />;
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
    priceRating: "Fair price", // UI demo only: replace with a verified assessment.
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
    priceRating: "Low price", // UI demo only: replace with a verified assessment.
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

type FilterKey =
  | "query"
  | "make"
  | "maxPrice"
  | "year"
  | "maxMileage"
  | "gearbox"
  | "bodyType"
  | "fuel"
  | "engineSize"
  | "distance";
type Filters = Record<FilterKey, string>;
type Sort = "featured" | "price-low" | "price-high" | "newest" | "mileage";
const initial: Filters = {
  query: "",
  make: "",
  maxPrice: "",
  year: "",
  maxMileage: "",
  gearbox: "",
  bodyType: "",
  fuel: "",
  engineSize: "",
  distance: "",
};
const numeric = (value: string): number =>
  Number(value.replace(/[^0-9.]/g, ""));
const makeOf = (car: Car): string => car.name.split(" ")[0] ?? car.name;
const labels: Record<FilterKey, string> = {
  query: "I'm looking for",
  make: "Make and model",
  maxPrice: "Price",
  year: "Year",
  maxMileage: "Mileage",
  gearbox: "Gearbox",
  bodyType: "Body type",
  fuel: "Fuel type",
  engineSize: "Engine size",
  distance: "Distance",
};
const keys = Object.keys(initial) as FilterKey[];
const optionalFields = ["gearbox", "bodyType", "fuel", "engineSize"] as const;
const priceOptions = [5000, 10000, 15000, 20000, 30000, 50000, 100000, 250000];
const mileageOptions = [5000, 10000, 20000, 40000, 60000, 100000];
const sortOptions: { value: Sort; label: string; description: string }[] = [
  {
    value: "featured",
    label: "Featured order",
    description: "Our recommended vehicles first",
  },
  {
    value: "price-low",
    label: "Price: low to high",
    description: "Lowest prices first",
  },
  {
    value: "price-high",
    label: "Price: high to low",
    description: "Highest prices first",
  },
  {
    value: "newest",
    label: "Newest year",
    description: "Latest model years first",
  },
  {
    value: "mileage",
    label: "Lowest mileage",
    description: "Lowest recorded mileage first",
  },
];

function filterOptions(
  key: Exclude<FilterKey, "query">,
): { value: string; label: string }[] {
  const options: { value: string; label: string }[] = [];
  if (key === "make") {
    [...new Set(cars.map(makeOf))]
      .sort()
      .forEach((make) => options.push({ value: make, label: `All ${make}` }));
    [...new Set(cars.map((car) => car.name))]
      .sort()
      .forEach((name) => options.push({ value: name, label: name }));
  } else if (key === "maxPrice") {
    priceOptions.forEach((n) =>
      options.push({
        value: String(n),
        label: `Up to £${n.toLocaleString("en-GB")}`,
      }),
    );
  } else if (key === "maxMileage") {
    mileageOptions.forEach((n) =>
      options.push({
        value: String(n),
        label: `Up to ${n.toLocaleString("en-GB")} miles`,
      }),
    );
  } else if (key === "distance") {
    if (cars.some((car) => car.distanceMiles !== undefined)) {
      [10, 25, 50, 100, 200].forEach((n) =>
        options.push({ value: String(n), label: `Within ${n} miles` }),
      );
    }
  } else {
    [
      ...new Set(
        cars
          .map((car) => car[key])
          .filter((value): value is string => !!value),
      ),
    ]
      .sort()
      .forEach((value) => options.push({ value, label: value }));
  }
  return options;
}

function filterValueLabel(key: FilterKey, value: string): string {
  if (!value || key === "query") return value;
  return (
    filterOptions(key).find((option) => option.value === value)?.label ?? value
  );
}

export default function CurrentStockPage() {
  const [filters, setFilters] = useState<Filters>(initial);
  const [sort, setSort] = useState<Sort>("featured");
  const [panel, setPanel] = useState<FilterKey | "all" | null>(null);
  const [selected, setSelected] = useState<Car | null>(null);
  const [saved, setSaved] = useState<string[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const panelId = useId();
  useEffect(() => {
    try {
      const value: unknown = JSON.parse(
        localStorage.getItem("ym-stock-shortlist") ?? "[]",
      );
      if (Array.isArray(value)) {
        const validIds = new Set(cars.map((car) => car.id));
        setSaved(
          value.filter(
            (item): item is string =>
              typeof item === "string" && validIds.has(item),
          ),
        );
      }
    } catch {
      /* Shortlist still works in memory. */
    }
  }, []);
  useEffect(() => {
    if (!panel) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => {
      panelRef.current
        ?.querySelector<HTMLElement>(
          ".stock-search input, .stock-choice-grid button:not(:disabled), .stock-sort-options button, .stock-icon",
        )
        ?.focus();
    }, 0);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPanel(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [panel]);
  const toggleSave = (id: string) => {
    setSaved((previous) => {
      const next = previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id];
      try {
        localStorage.setItem("ym-stock-shortlist", JSON.stringify(next));
      } catch {
        /* Storage is optional. */
      }
      return next;
    });
  };
  const update = (key: FilterKey, value: string) =>
    setFilters((previous) => ({ ...previous, [key]: value }));
  const active = keys.filter((key) => filters[key]);
  const visible = useMemo(() => {
    const words = filters.query
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);
    const result = cars.filter((car) => {
      const text =
        `${car.name} ${car.subtitle} ${car.colour} ${car.year} ${car.fuel} ${(car.features ?? []).join(" ")} ${car.highlight ?? ""} ${car.featuredFeature ?? ""} ${standoutFeature(car) ?? ""} ${car.priceRating ?? ""}`.toLowerCase();
      return (

        
        words.every((word) => text.includes(word)) &&
        (!filters.make ||
          car.name === filters.make ||
          makeOf(car) === filters.make) &&
        (!filters.maxPrice || numeric(car.price) <= Number(filters.maxPrice)) &&
        (!filters.year || car.year === filters.year) &&
        (!filters.maxMileage ||
          numeric(car.mileage) <= Number(filters.maxMileage)) &&
        optionalFields.every(
          (key) => !filters[key] || car[key] === filters[key],
        ) &&
        (!filters.distance ||
          (car.distanceMiles !== undefined &&
            car.distanceMiles <= Number(filters.distance))) &&
        (!savedOnly || saved.includes(car.id))
      );
    });
    if (sort === "price-low")
      result.sort((a, b) => numeric(a.price) - numeric(b.price));
    if (sort === "price-high")
      result.sort((a, b) => numeric(b.price) - numeric(a.price));
    if (sort === "newest")
      result.sort((a, b) => Number(b.year) - Number(a.year));
    if (sort === "mileage")
      result.sort((a, b) => numeric(a.mileage) - numeric(b.mileage));
    return result;
  }, [filters, sort, savedOnly, saved]);
  function field(key: FilterKey) {
    if (key === "query")
      return (
        <label className="stock-field">
          <span>Search vehicles</span>
          <div className="stock-search">
            <Search size={17} />
            <input
              type="search"
              value={filters.query}
              placeholder="Make, model or keyword"
              onChange={(event) => update(key, event.target.value)}
            />
          </div>
        </label>
      );

    const options = filterOptions(key);
    return (
      <fieldset className="stock-field stock-choice-field" disabled={!options.length}>
        <legend>{labels[key]}</legend>
        {options.length > 0 && (
          <div className="stock-choice-grid">
            <button
              type="button"
              className={!filters[key] ? "is-selected" : ""}
              aria-pressed={!filters[key]}
              onClick={() => update(key, "")}
            >
              Any
            </button>
            {options.map((option) => (
              <button
                type="button"
                key={option.value}
                className={filters[key] === option.value ? "is-selected" : ""}
                aria-pressed={filters[key] === option.value}
                onClick={() => update(key, option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
        {!options.length && (
          <small>
            {key === "distance"
              ? "Distance search is not available for this stock."
              : "This specification is not available for this stock."}
          </small>
        )}
      </fieldset>
    );
  }
  return (
    <main className="reference-stock">
      <style>{styles}</style>
    <section
        aria-labelledby="contact-title"
        className="stock-banner relative isolate overflow-hidden border-b border-white/10"
        style={{ paddingTop: "var(--ym-stock-header-clearance, 96px)" }}
      >
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/images/contact-banner.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_59%]"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(5,11,18,0.82)_0%,rgba(5,11,18,0.38)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,11,18,0.82)_0%,rgba(5,11,18,0.48)_46%,rgba(5,11,18,0.25)_100%)]"
        />
        <div className="relative mx-auto flex min-h-[270px] max-w-[1400px] items-end px-5 pb-11 pt-14 sm:min-h-[300px] sm:px-8 sm:pb-12 lg:min-h-[330px] lg:px-12">
    
        </div>
      </section>

    
      <div className="stock-container">
        <div id="stock-filters" className="stock-filterbar" aria-label="Stock filters">
          <div className="stock-filter-scroll">
            {keys
              .filter((key) => key !== "query")
              .map((key) => (
                <button
                  type="button"
                  key={key}
                  aria-expanded={panel === key}
                  aria-haspopup="dialog"
                  aria-controls={panelId}
                  className={`stock-pill ${filters[key] ? "is-active" : ""}`}
                  onClick={() => setPanel(panel === key ? null : key)}
                >
                  <span className="stock-pill-label">
                    {filters[key]
                      ? filterValueLabel(key, filters[key])
                      : labels[key]}
                  </span>
                  {filters[key] && <span className="stock-active-dot" />}
                </button>
              ))}
          </div>
          <button
            type="button"
            className="stock-filter-sort"
            aria-expanded={panel === "all"}
            aria-haspopup="dialog"
            aria-controls={panelId}
            onClick={() => setPanel(panel === "all" ? null : "all")}
          >
            <SlidersHorizontal size={17} />
            Filter and sort{active.length > 0 && <span>{active.length}</span>}
          </button>
        </div>
        {panel && (
          <div
            className="stock-filter-overlay"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setPanel(null);
            }}
          >
            <section
              id={panelId}
              ref={panelRef}
              className={`stock-filter-panel ${panel === "all" ? "is-large" : ""}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${panelId}-title`}
            >
              <div className="stock-panel-title">
                <div>
                  <span className="stock-panel-eyebrow">Refine your search</span>
                  <h2 id={`${panelId}-title`}>
                    {panel === "all" ? "Filter and sort" : labels[panel]}
                  </h2>
                </div>
                <button
                  type="button"
                  className="stock-icon"
                  aria-label="Close filters"
                  onClick={() => setPanel(null)}
                >
                  <X size={20} />
                </button>
              </div>
              <div
                className={`stock-fields ${panel === "all" ? "all-fields" : ""}`}
              >
                {(panel === "all" ? keys : [panel]).map((key) => (
                  <div key={key}>{field(key)}</div>
                ))}
                {panel === "all" && (
                  <fieldset className="stock-field stock-sort-field">
                    <legend>Sort by</legend>
                    <div className="stock-sort-options">
                      {sortOptions.map((option) => (
                        <button
                          type="button"
                          key={option.value}
                          className={sort === option.value ? "is-selected" : ""}
                          aria-pressed={sort === option.value}
                          onClick={() => setSort(option.value)}
                        >
                          <strong>{option.label}</strong>
                          <small>{option.description}</small>
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}
              </div>
              <div className="stock-panel-actions">
                <button
                  type="button"
                  className="stock-text-button"
                  onClick={() => {
                    if (panel === "all") {
                      setFilters({ ...initial });
                      setSort("featured");
                      setSavedOnly(false);
                    } else {
                      update(panel, "");
                    }
                  }}
                >
                  {panel === "all" ? "Reset all" : "Clear selection"}
                </button>
                <button
                  type="button"
                  className="stock-primary"
                  onClick={() => setPanel(null)}
                >
                  Show {visible.length} results
                </button>
              </div>
            </section>
          </div>
        )}
        <header className="stock-heading">
          <div className="stock-heading-row">
            <div>
              <h2>Explore current stock</h2>
              <p role="status" aria-live="polite">
                <strong>{visible.length}</strong>{" "}
                {visible.length === 1 ? "result" : "results"}
              </p>
            </div>
            {saved.length > 0 && (
              <button
                type="button"
                className={`stock-pill ${savedOnly ? "is-active" : ""}`}
                aria-pressed={savedOnly}
                onClick={() => setSavedOnly(!savedOnly)}
              >
                <Heart size={15} />
                Saved ({saved.length})
              </button>
            )}
          </div>
        </header>
        {active.length > 0 && (
          <div className="stock-chips">
            {active.map((key) => (
              <button
                type="button"
                key={key}
                aria-label={`Remove ${labels[key]} filter`}
                onClick={() => update(key, "")}
              >
                {labels[key]}: {filterValueLabel(key, filters[key])}
                <X size={13} />
              </button>
            ))}
            <button type="button" onClick={() => setFilters({ ...initial })}>
              Clear filters
            </button>
          </div>
        )}
        {visible.length ? (
          <section className="stock-grid" aria-label="Available cars">
            {visible.map((car) => (
              <VehicleCard
                key={car.id}
                car={car}
                saved={saved.includes(car.id)}
                onSave={() => toggleSave(car.id)}
                onSelect={() => setSelected(car)}
              />
            ))}
          </section>
        ) : (
          <section className="stock-empty">
            <Search size={30} />
            <h2>No matching cars</h2>
            <p>
              Try adjusting your filters
              {savedOnly ? " or view all vehicles" : ""}.
            </p>
            <button
              type="button"
              className="stock-primary"
              onClick={() => {
                setFilters({ ...initial });
                setSavedOnly(false);
              }}
            >
              View all stock
            </button>
          </section>
        )}
        {selected && (
          <VehicleDetails car={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </main>
  );
}

function VehicleCard({
  car,
  saved,
  onSave,
  onSelect,
}: {
  car: Car;
  saved: boolean;
  onSave: () => void;
  onSelect: () => void;
}) {
  const photos = car.images?.length ? car.images : [car.image];
  const [photo, setPhoto] = useState(0);
  const [failed, setFailed] = useState(false);
  const standout = standoutFeature(car);
  const changePhoto = (next: number) => {
    setPhoto((next + photos.length) % photos.length);
    setFailed(false);
  };
  return (
    <article className="stock-card">
      <div className="stock-photo">
        <button
          type="button"
          className="stock-image-button"
          onClick={onSelect}
          aria-label={`View ${car.name}`}
        >
          {failed ? (
            <span className="stock-photo-fallback">
              <CarFront size={44} />
              <span>Photo coming soon</span>
            </span>
          ) : (
            <img
              src={photos[photo]}
              alt={`${car.name} — photo ${photo + 1}`}
              loading="lazy"
              onError={() => setFailed(true)}
            />
          )}
        </button>
        {standout && (
          <span className="stock-standout">
            <FeatureIcon label={standout} />
            {standout}
          </span>
        )}
        <button
          type="button"
          className="stock-heart"
          aria-label={`${saved ? "Unsave" : "Save"} ${car.name}`}
          aria-pressed={saved}
          onClick={onSave}
        >
          <Heart
            size={20}
            fill={saved ? "currentColor" : "none"}
            strokeWidth={1.6}
          />
        </button>
        {photos.length > 1 && (
          <>
            <button
              type="button"
              className="stock-gallery-arrow previous"
              aria-label={`Previous photo of ${car.name}`}
              onClick={() => changePhoto(photo - 1)}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="stock-gallery-arrow next"
              aria-label={`Next photo of ${car.name}`}
              onClick={() => changePhoto(photo + 1)}
            >
              <ChevronRight size={20} />
            </button>
            <div className="stock-dots">
              {photos.slice(0, 5).map((_, index) => (
                <button
                  type="button"
                  key={index}
                  aria-label={`Show photo ${index + 1} of ${car.name}`}
                  aria-pressed={photo === index}
                  onClick={() => changePhoto(index)}
                  className={photo === index ? "selected" : ""}
                />
              ))}
            </div>
          </>
        )}
        <span className="stock-photo-count">
          {photo + 1}/{photos.length}
        </span>
      </div>
      <div className="stock-card-body">
        <h2>
          <button type="button" onClick={onSelect}>
            {car.name}
          </button>
        </h2>
        <div className="stock-description-row">
          <p className="stock-subtitle">{car.subtitle}</p>
          {car.priceRating && (
            <span
              className={`stock-price-rating ${car.priceRating === "Fair price" ? "rating-fair" : car.priceRating === "Lower price" || car.priceRating === "Low price" ? "rating-lower" : "rating-great"}`}
            >
              {car.priceRating}
            </span>
          )}
        </div>
        <div className="stock-tags" aria-label="Vehicle highlights">
          <span
            className="stock-colour-tag"
            aria-label={car.colour}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <i
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: "16px",
                height: "16px",
                minWidth: "16px",
                borderRadius: "50%",
                backgroundColor: vehicleColourSwatch(car),
                border: "2px solid #ffffff",
                boxShadow: "0 0 0 1px #536273",
              }}
            />
            <strong style={{ color: "#ffffff", fontWeight: 700 }}>
              {car.colour}
            </strong>
          </span>
          <span>{car.mileage} miles</span>
          <span>
            {car.year}
            {car.registration ? ` (${car.registration} reg)` : ""}
          </span>
        </div>
        <div className="stock-card-footer">
          <div className="stock-price-block">
            <span>Vehicle price</span>
            <strong className="stock-vehicle-price">{car.price}</strong>
          </div>
          {car.detailHref ? (
            <a href={car.detailHref}>
              View details
              <ArrowUpRight size={17} />
            </a>
          ) : (
            <button type="button" onClick={onSelect}>
              View details
              <ArrowUpRight size={17} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function VehicleDetails({ car, onClose }: { car: Car; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const id = useId();
  useEffect(() => {
    const node = dialog.current;
    if (node && !node.open) node.showModal();
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      if (node?.open) node.close();
      document.body.style.overflow = before;
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="stock-dialog"
      aria-labelledby={id}
      onClose={onClose}
    >
      <div className="stock-panel-title">
        <h2 id={id}>{car.name}</h2>
        <button
          type="button"
          autoFocus
          className="stock-icon"
          aria-label="Close vehicle details"
          onClick={onClose}
        >
          <X size={21} />
        </button>
      </div>
      <p>{car.subtitle}</p>
      <strong className="stock-detail-price">{car.price}</strong>
      <dl>
        {[
          ["Year", car.year],
          ["Mileage", `${car.mileage} miles`],
          ["Fuel", car.fuel],
          ["Colour", car.colour],
          ["Gearbox", car.gearbox],
          ["Body type", car.bodyType],
        ]
          .filter(([, value]) => !!value)
          .map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
      </dl>
      <a
        className="stock-primary"
        href={`/contact?vehicle=${encodeURIComponent(car.name)}`}
      >
        Enquire about this car
        <ArrowUpRight size={18} />
      </a>
    </dialog>
  );
}

const styles = `
.reference-stock{--stock-blue:#00a8e8;--stock-ink:#f6f8fa;min-height:100vh;background:radial-gradient(ellipse at 95% 0%,#00a8e80c,transparent 45%),#090d12;color:var(--stock-ink);font-family:var(--font-body,Arial),sans-serif;color-scheme:dark;padding:0 36px 80px}
.stock-banner{width:calc(100% + 72px);margin-left:-36px;margin-right:-36px}
.reference-stock *{box-sizing:border-box}.reference-stock button,.reference-stock select,.reference-stock input{font:inherit}.reference-stock button,.reference-stock select{cursor:pointer}.reference-stock button{color:inherit}.reference-stock a{color:inherit;text-decoration:none}.reference-stock h1,.reference-stock h2,.reference-stock p{margin:0}.reference-stock svg{flex-shrink:0}.reference-stock :focus-visible{outline:2px solid #00a8e8;outline-offset:4px}.reference-stock select:disabled{opacity:.55;cursor:default}.stock-container{max-width:1680px;margin:auto}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
.stock-hero{position:relative;isolation:isolate;display:grid;grid-template-columns:1fr 1fr;align-items:center;min-height:clamp(390px,36vw,485px);margin:0 -36px 38px;padding:calc(var(--ym-stock-header-clearance,96px) + 30px) max(36px,calc(50vw - 804px)) 50px;overflow:hidden;border-bottom:1px solid #ffffff21;background:#090d12}
.stock-hero-copy{position:relative;z-index:2;max-width:590px;padding-right:28px}.stock-hero h1{font-family:var(--font-display,Arial),sans-serif;font-size:clamp(44px,5vw,68px);font-weight:600;line-height:1.05;letter-spacing:-.047em}.stock-hero h1 span{background:linear-gradient(90deg,#27c1f3,#b7e9f9 55%,#fff);background-clip:text;-webkit-background-clip:text;color:transparent}.stock-hero p{max-width:470px;margin-top:18px!important;color:#c3ced9;font-size:16px;line-height:1.7}.stock-hero-cta{display:inline-flex;align-items:center;justify-content:center;gap:11px;min-height:49px;margin-top:26px;padding:12px 22px;border:1px solid #00a8e8;border-radius:4px;background:#00a8e8;color:#fff!important;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;transition:background .2s ease,transform .2s ease}.stock-hero-cta:hover{background:#0789c7;transform:translateY(-2px)}
.stock-hero-media{position:absolute;z-index:1;inset:0 0 0 50%;overflow:hidden}.stock-hero-media img{display:block;width:100%;height:100%;object-fit:cover;object-position:center 52%}.stock-hero-media:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#090d12 0%,#090d12a6 8%,transparent 35%);pointer-events:none}.stock-filterbar{scroll-margin-top:calc(var(--ym-stock-header-clearance,96px) + 12px)}
.collection-intro{display:grid;grid-template-columns:1.1fr 1fr;align-items:end;gap:60px;padding-bottom:42px}.stock-back{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:#9daabc!important;margin-bottom:30px}.stock-back:hover{color:#00a8e8!important}.collection-eyebrow{font-size:11px;letter-spacing:.19em;color:#8fa2b8;display:flex;align-items:center;gap:12px;margin-bottom:17px!important}.collection-eyebrow:before{content:'';width:27px;height:2px;background:#00a8e8}.collection-intro h1{font-family:var(--font-display,Arial),sans-serif;font-size:clamp(36px,3.6vw,60px);font-weight:600;line-height:1.07;letter-spacing:-.035em}.collection-intro h1 span{color:#00a8e8}.collection-description{font-size:15px;line-height:1.85;color:#a7b2c1;max-width:440px;margin-top:20px!important}.collection-search-block{padding-bottom:5px}.collection-search-label{font-size:11px;font-weight:600;letter-spacing:.13em;color:#a7b2c1;display:block;margin-bottom:13px}.collection-search{display:flex;align-items:center;gap:14px;min-height:64px;background:#111923;border:1px solid #344451;padding:15px 20px;border-bottom:2px solid #00a8e8;color:#00a8e8}.collection-search input{width:100%;min-width:0;background:none;color:#fff;border:0;font-size:16px;outline:none}.collection-search:focus-within{border-color:#00a8e8}.collection-search input::placeholder{color:#8593a5}.collection-search-block>p{font-size:13px;line-height:1.65;color:#8d9cae;margin-top:12px}
.stock-filterbar{display:flex;align-items:center;gap:18px;padding:18px 0;border-top:1px solid #ffffff12;border-bottom:1px solid #ffffff12;margin-bottom:30px}.stock-filter-scroll{display:flex;gap:8px;min-width:0;flex:1;overflow:auto;padding:3px 1px 7px;scrollbar-width:thin;scrollbar-color:#334657 transparent}.stock-pill{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:1px solid #ffffff22;background:#101721;padding:11px 15px;min-height:44px;border-radius:2px;white-space:nowrap;font-size:13px!important;color:#c6d0dd!important}.stock-pill:hover,.stock-pill.is-active{border-color:#00a8e8;color:#00a8e8!important;background:#102532}.stock-active-dot{height:5px;width:5px;border-radius:50%;background:#00a8e8}.stock-filter-sort,.stock-primary{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:46px;background:#00a8e8;color:#05111c!important;border:1px solid #00a8e8;border-radius:0;padding:12px 20px;font-size:13px!important;font-weight:600;white-space:nowrap}.stock-filter-sort{flex-shrink:0}.stock-filter-sort:hover,.stock-primary:hover{background:#40bef0}.stock-filter-sort>span{padding:2px 6px;background:#071b2d;color:white}.stock-heading{margin-bottom:25px}.stock-heading-row{display:flex;justify-content:space-between;align-items:center;gap:16px}.stock-heading h2{font-family:var(--font-display,Arial),sans-serif;font-size:25px;letter-spacing:-.025em;font-weight:500}.stock-heading p{font-size:14px;color:#9aa8b8;margin-top:8px}.stock-heading strong{color:white}
.stock-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px;align-items:stretch}.stock-card{min-width:0;display:flex;flex-direction:column;overflow:hidden;border:1px solid #ffffff16;border-radius:12px;background:linear-gradient(180deg,#111922,#0d141d);box-shadow:0 14px 38px #0002;transition:border-color .25s,transform .25s}.stock-card:hover{border-color:#31556a;transform:translateY(-3px)}.stock-photo{position:relative;aspect-ratio:1.55;overflow:hidden;background:#17222e}.stock-image-button{display:block;width:100%;height:100%;border:0;padding:0;background:transparent}.stock-image-button img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .6s}.stock-image-button:hover img{transform:scale(1.035)}.stock-photo:after{content:'';position:absolute;inset:55% 0 0;background:linear-gradient(transparent,#030a1266);pointer-events:none}.stock-standout{position:absolute;left:0;top:0;z-index:2;display:inline-flex;align-items:center;gap:8px;max-width:calc(100% - 70px);padding:11px 16px 11px 12px;background:linear-gradient(135deg,#12344a,#0a1d2b);color:#f2faff;border:1px solid #35566b;border-left:4px solid #00a8e8;border-radius:0 0 10px 0;font-size:13px;font-weight:800;line-height:1.35;letter-spacing:.01em;box-shadow:6px 8px 22px #000b1290,inset 0 1px 0 #ffffff1c;pointer-events:none}.stock-standout svg{color:#56cef9;filter:drop-shadow(0 1px 1px #001a28)}.stock-heart{position:absolute;right:14px;top:14px;z-index:1;display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:1px solid #ffffff40;background:#0a131de6;color:#d4e1ee!important}.stock-heart:hover,.stock-heart[aria-pressed=true]{background:#11354a;color:#00a8e8!important;border-color:#00a8e8}.stock-photo-count{position:absolute;bottom:14px;right:14px;z-index:1;font-size:12px;background:#08121de6;border:1px solid #ffffff26;border-radius:3px;padding:6px 9px}.stock-dots{position:absolute;bottom:12px;left:50%;transform:translateX(-50%);display:flex;z-index:1}.stock-dots button{border:0;padding:0;background:transparent;width:22px;height:26px;position:relative}.stock-dots button:after{content:'';position:absolute;width:7px;height:7px;border-radius:50%;top:10px;left:8px;background:#ffffff70}.stock-dots button.selected:after{background:#fff}.stock-gallery-arrow{position:absolute;top:50%;z-index:1;transform:translateY(-50%);border:1px solid #ffffff30;border-radius:2px;width:36px;height:42px;display:flex;align-items:center;justify-content:center;background:#09141de6}.stock-gallery-arrow.previous{left:10px}.stock-gallery-arrow.next{right:10px}.stock-photo-fallback{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;height:100%;color:#8093a8;background:#14202c}.stock-photo-fallback span{font-size:13px}
.stock-card-body{padding:22px;display:flex;flex-direction:column;flex:1}.stock-card h2{font-family:var(--font-display,Arial),sans-serif;font-size:24px;font-weight:600;letter-spacing:-.025em;line-height:1.2}.stock-card h2 button{padding:0;background:none;border:0;font:inherit;text-align:left}.stock-card h2 button:hover{color:#00a8e8}.stock-subtitle{font-size:14px;line-height:1.65;color:#a6b4c5;margin-top:9px!important}.stock-tags{display:flex;align-items:center;flex-wrap:wrap;gap:7px;margin:15px 0 24px;min-height:31px}.stock-tags span{display:inline-flex;align-items:center;min-height:31px;font-size:12px;line-height:1.4;padding:6px 9px;border:1px solid #ffffff12;border-radius:4px;color:#c2d1e3;background:#172330}.stock-tags .rating-fair{background:#3b3219;color:#ffdf82;border-color:#675c31}.stock-tags .rating-lower{background:#192e3b;color:#9bddff;border-color:#2b5268}.stock-tags .rating-great{background:#16392f;color:#9de1c9;border-color:#2a5c4b}.stock-card-footer{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;padding-top:20px;border-top:1px solid #ffffff14;margin-top:auto}.stock-price-block>span{display:block;font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:#8a9bae;margin-bottom:6px}.stock-vehicle-price{font-size:27px;font-weight:600;line-height:1.1;letter-spacing:-.025em;color:#8dd6ff}.stock-card-footer>a,.stock-card-footer>button{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:44px;padding:10px 0;color:#e5eef8;border:0;border-bottom:1px solid #00a8e8;background:none;font-size:13px;font-weight:500}.stock-card-footer svg{color:#00a8e8}.stock-card-footer>a:hover,.stock-card-footer>button:hover{color:#00a8e8}
.stock-tags .stock-colour-tag{border-color:#536273;background:#101a24;color:#fff}
.stock-filter-panel{padding:24px;background:#101822;border:1px solid #ffffff22;border-radius:8px;margin-bottom:28px}.stock-panel-title{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:20px}.stock-panel-title h2{font-family:var(--font-display,Arial),sans-serif;font-size:24px}.stock-icon{display:flex;align-items:center;justify-content:center;width:42px;height:42px;border:1px solid #ffffff26;background:#17222e;border-radius:2px;flex-shrink:0}.stock-fields{max-width:480px}.stock-fields.all-fields{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px;max-width:none}.stock-field{display:block;min-width:0}.stock-field>span{display:block;font-size:14px;margin-bottom:10px;color:#c4d0dd}.stock-field select,.stock-search{width:100%;min-width:0;background:#0b121c;border:1px solid #ffffff26;border-radius:2px;padding:12px;font-size:15px;min-height:48px;color:#e4edf7}.stock-search{display:flex;align-items:center;gap:10px;color:#00a8e8}.stock-search input{min-width:0;width:100%;border:0;background:none;color:#f6f8fa;font-size:15px}.stock-field small{display:block;font-size:12px;line-height:1.6;color:#94a4b7;margin-top:8px}.stock-panel-actions{display:flex;justify-content:flex-end;align-items:center;gap:22px;margin-top:24px}.stock-text-button{border:0;background:none;color:#00a8e8!important;text-decoration:underline;font-size:14px!important}.stock-chips{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 25px}.stock-chips button{display:flex;align-items:center;gap:8px;border:1px solid #294453;background:#14242f;padding:9px 12px;font-size:12px;border-radius:2px}.stock-empty{padding:70px 24px;text-align:center;background:#101822;border:1px solid #ffffff1a;border-radius:8px}.stock-empty>svg{margin:0 auto 18px;color:#00a8e8}.stock-empty h2{font-size:27px}.stock-empty p{margin:15px 0 25px;color:#a6b4c5;font-size:15px}
.stock-dialog{position:fixed;inset:0;margin:auto;width:calc(100% - 32px);max-width:580px;max-height:85dvh;overflow:auto;background:#101923;color:#f6f8fa;border:1px solid #ffffff26;border-radius:12px;padding:28px;font:inherit}.stock-dialog::backdrop{background:#02070dd9}.stock-dialog>p{color:#a6b4c5;font-size:15px;line-height:1.7}.stock-detail-price{display:block;color:#8dd6ff;font-size:32px;margin:25px 0}.stock-dialog dl{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin:20px 0 30px}.stock-dialog dt{font-size:12px;color:#8fa1b6}.stock-dialog dd{font-size:16px;margin:7px 0 0}.stock-dialog>.stock-primary{width:100%;white-space:normal}
@media(min-width:1700px){.stock-grid{grid-template-columns:repeat(5,minmax(0,1fr));gap:22px}.stock-card-body{padding:20px}.stock-card h2{font-size:23px}}
@media(max-width:1250px){.stock-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}}
@media(max-width:1100px){.reference-stock{padding-left:24px;padding-right:24px}.stock-banner{width:calc(100% + 48px);margin-left:-24px;margin-right:-24px}.collection-intro{gap:35px}.stock-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}.stock-fields.all-fields{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:760px){.collection-intro{grid-template-columns:1fr;gap:28px;padding-bottom:28px}.collection-description{max-width:100%}.stock-back{margin-bottom:22px}.stock-fields.all-fields{grid-template-columns:repeat(2,minmax(0,1fr))}.stock-filterbar{gap:10px}.stock-filter-sort{padding:12px}.stock-card-body{padding:18px}.stock-card h2{font-size:22px}.stock-heading h2{font-size:23px}.stock-card-footer{gap:12px}.stock-vehicle-price{font-size:25px}}
@media(max-width:560px){.reference-stock{padding:calc(var(--ym-stock-header-clearance,96px) + 22px) 16px 45px}.stock-banner{width:calc(100% + 32px);margin-left:-16px;margin-right:-16px}.collection-intro h1{font-size:38px}.collection-search{padding:13px;min-height:58px}.collection-search input{font-size:16px}.stock-filterbar{flex-wrap:wrap;padding:13px 0}.stock-filter-scroll{flex-basis:100%;width:100%}.stock-filter-sort{margin-left:auto}.stock-grid{grid-template-columns:1fr;gap:26px}.stock-card-body{padding:22px}.stock-card h2{font-size:25px}.stock-subtitle{font-size:15px}.stock-heading-row{flex-wrap:wrap}.stock-heading h2{font-size:23px}.stock-fields.all-fields{grid-template-columns:1fr}.stock-filter-panel{padding:18px}.stock-dialog{padding:22px}.stock-vehicle-price{font-size:28px}}
@media(prefers-reduced-motion:reduce){.reference-stock *{transition:none!important;scroll-behavior:auto!important}.stock-card:hover{transform:none}}

/* Premium rounded filters and modal-based selection. */
.stock-filterbar{align-items:flex-start;gap:14px;padding:8px 0 22px;margin-bottom:26px;background:transparent;border:0;border-radius:0;box-shadow:none}
.stock-filter-scroll{display:flex;align-items:center;flex-wrap:wrap;gap:10px 9px;min-width:0;overflow:visible;padding:4px 2px 8px;scrollbar-width:none}
.stock-filter-scroll::-webkit-scrollbar{display:none;width:0;height:0}
.stock-filterbar .stock-pill{min-height:48px;padding:12px 17px;border:1px solid #465362;border-radius:999px;background:linear-gradient(180deg,#18222d,#101720);color:#e6edf5!important;font-weight:600;box-shadow:0 7px 18px #00000024,inset 0 1px 0 #ffffff0b;transition:transform .2s ease,background .2s ease,border-color .2s ease,box-shadow .2s ease,color .2s ease}
.stock-pill-label{max-width:180px;overflow:hidden;text-overflow:ellipsis}
.stock-filterbar .stock-pill:hover,.stock-filterbar .stock-pill[aria-expanded=true],.stock-filterbar .stock-pill.is-active{transform:translateY(-1px);background:linear-gradient(135deg,#00a8e8,#0789c7);border-color:#36c2f6;color:#fff!important;box-shadow:0 10px 24px #00a8e82d,inset 0 1px 0 #ffffff35}
.stock-active-dot{width:6px;height:6px;background:#fff;box-shadow:0 0 0 3px #ffffff26}
.stock-filter-sort{min-height:48px;padding:12px 21px;border:1px solid #21b9f1;border-radius:999px;background:linear-gradient(135deg,#00a8e8,#0789c7);color:#fff!important;box-shadow:0 10px 24px #00a8e82a,inset 0 1px 0 #ffffff35;transition:transform .2s ease,filter .2s ease,box-shadow .2s ease}
.stock-filter-sort:hover,.stock-filter-sort[aria-expanded=true]{transform:translateY(-1px);background:linear-gradient(135deg,#19b8f1,#0789c7);border-color:#62d1fa;color:#fff!important;box-shadow:0 13px 28px #00a8e83b,inset 0 1px 0 #ffffff45}
.stock-filter-sort>svg{box-sizing:content-box;width:27px;height:18px;padding-right:9px;border-right:1px solid #ffffff4a}.stock-filter-sort>span{min-width:24px;padding:3px 7px;border-radius:999px;background:#ffffff24;color:#fff;font-size:11px;text-align:center}

.stock-filter-overlay{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:24px;background:#02070d8c;backdrop-filter:none;animation:stock-fade-in .22s ease both}
.stock-filter-panel{display:flex;flex-direction:column;width:min(680px,100%);max-height:min(88dvh,840px);margin:0;padding:0;overflow:hidden;background:linear-gradient(145deg,#131d27,#0c131c);border:1px solid #4b5968;border-radius:24px;box-shadow:0 32px 90px #000000b8,inset 0 1px 0 #ffffff0c;transform-origin:center bottom;animation:stock-modal-in .46s cubic-bezier(.22,1,.36,1) both}
.stock-filter-panel.is-large{width:min(1120px,100%)}
.stock-filter-panel .stock-panel-title{flex-shrink:0;margin:0;padding:25px 28px 22px;border-bottom:1px solid #ffffff14;background:linear-gradient(180deg,#18232e,#111a24)}
.stock-panel-eyebrow{display:block;margin-bottom:7px;color:#64cdf5;font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}
.stock-filter-panel .stock-panel-title h2{font-size:clamp(23px,3vw,30px);letter-spacing:-.025em}
.stock-filter-panel .stock-icon{width:42px;height:42px;border:1px solid #465362;border-radius:50%;background:#0d151e;color:#dce8f3;transition:background .2s,border-color .2s,transform .2s}
.stock-filter-panel .stock-icon:hover{transform:rotate(4deg);background:#00a8e8;border-color:#39c5f8;color:#fff}
.stock-fields{width:100%;max-width:none;min-height:0;padding:27px 28px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#465769 transparent}
.stock-fields.all-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:30px 34px;max-width:none}
.stock-fields.all-fields>div:first-child,.stock-sort-field{grid-column:1/-1}
.stock-field{min-width:0;margin:0;padding:0;border:0}.stock-field>span,.stock-field legend{display:block;margin:0 0 12px;padding:0;color:#e8eef5;font-size:13px;font-weight:700;letter-spacing:.01em}
.stock-search{min-height:52px;padding:13px 16px;border:1px solid #465362;border-radius:14px;background:#09111a;color:#00a8e8;box-shadow:inset 0 1px 2px #0005;transition:border-color .2s,box-shadow .2s}
.stock-search:focus-within{border-color:#00a8e8;box-shadow:0 0 0 4px #00a8e81a,inset 0 1px 2px #0005}
.stock-choice-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.stock-choice-grid button{min-height:46px;padding:11px 13px;border:1px solid #3f4c59;border-radius:12px;background:#111a24;color:#cbd5df;text-align:left;font-size:13px;font-weight:600;line-height:1.35;box-shadow:inset 0 1px 0 #ffffff08;transition:background .18s,border-color .18s,color .18s,transform .18s,box-shadow .18s}
.stock-choice-grid button:hover{transform:translateY(-1px);border-color:#00a8e8;background:#132a38;color:#fff;box-shadow:0 8px 18px #0003}
.stock-choice-grid button.is-selected{border-color:#37c2f5;background:linear-gradient(135deg,#00a8e8,#087fac);color:#fff;box-shadow:0 9px 20px #00a8e82d,inset 0 1px 0 #ffffff32}
.stock-field[disabled]{opacity:1}.stock-field[disabled] small{display:block;padding:15px;border:1px dashed #3f4c59;border-radius:12px;background:#0d151e;color:#8fa1b3}
.stock-sort-options{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.stock-sort-options button{display:flex;flex-direction:column;align-items:flex-start;gap:5px;min-height:68px;padding:13px 15px;border:1px solid #3f4c59;border-radius:13px;background:#111a24;color:#dce5ee;text-align:left;transition:transform .18s,border-color .18s,background .18s,box-shadow .18s}
.stock-sort-options button:hover{transform:translateY(-1px);border-color:#00a8e8;background:#132a38}.stock-sort-options button.is-selected{border-color:#37c2f5;background:linear-gradient(135deg,#073a52,#075273);box-shadow:0 8px 20px #00a8e81d,inset 3px 0 0 #00bafc}
.stock-sort-options strong{font-size:13px}.stock-sort-options small{color:#8fa2b4;font-size:11px;line-height:1.35}.stock-sort-options .is-selected small{color:#c6ebfa}
.stock-panel-actions{flex-shrink:0;display:flex;justify-content:space-between;align-items:center;gap:18px;margin:0;padding:19px 28px;border-top:1px solid #ffffff14;background:#0c141d}
.stock-text-button{padding:9px 2px;border:0;background:transparent;color:#9fbbca!important;text-decoration:none;font-size:13px!important;font-weight:600}.stock-text-button:hover{color:#fff!important}
.stock-filter-panel .stock-primary{min-width:180px;border-radius:999px;background:linear-gradient(135deg,#00a8e8,#0789c7);color:#fff!important;box-shadow:0 10px 24px #00a8e82c}.stock-filter-panel .stock-primary:hover{background:linear-gradient(135deg,#1ab9f1,#0789c7)}
@keyframes stock-fade-in{from{opacity:0}to{opacity:1}}@keyframes stock-modal-in{from{opacity:0;transform:translateY(110px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}

.stock-description-row{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:start;gap:10px;min-height:50px;margin-top:9px}.stock-description-row .stock-subtitle{min-width:0;margin:0!important}.stock-description-row .stock-price-rating{justify-self:end;display:inline-flex;align-items:center;min-height:29px;padding:5px 10px;border:1px solid transparent;border-radius:999px;font-size:11px;line-height:1.35;font-weight:800;white-space:nowrap;box-shadow:0 7px 16px #0003}.stock-price-rating.rating-fair{background:#e2a82f;color:#171005;border-color:#f0bf58}.stock-price-rating.rating-lower{background:#008fcb;color:#fff;border-color:#36bde9}.stock-price-rating.rating-great{background:#19936d;color:#fff;border-color:#42b48e}

@media(max-width:760px){.stock-filter-overlay{padding:14px}.stock-filter-panel{max-height:92dvh;border-radius:20px}.stock-filter-panel .stock-panel-title{padding:21px 20px 18px}.stock-fields,.stock-panel-actions{padding-left:20px;padding-right:20px}.stock-fields.all-fields{grid-template-columns:1fr;gap:25px}.stock-fields.all-fields>div:first-child,.stock-sort-field{grid-column:auto}.stock-filterbar .stock-pill{padding:11px 15px}}
@media(max-width:560px){.stock-filterbar{padding:6px 0 18px}.stock-filter-sort{width:100%;margin-left:0;border-radius:14px}.stock-choice-grid,.stock-sort-options{grid-template-columns:1fr}.stock-panel-actions{align-items:stretch;flex-direction:column-reverse}.stock-panel-actions .stock-primary,.stock-panel-actions .stock-text-button{width:100%}.stock-filter-panel .stock-primary{min-width:0}.stock-standout{font-size:12px;padding:9px 11px}}
@media(prefers-reduced-motion:reduce){.stock-filter-overlay,.stock-filter-panel{animation:none}.stock-filterbar .stock-pill:hover,.stock-filter-sort:hover,.stock-choice-grid button:hover,.stock-sort-options button:hover{transform:none}}
@media(max-width:1100px){.stock-hero{margin-left:-24px;margin-right:-24px;padding-left:24px;padding-right:24px}}
@media(max-width:760px){.stock-hero{display:flex;align-items:flex-end;min-height:430px;margin-bottom:32px;padding:calc(var(--ym-stock-header-clearance,96px) + 60px) 24px 44px}.stock-hero-copy{max-width:570px;padding-right:0}.stock-hero-media{inset:0}.stock-hero-media:after{background:linear-gradient(0deg,#050a11f2,#050a11ab 60%,#050a114d)}.stock-hero h1{font-size:clamp(41px,8vw,60px)}}
@media(max-width:560px){.reference-stock{padding:0 16px 45px}.stock-hero{min-height:420px;margin:0 -16px 28px;padding:calc(var(--ym-stock-header-clearance,96px) + 55px) 20px 38px}.stock-hero h1{font-size:42px}.stock-hero p{font-size:14px}}
`;