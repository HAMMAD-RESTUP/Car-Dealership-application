"use client";

import { ChevronDown, RotateCcw } from "lucide-react";
import { useState } from "react";


const filters = [
  {
    title: "Body Type",
    options: [
      "SUV",
      "Sedan",
      "Coupe",
      "Hatchback",
      "Wagon",
      "Van",
    ],
  },

  {
    title: "Make",
    options: [
      "Mercedes-Benz",
      "BMW",
      "Audi",
      "Porsche",
      "Toyota",
    ],
  },

  {
    title: "Model",
    options: [
      "C-Class",
      "E-Class",
      "S-Class",
      "GLE",
      "AMG",
    ],
  },

  {
    title: "Fuel Type",
    options: [
      "Petrol",
      "Diesel",
      "Hybrid",
      "Electric",
    ],
  },

];



export default function FilterSidebar() {


  const [open, setOpen] = useState<string | null>(
    "Body Type"
  );


  return (

    <aside
      className="
        w-full
        shrink-0
        rounded-xl
        border
        border-white/[0.08]
        bg-[#11161d]
        p-5
        lg:w-[280px]
      "
    >


      {/* HEADER */}

      <div
        className="
          mb-5
          flex
          items-center
          justify-between
        "
      >

        <h2
          className="
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-white
          "
        >
          Filters
        </h2>


        <button
          className="
            flex
            items-center
            gap-1
            text-xs
            text-[#00A8E8]
          "
        >

          <RotateCcw size={13}/>

          Reset

        </button>


      </div>





      {/* PRICE */}

      <div
        className="
          mb-5
          border-b
          border-white/[0.06]
          pb-5
        "
      >

        <p
          className="
            mb-3
            text-xs
            font-medium
            text-white/70
          "
        >
          Price Range
        </p>


        <div
          className="
            grid
            grid-cols-2
            gap-2
          "
        >

          <input
            placeholder="Min"
            className="
              h-9
              rounded
              border
              border-white/10
              bg-[#0b0f14]
              px-3
              text-xs
              text-white
              outline-none
            "
          />


          <input
            placeholder="Max"
            className="
              h-9
              rounded
              border
              border-white/10
              bg-[#0b0f14]
              px-3
              text-xs
              text-white
              outline-none
            "
          />

        </div>


      </div>







      {/* FILTER GROUPS */}


      <div
        className="
          space-y-3
        "
      >

      {
        filters.map((filter)=>(


          <div
            key={filter.title}
            className="
              border-b
              border-white/[0.06]
              pb-3
            "
          >


            <button
              onClick={()=>(
                setOpen(
                  open===filter.title
                  ? null
                  : filter.title
                )
              )}

              className="
                flex
                w-full
                items-center
                justify-between
                text-left
              "
            >

              <span
                className="
                  text-sm
                  text-white
                "
              >
                {filter.title}
              </span>


              <ChevronDown
                size={15}
                className={`
                  text-white/40
                  transition
                  ${
                    open===filter.title
                    ? "rotate-180"
                    : ""
                  }
                `}
              />

            </button>




            {
              open===filter.title && (

                <div
                  className="
                    mt-3
                    space-y-2
                  "
                >

                {
                  filter.options.map((item)=>(

                    <label
                      key={item}
                      className="
                        flex
                        cursor-pointer
                        items-center
                        gap-2
                        text-xs
                        text-white/60
                        hover:text-white
                      "
                    >

                      <input
                        type="checkbox"
                        className="
                          h-3.5
                          w-3.5
                          accent-[#158ff3]
                        "
                      />

                      {item}

                    </label>

                  ))
                }

                </div>

              )
            }


          </div>


        ))
      }


      </div>




      {/* APPLY BUTTON */}

      <button
        className="
          mt-6
          h-11
          w-full
          rounded-md
          bg-[#158ff3]
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-[#2a9fff]
        "
      >
        Apply Filters
      </button>



    </aside>

  );
}