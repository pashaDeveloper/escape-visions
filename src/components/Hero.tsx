import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "Discover Paradise",
    subtitle: "Tropical beaches await your arrival",
    location: "Maldives",
  },
  {
    id: 2,
    title: "Mountain Majesty",
    subtitle: "Breathtaking peaks and valleys",
    location: "Swiss Alps",
  },
  {
    id: 3,
    title: "Ancient Wonders",
    subtitle: "Walk through centuries of history",
    location: "Rome, Italy",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <section className="relative h-[50vh] w-full overflow-hidden">
      {/* Hero Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={`/lovable-uploads/hero-${slide.id}.jpg`}
            alt={slide.location}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium">{heroSlides[currentSlide].location}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {heroSlides[currentSlide].subtitle}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-full shadow-elevated p-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="flex-1 px-6 py-3 rounded-full text-foreground focus:outline-none"
            />
            <Button className="bg-accent hover:bg-accent-hover rounded-full px-8 h-12 gap-2">
              <Search className="w-5 h-5" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-smooth flex items-center justify-center text-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-smooth flex items-center justify-center text-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-smooth ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
