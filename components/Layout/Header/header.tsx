"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
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


return(

<header className="fixed top-0 left-0 w-full z-50">

<div className="w-full bg-transparent">

<div className="h-[88px] flex items-center justify-between px-5 sm:px-8 lg:px-14">

<Logo />



<nav className="hidden lg:flex items-center gap-9">

{menuItems.map((item,index)=>(

<a
key={item}
href="#"
className={`
relative
text-[13px]
uppercase
tracking-[1.5px]
transition-all
duration-300
group
${index===0?"text-white":"text-white/70"}
hover:text-white
`}
>

{item}

<span className="
absolute
-bottom-2
left-0
w-0
h-[1px]
bg-[#8ea6c5]
transition-all
duration-300
group-hover:w-full
"/>

</a>

))}

</nav>





<div className="hidden lg:flex items-center gap-8">



<div className="flex items-center gap-3 text-white text-sm whitespace-nowrap">

<Phone className="w-5 h-5 text-[#8ea6c5] shrink-0"/>

<span>
+44 20 7946 0990
</span>

</div>





<div className="relative">

<button
onClick={()=>setLanguage(!language)}
className="flex items-center gap-2 text-white text-sm"
>

<GB className="w-6 h-4"/>

English

</button>


<AnimatePresence>

{language && (

<motion.div
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-10}}
className="
absolute
right-0
top-10
w-44
bg-black/80
backdrop-blur-xl
border
border-white/10
overflow-hidden
"
>

<button className="
w-full
flex
items-center
gap-3
px-5
py-3
text-white
hover:bg-white/10
transition
">

<GB className="w-6 h-4"/>

English

</button>


<button className="
w-full
flex
items-center
gap-3
px-5
py-3
text-white
hover:bg-white/10
transition
">

<DE className="w-6 h-4"/>

Deutsch

</button>


</motion.div>

)}

</AnimatePresence>


</div>






<button className="
relative
overflow-hidden
px-7
py-3
border
border-[#8ea6c5]
text-white
text-xs
font-semibold
uppercase
tracking-widest
group
">

<span className="
absolute
inset-0
bg-[#8ea6c5]
translate-y-full
group-hover:translate-y-0
transition-transform
duration-500
"/>


<span className="
relative
z-10
group-hover:text-black
transition
">

Enquire Now

</span>


</button>


</div>







<button
onClick={()=>setMobile(!mobile)}
className="
lg:hidden
w-9
h-9
flex
items-center
justify-center
text-white
relative
z-[70]
"
>

{mobile ? (

<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

<path strokeWidth="2" strokeLinecap="round" d="M6 6L18 18M18 6L6 18"/>

</svg>

):(


<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

<path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16"/>

</svg>

)}

</button>


</div>

</div>







<AnimatePresence>

{mobile && (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="
fixed
inset-0
bg-black/90
backdrop-blur-xl
lg:hidden
"
>


<motion.div
initial={{x:"100%"}}
animate={{x:0}}
exit={{x:"100%"}}
transition={{duration:.35}}
className="
h-full
w-full
px-8
pt-28
"
>


<nav className="
flex
flex-col
items-center
text-center
gap-7
">


{menuItems.map(item=>(

<a
key={item}
href="#"
className="
text-white
text-xl
uppercase
tracking-widest
hover:text-[#8ea6c5]
transition
"
>

{item}

</a>

))}





<div className="
flex
items-center
justify-center
gap-3
text-white
mt-5
w-full
">

<Phone className="w-5 h-5 text-[#8ea6c5]"/>

+44 20 7946 0990

</div>





<div className="
flex
justify-center
gap-4
mt-4
">

<GB className="w-8 h-5"/>

<DE className="w-8 h-5"/>

</div>





<button className="
mt-5
px-10
py-4
border
border-[#8ea6c5]
text-white
uppercase
tracking-widest
">

Enquire Now

</button>



</nav>


</motion.div>


</motion.div>

)}

</AnimatePresence>


</header>

);

}