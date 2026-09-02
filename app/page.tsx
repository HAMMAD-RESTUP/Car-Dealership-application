import Header from "@/components/Layout/Header/header";
import Hero from "@/components/Sections/hero";
import BrandMarquee from "@/components/Sections/brandmarquee";
import CarListing from "@/components/Sections/carListing";
import Footer from "@/components/Layout/Footer/footer";
import WhyChooseUs from "@/components/Sections/whychooseus";
import VideoSection from "@/components/Sections/videosection";
import Testimonials from "@/components/Sections/testimonials";
import VehicleSearchBar from "@/components/Sections/VehicleSearchBar";
import Welcome from "@/components/Sections/Welcome";


const Home = () => {

  return (

    <main className="luxury-bg min-h-screen">

      <Header />
      <Hero />
    <VehicleSearchBar />
      <CarListing />
      <BrandMarquee />
      <Welcome/>
      <Testimonials/>
      <VideoSection/>
      <WhyChooseUs/>
      <Footer />

    </main>

  );

};


export default Home;