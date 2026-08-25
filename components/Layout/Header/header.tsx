"use client";

import { useState } from "react";
import Logo from "./Logo";


export default function Header() {


    const [open, setOpen] = useState(false);


    const menuItems = [
        "MODELS",
        "OFFERS",
        "OWNERSHIP",
        "SERVICES",
        "DEALERSHIP",
        "ABOUT US",
        "CONTACT"
    ];



    return (


        <header
            className="
            fixed
            top-0
            left-0
            z-50
            w-full

            bg-gradient-to-b
            from-black/70
            to-transparent

            backdrop-blur-[8px]
            "
        >



            <div
                className="
                max-w-[1440px]
                mx-auto

                px-5
                sm:px-8
                "
            >



                <div
                    className="
                    h-[72px]

                    flex
                    items-center
                    justify-between
                    "
                >





                    {/* LOGO */}

                    <Logo />







                    {/* DESKTOP NAVIGATION */}

                    <nav
                        className="
                        hidden
                        lg:flex

                        items-center

                        h-full
                        "
                    >


                        {
                            menuItems.map((item,index)=>(


                                <a
                                    key={item}

                                    href="#"

                                    className={`
                                    h-full

                                    flex
                                    items-center

                                    px-4

                                    text-[12px]

                                    font-semibold

                                    tracking-[1px]

                                    transition

                                    ${
                                        index === 0
                                        ?
                                        "text-white"
                                        :
                                        "text-white/70 hover:text-white"
                                    }

                                    `}
                                >

                                    {item}


                                </a>


                            ))
                        }


                    </nav>









                    {/* RIGHT DESKTOP */}


                    <div
                        className="
                        hidden
                        lg:flex

                        items-center

                        gap-7
                        "
                    >





                        <div
                            className="
                            flex
                            items-center

                            gap-2

                            text-white/70

                            text-sm
                            "
                        >


                            <svg
                                className="
                                w-4
                                h-4
                                text-white
                                "
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >

                                <path

                                    strokeWidth="2"

                                    strokeLinecap="round"

                                    d="
                                    M3 5
                                    h2
                                    l3 7
                                    -2 2
                                    c2 4 4 6 8 8
                                    l2-2
                                    7 3
                                    v2
                                    "

                                />

                            </svg>


                            +44 20 7946 0990


                        </div>






                        <button
                            className="
                            bg-[#A65E2E]

                            hover:bg-[#B96C38]

                            transition

                            text-white

                            px-6

                            py-2.5

                            rounded-md

                            text-[12px]

                            font-semibold

                            tracking-wide
                            "
                        >

                            BOOK A TEST DRIVE


                        </button>



                    </div>









                    {/* MOBILE TOGGLE */}


                    <button

                        onClick={() => setOpen(!open)}

                        className="
                        lg:hidden

                        text-white

                        "

                    >


                        {
                            open ?

                            (

                                <svg
                                    className="w-7 h-7"

                                    fill="none"

                                    stroke="currentColor"

                                    viewBox="0 0 24 24"
                                >

                                    <path

                                        strokeWidth="2"

                                        strokeLinecap="round"

                                        d="
                                        M6 6
                                        l12 12
                                        M18 6
                                        l-12 12
                                        "

                                    />

                                </svg>

                            )

                            :

                            (

                                <svg

                                    className="w-7 h-7"

                                    fill="none"

                                    stroke="currentColor"

                                    viewBox="0 0 24 24"

                                >

                                    <path

                                        strokeWidth="2"

                                        strokeLinecap="round"

                                        d="
                                        M4 7h16
                                        M4 12h16
                                        M4 17h16
                                        "

                                    />

                                </svg>

                            )

                        }


                    </button>



                </div>





            </div>









            {/* FULL SCREEN MOBILE MENU */}



            <div

                className={`
                lg:hidden

                fixed

                top-[72px]

                left-0

                w-full

                h-[calc(100vh-72px)]

                bg-black/95

                backdrop-blur-xl


                transition-all

                duration-500

                ease-in-out


                ${
                    open

                    ?

                    "opacity-100 visible"

                    :

                    "opacity-0 invisible"

                }


                `}

            >




                <nav

                    className="
                    flex

                    flex-col

                    gap-8

                    px-6

                    pt-12

                    "

                >



                    {
                        menuItems.map((item,index)=>(


                            <a

                                key={item}

                                href="#"

                                className={`
                                text-white/90

                                text-lg

                                font-semibold

                                tracking-wide


                                transform

                                transition-all

                                duration-500


                                ${
                                    open

                                    ?

                                    "translate-x-0"

                                    :

                                    "-translate-x-10"

                                }

                                `}

                                style={{
                                    transitionDelay:`${index * 50}ms`
                                }}

                            >

                                {item}


                            </a>


                        ))
                    }







                    <button

                        className="
                        mt-5

                        bg-[#A65E2E]

                        hover:bg-[#B96C38]

                        transition

                        text-white

                        py-4

                        rounded-md

                        font-semibold

                        tracking-wide

                        "

                    >

                        BOOK A TEST DRIVE


                    </button>




                </nav>





            </div>





        </header>


    );

}