"use client";

import { motion } from "framer-motion";


export default function Logo(){

return(

<div className="
flex
items-center
gap-4
cursor-pointer
">


{/* MONOGRAM */}

<motion.div

whileHover={{
rotate:5,
scale:1.05
}}

transition={{
duration:.3
}}

className="
relative
w-[52px]
h-[52px]
flex
items-center
justify-center
"

>


<div className="
absolute
inset-0
border
border-[#8ea6c5]
rotate-45
opacity-80
">


</div>



<div className="
absolute
inset-[6px]
bg-[#0b1018]
border
border-white/10
flex
items-center
justify-center
">


<span className="
text-[#d5e2f5]
text-xl
font-semibold
tracking-[2px]
">

MC

</span>


</div>


</motion.div>





{/* BRAND TEXT */}

<div>


<h1 className="
text-white
text-[22px]
font-light
tracking-[7px]
leading-none
uppercase
">

MOTORS

</h1>


<div className="
flex
items-center
gap-2
mt-2
">


<span className="
w-8
h-[1px]
bg-[#8ea6c5]
">


</span>


<p className="
text-[9px]
tracking-[4px]
uppercase
text-[#9aaac0]
">

UK & EUROPE

</p>


</div>


</div>



</div>

)

}