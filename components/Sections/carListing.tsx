"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cars=[
{name:"Ferrari 488 GTB",tag:"Luxury Sports",image:"/images/cars/ferrari.jpeg",price:"£175,000",year:"2023",mileage:"2,500 Miles",transmission:"Automatic"},
{name:"Porsche 911 Turbo S",tag:"Performance",image:"/images/cars/porsche.jpeg",price:"£125,000",year:"2022",mileage:"8,900 Miles",transmission:"Automatic"},
{name:"Rolls Royce Cullinan",tag:"Premium SUV",image:"/images/cars/Rolls Royce Cullinan.jpeg",price:"£325,000",year:"2023",mileage:"5,200 Miles",transmission:"Automatic"},
{name:"Lamborghini Aventador",tag:"Supercar",image:"/images/cars/Lamborghini.jpeg",price:"£420,000",year:"2022",mileage:"3,500 Miles",transmission:"Automatic"}
];

export default function CarListing(){

return(

<section className="relative bg-[#05070a] py-20 overflow-hidden">

<div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#8ea6c5]/10 blur-[150px]"/>

<div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">

<motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7}}>

<p className="text-[#9db4d2] uppercase tracking-[5px] text-xs mb-3">
Premium Collection
</p>

<h2 className="text-white text-4xl lg:text-6xl font-semibold">
Featured Vehicles
</h2>

<p className="text-gray-400 mt-4 max-w-lg">
Explore our hand selected luxury vehicles built for performance and comfort.
</p>

</motion.div>

<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-sm:flex max-sm:overflow-x-auto scrollbar-hide">

{cars.map((car,index)=>(

<motion.div key={car.name} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:index*.08}} className="max-sm:min-w-[320px] group bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-[#8ea6c5]/60 transition duration-500 hover:-translate-y-2 overflow-hidden">

<div className="relative h-[250px] overflow-hidden">

<Image src={car.image} alt={car.name} fill className="object-cover transition duration-700 group-hover:scale-110"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#05070a] to-transparent"/>

<div className="absolute top-4 left-4 bg-black/60 px-3 py-2 text-[10px] text-white uppercase tracking-widest">
{car.tag}
</div>

</div>

<div className="p-5">

<div className="flex justify-between">

<div>

<h3 className="text-white text-lg font-semibold">
{car.name}
</h3>

<p className="text-[#9db4d2] text-xl font-bold mt-2">
{car.price}
</p>

</div>

<span className="text-gray-400 text-sm">
{car.year}
</span>

</div>

<div className="border-t border-white/10 mt-5 pt-4 flex justify-between">

<div>
<p className="text-gray-500 text-xs">
Mileage
</p>
<p className="text-white text-sm">
{car.mileage}
</p>
</div>

<div>
<p className="text-gray-500 text-xs">
Gear
</p>
<p className="text-white text-sm">
{car.transmission}
</p>
</div>

</div>

<button className="mt-5 w-full py-3 border border-[#8ea6c5] text-white text-xs uppercase tracking-widest hover:bg-[#8ea6c5] hover:text-black transition">
View Details
</button>

</div>

</motion.div>

))}

</div>

</div>

</section>

);

}