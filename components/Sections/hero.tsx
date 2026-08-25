"use client";

import { motion } from "framer-motion";


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



            {/* VIDEO BACKGROUND */}


            <motion.video

                autoPlay

                muted

                loop

                playsInline

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
                w-full
                h-full
                object-cover
                "

            >

                <source
                    src="/images/hero-video.mp4"
                    type="video/mp4"
                />

            </motion.video>







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
                via-[#101010]/55
                to-[#101010]/15

                "

            />







            {/* MOBILE DARK */}


            <div

                className="
                absolute
                inset-0

                bg-black/30

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

                pt-42
                md:pt-38
                lg:pt-30

                pb-16

                "

            >





                <motion.div

                    className="
                    max-w-xl

                    mt-10
                    sm:mt-8
                    md:mt-0

                    "

                    initial={{
                        opacity:0,
                        y:60
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        duration:0.9,
                        ease:"easeOut",
                        delay:0.3
                    }}

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
                            delay:0.4,
                            duration:0.6
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
                            delay:0.6,
                            duration:0.8
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
                            delay:0.8,
                            duration:0.7
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
                            duration:0.7
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