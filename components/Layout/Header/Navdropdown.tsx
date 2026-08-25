type Props = {
    label: string;
    items: {
        label: string;
        href: string;
    }[];
    open: boolean;
    onClick: () => void;
}


export default function NavDropdown({
    label,
    items,
    open,
    onClick
}: Props) {


    return (

        <div className="relative">


            <button
                onClick={onClick}
                className="
flex
items-center
gap-2
text-gray-300
hover:text-white
"
            >

                {label}

                <span>
                    ⌄
                </span>

            </button>



            {
                open &&

                <div
                    className="
absolute
top-10
left-0
w-56
bg-[#0D1624]
border
border-white/10
rounded-lg
shadow-xl
p-2
"
                >


                    {
                        items.map(item => (

                            <a
                                key={item.label}
                                href={item.href}
                                className="
block
px-4
py-3
text-sm
text-gray-300
hover:bg-white/10
rounded
"
                            >

                                {item.label}

                            </a>


                        ))
                    }


                </div>


            }


        </div>

    )

}