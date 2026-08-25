"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const vehicles = [

    {
        name:"VF 8",
        type:"Premium Electric SUV",
        image:"/images/vf8.png"
    },

    {
        name:"VF 9",
        type:"Luxury Electric SUV",
        image:"/images/vf9.png"
    },

    {
        name:"VF 6",
        type:"Compact Electric SUV",
        image:"/images/vf6.png"
    }

];




export default function VehicleShowcase(){


    return (


        <section
            className="
            relative

            bg-[#080808]

            py-24
            lg:py-32

            overflow-hidden

            "
        >



            {/* BACKGROUND GLOW */}


            <div
                className="
                absolute

                top-0
                right-0

                w-[500px]
                h-[500px]

                bg-[#A65E2E]/10

                blur-[150px]

                rounded-full

                "
            />





            <div
                className="
                relative
                z-10

                max-w-[1280px]

                mx-auto

                px-6
                sm:px-8
                lg:px-10

                "
            >






                {/* HEADER */}


                <motion.div

                    initial={{
                        opacity:0,
                        y:50
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true
                    }}

                    transition={{
                        duration:.8
                    }}

                    className="
                    text-center

                    max-w-3xl

                    mx-auto

                    "

                >



                    <p
                        className="
                        text-[#A65E2E]

                        uppercase

                        tracking-[5px]

                        text-xs

                        mb-5

                        "
                    >

                        Our Electric Lineup

                    </p>





                    <h2
                        className="
                        text-white

                        text-4xl

                        sm:text-5xl

                        lg:text-6xl

                        font-semibold

                        leading-tight

                        "
                    >

                        Explore Our
                        <br />
                        Electric Vehicles


                    </h2>





                    <p
                        className="
                        mt-6

                        text-gray-400

                        text-base
                        sm:text-lg

                        "
                    >

                        Discover intelligent electric mobility
                        designed with performance, comfort
                        and future technology.


                    </p>



                </motion.div>









                {/* CARDS */}


                <div
                    className="
                    grid

                    md:grid-cols-3

                    gap-6

                    mt-16

                    "
                >




                    {
                        vehicles.map((car,index)=>(



                            <motion.div

                                key={car.name}


                                initial={{
                                    opacity:0,
                                    y:80
                                }}

                                whileInView={{
                                    opacity:1,
                                    y:0
                                }}

                                viewport={{
                                    once:true,
                                    amount:.3
                                }}


                                transition={{

                                    duration:.7,

                                    delay:index * .2

                                }}


                                className="
                                group

                                relative

                                bg-[#121212]

                                rounded-2xl

                                overflow-hidden

                                border

                                border-white/10

                                hover:border-[#A65E2E]/50

                                transition

                                "

                            >




                                {/* IMAGE */}


                                <div
                                    className="
                                    relative

                                    h-[240px]

                                    overflow-hidden

                                    "
                                >


                                    <Image

                                        src={car.image}

                                        alt={car.name}

                                        fill

                                        className="
                                        object-contain

                                        p-6

                                        transition

                                        duration-700

                                        group-hover:scale-110

                                        "

                                    />


                                </div>







                                {/* CONTENT */}


                                <div
                                    className="
                                    p-6

                                    "
                                >



                                    <h3
                                        className="
                                        text-white

                                        text-2xl

                                        font-semibold

                                        "
                                    >

                                        {car.name}


                                    </h3>





                                    <p
                                        className="
                                        text-gray-400

                                        mt-2

                                        "
                                    >

                                        {car.type}


                                    </p>






                                    <button

                                        className="
                                        mt-6

                                        text-[#A65E2E]

                                        font-medium

                                        flex

                                        items-center

                                        gap-2

                                        "

                                    >

                                        Explore

                                        <span>
                                            →
                                        </span>


                                    </button>




                                </div>





                            </motion.div>



                        ))
                    }





                </div>





            </div>






        </section>


    );

}