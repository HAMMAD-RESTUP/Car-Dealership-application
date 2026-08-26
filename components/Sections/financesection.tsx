"use client";

import { motion } from "framer-motion";


const points=[
"Quick Finance Approval",
"Flexible Payment Plans",
"Trusted Finance Partners"
];


export default function FinanceSection(){

return(

<section className="relative bg-[#05070a] py-24 overflow-hidden">


<div className="absolute right-0 top-0 w-[450px] h-[450px] bg-[#8ea6c5]/10 blur-[160px]"/>


<div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">


<div className="grid lg:grid-cols-2 gap-14 items-center">





{/* LEFT */}

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:.7}}
>


<p className="text-[#9db4d2] uppercase tracking-[5px] text-xs mb-4">
Car Finance
</p>


<h2 className="text-white text-4xl lg:text-6xl font-semibold leading-tight">
Drive Your Dream Car.
<br/>
Pay Your Way.
</h2>


<p className="text-gray-400 mt-6 max-w-lg leading-relaxed">
Flexible finance solutions designed around your budget. Get behind the wheel of your preferred vehicle with simple and transparent payment options.
</p>


<button className="mt-8 px-8 py-3 border border-[#8ea6c5] text-white text-xs uppercase tracking-widest hover:bg-[#8ea6c5] hover:text-black transition">
Apply For Finance
</button>


</motion.div>








{/* RIGHT CARD */}


<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.7}}
className="relative"
>


<div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 p-8 lg:p-10">



<p className="text-gray-400 text-sm uppercase tracking-widest">
Estimated Monthly Payment
</p>



<h3 className="text-white text-5xl font-semibold mt-4">
£899
<span className="text-gray-400 text-lg">
/month
</span>
</h3>





<div className="mt-8 space-y-5">


{points.map((item)=>(

<div key={item} className="flex items-center gap-3">


<div className="w-5 h-5 rounded-full border border-[#8ea6c5] flex items-center justify-center">

<span className="text-[#8ea6c5] text-xs">
✓
</span>

</div>


<p className="text-white text-sm">
{item}
</p>


</div>

))}


</div>





<button className="mt-10 w-full py-4 bg-[#8ea6c5] text-black text-xs font-semibold uppercase tracking-widest hover:bg-[#b6c9df] transition">

Calculate Finance

</button>



</div>


</motion.div>


</div>


</div>


</section>

);

}