"use client";

import { motion } from "framer-motion";


export default function VideoSection(){

return(

<section className="relative h-[650px] overflow-hidden bg-[#05070a]">


{/* VIDEO */}

<video
autoPlay
loop
muted
playsInline
className="absolute inset-0 w-full h-full object-cover"
>

<source src="/images/demo-video.mp4" type="video/mp4"/>

</video>





{/* OVERLAY */}

<div className="absolute inset-0 bg-black/60"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-[#05070a]/40"/>







{/* CONTENT */}

<div className="relative z-10 h-full flex items-center justify-center text-center px-6">


<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.8}}

className="max-w-3xl"

>


<p className="text-[#9db4d2] uppercase tracking-[5px] text-xs mb-5">

The Ultimate Experience

</p>



<h2 className="text-white text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight">

Experience Luxury.
<br/>
Feel The Drive.

</h2>



<p className="text-gray-300 mt-6 max-w-xl mx-auto">

Discover exceptional engineering, premium design and unforgettable performance with our exclusive collection of vehicles.

</p>





<button className="
mt-8
w-20
h-20
rounded-full
border
border-white/40
text-white
text-2xl
flex
items-center
justify-center
mx-auto
hover:bg-white
hover:text-black
transition
">

▶

</button>





</motion.div>


</div>



</section>

);

}