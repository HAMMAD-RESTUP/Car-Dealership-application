"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import {
  ShieldCheck,
  Landmark,
  Repeat2,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";


const ease = [0.22,1,0.36,1] as const;



const features = [

{
icon:ShieldCheck,
title:"Quality Approved Cars",
desc:"Every car is handpicked and rigorously inspected to ensure premium quality and reliability.",
},


{
icon:Landmark,
title:"Flexible Finance Options",
desc:"Competitive rates and tailored finance solutions designed around your budget and lifestyle.",
},


{
icon:Repeat2,
title:"Part Exchange Welcome",
desc:"We offer fair valuations and make upgrading your vehicle simple and hassle-free.",
},


{
icon:BadgeCheck,
title:"Warranty & Peace of Mind",
desc:"All vehicles come with warranty options and reliable support.",
},


];





const financePoints=[

{
title:"Competitive APR",
desc:"Low rates on all finance plans",
},


{
title:"Quick & Easy Approval",
desc:"Get approved in minutes",
},


{
title:"Tailored to You",
desc:"Plans that fit your budget",
},


];






export default function WhyChooseUs(){


const reduceMotion = useReducedMotion();



return (

<section

className="

relative

overflow-hidden

bg-[#0B0D0F]

py-20

sm:py-24

lg:py-28

"

>







{/* BACKGROUND */}


<div

className="

pointer-events-none

absolute

inset-0


bg-[linear-gradient(180deg,#0B0D0F_0%,#11161D_48%,#0B0D0F_100%)]

"

/>








{/* BLUE AMBIENCE */}


<div

className="

pointer-events-none

absolute


right-[-220px]

top-[15%]


h-[520px]

w-[520px]


rounded-full


bg-[#00A8E8]/[0.045]


blur-[155px]

"

/>



<div

className="

pointer-events-none

absolute


bottom-[-220px]

left-[-180px]


h-[450px]

w-[450px]


rounded-full


bg-[#00A8E8]/[0.025]


blur-[150px]

"

/>









<div

className="

relative

z-10

mx-auto

max-w-[1720px]

px-5

sm:px-7

md:px-9

lg:px-12

xl:px-16

2xl:px-20

"

>







{/* HEADER */}



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
y:28
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

duration:.75,

ease

}}



className="mb-12"

>


<div

className="

mb-4

flex

items-center

gap-3

"

>

<span

className="

h-px

w-8

bg-[#00A8E8]

shadow-[0_0_8px_rgba(0,168,232,0.25)]

"

/>


<span

className="

font-sans

text-[9px]

font-semibold

uppercase

tracking-[0.16em]

text-[#00A8E8]

"

>

Why Choose YM Motors

</span>


</div>






<h2

className="

font-heading

text-[34px]

font-bold

leading-[0.98]

tracking-[-0.045em]

text-[#F4F2EE]

sm:text-[40px]

md:text-[46px]

lg:text-[52px]

"

>

Driven by Trust.

<br/>

<span className="text-[#00A8E8]">

Built on Quality.

</span>


</h2>



</motion.div>









{/* FEATURE CARDS */}



<div

className="

grid

grid-cols-1

gap-4

sm:grid-cols-2

lg:grid-cols-4

"

>



{

features.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div


key={item.title}


initial={{

opacity:0,

y:28

}}


whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true

}}



transition={{

duration:.65,

delay:index*.08,

ease

}}



className="

group

relative

overflow-hidden

rounded-[16px]

border

border-white/10

bg-[#151C26]/70

p-6


backdrop-blur-xl


transition-all

duration-500


hover:-translate-y-1


hover:border-[#00A8E8]/40


hover:bg-[#151C26]

"

>


<div

className="

absolute

inset-x-0

top-0

h-[45%]

bg-gradient-to-b

from-white/[0.05]

to-transparent

"

/>






<div

className="

relative

z-10

flex

items-start

gap-4

"

>


<div

className="

flex

h-11

w-11

shrink-0

items-center

justify-center


rounded-xl


border

border-[#00A8E8]/30


bg-[#00A8E8]/10


text-[#00A8E8]

"

>


<Icon

size={20}

strokeWidth={1.5}

/>


</div>






<div>


<h3

className="

font-sans

text-sm

font-semibold

text-white

"

>

{item.title}

</h3>



<p

className="

mt-2

text-xs

leading-relaxed

text-white/45

"

>

{item.desc}

</p>


</div>


</div>



</motion.div>

)


})

}



</div>









{/* FINANCE PANEL */}



<motion.div

initial={{
opacity:0,
y:35
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.85,
delay:.15,
ease
}}

className="
relative
mt-6

min-h-[360px]

overflow-hidden

rounded-[18px]

border

border-white/10

bg-[#0D0F12]

"

>


{/* BACKGROUND */}

<div

className="
absolute
inset-0

bg-gradient-to-r

from-[#0B0D0F]

via-[#101720]

to-[#0B0D0F]

"

/>





{/* BLUE GLOW */}

<div

className="
absolute

right-0

bottom-0


h-[420px]

w-[420px]


rounded-full


bg-[#00A8E8]/10


blur-[140px]

"

/>







{/* CAR IMAGE - BACK LAYER */}

<div

className="
absolute

z-10

right-[-80px]

bottom-[-30px]


h-[330px]

w-[520px]


lg:h-[390px]

lg:w-[620px]

"

>

<Image

src="/images/finance-car-display.png"

alt="Finance vehicle"

fill

className="
object-contain

object-right-bottom

"

/>


</div>






{/* DARK FADE OVER CAR */}

<div

className="
absolute

z-20

inset-0


bg-gradient-to-r

from-[#0D0F12]

via-[#0D0F12]/80

to-transparent

"

/>










{/* CONTENT */}

<div

className="
relative

z-40


grid


items-center


min-h-[360px]


px-8


lg:grid-cols-[1fr_300px_320px]


lg:px-12

"

>







{/* LEFT */}

<div>


<p

className="
text-xs

uppercase

tracking-[0.25em]

text-[#00A8E8]

"

>

Drive Now, Pay Monthly

</p>





<h3

className="
mt-4

text-4xl

lg:text-5xl

font-bold

leading-none

text-white

"

>

Flexible Finance

<br/>

for Your Next Car

</h3>





<p

className="
mt-5

max-w-md

text-sm

leading-relaxed

text-white/50

"

>

Spread the cost with affordable monthly payments tailored around your budget.

</p>






<a

href="#finance"

className="
mt-7

inline-flex

h-[52px]

items-center

justify-center


bg-[#00A8E8]

px-8

text-sm

font-semibold

text-white


hover:bg-[#18B5F0]

transition

"

>

Explore Finance Options

</a>



</div>










{/* FINANCE POINTS */}

<div

className="
relative

z-50

space-y-4

"

>


{

financePoints.map((item)=>(


<div

key={item.title}

className="
flex

items-center

gap-3



"

>


<div

className="
flex

h-9

w-9

shrink-0


items-center

justify-center


rounded-lg


border

border-[#00A8E8]/40


bg-[#00A8E8]/10


text-[#00A8E8]

"

>

<CheckCircle2 size={16}/>

</div>




<div>


<h4

className="
text-sm

font-semibold

text-white

"

>

{item.title}

</h4>


<p

className="
mt-1

text-xs

text-white/40

"

>

{item.desc}

</p>


</div>



</div>



))

}



</div>









{/* EMPTY SPACE FOR CAR */}

<div className="hidden lg:block"/>







</div>





</motion.div>




</div>






</section>

)

}