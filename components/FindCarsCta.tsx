import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type FindCarsCtaProps = {
  className?: string;
  imageSrc?: string;
  stockHref?: string;
};

export default function FindCarsCta({
  className = "",
  imageSrc = "/images/showcase-car.png",
  stockHref = "/current-stock",
}: FindCarsCtaProps) {
  return (
    <section
      className={`relative isolate bg-[#090D12] py-12 text-white sm:py-16 ${className}`}
      style={{ background: "radial-gradient(ellipse at 95% 0%, #00a8e80c, transparent 45%), #090d12" }}
    >
      <div className="mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center lg:min-h-[340px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="relative h-[220px] overflow-hidden sm:h-[290px] lg:h-[340px]">
            <Image
              src={imageSrc}
              alt=""
              fill
              sizes="(max-width: 1023px) 100vw, 52vw"
              className="object-contain object-center"
            />
          </div>

          <div
            className="relative z-10 bg-[#090D12] px-6 pb-10 pt-1 sm:px-10 sm:pb-12 lg:py-12 lg:pl-2 lg:pr-16"
            style={{ backgroundColor: "#090D12", border: "none" }}
          >
            <h2 className="max-w-[540px] font-[var(--font-display)] text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[44px] lg:text-[43px] xl:text-[52px]">
              Find the car <span className="bg-gradient-to-r from-[#A5E7FF] to-[#00A8E8] bg-clip-text text-transparent">that feels right.</span>
            </h2>
            <p className="mt-4 max-w-[450px] font-[var(--font-body)] text-[14px] leading-[1.75] text-white/70 sm:text-[15px]">
              Explore the latest cars at YM Motors, compare the details and get in touch when something catches your eye.
            </p>
            <a
              href={stockHref}
              className="group mt-7 inline-flex min-h-[50px] items-center justify-center gap-3 rounded-[5px] bg-[#00A8E8] px-7 font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.11em] text-white transition-colors duration-200 hover:bg-[#38C2F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8AE0FF]"
            >
              Find cars
              <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
