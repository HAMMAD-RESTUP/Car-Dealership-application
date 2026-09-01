"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { FcGoogle } from "react-icons/fc";


const ease = [0.22,1,0.36,1] as const;


const testimonials = [

{
name:"James H.",
review:
"Outstanding service from start to finish. The team were helpful, honest and made the whole process so easy."
},

{
name:"Sarah L.",
review:
"Bought my Porsche 911 from YM Motors and couldn’t be happier. Beautiful car and fantastic experience."
},

{
name:"David R.",
review:
"Great selection of cars and very transparent service. Professional, friendly and highly recommended."
}

];





export default function Testimonials(){


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
absolute
inset-0

bg-[linear-gradient(180deg,#0B0D0F_0%,#11161D_48%,#0B0D0F_100%)]

"

/>







{/* BLUE GLOW */}



<div

className="
absolute

right-[-180px]

top-[12%]


h-[430px]

w-[430px]


rounded-full


bg-[#00A8E8]/[0.045]


blur-[145px]

"

/>




<div

className="
absolute

bottom-[-180px]

left-[-180px]


h-[380px]

w-[380px]


rounded-full


bg-[#00A8E8]/[0.025]


blur-[140px]

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

lg:px-12

xl:px-16

"

>







<div

className="
grid

gap-10

lg:grid-cols-[0.85fr_2.15fr]

lg:items-start

"

>









{/* LEFT */}



<motion.div


initial={

reduceMotion

?

{
opacity:1,
x:0
}

:

{
opacity:0,
x:-28
}

}


whileInView={{

opacity:1,

x:0

}}



viewport={{

once:true

}}



transition={{

duration:.7,

ease

}}



>










<h2

className="
max-w-[430px]

text-[38px]

font-bold

leading-[0.98]

tracking-tight

text-[#F4F2EE]

lg:text-[48px]

"

>

Trusted Customers

<br/>


<span className="text-[#00A8E8]">

Across Surrey

</span>


</h2>







<p

className="
mt-5

max-w-[360px]

text-sm

leading-relaxed

text-white/40

"

>

Real experiences from customers who chose YM Motors for quality vehicles, trusted service and a smooth buying experience.

</p>





</motion.div>









{/* CARDS */}



<div

className="
grid

gap-4

md:grid-cols-3

"

>


{

testimonials.map((item,index)=>(


<motion.article


key={item.name}


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

delay:index*.09,

ease

}}



className="
group

relative

min-h-[230px]

overflow-hidden

rounded-2xl


border

border-white/10


bg-white/[0.035]


p-5


backdrop-blur-xl


transition


duration-500


hover:-translate-y-1


hover:border-[#00A8E8]/40

"

>





<span

className="
absolute

left-0

top-0

h-px

w-0


bg-[#00A8E8]


shadow-[0_0_10px_rgba(0,168,232,0.35)]


transition-all

duration-500


group-hover:w-full

"

/>







<div

className="
relative
z-10

flex

h-full

flex-col

"

>




<div

className="
flex

justify-between

"

>



<div

className="
flex

h-9

w-9

items-center

justify-center


rounded-lg


border

border-[#00A8E8]/30


bg-[#00A8E8]/10


text-[#00A8E8]

"

>

<Quote size={17}/>

</div>






<div

className="
flex

h-9

w-9

items-center

justify-center


rounded-full


bg-white

"

>

<FcGoogle size={18}/>

</div>



</div>








<p

className="
mt-5

flex-1

text-sm

leading-relaxed

text-white/55

"

>

“{item.review}”

</p>








<div

className="
mt-6

flex

items-end

justify-between

"

>



<div>

<span

className="
block

text-xs

font-semibold

text-white

"

>

{item.name}

</span>



<span

className="
text-[9px]

text-white/30

"

>

Google Review

</span>

</div>







<div

className="
flex

gap-1

"

>

{

[1,2,3,4,5].map((star)=>(


<Star

key={star}

fill="currentColor"

strokeWidth={0}

size={12}

className="
text-[#F5B301]
"

/>


))

}

</div>



</div>







</div>



</motion.article>


))

}



</div>







</div>







</div>





</section>

)

}