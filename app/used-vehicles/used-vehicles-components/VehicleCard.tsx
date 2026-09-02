"use client";

import { motion } from "framer-motion";
import { Heart, MapPin, Gauge, Zap, Star } from "lucide-react";
import { Vehicle } from "./vehicleData";


export default function VehicleCard({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="
        group
        overflow-hidden
        rounded-xl
        border
        border-white/[0.08]
        bg-[#12161c]
        shadow-[0_20px_50px_rgba(0,0,0,0.25)]
      "
    >

      {/* IMAGE */}
      <div className="relative h-[180px] overflow-hidden">

        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-105
          "
        />


        <button
          className="
            absolute
            right-3
            top-3
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-black/50
            text-white
            backdrop-blur
            hover:bg-[#158ff3]
          "
        >
          <Heart size={15}/>
        </button>


        <div
          className="
            absolute
            bottom-3
            left-3
            flex
            gap-2
          "
        >
          {vehicle.tags.map((tag)=>(
            <span
              key={tag}
              className="
                rounded
                bg-black/60
                px-2
                py-1
                text-[10px]
                text-white/90
                backdrop-blur
              "
            >
              {tag}
            </span>
          ))}
        </div>

      </div>



      {/* CONTENT */}

      <div className="p-4">


        <div className="flex items-start justify-between gap-3">

          <h3
            className="
              text-[15px]
              font-semibold
              text-white
            "
          >
            {vehicle.name}
          </h3>


          <div
            className="
              flex
              items-center
              gap-1
              text-yellow-400
            "
          >
            <Star size={13} fill="currentColor"/>
            <span className="text-xs text-white">
              {vehicle.rating}
            </span>
          </div>


        </div>



        <p className="mt-1 text-xs text-white/40">
          {vehicle.reviews} Reviews
        </p>




        {/* DETAILS */}

        <div
          className="
            mt-4
            grid
            grid-cols-2
            gap-3
            text-xs
          "
        >

          <div className="text-white/60">
            Mileage
            <strong className="block text-white">
              {vehicle.mileage}
            </strong>
          </div>


          <div className="text-white/60">
            Engine
            <strong className="block text-white">
              {vehicle.engine}
            </strong>
          </div>


          <div className="text-white/60">
            Horsepower
            <strong className="block text-white">
              {vehicle.horsepower}
            </strong>
          </div>


          <div className="text-white/60">
            Condition
            <strong
              className="
                block
                text-[#00d084]
              "
            >
              {vehicle.condition}
            </strong>
          </div>

        </div>



        {/* LOCATION */}

        <div
          className="
            mt-4
            flex
            items-center
            gap-2
            text-xs
            text-white/50
          "
        >
          <MapPin size={13}/>
          {vehicle.location}
        </div>




        {/* PRICE BUTTON */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
          "
        >

          <span
            className="
              text-lg
              font-bold
              text-white
            "
          >
            {vehicle.price}
          </span>


          <button
            className="
              rounded-md
              bg-[#158ff3]
              px-5
              py-2
              text-xs
              font-semibold
              text-white
              transition
              hover:bg-[#2a9fff]
            "
          >
            {vehicle.action}
          </button>


        </div>


      </div>


    </motion.div>
  );
}