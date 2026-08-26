"use client";

import { useState } from "react";
import Logo from "./Logo";
import { GB, DE } from "country-flag-icons/react/3x2";


export default function Header(){

  const [mobile,setMobile]=useState(false);
  const [language,setLanguage]=useState(false);


  const menuItems=[
    "Home",
    "Find Car",
    "Finance",
    "Offers",
    "About",
    "Contact"
  ];


  return (

    <header className="fixed top-0 left-0 w-full z-50">


      {/* HEADER */}

      <div className="w-full bg-transparent">


        <div className="h-[90px] flex items-center justify-between px-5 sm:px-8 lg:px-14">


          <Logo />



          {/* DESKTOP MENU */}


          <nav className="hidden lg:flex items-center gap-10">


            {menuItems.map((item,index)=>(

              <a key={item} href="#" className={`text-[13px] uppercase tracking-[1.5px] transition ${index===0?"text-white":"text-white/75 hover:text-white"}`}>

                {item}

              </a>

            ))}


          </nav>





          {/* DESKTOP RIGHT */}


          <div className="hidden lg:flex items-center gap-7">



            {/* PHONE */}


            <div className="flex items-center gap-3 text-white text-sm whitespace-nowrap">


              <svg className="w-5 h-5 shrink-0 text-[#8ea6c5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3 7-2 2c2 4 4 6 8 8l2-2 7 3v2a2 2 0 0 1-2 2C10 27 1 18 1 7a2 2 0 0 1 2-2Z"/>

              </svg>


              <span>
                +44 20 7946 0990
              </span>


            </div>





            {/* LANGUAGE */}


            <div className="relative">


              <button onClick={()=>setLanguage(!language)} className="flex items-center gap-3 text-white text-sm">


                <GB className="w-6 h-4" />

                English


              </button>



              {language && (

                <div className="absolute right-0 top-10 w-44 bg-black/80 backdrop-blur-xl">


                  <button className="w-full flex items-center gap-3 px-5 py-3 text-white hover:bg-white/10 transition">

                    <GB className="w-6 h-4" />

                    English

                  </button>


                  <button className="w-full flex items-center gap-3 px-5 py-3 text-white hover:bg-white/10 transition">

                    <DE className="w-6 h-4" />

                    Deutsch

                  </button>


                </div>

              )}


            </div>





            {/* BUTTON */}


            <button className="px-7 py-3 rounded-md bg-[#8ea6c5] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#a9bfdc] transition duration-300">

              Enquire Now

            </button>


          </div>





          {/* MOBILE BUTTON */}


          <button onClick={()=>setMobile(!mobile)} className="lg:hidden text-white text-3xl">

            {mobile ? "×" : "☰"}

          </button>


        </div>


      </div>





      {/* MOBILE MENU ONLY WHEN OPEN */}


      {mobile && (

        <div className="lg:hidden fixed inset-0 top-0 bg-black/80 backdrop-blur-xl">


          <div className="pt-[110px] px-8">


            <nav className="flex flex-col gap-8">


              {menuItems.map(item=>(

                <a key={item} href="#" className="text-white text-xl uppercase tracking-widest">

                  {item}

                </a>

              ))}



              <div className="flex items-center gap-3 text-white mt-5">


                <svg className="w-5 h-5 shrink-0 text-[#8ea6c5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3 7-2 2c2 4 4 6 8 8l2-2 7 3v2a2 2 0 0 1-2 2C10 27 1 18 1 7a2 2 0 0 1 2-2Z"/>

                </svg>


                +44 20 7946 0990


              </div>



              <div className="flex gap-4 mt-5">


                <GB className="w-8 h-5" />

                <DE className="w-8 h-5" />


              </div>



              <button className="mt-5 px-7 py-4 rounded-md bg-[#8ea6c5] text-white font-semibold uppercase tracking-widest hover:bg-[#a9bfdc] transition">

                Enquire Now

              </button>


            </nav>


          </div>


        </div>

      )}


    </header>

  );

}