"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";


const ease = [0.22, 1, 0.36, 1] as const;



export default function VideoSection() {


const reduceMotion = useReducedMotion();



return (

<section

className="

relative

h-[560px]

min-h-[560px]

w-full

overflow-hidden


bg-[#0B0D0F]


sm:h-[620px]

lg:h-[680px]

"

>





{/* VIDEO */}


<motion.video


initial={

reduceMotion

?

{
scale:1
}

:

{
scale:1.06
}

}



whileInView={{

scale:1

}}



viewport={{

once:true

}}



transition={{

duration:1.8,

ease

}}


autoPlay

loop

muted

playsInline

preload="metadata"



className="

absolute

inset-0


h-full

w-full


object-cover

object-center

"

>


<source

src="/images/demo-video.mp4"

type="video/mp4"

/>


</motion.video>








{/* MAIN DARK OVERLAY */}



<div

className="

pointer-events-none

absolute

inset-0

z-10


bg-black/55

"

/>







{/* CENTER FOCUS */}



<div

className="

pointer-events-none

absolute

inset-0

z-10


bg-[radial-gradient(circle_at_center,rgba(11,13,15,0.02)_0%,rgba(11,13,15,0.18)_45%,rgba(11,13,15,0.82)_100%)]

"

/>







{/* TOP + BOTTOM DEPTH */}



<div

className="

pointer-events-none

absolute

inset-0

z-10


bg-[linear-gradient(180deg,#0B0D0F_0%,rgba(11,13,15,0.08)_24%,rgba(11,13,15,0.03)_60%,#0B0D0F_100%)]

"

/>







{/* BLUE ATMOSPHERE */}



<div

className="

pointer-events-none

absolute

left-1/2

top-1/2

z-10


h-[420px]

w-[760px]

max-w-[92vw]


-translate-x-1/2

-translate-y-1/2


rounded-full


bg-[#00A8E8]/[0.05]


blur-[155px]

"

/>







{/* TOP LIGHT LINE */}



<div

className="

pointer-events-none

absolute

left-1/2

top-0

z-20


h-px

w-[65%]


-translate-x-1/2


bg-gradient-to-r

from-transparent

via-[#00A8E8]/40

to-transparent


shadow-[0_0_12px_rgba(0,168,232,0.18)]

"

/>









{/* CONTENT */}



<div

className="

relative

z-30


mx-auto


flex

h-full

w-full

max-w-[1500px]


items-center

justify-center


px-5

sm:px-8

lg:px-12

"

>



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
y:35
}

}



whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true,

amount:0.3

}}



transition={{

duration:.8,

ease

}}



className="

mx-auto

w-full

max-w-[720px]


text-center

"

>









{/* EYEBROW */}



<div

className="

mb-5


flex

items-center

justify-center


gap-3

"

>


<span

className="

h-px

w-8


bg-[#00A8E8]


shadow-[0_0_8px_rgba(0,168,232,0.28)]

"

/>





<p

className="

font-sans


text-[10px]


font-semibold


uppercase


tracking-[0.25em]


text-[#00A8E8]/90

"

>

The YM Motors Experience

</p>





<span

className="

h-px

w-8


bg-[#00A8E8]


shadow-[0_0_8px_rgba(0,168,232,0.28)]

"

/>



</div>









{/* HEADING */}



<div className="overflow-hidden py-1">


<motion.h2


initial={

reduceMotion

?

{
y:0
}

:

{
y:"105%"
}

}



whileInView={{

y:0

}}



viewport={{

once:true

}}



transition={{

duration:.9,

delay:.08,

ease

}}



className="

font-heading


text-[38px]

font-bold


leading-[0.98]


tracking-[-0.045em]


text-[#F4F2EE]


sm:text-[46px]

md:text-[52px]

lg:text-[58px]

"

>


Experience Luxury.

<br/>


<span className="text-[#00A8E8]">

Feel The Drive.

</span>



</motion.h2>



</div>









{/* DESCRIPTION */}



<motion.p


initial={{

opacity:0,

y:18

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}



transition={{

duration:.7,

delay:.28,

ease

}}



className="

mx-auto

mt-5


max-w-[520px]


font-sans


text-[14px]


leading-[1.75]


text-white/55

"

>

Discover exceptional engineering,
considered design and unforgettable
performance across our carefully selected
collection.

</motion.p>









{/* ACTIONS */}



<motion.div


initial={{

opacity:0,

y:20

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}



transition={{

duration:.7,

delay:.42,

ease

}}



className="

mt-8


flex

flex-col

items-center

justify-center


gap-4


sm:flex-row

"

>








{/* WATCH BUTTON */}



<button

className="

group

relative


flex

h-[56px]

min-w-[200px]


items-center

justify-center


gap-3


overflow-hidden


border

border-[#00A8E8]


bg-[#00A8E8]


px-7


font-sans


text-sm


font-semibold


text-white


transition-all


duration-500


hover:-translate-y-[2px]


hover:bg-[#18B5F0]

hover:border-[#18B5F0]


hover:shadow-[0_16px_42px_rgba(0,168,232,0.22)]

"

>


<span

className="

relative

z-10


flex

h-7

w-7


items-center

justify-center


border

border-white/20


bg-black/10

"

>


<Play

fill="currentColor"

strokeWidth={1.5}

className="

h-3

w-3

ml-[1px]

"

/>


</span>



<span className="relative z-10">

Watch Experience

</span>



</button>









{/* STOCK BUTTON */}



<a

href="#stock"

className="

group

relative


flex

h-[56px]

min-w-[180px]


items-center

justify-center


border

border-white/20


bg-black/20


px-7


font-sans


text-sm


font-semibold


text-white/80


backdrop-blur-md


transition-all


duration-500


hover:-translate-y-[2px]


hover:border-[#00A8E8]/70


hover:bg-[#00A8E8]/10


hover:text-white

"

>


<span

className="

absolute

bottom-0

left-1/2


h-[2px]

w-0


-translate-x-1/2


bg-[#00A8E8]


transition-all


duration-500


group-hover:w-1/2

"

/>


<span className="relative z-10">

Explore Stock

</span>


</a>





</motion.div>







</motion.div>



</div>






</section>

)

}