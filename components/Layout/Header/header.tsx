"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const leftLinks = [
  {
    label: "BUY CARS",
    href: "#stock",
  },
  {
    label: "SELL YOUR CAR",
    href: "#sell",
  },
  {
    label: "FINANCE",
    href: "#finance",
  },
];


const rightLinks = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "SERVICES",
    href: "#services",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
];


export default function Header() {

  const [open,setOpen] = useState(false);


  return (

    <header
      className="
      fixed
      top-0
      left-0
      z-50
      w-full
      "
    >


      <div
        className="
        relative
        flex
        items-center
        justify-between

        px-6
        py-6

        lg:px-12
        "
      >



        {/* LEFT MENU */}

        <nav
          className="
          hidden
          lg:flex

          items-center
          gap-8

          text-[13px]
          font-medium

          tracking-wide

          text-white/80
          "
        >

          {
            leftLinks.map((item)=>(

              <a

                key={item.label}

                href={item.href}

                className="
                relative

                transition-all
                duration-300

                hover:text-white

                after:absolute
                after:left-0
                after:-bottom-2

                after:h-px
                after:w-0

                after:bg-white

                after:transition-all

                hover:after:w-full
                "

              >

                {item.label}

              </a>

            ))
          }


        </nav>






        {/* CENTER LOGO */}


        <motion.a

          href="#home"

          initial={{
            opacity:0,
            y:-15
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.6
          }}

          className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          text-white

          text-2xl

          lg:text-3xl

          font-semibold

          tracking-[0.15em]

          whitespace-nowrap
          "

        >

          YM

          <span
            className="
            font-light
            "
          >
            {" "}
            MOTORS
          </span>


        </motion.a>







        {/* RIGHT MENU */}


        <div
          className="
          hidden

          lg:flex

          items-center

          gap-8
          "
        >


          <nav
            className="
            flex

            items-center

            gap-8

            text-[13px]

            font-medium

            tracking-wide

            text-white/80
            "
          >


          {
            rightLinks.map((item)=>(

              <a

                key={item.label}

                href={item.href}

                className="
                transition

                duration-300

                hover:text-white
                "

              >

                {item.label}

              </a>

            ))
          }


          </nav>




          <motion.a

            href="#contact"

            whileHover={{
              scale:1.05
            }}

            className="
            border

            border-white/40

            px-6

            py-3

            text-white

            text-xs

            tracking-widest

            transition-all

            duration-300

            hover:bg-[#408099]

            hover:text-white

            "

          >

            Get A Qoute

          </motion.a>



        </div>







        {/* MOBILE BUTTON */}


        <button

          onClick={()=>setOpen(!open)}

          className="
          ml-auto

          lg:hidden

          text-white

          text-3xl

          "

        >

          {
            open
            ?
            "×"
            :
            "☰"
          }


        </button>




      </div>







      {/* MOBILE MENU */}


      <AnimatePresence>


      {
        open && (

          <motion.div

            initial={{
              opacity:0,
              height:0
            }}

            animate={{
              opacity:1,
              height:"auto"
            }}

            exit={{
              opacity:0,
              height:0
            }}

            transition={{
              duration:.35
            }}

            className="
            lg:hidden

            bg-black/90

            backdrop-blur-xl

            border-t

            border-white/10

            "

          >


            <div
              className="
              flex

              flex-col

              px-6

              py-8

              gap-5

              "

            >



            {
              [
                ...leftLinks,
                ...rightLinks
              ].map((item)=>(


                <a

                  key={item.label}

                  href={item.href}

                  onClick={()=>setOpen(false)}

                  className="
                  text-white

                  text-lg

                  border-b

                  border-white/10

                  pb-4

                  "

                >

                  {item.label}


                </a>


              ))
            }




            <a

              href="#contact"

              className="
              mt-3

              bg-[#408099]

              text-white

              text-center

              py-4

              text-sm

              tracking-wider

              "

            >

              ENQUIRE NOW

            </a>




            </div>


          </motion.div>


        )
      }


      </AnimatePresence>




    </header>


  );

}