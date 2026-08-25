
import Header from "@/components/Layout/Header/header";
import Hero from "@/components/Sections/hero";
import VehicleShowcase from "@/components/Sections/vehicleShowcase";
import CarListing from "@/components/Sections/carListing";



const Home = () => {
  return (
    <main>
      <Header/>
      <Hero/>
      {/* <VehicleShowcase/> */}
      <CarListing/>

    </main>
  );
};

export default Home;