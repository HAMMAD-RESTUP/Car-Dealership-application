"use client";

import { motion } from "framer-motion";
import Image from "next/image";



const brands = [

{
name:"Ferrari",
logo:"/images/ferrari.png"
},

{
name:"Porsche",
logo:"/images/porsche.png"
},

{
name:"Mercedes",
logo:"/images/mercedes.jpeg"
},

{
name:"Lamborghini",
logo:"/images/brands/lamborghini.png"
},

{
name:"Rolls Royce",
logo:"/images/brands/rolls.png"
},

{
name:"Range Rover",
logo:"/images/brands/range.png"
},

{
name:"Audi",
logo:"/images/brands/audi.png"
},

{
name:"Ford",
logo:"/images/brands/ford.png"
}

];





export default function BrandMarquee(){


return (


<section

className="
relative

bg-[#080808]

py-14

overflow-hidden

"


>


{/* COPPER GLOW */}


<div

className="
absolute

left-1/2

top-0

-translate-x-1/2


w-[500px]

h-[220px]


bg-[#A65E2E]/10


blur-[120px]

"


/>








<div

className="
relative
z-10

max-w-[1440px]

mx-auto

"

>






{/* HEADING */}



<motion.div


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
duration:.7
}}


className="
text-center

mb-10

"

>


<p

className="
text-[#A65E2E]

uppercase

tracking-[5px]

text-xs

mb-3

"

>

Trusted Brands

</p>



<h2

className="
text-white

text-3xl

sm:text-4xl

font-semibold

"

>

World Class
Automotive Brands

</h2>


</motion.div>








{/* MARQUEE */}



<div

className="
relative

overflow-hidden

"

>



<div

className="
flex

gap-16

w-max

marquee

"

>


{[...brands,...brands].map((brand,index)=>(


<div

key={index}

className="
group

w-[120px]

sm:w-[150px]

h-[70px]


flex

items-center

justify-center

"

>


<Image

src={brand.logo}

alt={brand.name}

width={120}

height={60}


className="

object-contain


opacity-40


grayscale


transition-all


duration-500


group-hover:opacity-100


group-hover:grayscale-0


"


/>



</div>


))}


</div>



</div>







{/* FADE SIDES */}



<div

className="
absolute

left-0

top-0

bottom-0

w-24


bg-gradient-to-r

from-[#080808]

to-transparent

pointer-events-none

"

/>



<div

className="
absolute

right-0

top-0

bottom-0

w-24


bg-gradient-to-l

from-[#080808]

to-transparent

pointer-events-none

"

/>






</div>





</section>


)

}