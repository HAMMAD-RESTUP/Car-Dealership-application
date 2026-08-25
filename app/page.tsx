
import Header from "@/components/Layout/Header/header";
import Hero from "@/components/Sections/hero";
import VehicleShowcase from "@/components/Sections/vehicleShowcase";
import CarListing from "@/components/Sections/carListing";
import Footer from "@/components/Layout/Footer/footer";
import BrandMarquee from "@/components/Sections/brandmarquee";



const Home = () => {
  return (
    <main>
      <Header/>
      <Hero/>
      <BrandMarquee/>
      {/* <VehicleShowcase/> */}
      <CarListing/>
      <Footer/>

    </main>
  );
};

export default Home;