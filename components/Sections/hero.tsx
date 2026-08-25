"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function Hero() {


    return (


        <section
            className="
            relative
            min-h-screen
            overflow-hidden
            flex
            items-center
            bg-[#080808]
            "
        >




            {/* IMAGE BACKGROUND */}


            <motion.div

                initial={{
                    scale:1.1
                }}

                animate={{
                    scale:1
                }}

                transition={{
                    duration:12,
                    ease:"easeOut"
                }}

                className="
                absolute
                inset-0
                "

            >


                <Image

                    src="/images/hero-banner.jpeg"

                    alt="Luxury Electric Vehicle"

                    fill

                    priority

                    className="
                    object-cover
                    "

                />


            </motion.div>







            {/* DARK PREMIUM OVERLAY */}



            <motion.div

                initial={{
                    opacity:0
                }}

                animate={{
                    opacity:1
                }}

                transition={{
                    duration:1.5
                }}

                className="
                absolute
                inset-0

                bg-gradient-to-r

                from-[#080808]

                via-[#101010]/50

                to-[#101010]/20

                "

            />







            {/* MOBILE EXTRA DARK */}



            <div

                className="
                absolute
                inset-0

                bg-black/40

                md:hidden

                "

            />









            {/* BOTTOM FADE */}



            <div

                className="
                absolute

                bottom-0

                left-0

                right-0


                h-48


                bg-gradient-to-t


                from-[#080808]


                via-[#080808]/80


                to-transparent

                "

            />









            {/* CONTENT */}



            <div

                className="
                relative
                z-10

                w-full

                max-w-[1280px]

                mx-auto

                px-6
                sm:px-8
                lg:px-10


                pt-32

                md:pt-28

                lg:pt-20


                pb-16

                "

            >






                <motion.div


                    initial={{
                        opacity:0,
                        y:60
                    }}


                    animate={{
                        opacity:1,
                        y:0
                    }}


                    transition={{
                        duration:.9,
                        ease:"easeOut",
                        delay:.3
                    }}


                    className="
                    max-w-xl
                    "

                >






                    {/* SMALL TEXT */}



                    <motion.p


                        initial={{
                            opacity:0,
                            y:20
                        }}


                        animate={{
                            opacity:1,
                            y:0
                        }}


                        transition={{
                            delay:.4,
                            duration:.6
                        }}


                        className="
                        text-gray-300

                        uppercase

                        tracking-[5px]

                        text-xs

                        sm:text-sm

                        mb-5

                        "

                    >

                        Premium Electric Vehicles


                    </motion.p>









                    {/* HEADING */}



                    <motion.h1


                        initial={{
                            opacity:0,
                            y:40
                        }}


                        animate={{
                            opacity:1,
                            y:0
                        }}


                        transition={{
                            delay:.6,
                            duration:.8
                        }}



                        className="
                        text-white

                        text-4xl

                        sm:text-5xl

                        lg:text-7xl

                        font-semibold

                        leading-[1.05]

                        "

                    >

                        Future Ready.

                        <br />

                        Drive VinFast.


                    </motion.h1>









                    {/* DESCRIPTION */}



                    <motion.p


                        initial={{
                            opacity:0,
                            y:30
                        }}


                        animate={{
                            opacity:1,
                            y:0
                        }}


                        transition={{
                            delay:.8,
                            duration:.7
                        }}



                        className="
                        mt-6

                        text-gray-400

                        text-base

                        sm:text-lg

                        leading-relaxed

                        max-w-md

                        "

                    >

                        Advanced technology.
                        Sustainable mobility.
                        Designed for tomorrow.


                    </motion.p>









                    {/* BUTTONS */}



                    <motion.div


                        initial={{
                            opacity:0,
                            y:30
                        }}


                        animate={{
                            opacity:1,
                            y:0
                        }}


                        transition={{
                            delay:1,
                            duration:.7
                        }}



                        className="
                        flex

                        flex-col

                        sm:flex-row

                        gap-4

                        mt-8

                        "

                    >




                        <button

                            className="
                            bg-[#A65E2E]

                            text-white

                            px-7

                            py-3

                            rounded-md

                            font-medium

                            hover:bg-[#B96C38]

                            transition

                            w-full

                            sm:w-auto

                            "

                        >

                            Explore Models


                        </button>







                        <button

                            className="
                            border

                            border-white/30

                            bg-white/5

                            text-white

                            px-7

                            py-3

                            rounded-md

                            hover:bg-white/10

                            transition

                            w-full

                            sm:w-auto

                            "

                        >

                            Book Test Drive


                        </button>






                    </motion.div>






                </motion.div>






            </div>






        </section>


    );

}