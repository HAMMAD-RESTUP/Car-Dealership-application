import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Car Finance | YM Motors",
  description:
    "Explore common car finance options and find out what to ask before choosing your next vehicle at YM Motors.",
};

type FinanceKind = "hp" | "pcp" | "pch";

type FinanceOption = {
  kind: FinanceKind;
  short: string;
  title: string;
  description: string;
  end: string;
};

const financeOptions: FinanceOption[] = [
  {
    kind: "hp",
    short: "HP",
    title: "Hire Purchase",
    description:
      "Pay a deposit, then spread the remaining cost over monthly payments that include interest. The finance company owns the car during the agreement. Once you have made all payments and paid any option-to-purchase fee, the car becomes yours.",
    end: "Own the car after the final payment and any purchase fee.",
  },
  {
    kind: "pcp",
    short: "PCP",
    title: "Personal Contract Purchase",
    description:
      "Pay a deposit and monthly instalments, with an optional larger final payment if you want to keep the car. At the end, you can pay that final amount to own it, return it under the agreement terms, or use any available equity towards another car. Mileage and condition terms can apply.",
    end: "Choose whether to pay the final amount to own the car or return it under the agreement terms.",
  },
  {
    kind: "pch",
    short: "PCH",
    title: "Personal Contract Hire",
    description:
      "Also called leasing, this usually involves an initial rental followed by monthly payments for an agreed period and mileage. You return the vehicle when the agreement ends. Extra mileage or damage can lead to additional charges.",
    end: "Return the car; the agreement does not normally offer a way to buy it.",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-[17px] w-[17px] shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {diagonal ? (
        <path d="M5 19 19 5M9 5h10v10" />
      ) : (
        <path d="M4 12h16m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

function OptionIcon({ kind }: { kind: FinanceKind }) {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 text-[#70D3F9]"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === "hp" && (
        <>
          <path d="m5 16 2-6a3 3 0 0 1 2.8-2h12.4A3 3 0 0 1 25 10l2 6" />
          <path d="M4 16h24v9H4zM8 25v2m16-2v2M8 20h3m10 0h3" />
        </>
      )}
      {kind === "pcp" && (
        <>
          <path d="M24.5 10A11 11 0 0 0 7 12M7 12V6m0 6h6" />
          <path d="M7.5 22A11 11 0 0 0 25 20m0 0v6m0-6h-6" />
          <path d="M12 15h8m-8 4h5" />
        </>
      )}
      {kind === "pch" && (
        <>
          <path d="M6 8h20v18H6zM11 5v6m10-6v6M6 13h20" />
          <path d="m12 20 3 3 5-6" />
        </>
      )}
    </svg>
  );
}

const buttonClass =
  "group inline-flex min-h-[51px] items-center justify-center gap-3 bg-[#00A8E8] px-6 text-[12px] font-semibold uppercase tracking-[0.13em] text-white shadow-[0_8px_24px_rgba(0,168,232,0.20)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#12B7F4] hover:shadow-[0_12px_30px_rgba(0,168,232,0.30)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A8E8]";

export default function FinancePage() {
  return (
    <main
      className="min-h-screen overflow-hidden font-[var(--font-body)] text-white"
      style={{
        background:
          "radial-gradient(ellipse at 95% 0%, #00a8e80c, transparent 45%), #090d12",
        colorScheme: "dark",
      }}
    >
      <section
        aria-labelledby="finance-heading"
        className="relative isolate flex min-h-[440px] flex-col justify-end overflow-hidden border-b border-white/10 sm:min-h-[500px] lg:min-h-[560px]"
        style={{ paddingTop: "var(--ym-stock-header-clearance, 96px)" }}
      >
        <Image
          src="/images/finance-banner.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="z-0 scale-[1.015] object-cover object-[center_56%]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(4,10,17,0.96)_0%,rgba(4,10,17,0.82)_34%,rgba(4,10,17,0.50)_60%,rgba(4,10,17,0.20)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[46%] bg-[linear-gradient(180deg,transparent_0%,rgba(9,13,18,0.88)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[8%] top-[34%] z-10 h-56 w-56 rounded-full bg-[#00A8E8]/10 blur-[95px]"
        />

        <div className="relative z-20 mx-auto w-full max-w-[1400px] px-5 pb-12 pt-16 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <div className="max-w-[700px]">
         

            <h1
              id="finance-heading"
              className="font-[var(--font-display)] text-[clamp(43px,5.2vw,72px)] font-semibold leading-[1.02] tracking-[-0.052em] drop-shadow-[0_4px_20px_rgba(0,0,0,0.36)]"
            >
              Car <span className="bg-[linear-gradient(90deg,#27C1F3_0%,#AEE8FA_58%,#FFFFFF_100%)] bg-clip-text text-transparent">Finance</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[15px] leading-[1.8] text-white/80 sm:text-[17px]">
              A good car is a big decision. Understand the ways to pay for it before choosing what works for you.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {["HP", "PCP", "PCH"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#00A8E8]/35 bg-[#00A8E8]/10 px-3.5 py-2 text-[11px] font-semibold tracking-[0.12em] text-[#8CDBF9]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-8 h-72 w-72 rounded-full bg-[#00A8E8]/[0.05] blur-[100px]" />
        <div className="relative mx-auto grid max-w-[1400px] items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <h2 className="max-w-[560px] font-[var(--font-display)] text-[clamp(35px,4vw,55px)] font-semibold leading-[1.09] tracking-[-0.04em]">
            Make room for your <span className="text-[#72D5FB]">next move.</span>
          </h2>
          <div className="max-w-[640px] space-y-4 text-[15px] leading-[1.85] text-white/68 sm:text-[16px]">
            <p>
              Finding the right car is only part of the decision. It also helps to know what you would pay upfront, what the monthly cost means and what happens when an agreement ends.
            </p>
            <p>
              At YM Motors, you can ask about a vehicle you have seen and talk through the next steps. The guide below explains three common UK arrangements so you can ask the right questions before deciding.
            </p>
          </div>
        </div>
      </section>

      <section
        id="finance-options"
        aria-labelledby="options-heading"
        className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-5 border-b border-white/15 pb-8 md:grid-cols-[1fr_0.8fr] md:items-end">
            <h2 id="options-heading" className="font-[var(--font-display)] text-[clamp(34px,4vw,54px)] font-semibold leading-[1.1] tracking-[-0.04em]">
              Car finance, explained.
            </h2>
            <p className="max-w-[470px] text-[14px] leading-[1.7] text-white/55 md:justify-self-end">
              Each route handles ownership differently. The products available for a particular vehicle can vary.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {financeOptions.map((option) => (
              <article
                key={option.kind}
                className="group relative flex min-h-full flex-col overflow-hidden rounded-[18px] border border-white/12 bg-[linear-gradient(145deg,rgba(20,30,41,0.88),rgba(11,18,27,0.96))] p-6 shadow-[0_20px_55px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#00A8E8]/35 sm:p-7"
              >
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00A8E8]/80 to-transparent opacity-70" />

                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-[14px] border border-[#00A8E8]/20 bg-[#00A8E8]/[0.07]">
                    <OptionIcon kind={option.kind} />
                  </div>
                  <span className="rounded-full border border-[#00A8E8]/25 bg-[#00A8E8]/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#72D5FB]">
                    {option.short}
                  </span>
                </div>

                <h3 className="mt-6 font-[var(--font-display)] text-[27px] font-semibold leading-tight tracking-[-0.03em] sm:text-[30px]">
                  {option.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.85] text-white/64 sm:text-[15px]">
                  {option.description}
                </p>

                <div className="mt-auto pt-7">
                  <div className="border-t border-white/10 pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#72D5FB]">
                      At the end
                    </span>
                    <p className="mt-3 text-[13px] leading-[1.75] text-white/78 sm:text-[14px]">
                      {option.end}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-7 max-w-[980px] border-l-2 border-[#00A8E8] bg-white/[0.025] px-5 py-4 sm:px-6">
            <p className="text-[12px] leading-[1.75] text-white/50 sm:text-[13px]">
              This is a general guide. Ask which arrangements, if any, are available for the vehicle you are considering and read the full terms before entering an agreement.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="questions-heading" className="relative overflow-hidden border-y border-white/10 bg-[#0d141c] px-5 py-[74px] sm:px-8 sm:py-24 lg:px-12">
        <div aria-hidden="true" className="pointer-events-none absolute left-[12%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#00A8E8]/[0.045] blur-[95px]" />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20">
          <div>
            <h2 id="questions-heading" className="max-w-[500px] font-[var(--font-display)] text-[clamp(33px,3.8vw,50px)] font-semibold leading-[1.1] tracking-[-0.04em]">
              Look beyond the <span className="text-[#72D5FB]">monthly figure.</span>
            </h2>
            <p className="mt-5 max-w-[465px] text-[14px] leading-[1.8] text-white/58 sm:text-[15px]">
              Take a moment to compare the full cost of an agreement with the way you expect to use your car.
            </p>
          </div>
          <dl className="grid gap-3">
            <div className="grid gap-2 rounded-[14px] border border-white/10 bg-white/[0.025] px-5 py-5 transition hover:border-[#00A8E8]/25 sm:grid-cols-[185px_1fr] sm:gap-6 sm:px-6">
              <dt className="font-semibold text-white">What you pay</dt>
              <dd className="text-[14px] leading-[1.7] text-white/60">Deposit, APR, monthly payments, fees and total amount payable.</dd>
            </div>
            <div className="grid gap-2 rounded-[14px] border border-white/10 bg-white/[0.025] px-5 py-5 transition hover:border-[#00A8E8]/25 sm:grid-cols-[185px_1fr] sm:gap-6 sm:px-6">
              <dt className="font-semibold text-white">How you drive</dt>
              <dd className="text-[14px] leading-[1.7] text-white/60">Mileage limits and vehicle condition rules, where your agreement includes them.</dd>
            </div>
            <div className="grid gap-2 rounded-[14px] border border-white/10 bg-white/[0.025] px-5 py-5 transition hover:border-[#00A8E8]/25 sm:grid-cols-[185px_1fr] sm:gap-6 sm:px-6">
              <dt className="font-semibold text-white">What happens next</dt>
              <dd className="text-[14px] leading-[1.7] text-white/60">Any final payment, purchase fee or return conditions at the end of the term.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[22px] border border-white/12 bg-[linear-gradient(135deg,#121c27_0%,#0b121a_72%)] px-6 py-9 shadow-[0_28px_80px_rgba(0,0,0,0.22)] sm:px-8 sm:py-11 lg:px-11">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#00A8E8]/10 blur-[90px]" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00A8E8]/75 to-transparent" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-[700px]">
              <h2 className="font-[var(--font-display)] text-[clamp(35px,4vw,56px)] font-semibold leading-[1.09] tracking-[-0.04em]">
                Ready to talk <span className="text-[#72D5FB]">cars?</span>
              </h2>
              <p className="mt-4 max-w-[620px] text-[15px] leading-[1.8] text-white/62">
                Seen something in our stock? Tell us which car caught your eye, and the YM Motors team can help you with your next questions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="/contact" className={buttonClass}>
                Contact YM Motors <ArrowIcon diagonal />
              </a>
              <a href="/current-stock" className="border-b border-white/50 pb-1 text-[13px] font-semibold text-white/85 transition-colors hover:border-[#72D5FB] hover:text-[#72D5FB]">
                View current stock
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}