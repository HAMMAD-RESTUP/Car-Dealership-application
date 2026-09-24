"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Gauge, Globe2, MapPin, MessageCircle } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const benefits = [
  {
    icon: Globe2,
    title: "Something for every journey",
    text: "Browse a changing selection of hatchbacks, family cars, SUVs and imports.",
  },
  {
    icon: Gauge,
    title: "The details you need",
    text: "Compare prices, mileage and features, and ask us about any car that interests you.",
  },
  {
    icon: MessageCircle,
    title: "A team you can talk to",
    text: "Get answers to your questions and arrange a viewing when you are ready.",
  },
];

export default function Welcome() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="welcome"
      aria-labelledby="welcome-heading"
      className="relative isolate overflow-hidden bg-[#080B10]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#080B10_0%,#101923_52%,#080B10_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 top-1/4 h-[500px] w-[500px] rounded-full bg-[#00A8E8]/[0.07] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="relative z-10 mx-auto grid max-w-[1800px] grid-cols-1 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative h-[390px] overflow-hidden sm:h-[480px] lg:h-auto lg:min-h-[700px]"
        >
          <Image
            src="/images/welcome.png"
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 52vw"
            className="object-cover object-center lg:object-[52%_center]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05090F]/95 via-[#05090F]/25 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-[#080B10]/50 lg:block"
          />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
            <p
              style={{ fontFamily: "var(--font-display)" }}
              className="max-w-[550px] font-[var(--font-display)] text-[32px] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[43px] lg:text-[44px] xl:text-[51px]"
            >
              A world of cars.
              <br />
              <span className="text-[#B8E9FB]">One place to explore.</span>
            </p>
            <span aria-hidden="true" className="mt-6 block h-[2px] w-12 bg-[#00A8E8]" />
            <div className="mt-4 flex items-center gap-2 font-[var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.15em] text-white/80 sm:text-[12px]">
              <MapPin size={15} strokeWidth={1.8} aria-hidden="true" className="shrink-0 text-[#00A8E8]" />
              <span>Crawley, Copthorne</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="relative flex flex-col justify-center px-6 pb-16 pt-12 sm:px-10 sm:py-16 lg:px-10 lg:py-14 xl:px-14 2xl:px-20"
        >

          <h2
            id="welcome-heading"
            style={{ fontFamily: "var(--font-display)" }}
            className="max-w-[660px] font-[var(--font-display)] text-[43px] font-semibold leading-[1.03] tracking-[-0.045em] text-white min-[400px]:text-[48px] sm:text-[59px] lg:text-[52px] xl:text-[61px] 2xl:text-[70px]"
          >
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-[#8AE0FF] via-[#00A8E8] to-[#188ED4] bg-clip-text text-transparent">
              YM Motors.
            </span>
         
          </h2>

          <p className="mt-7 max-w-[620px] font-[var(--font-body)] text-[15px] font-medium leading-[1.8] text-white/85 sm:text-[17px]">
            Finding the right car should feel exciting and straightforward. At YM Motors, we bring together a changing selection of used cars and imports for different journeys, tastes and budgets. Whether you need an everyday runaround, room for the family or something a little different, there is always more to explore.
          </p>
          <p className="mt-4 max-w-[620px] font-[var(--font-body)] text-[14px] leading-[1.8] text-white/60 sm:text-[15px]">
            Browse our latest stock at your own pace and take a closer look at each car&apos;s price, mileage and features. If something catches your eye, speak to our team about the details or arrange a viewing at our Crawley Down location. We are here to help you take the next step with confidence.
          </p>

          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="flex items-start gap-4 py-4 first:pt-5 last:pb-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] border border-[#00A8E8]/25 bg-[#00A8E8]/[0.08] text-[#66D5FF]">
                    <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-[var(--font-body)] text-[14px] font-semibold leading-[1.4] text-white sm:text-[15px]">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 font-[var(--font-body)] text-[12px] leading-[1.6] text-white/60 sm:text-[13px]">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 min-[440px]:flex-row">
            <motion.a
              href="#stock"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group inline-flex min-h-[52px] flex-1 items-center justify-center gap-2.5 rounded-[5px] border border-[#00A8E8] bg-[#00A8E8] px-5 font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.11em] text-[#06121D] transition-colors duration-300 hover:border-[#32C3F5] hover:bg-[#32C3F5] sm:text-[12px]"
            >
              Explore current stock
              <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
            <a
              href="/contact"
              className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-[5px] border border-white/20 bg-white/[0.04] px-5 font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.11em] text-white transition-colors duration-300 hover:border-[#00A8E8]/60 hover:bg-white/[0.08] sm:text-[12px]"
            >
              Contact our team
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-2.5 gap-y-1 border-t border-white/10 pt-5 font-[var(--font-body)] text-[11px] leading-[1.5] text-white/55">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#00A8E8]" />
            <span className="font-semibold text-white/90">Find YM Motors on Auto Trader</span>
            <span>Explore our latest listings and get in touch.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
