"use client";

import { motion } from "framer-motion";


export default function Footer(){


return (

<footer
className="
relative
bg-[#050505]
overflow-hidden
pt-16
"
>


{/* GLOW */}

<div
className="
absolute

left-0
bottom-0

w-[450px]
h-[450px]

bg-[#A65E2E]/10

blur-[150px]

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







{/* TOP BRAND */}



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
pb-12

border-b

border-white/10

"

>


<h2
className="
text-white

text-3xl
sm:text-5xl
lg:text-6xl

font-semibold

leading-tight

max-w-3xl

"
>

Drive The Future.
<br/>

Experience Luxury.


</h2>



<p
className="
text-gray-400

mt-5

max-w-xl

text-sm
sm:text-base

"
>

Discover premium vehicles engineered with
performance, technology and timeless design.

</p>


</motion.div>









{/* FOOTER LINKS */}





<div

className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4


gap-10


py-12

"

>








{/* BRAND */}



<div>


<h3
className="
text-white

text-xl

font-semibold

mb-5

"
>

VINFAST

</h3>


<p
className="
text-gray-400

text-sm

leading-relaxed

"
>

Premium automotive experience delivering
innovation, performance and luxury mobility.

</p>



</div>









{/* VEHICLES */}



<div>


<h4
className="
text-white

font-medium

mb-5

"
>

Vehicles

</h4>



<ul
className="
space-y-3

text-gray-400

text-sm

"
>

<li className="hover:text-white transition">
Models
</li>

<li className="hover:text-white transition">
SUV Collection
</li>

<li className="hover:text-white transition">
Luxury Cars
</li>

<li className="hover:text-white transition">
Electric Vehicles
</li>

</ul>


</div>









{/* COMPANY */}



<div>


<h4
className="
text-white

font-medium

mb-5

"
>

Company

</h4>



<ul
className="
space-y-3

text-gray-400

text-sm

"
>

<li className="hover:text-white transition">
About Us
</li>


<li className="hover:text-white transition">
Careers
</li>


<li className="hover:text-white transition">
Dealership
</li>


<li className="hover:text-white transition">
Contact
</li>


</ul>


</div>








{/* CONTACT */}



<div>


<h4
className="
text-white

font-medium

mb-5

"
>

Contact

</h4>



<div
className="
space-y-3

text-gray-400

text-sm

"
>


<p>
+44 20 7946 0990
</p>


<p>
info@vinfast.com
</p>


<p>
London, United Kingdom
</p>


</div>






{/* SOCIAL */}

<div
className="
flex

gap-3

mt-6

"
>


{
["F","I","X"].map((item)=>(


<div

key={item}

className="
w-9
h-9

flex
items-center
justify-center


border

border-white/20


text-white


text-sm


hover:bg-[#A65E2E]


hover:border-[#A65E2E]


transition

"

>

{item}


</div>


))
}



</div>



</div>







</div>









{/* BOTTOM */}



<div

className="
border-t

border-white/10


py-6


flex

flex-col

sm:flex-row


justify-between


gap-4


text-gray-500


text-sm

"

>


<p>
© 2026 VinFast. All rights reserved.
</p>



<div
className="
flex

gap-6

"
>

<span>
Privacy Policy
</span>

<span>
Terms
</span>

</div>


</div>







</div>






</footer>

);


}