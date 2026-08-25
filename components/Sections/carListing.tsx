"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const cars = [

    {
        name:"Ferrari 488 GTB",
        tag:"Luxury Sports",
        image:"/images/cars/ferrari.jpeg",
        price:"£175,000",
        year:"2023",
        mileage:"2,500 Miles",
        transmission:"Automatic"
    },


    {
        name:"Porsche 911 Turbo S",
        tag:"Performance",
        image:"/images/cars/porsche.jpeg",
        price:"£125,000",
        year:"2022",
        mileage:"8,900 Miles",
        transmission:"Automatic"
    },


    {
        name:"Rolls Royce Cullinan",
        tag:"Premium SUV",
        image:"/images/cars/Rolls Royce Cullinan.jpeg",
        price:"£325,000",
        year:"2023",
        mileage:"5,200 Miles",
        transmission:"Automatic"
    },


    {
        name:"Lamborghini Aventador",
        tag:"Supercar",
        image:"/images/cars/Lamborghini.jpeg",
        price:"£420,000",
        year:"2022",
        mileage:"3,500 Miles",
        transmission:"Automatic"
    },


    {
        name:"Range Rover Sport",
        tag:"Luxury SUV",
        image:"/images/cars/Range Rover.jpeg",
        price:"£89,500",
        year:"2024",
        mileage:"7,800 Miles",
        transmission:"Automatic"
    },


    {
        name:"Mercedes AMG GT",
        tag:"Performance",
        image:"/images/cars/Mercedes-gt.jpeg",
        price:"£98,000",
        year:"2023",
        mileage:"6,400 Miles",
        transmission:"Automatic"
    },
    {
        name:"Ford Mustang",
        tag:"Muscle Car",
        image:"/images/cars/Mustang.jpeg",
        price:"£42,000",
        year:"2021",
        mileage:"23,00 Miles",
        transmission:"Automatic"
    },
    {
        name:"Mercedes Cls 63",
        tag:"Drift Car",
        image:"/images/cars/Mercedes-cls.jpeg",
        price:"£54,000",
        year:"2022",
        mileage:"12,40 Miles",
        transmission:"Automatic"
    }

];





export default function CarListing(){


return (

<section
className="
relative
bg-[#080808]
overflow-hidden
"
>


{/* BACKGROUND GLOW */}

<div
className="
absolute
right-0
top-0

w-[500px]
h-[500px]

bg-[#A65E2E]/10

blur-[160px]

rounded-full
"
/>





<div
className="
relative
z-10

max-w-[1440px]

mx-auto

px-6
sm:px-8
lg:px-10

"
>





{/* HEADING */}


<motion.div

initial={{
opacity:0,
y:60
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
duration:.8
}}

className="
max-w-2xl
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
Premium Collection
</p>



<h2
className="
text-white

text-3xl
sm:text-4xl
lg:text-5xl

font-semibold

leading-tight
"
>

Featured
Vehicles

</h2>






</motion.div>








{/* CAR CONTAINER */}



<div

className="

mt-14

flex

gap-6


overflow-x-auto

snap-x

snap-mandatory


pb-6


lg:grid

lg:grid-cols-4


lg:overflow-visible


scrollbar-hide

"

>


{
cars.map((car,index)=>(



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
amount:.2
}}


transition={{
duration:.6,
delay:index*.12
}}



className="

snap-start


min-w-[300px]

sm:min-w-[330px]


lg:min-w-0


group


bg-[#121212]


rounded-2xl


overflow-hidden


border

border-white/10


hover:border-[#A65E2E]/60


transition-all


duration-500

"

>



{/* IMAGE */}


<div

className="

relative

h-[220px]

overflow-hidden

"


>


<Image

src={car.image}

alt={car.name}

fill

className="

object-cover


transition

duration-700


group-hover:scale-110

"

/>



{/* TAG */}


<span

className="

absolute

bottom-4

right-4


bg-black/70


backdrop-blur-md


text-white


text-[10px]


uppercase


tracking-wider


px-3

py-1


rounded


"

>

{car.tag}

</span>


</div>







{/* DETAILS */}



<div

className="

p-5

"

>



<div

className="

flex

justify-between

items-start

gap-3

"

>


<div>


<h3

className="

text-white

text-lg

font-semibold

"

>

{car.name}


</h3>


<p

className="

text-[#A65E2E]

text-xl

font-bold

mt-2

"

>

{car.price}

</p>


</div>





<div

className="

text-right

text-sm

"

>


<p
className="
text-white
"
>
{car.year}
</p>


<p
className="
text-gray-400
mt-1
"
>
{car.mileage}
</p>



</div>



</div>








<div

className="

flex

justify-between


border-t

border-white/10


mt-5

pt-4

"

>


<div>

<p

className="

text-gray-500

text-xs

"

>
Transmission
</p>


<p

className="
text-white
text-sm
mt-1
"

>
{car.transmission}
</p>


</div>



<div>

<p

className="
text-gray-500
text-xs
"

>
Condition
</p>


<p

className="
text-white
text-sm
mt-1
"

>
Excellent
</p>


</div>



</div>





<button

className="

mt-5

w-full

py-3

rounded-lg


bg-white


text-black


font-medium


hover:bg-[#A65E2E]


hover:text-white


transition

"

>

View Details

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