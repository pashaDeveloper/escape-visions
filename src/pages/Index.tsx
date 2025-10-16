import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TravelStories from "@/components/TravelStories";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TravelStories />
      <Destinations />
      <Footer />
    </div>
  );
};

export default Index;
