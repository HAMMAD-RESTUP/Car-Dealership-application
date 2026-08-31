"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const brands = [
  {
    name: "Ferrari",
    logo: "/images/ferrari.png",
  },
  {
    name: "Porsche",
    logo: "/images/porsche.png",
  },
  {
    name: "Mercedes",
    logo: "/images/mercedes.jpeg",
  },
  {
    name: "Lamborghini",
    logo: "/images/brands/lamborghini.png",
  },
  {
    name: "Rolls Royce",
    logo: "/images/brands/rolls.png",
  },
  {
    name: "Range Rover",
    logo: "/images/brands/range.png",
  },
  {
    name: "Audi",
    logo: "/images/brands/audi.png",
  },
  {
    name: "Ford",
    logo: "/images/brands/ford.png",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;


export default function BrandMarquee() {

  const reduceMotion = useReducedMotion();


  return (

<section
className="
relative
overflow-hidden

border-y
border-white/[0.08]

bg-[#0B0E13]

py-10
"
>

{/* BACKGROUND */}
<div
className="
absolute
inset-0

bg-[linear-gradient(180deg,#070b10_0%,#101720_50%,#070b10_100%)]
"
/>


{/* GLASS OVERLAY */}
<div
className="
absolute
inset-0

bg-white/[0.025]

backdrop-blur-[20px]
"
/>


{/* BLUE GLOW */}
<div
className="
pointer-events-none

absolute
left-1/2
top-1/2

h-[300px]
w-[800px]

-translate-x-1/2
-translate-y-1/2

rounded-full

bg-[#00A8E8]/[0.07]

blur-[150px]
"
/>


{/* TOP LINE */}
<div
className="
absolute
top-0
left-1/2

h-px

w-[70%]

-translate-x-1/2

bg-gradient-to-r
from-transparent
via-[#00A8E8]/60
to-transparent

shadow-[0_0_20px_rgba(0,168,232,.25)]
"
/>



<motion.div

initial={
reduceMotion
?
{
opacity:1
}
:
{
opacity:0,
y:20
}
}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:false,
amount:0.3
}}

transition={{
duration:.7,
ease
}}

className="
relative
z-10

overflow-hidden
"

>


<motion.div

animate={
reduceMotion
?
{}
:
{
x:["0%","-50%"]
}
}

transition={
reduceMotion
?
{}
:
{
x:{
duration:35,
repeat:Infinity,
ease:"linear"
}
}
}

className="
flex
w-max
items-center
gap-0
"

>


{[...brands,...brands].map((brand,index)=>(


<div

key={`${brand.name}-${index}`}

className="
group

relative

flex

h-[90px]

w-[170px]

shrink-0

items-center
justify-center

px-5

sm:w-[210px]

lg:w-[240px]

"

>


{/* GLASS CARD */}

<div

className="
absolute

inset-x-3
inset-y-2

rounded-[10px]

border

border-white/[0.08]

bg-white/[0.025]

opacity-0

backdrop-blur-[18px]

transition-all

duration-500

group-hover:opacity-100

group-hover:border-[#00A8E8]/30

group-hover:bg-white/[0.06]

"

/>



{/* SEPARATOR */}

<span

className="
absolute

right-0

top-1/2

h-[38px]

w-px

-translate-y-1/2

bg-gradient-to-b

from-transparent

via-white/10

to-transparent

"

/>



{/* BRAND GLOW */}

<span

className="
pointer-events-none

absolute

left-1/2
top-1/2

h-[70px]

w-[130px]

-translate-x-1/2
-translate-y-1/2

rounded-full

bg-[#00A8E8]/0

blur-[35px]

transition-all

duration-500

group-hover:bg-[#00A8E8]/15

"

/>



<Image

src={brand.logo}

alt={brand.name}

width={180}

height={80}


className="
relative
z-10


max-h-[42px]

max-w-[130px]


object-contain


select-none


grayscale


brightness-[1.7]


opacity-55


transition-all

duration-500


group-hover:scale-110


group-hover:grayscale-0


group-hover:opacity-100


group-hover:brightness-125


group-hover:drop-shadow-[0_0_18px_rgba(0,168,232,.35)]

"

/>



</div>


))}


</motion.div>



{/* LEFT FADE */}

<div

className="
pointer-events-none

absolute

inset-y-0

left-0

z-20


w-24


bg-gradient-to-r

from-[#0B0E13]

via-[#0B0E13]/90

to-transparent


lg:w-40

"

/>



{/* RIGHT FADE */}

<div

className="
pointer-events-none

absolute

inset-y-0

right-0

z-20


w-24


bg-gradient-to-l

from-[#0B0E13]

via-[#0B0E13]/90

to-transparent


lg:w-40

"

/>



</motion.div>



</section>

  );
}