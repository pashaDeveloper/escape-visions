import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VisaTypes from "@/components/VisaTypes";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="relative z-10 mt-[calc(50vh-3rem)] bg-background rounded-t-[2rem] overflow-hidden">
        <VisaTypes />
        <Destinations />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
