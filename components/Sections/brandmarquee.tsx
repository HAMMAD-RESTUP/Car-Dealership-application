"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const brands = [
  { name:"Ferrari", logo:"/images/ferrari.png" },
  { name:"Porsche", logo:"/images/porsche.png" },
  { name:"Mercedes", logo:"/images/mercedes.jpeg" },
  { name:"Lamborghini", logo:"/images/brands/lamborghini.png" },
  { name:"Rolls Royce", logo:"/images/brands/rolls.png" },
  { name:"Range Rover", logo:"/images/brands/range.png" },
  { name:"Audi", logo:"/images/brands/audi.png" },
  { name:"Ford", logo:"/images/brands/ford.png" }
];


export default function BrandMarquee() {

  return (

    <section className="relative bg-[#05070a] py-16 overflow-hidden">


      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[200px] bg-[#8ea6c5]/10 blur-[120px]" />


      <div className="relative z-10 max-w-[1440px] mx-auto">


        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7}} className="text-center mb-12">


          <p className="text-[#9db4d2] uppercase tracking-[5px] text-xs mb-3">
            Trusted Brands
          </p>


          <h2 className="text-white text-3xl sm:text-4xl font-semibold">
            World Class Automotive Brands
          </h2>


        </motion.div>



        <div className="relative overflow-hidden">


          <div className="flex gap-16 w-max marquee">


            {[...brands,...brands].map((brand,index)=>(


              <div key={index} className="group w-[120px] sm:w-[150px] h-[80px] flex items-center justify-center">


                <Image src={brand.logo} alt={brand.name} width={120} height={60} className="object-contain opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0" />


              </div>


            ))}


          </div>


        </div>



        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#05070a] to-transparent pointer-events-none" />


        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#05070a] to-transparent pointer-events-none" />


      </div>


    </section>

  );

}