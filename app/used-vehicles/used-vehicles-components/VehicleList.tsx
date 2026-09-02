"use client";

import { useState } from "react";
import { Grid2X2, List, SlidersHorizontal } from "lucide-react";
import VehicleCard from "./VehicleCard";
import { vehicles } from "./vehicleData";


export default function VehicleList() {

  const [view, setView] = useState<"grid" | "list">("grid");


  return (
    <section
      className="
        flex-1
        min-w-0
      "
    >


      {/* TOP TOOLBAR */}

      <div
        className="
          mb-5
          flex
          items-center
          justify-between
          rounded-lg
          border
          border-white/[0.08]
          bg-[#11161d]
          px-4
          py-3
        "
      >

        <div>

          <h2
            className="
              text-sm
              font-semibold
              text-white
            "
          >
            Search Results
            <span className="ml-2 text-white/40">
              ({vehicles.length})
            </span>
          </h2>

        </div>




        <div
          className="
            flex
            items-center
            gap-3
          "
        >


          {/* VIEW BUTTONS */}

          <button
            onClick={()=>setView("list")}
            className={`
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded
              border
              border-white/10
              ${
                view==="list"
                ? "bg-[#158ff3] text-white"
                : "text-white/50"
              }
            `}
          >
            <List size={15}/>
          </button>



          <button
            onClick={()=>setView("grid")}
            className={`
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded
              border
              border-white/10
              ${
                view==="grid"
                ? "bg-[#158ff3] text-white"
                : "text-white/50"
              }
            `}
          >
            <Grid2X2 size={15}/>
          </button>



          {/* SORT */}

          <button
            className="
              hidden
              items-center
              gap-2
              rounded
              border
              border-white/10
              bg-[#0d1117]
              px-4
              py-2
              text-xs
              text-white/70
              md:flex
            "
          >

            Date (Down)

            <SlidersHorizontal size={13}/>

          </button>


        </div>

      </div>





      {/* VEHICLE GRID */}


      <div
        className={
          view==="grid"
          ?
          `
          grid
          grid-cols-1
          gap-5
          md:grid-cols-2
          xl:grid-cols-2
          `
          :
          `
          flex
          flex-col
          gap-5
          `
        }
      >


        {vehicles.map((vehicle)=>(

          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
          />

        ))}


      </div>



    </section>
  );
}