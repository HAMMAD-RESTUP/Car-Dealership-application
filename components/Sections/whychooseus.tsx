"use client";

import { motion } from "framer-motion";


const features=[
{number:"500+",title:"Premium Cars",desc:"Hand selected luxury vehicles from trusted brands."},
{number:"100%",title:"Inspected Vehicles",desc:"Every vehicle goes through detailed quality checks."},
{number:"10+",title:"Years Experience",desc:"Professional automotive experience across UK & Europe."},
{number:"24/7",title:"Customer Support",desc:"Dedicated support whenever you need assistance."}
];


export default function WhyChooseUs(){

return(

<section className="relative bg-[#05070a] py-24 overflow-hidden">


<div className="absolute left-0 top-20 w-[400px] h-[400px] bg-[#8ea6c5]/10 blur-[150px]"/>


<div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">


<div className="grid lg:grid-cols-2 gap-14 items-center">





{/* LEFT CONTENT */}


<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:.7}}
>


<p className="text-[#9db4d2] uppercase tracking-[5px] text-xs mb-4">
Why Choose Us
</p>


<h2 className="text-white text-4xl lg:text-6xl font-semibold leading-tight">
Driven By Trust.
<br/>
Built Around Quality.
</h2>


<p className="text-gray-400 mt-6 max-w-lg text-base leading-relaxed">
We provide a premium automotive experience with carefully selected vehicles, transparent services and trusted support for every customer.
</p>


<button className="mt-8 px-8 py-3 border border-[#8ea6c5] text-white text-xs uppercase tracking-widest hover:bg-[#8ea6c5] hover:text-black transition">
Learn More
</button>


</motion.div>








{/* RIGHT CARDS */}


<div className="grid sm:grid-cols-2 gap-5">


{features.map((item,index)=>(


<motion.div
key={item.title}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.5,delay:index*.1}}
className="bg-white/[0.04] backdrop-blur-xl border border-white/10 p-6 hover:border-[#8ea6c5]/50 transition duration-500"
>


<h3 className="text-[#9db4d2] text-4xl font-semibold">
{item.number}
</h3>


<h4 className="text-white text-lg font-medium mt-4">
{item.title}
</h4>


<p className="text-gray-400 text-sm mt-3 leading-relaxed">
{item.desc}
</p>


</motion.div>


))}


</div>


</div>


</div>


</section>

);

}