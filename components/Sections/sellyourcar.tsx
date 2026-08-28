"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CarFront,
  ClipboardCheck,
  Handshake,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";


const steps = [
  {
    icon: CarFront,
    number: "01",
    title: "Tell Us About Your Car",
    desc: "Share your vehicle details and receive a quick valuation from our specialists.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Professional Inspection",
    desc: "Our experts inspect your vehicle and provide a transparent assessment.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Receive Your Offer",
    desc: "Get a competitive offer with a simple and hassle-free process.",
  },
  {
    icon: BadgeCheck,
    number: "04",
    title: "Complete The Sale",
    desc: "We handle the paperwork while you enjoy a smooth transaction.",
  },
];


const ease = [0.22,1,0.36,1] as const;



export default function SellYourCar(){


const reduceMotion = useReducedMotion();



return (

<section

id="sell"

className="
relative
overflow-hidden

bg-[#0B0D0F]

py-20
lg:py-28
"

>





<div

className="
absolute
inset-0

bg-gradient-to-b

from-[#0B0D0F]

via-[#11161D]

to-[#0B0D0F]

"

/>






<div

className="
absolute

left-[-200px]

top-1/3

h-[450px]

w-[450px]

rounded-full

bg-[#00A8E8]/10

blur-[140px]

"

/>








<div

className="
relative
z-10

mx-auto

max-w-[1500px]

px-6

lg:px-12

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
y:30
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


className="mb-12"

>


<div

className="
flex
items-center
gap-3
mb-5
"

>

<span

className="
h-px
w-10

bg-[#00A8E8]

"

/>


<p

className="
text-xs
uppercase
tracking-[0.25em]

text-[#00A8E8]

"

>

Sell Your Vehicle

</p>


</div>






<h2

className="
text-white

text-4xl

lg:text-6xl

font-semibold

leading-tight

"

>

Sell Your Car

<br/>

<span className="text-[#00A8E8]">

The Easy Way.

</span>


</h2>






<p

className="
mt-5

max-w-xl

text-white/50

leading-relaxed

"

>

Get a fair valuation, expert guidance and a smooth selling experience with YM Motors.

</p>



</motion.div>









{/* MAIN */}



<div

className="
grid

lg:grid-cols-[1fr_1.1fr]

gap-8

"

>









{/* CTA CARD */}



<motion.div


initial={{
opacity:0,
x:-30
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


transition={{
duration:.7
}}



className="
relative

overflow-hidden

rounded-3xl

border

border-white/10

bg-[#11161D]

p-8

lg:p-10

"

>



<div

className="
absolute

right-0

top-0

h-[250px]

w-[250px]

rounded-full

bg-[#00A8E8]/10

blur-[100px]

"

/>





<div className="relative z-10">


<p

className="
text-xs
uppercase
tracking-[0.2em]

text-[#00A8E8]

"

>

Start Today

</p>




<h3

className="
mt-5

text-3xl

lg:text-4xl

font-semibold

text-white

"

>

Ready To Sell

Your Car?

</h3>





<p

className="
mt-4

text-white/50

leading-relaxed

"

>

Our team will evaluate your vehicle and provide a competitive market offer.

</p>






<a

href="#contact"

className="
mt-8

inline-flex

items-center

gap-3

bg-[#00A8E8]

px-8

py-4

text-sm

font-semibold

text-white

transition

hover:bg-[#18B5F0]

"

>

Get Valuation

<ArrowRight size={16}/>

</a>


</div>



</motion.div>









{/* STEPS */}



<div

className="
grid

sm:grid-cols-2

gap-4

"

>


{

steps.map((step,index)=>{


const Icon = step.icon;



return (

<motion.div


key={step.title}


initial={{
opacity:0,
y:25
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
delay:index*.1
}}


className="
group

rounded-2xl

border

border-white/10

bg-[#151C26]

p-6

transition

hover:border-[#00A8E8]/40

hover:-translate-y-1

"

>


<div

className="
flex

justify-between

items-start

"

>


<div

className="
flex

h-11

w-11

items-center

justify-center


rounded-xl


border

border-[#00A8E8]/30


bg-[#00A8E8]/10


text-[#00A8E8]

"

>

<Icon size={20}/>

</div>




<span

className="
text-sm

text-[#00A8E8]/60

"

>

{step.number}

</span>



</div>





<h4

className="
mt-5

text-white

font-semibold

"

>

{step.title}

</h4>





<p

className="
mt-3

text-sm

leading-relaxed

text-white/45

"

>

{step.desc}

</p>





</motion.div>

)


})

}



</div>









</div>





</div>





</section>

)

}