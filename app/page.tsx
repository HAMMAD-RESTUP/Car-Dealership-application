import Header from "@/components/Layout/Header/header";
import Hero from "@/components/Sections/hero";
import BrandMarquee from "@/components/Sections/brandmarquee";
import CarListing from "@/components/Sections/carListing";
import Footer from "@/components/Layout/Footer/footer";
import WhyChooseUs from "@/components/Sections/whychooseus";
import VideoSection from "@/components/Sections/videosection";
import Testimonials from "@/components/Sections/testimonials";
import SellYourCar from "@/components/Sections/sellyourcar";


const Home = () => {

  return (

    <main className="luxury-bg min-h-screen">

      <Header />
      <Hero />
      <CarListing />
      <BrandMarquee />
      <VideoSection/>
      <WhyChooseUs/>
      <SellYourCar/>
      <Testimonials/>
      <Footer />

    </main>

  );

};


export default Home;