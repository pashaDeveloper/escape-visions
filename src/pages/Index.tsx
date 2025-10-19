import Navigation from "@/components/Home/Navigation";
import Hero from "@/components/Home/Hero";
import VisaTypes from "@/components/Home/VisaTypes";
import PopularVisas from "@/components/Home/PopularVisas";
import Hotels from "@/components/Home/Hotels";
import LuxuryDestinations from "@/components/Home/LuxuryDestinations";
import Events from "@/components/Home/Events";
import News from "@/components/Home/News";
import Mag from "@/components/Home/Mag";
import Destinations from "@/components/Home/Destinations";
import Footer from "@/components/Home/Footer";
import Category from "@/components/Home/Category";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="relative z-10 mt-[calc(60vh-3rem)] bg-background rounded-t-[2rem] overflow-hidden">
        <Category />
        <VisaTypes />
        <PopularVisas />
        <Hotels />
        <LuxuryDestinations />
        <Events />
        <News />
        <Mag />
        <Destinations />
        <Footer />
      </div>
    </div>
  );
};

export default Index;