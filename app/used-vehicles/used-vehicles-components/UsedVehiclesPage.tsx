"use client";


import FilterSidebar from "./FilterSidebar";
import VehicleList from "./VehicleList";



export default function UsedVehiclesPage() {


  return (

    <main
      className="
        min-h-screen
        bg-[#080B10]
        px-4
        py-6
        text-white
        md:px-8
        lg:px-10
      "
    >


      <div
        className="
          mx-auto
          max-w-[1500px]
          space-y-6
        "
      >



        {/* TOP HERO */}

        

  


        {/* CONTENT AREA */}

        <div
          className="
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-start
          "
        >



          {/* FILTER */}

          <FilterSidebar />





          {/* VEHICLES */}

          <VehicleList />



        </div>




      </div>



    </main>

  );
}