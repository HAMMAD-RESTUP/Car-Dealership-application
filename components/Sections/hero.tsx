"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function Hero(){

return (

<section className="relative overflow-hidden bg-[#05070a] min-h-screen">


{/* DESKTOP IMAGE */}

<div className="hidden md:block absolute inset-0">

<Image
src="/images/modern-hero-banner.jpeg"
alt="Luxury Car"
fill
priority
className="object-cover"
/>

</div>



{/* MOBILE IMAGE */}

<div className="md:hidden absolute bottom-0 left-0 w-full h-[48%]">

<Image
src="/images/mobile-hero-banner.jpeg"
alt="Luxury Car"
fill
priority
className="object-cover object-center"
/>

</div>





{/* DESKTOP OVERLAY */}

<div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#05070a]/95 via-[#05070a]/55 to-transparent"/>



{/* MOBILE OVERLAY */}

<div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#05070a] via-[#05070a]/80 to-transparent"/>




{/* BOTTOM FADE */}

<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05070a] to-transparent"/>





{/* CONTENT */}

<div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 pt-32 md:pt-36 pb-20">


<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:.8}}
className="max-w-2xl"
>


<p className="text-[#b9c8dc] uppercase tracking-[5px] text-xs sm:text-sm mb-5">
Premium Pre-Owned Vehicles
</p>


<h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05]">
Drive The Best.
<br/>
Own For Less.
</h1>


<p className="mt-6 text-gray-200 text-base sm:text-lg leading-relaxed max-w-lg">
Discover expertly inspected vehicles with premium quality, flexible financing, and a trusted automotive experience.
</p>



<div className="flex flex-col sm:flex-row gap-4 mt-8">


<button className="btn-primary w-full sm:w-auto">
Explore Cars
</button>


<button className="btn-secondary w-full sm:w-auto">
Book Test Drive
</button>


</div>


</motion.div>


</div>


</section>

);

}