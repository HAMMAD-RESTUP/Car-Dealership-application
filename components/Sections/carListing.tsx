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
mileage:"23,000 Miles",
transmission:"Automatic"
},

{
name:"Mercedes CLS 63",
tag:"AMG",
image:"/images/cars/Mercedes-cls.jpeg",
price:"£54,000",
year:"2022",
mileage:"12,400 Miles",
transmission:"Automatic"
}

];





export default function CarListing(){


return (

<section
className="
relative
bg-[#080808]
py-10
overflow-hidden
"
>


{/* GLOW */}

<div
className="
absolute
right-0
top-0

w-[350px]
h-[350px]

bg-[#A65E2E]/10

blur-[140px]

"
/>





<div
className="
relative
z-10

max-w-[1440px]

mx-auto

px-5
sm:px-8
lg:px-10

"
>





{/* HEADING */}



<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.7
}}

className="
max-w-xl
"

>


<p
className="
text-[#A65E2E]

uppercase

tracking-[5px]

text-xs

mb-3
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
"
>

Featured Vehicles

</h2>



<p
className="
text-gray-400

mt-3

text-sm

sm:text-base

"
>

Luxury vehicles selected for performance,
comfort and style.

</p>


</motion.div>








{/* CAR GRID */}



<div

className="

mt-8


grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

xl:grid-cols-4


gap-5



max-sm:flex

max-sm:overflow-x-auto

max-sm:snap-x

max-sm:snap-mandatory


max-sm:pb-5


scrollbar-hide

"

>


{
cars.map((car,index)=>(



<motion.div

key={car.name}


initial={{
opacity:0,
y:50
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
duration:.5,
delay:index*.08
}}



className="

max-sm:min-w-[300px]

max-sm:snap-start


group


bg-white/[0.05]


backdrop-blur-xl


border

border-white/10


hover:border-[#A65E2E]/50


transition-all

duration-500

"

>






{/* IMAGE */}



<div

className="

relative

h-[210px]

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


group-hover:scale-105

"

/>






{/* TAG */}


<div

className="

absolute

top-4

left-4


bg-black/60

backdrop-blur-md


px-3

py-1


text-[10px]

uppercase

tracking-wider

text-white

"

>

{car.tag}

</div>







{/* MILEAGE */}


<div

className="

absolute

bottom-4

right-4


bg-black/70

backdrop-blur-md


px-3

py-1


text-xs

text-white

"

>

{car.mileage}

</div>





</div>









{/* DETAILS */}



<div

className="

p-4

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



</div>



</div>










{/* SPECS */}



<div

className="

flex

justify-between


border-t

border-white/10


mt-4

pt-3

"

>



<div>


<p

className="

text-gray-500

text-[11px]

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

text-[11px]

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





</div>





</motion.div>



))
}



</div>






</div>


</section>


);

}