"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero(){

return(
<section className="relative overflow-hidden bg-[#05070a] min-h-screen">

<div className="hidden md:block absolute inset-0">
<Image src="/images/modern-hero-banner.jpeg" alt="Luxury Car" fill priority className="object-cover object-center"/>
</div>

<div className="md:hidden absolute bottom-0 left-0 w-full h-[48%]">
<Image src="/images/mobile-hero-banner.jpeg" alt="Luxury Car" fill priority className="object-cover object-center"/>
</div>

<div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#05070a]/95 via-[#05070a]/55 to-transparent"/>
<div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#05070a] via-[#05070a]/80 to-transparent"/>

<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05070a] to-transparent"/>

<div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 pt-32 md:pt-[220px] lg:pt-[240px] pb-20">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:.8}}
className="max-w-xl lg:max-w-2xl"
>

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:.2}}
className="text-[#b9c8dc] uppercase tracking-[5px] text-xs sm:text-sm mb-5"
>
Premium Pre-Owned Vehicles
</motion.p>

<motion.h1
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{delay:.4}}
className="text-white text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05]"
>
Drive The Best.
<br/>
Own For Less.
</motion.h1>

<motion.p
initial={{opacity:0,y:25}}
animate={{opacity:1,y:0}}
transition={{delay:.6}}
className="mt-6 text-gray-200 text-base sm:text-lg leading-relaxed max-w-lg"
>
Discover expertly inspected vehicles with premium quality, flexible financing, and a trusted automotive experience.
</motion.p>

<motion.div
initial={{opacity:0,y:25}}
animate={{opacity:1,y:0}}
transition={{delay:.8}}
className="flex flex-col sm:flex-row gap-4 mt-8"
>

<button className="btn-primary w-full sm:w-auto">
Explore Cars
</button>

<button className="btn-secondary w-full sm:w-auto">
Book Test Drive
</button>

</motion.div>

</motion.div>

</div>

</section>
);

}