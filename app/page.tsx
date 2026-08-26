import Header from "@/components/Layout/Header/header";
import Hero from "@/components/Sections/hero";

import BrandMarquee from "@/components/Sections/brandmarquee";
import CarListing from "@/components/Sections/carListing";

import Footer from "@/components/Layout/Footer/footer";


const Home = () => {

  return (

    <main className="luxury-bg min-h-screen">

      <Header />

      <Hero />



      <BrandMarquee />

      <CarListing />

   

      <Footer />

    </main>

  );

};


export default Home;