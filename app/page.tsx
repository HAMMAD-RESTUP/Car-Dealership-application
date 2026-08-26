import Header from "@/components/Layout/Header/header";
import Hero from "@/components/Sections/hero";

import BrandMarquee from "@/components/Sections/brandmarquee";
import CarListing from "@/components/Sections/carListing";

import Footer from "@/components/Layout/Footer/footer";
import WhyChooseUs from "@/components/Sections/whychooseus";
import FinanceSection from "@/components/Sections/financesection";


const Home = () => {

  return (

    <main className="luxury-bg min-h-screen">

      <Header />

      <Hero />




      <CarListing />
      <BrandMarquee />
      <WhyChooseUs/>
      <FinanceSection/>

   

      <Footer />

    </main>

  );

};


export default Home;