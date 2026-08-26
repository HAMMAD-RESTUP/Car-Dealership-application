import Header from "@/components/Layout/Header/header";
import Hero from "@/components/Sections/hero";
import Features from "@/components/Sections/features";
import BrandMarquee from "@/components/Sections/brandmarquee";
import CarListing from "@/components/Sections/carListing";
import Financing from "@/components/Sections/financing";
import HowItWorks from "@/components/Sections/howItWorks";
import Footer from "@/components/Layout/Footer/footer";


const Home = () => {

  return (

    <main className="luxury-bg min-h-screen">

      <Header />

      <Hero />

      {/* <Features /> */}

      <BrandMarquee />

      <CarListing />

      {/* <Financing /> */}

      {/* <HowItWorks /> */}

      <Footer />

    </main>

  );

};


export default Home;