"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";


export default function Hero() {


const reduceMotion = useReducedMotion();


return (

<section

id="home"

className="
relative
h-screen
w-full
overflow-hidden
bg-black
"

>





{/* BACKGROUND VIDEO */}


<motion.div


initial={
reduceMotion
?
{
scale:1
}
:
{
scale:1.08
}
}


animate={{
scale:1
}}


transition={{

duration:2,

ease:[0.22,1,0.36,1]

}}


className="
absolute
inset-0

w-full
h-full

overflow-hidden

"

>


<video

src="/images/cinematic-video.mp4"

autoPlay

muted

loop

playsInline

preload="auto"


className="

h-full

w-full


object-cover


object-[75%_center]


sm:object-[70%_center]


lg:object-[78%_center]

"

/>


</motion.div>







{/* DARK CINEMATIC OVERLAY */}



<div

className="

absolute

inset-0


bg-gradient-to-r

from-black/85

via-black/50

to-black/25


"

/>




<div

className="

absolute

inset-0


bg-gradient-to-t

from-black

via-transparent

to-black/30


"

/>









{/* CONTENT */}



<div

className="

relative

z-10


h-full


px-8


lg:px-12


flex


items-center


"

>









{/* LEFT CONTENT */}



<motion.div


initial={{

opacity:0,

y:40

}}


animate={{

opacity:1,

y:0

}}


transition={{

duration:1

}}



>



<p

className="

text-white/60


uppercase


tracking-[0.3em]


text-xs


mb-5

"

>

Premium Automotive

</p>









<h1


className="


font-[var(--font-inter)]


font-light


tracking-[-0.07em]


leading-[0.85]



text-[70px]


lg:text-[120px]


text-white


"

>


<span>

YM

</span>



<br />





<span

className="


inline-block


bg-[linear-gradient(180deg,#ffffff_0%,#d9e2e8_25%,#8997a5_48%,#ffffff_65%,#4d5965_100%)]


bg-clip-text


text-transparent



drop-shadow-[0_0_30px_rgba(255,255,255,0.18)]


font-semibold


"

>

Motors

</span>




</h1>









<p

className="


mt-6


max-w-[430px]


text-white/75


text-sm


lg:text-base


leading-relaxed


"

>

Luxury vehicles.

Trusted service.

A premium experience from selection

to final delivery.

</p>









{/* BUTTONS */}



<div

className="

mt-8


flex


gap-4


"

>


<a

href="#stock"

className="

bg-[#408099]


px-8


py-4


text-white


text-sm


font-medium


transition-all


duration-300
rounded-[25px]

hover:bg-[#5FA9B5]


"

>

Browse Stock

</a>







<a

href="#sell"

className="

border


border-white/30


px-8


py-4


text-white


text-sm


transition-all


duration-300


hover:bg-white


hover:text-black


"

>

Sell Your Car

</a>


</div>




</motion.div>









{/* RIGHT CONTENT */}



<motion.div


initial={{

opacity:0,

x:40

}}


animate={{

opacity:1,

x:0

}}


transition={{

duration:1,

delay:.3

}}


className="


absolute


right-10


bottom-36


max-w-[430px]


text-right


hidden


lg:block


"

>



<p

className="

font-[var(--font-inter)]


text-white/85


text-lg


leading-relaxed


"

>

Carefully selected vehicles with

exceptional quality, transparent history

and a premium buying experience.

</p>








<div

className="

mt-8


flex


justify-end


gap-8


text-white/60


uppercase


tracking-[0.2em]


text-xs


"

>



<div

className="

flex

flex-col

items-center

gap-2

"

>

<span className="text-xl">
✦
</span>

Luxury

</div>





<div

className="

flex

flex-col

items-center

gap-2

"

>

<span className="text-xl">
◉
</span>

Performance

</div>





<div

className="

flex

flex-col

items-center

gap-2

"

>

<span className="text-xl">
✓
</span>

Trust

</div>



</div>





</motion.div>







</div>







</section>

)

}