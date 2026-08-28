"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";


const brands = [
  {
    name:"Ferrari",
    logo:"/images/ferrari.png",
  },
  {
    name:"Porsche",
    logo:"/images/porsche.png",
  },
  {
    name:"Mercedes",
    logo:"/images/mercedes.jpeg",
  },
  {
    name:"Lamborghini",
    logo:"/images/brands/lamborghini.png",
  },
  {
    name:"Rolls Royce",
    logo:"/images/brands/rolls.png",
  },
  {
    name:"Range Rover",
    logo:"/images/brands/range.png",
  },
  {
    name:"Audi",
    logo:"/images/brands/audi.png",
  },
  {
    name:"Ford",
    logo:"/images/brands/ford.png",
  },
];


const ease = [0.22,1,0.36,1] as const;



export default function BrandMarquee(){


const reduceMotion = useReducedMotion();



return (

<section

className="

relative

overflow-hidden


border-y

border-white/[0.06]


bg-[#0B0D0F]


py-8


"

>





{/* BACKGROUND */}


<div

className="

absolute

inset-0


bg-[linear-gradient(180deg,#0B0D0F_0%,#11161D_50%,#0B0D0F_100%)]

"

/>







{/* BLUE AMBIENCE */}


<div

className="

pointer-events-none

absolute


left-1/2

top-1/2


h-[260px]

w-[720px]


-translate-x-1/2

-translate-y-1/2


rounded-full


bg-[#00A8E8]/[0.05]


blur-[120px]

"

/>







{/* TOP DETAIL LINE */}


<div

className="

absolute

top-0

left-1/2


h-px

w-[65%]


-translate-x-1/2


bg-gradient-to-r

from-transparent

via-[#00A8E8]/50

to-transparent


shadow-[0_0_15px_rgba(0,168,232,0.18)]

"

/>







<motion.div


initial={

reduceMotion

?

{
opacity:1,
y:0
}

:

{
opacity:0,
y:15
}

}



whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true

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

duration:30,

repeat:Infinity,

ease:"linear"

}

}

}



className="

flex

w-max

items-center

"

>


{

[...brands,...brands].map((brand,index)=>(


<div

key={`${brand.name}-${index}`}


className="

group

relative


flex

h-[65px]

w-[150px]


shrink-0


items-center

justify-center


px-5


sm:w-[180px]

md:w-[210px]

lg:w-[230px]

"

>





{/* Separator */}


<span

className="

absolute

right-0

top-1/2


h-[30px]

w-px


-translate-y-1/2


bg-gradient-to-b

from-transparent

via-white/10

to-transparent

"

/>







{/* BLUE HOVER GLOW */}


<span

className="

absolute

left-1/2

top-1/2


h-[50px]

w-[100px]


-translate-x-1/2

-translate-y-1/2


rounded-full


bg-[#00A8E8]/0


blur-[30px]


transition-all

duration-500


group-hover:bg-[#00A8E8]/10

"

/>







<Image


src={brand.logo}


alt={brand.name}


width={150}


height={65}


className="


relative

z-10



max-h-[38px]

max-w-[120px]



object-contain



select-none



grayscale


brightness-[1.5]

contrast-[1.05]


opacity-40



transition-all

duration-500



group-hover:scale-105


group-hover:grayscale-0


group-hover:opacity-100


group-hover:brightness-110


group-hover:drop-shadow-[0_0_15px_rgba(0,168,232,0.25)]


"

/>



</div>



))


}



</motion.div>








{/* LEFT FADE */}


<div

className="

pointer-events-none

absolute

inset-y-0

left-0

z-20


w-20


bg-gradient-to-r

from-[#0B0D0F]

via-[#0B0D0F]/90

to-transparent


lg:w-36

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


w-20


bg-gradient-to-l

from-[#0B0D0F]

via-[#0B0D0F]/90

to-transparent


lg:w-36

"

/>





</motion.div>





</section>

)

}