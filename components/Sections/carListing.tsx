"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  CalendarDays,
  Gauge,
  Fuel
} from "lucide-react";


const cars = [

{
name:"Ferrari 488 GTB",
subtitle:"3.9 V8 GTB F1 DCT Euro 6",
image:"/images/cars/ferrari.jpeg",
price:"£175,000",
year:"2023",
mileage:"2,500 miles",
fuel:"Petrol",
badge:"Low Mileage"
},


{
name:"Porsche 911 Turbo S",
subtitle:"3.7T 992 Turbo S PDK 4WD",
image:"/images/cars/porsche.jpeg",
price:"£125,000",
year:"2022",
mileage:"8,900 miles",
fuel:"Petrol",
badge:"One Owner"
},


{
name:"Rolls Royce Cullinan",
subtitle:"6.75 V12 Auto 4WD Euro 6",
image:"/images/cars/Rolls Royce Cullinan.jpeg",
price:"£325,000",
year:"2023",
mileage:"5,200 miles",
fuel:"Petrol",
badge:"Premium"
},


];





export default function CarListing(){


return (

<section

id="stock"

className="
relative
overflow-hidden

bg-[#0B0D0F]

px-6

py-24

lg:px-12

"

>


{/* BACKGROUND */}

<div

className="
absolute
inset-0

bg-gradient-to-b

from-[#0B0D0F]

via-[#111923]

to-[#0B0D0F]

"

/>


{/* BLUE LIGHT */}

<div

className="
pointer-events-none

absolute

right-[-220px]

top-[20%]


h-[450px]

w-[450px]


rounded-full


bg-[#00A8E8]/10


blur-[140px]

"

/>



<div

className="
relative
z-10

mx-auto

max-w-[1500px]

"

>





{/* HEADER */}


<div

className="
mb-14

flex

justify-between

items-end

"

>

<div>


<p

className="
text-[#00A8E8]

text-xs

tracking-[0.3em]

uppercase

mb-4

"

>

Selected Collection

</p>



<h2

className="
text-white

text-5xl

lg:text-6xl

font-light

tracking-tight

"

>

Featured Vehicles

</h2>



<p

className="
mt-4

text-white/50

max-w-md

"

>

Exceptional imported vehicles,
carefully selected for performance,
luxury and reliability.

</p>


</div>


</div>









{/* CAR GRID */}

<div

className="
grid

grid-cols-1

md:grid-cols-2

lg:grid-cols-3

gap-8

"

>


{

cars.map((car,index)=>(


<motion.div


key={car.name}


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

delay:index*0.1

}}


className="

group

overflow-hidden

rounded-2xl

bg-[#151C26]

border

border-white/10

hover:border-[#00A8E8]/50

transition-all

duration-500

"

>








{/* IMAGE */}

<div

className="
relative

h-[300px]

overflow-hidden

bg-[#0A0D12]

flex

items-center

justify-center

"

>


<Image

src={car.image}

alt={car.name}

fill

className="

object-contain

p-4

transition-transform

duration-700

group-hover:scale-105

"

/>




<div

className="
absolute

inset-0

bg-gradient-to-t

from-[#151C26]

via-transparent

to-transparent

"

/>





<span

className="
absolute

top-5

left-5

bg-black/60

backdrop-blur

border

border-[#00A8E8]/40

px-4

py-2

text-[10px]

uppercase

tracking-[0.2em]

text-[#00A8E8]

"

>

{car.badge}

</span>


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

text-xl

font-medium

"

>

{car.name}

</h3>



<p

className="
mt-2

text-white/40

text-xs

"

>

{car.subtitle}

</p>







<div

className="
mt-6

grid

grid-cols-3

gap-3

text-white/50

text-xs

"

>



<div>

<CalendarDays

size={15}

className="text-[#00A8E8]"

/>

<p className="mt-2">

{car.year}

</p>

</div>





<div>

<Gauge

size={15}

className="text-[#00A8E8]"

/>

<p className="mt-2">

{car.mileage}

</p>

</div>





<div>

<Fuel

size={15}

className="text-[#00A8E8]"

/>

<p className="mt-2">

{car.fuel}

</p>

</div>



</div>







<div

className="
mt-6

pt-5

border-t

border-white/10

"

>


<p

className="
text-xs

text-white/40

uppercase

tracking-widest

"

>

Price

</p>



<p

className="
mt-2

text-2xl

text-[#00A8E8]

font-semibold

"

>

{car.price}

</p>


</div>



</div>








</motion.div>


))

}


</div>





</div>





</section>

)

}