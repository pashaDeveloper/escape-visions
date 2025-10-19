import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VisaTypes from "@/components/VisaTypes";
import PopularVisas from "@/components/PopularVisas";
import Hotels from "@/components/Hotels";
import LuxuryDestinations from "@/components/LuxuryDestinations";
import Events from "@/components/Events";
import News from "@/components/News";
import Articles from "@/components/Articles";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="relative z-10 mt-[calc(50vh-3rem)] bg-background rounded-t-[2rem] overflow-hidden">
        <VisaTypes />
        <PopularVisas />
        <Hotels />
        <LuxuryDestinations />
        <Events />
        <News />
        <Articles />
        <Destinations />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
