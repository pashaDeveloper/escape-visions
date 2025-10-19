import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "روز خاص خود را رقم بزنید",
    subtitle: "تالارهای لوکس برای عروسی و مراسمات شما",
    location: "تالار عروسی",
    image: "/lovable-uploads/event-hall-1.jpg",
    category: "wedding"
  },
  {
    id: 2,
    title: "سفر به بهشت زمین",
    subtitle: "جزایر زیبا با اقامتگاه‌های روی آب",
    location: "مالدیو",
    image: "/lovable-uploads/event-beach-1.jpg",
    category: "destination"
  },
  {
    id: 3,
    title: "تجربه کشتی تفریحی",
    subtitle: "مناظر دریایی و غذاهای خوشمزه",
    location: "یات لوکس",
    image: "/lovable-uploads/event-yacht-1.jpg",
    category: "yacht"
  },
  {
    id: 4,
    title: "اقامت در هتل‌های لوکس",
    subtitle: "راحتی و آسایش در بهترین هتل‌های جهان",
    location: "هتل 5 ستاره",
    image: "/lovable-uploads/hotel-luxury.jpg",
    category: "hotel"
  },
  {
    id: 5,
    title: "مسکن رویایی شما",
    subtitle: "ویلاها و خانه‌های خصوصی در بهترین مقاصد",
    location: "اقامتگاه خصوصی",
    image: "/lovable-uploads/event-garden-1.jpg",
    category: "real-estate"
  },
  {
    id: 6,
    title: "ویزای سفر خود را بگیرید",
    subtitle: "فرآیند آسان و سریع برای تمامی کشورها",
    location: "خدمات ویزا",
    image: "/lovable-uploads/visa-tourist.jpg",
    category: "visa"
  },
];

const getDynamicContent = (category: string) => {
  switch (category) {
    case "wedding":
      return {
        mainTitle: "روز خاص خود را رقم بزنید",
        subTitle: "تالارهای لوکس برای عروسی و مراسمات شما"
      };
    case "destination":
      return {
        mainTitle: "کشف بهترین مقاصد سفری",
        subTitle: "مقاصد گردشگری جهان را کشف کنید"
      };
    case "yacht":
      return {
        mainTitle: "تجربه کشتی تفریحی",
        subTitle: "سفرهای دریایی خاطره‌انگیز"
      };
    case "hotel":
      return {
        mainTitle: "اقامت در هتل‌های لوکس",
        subTitle: "راحتی و آسایش در بهترین هتل‌ها"
      };
    case "real-estate":
      return {
        mainTitle: "مسکن رویایی شما",
        subTitle: "خرید و اجاره بهترین املاک"
      };
    case "visa":
      return {
        mainTitle: "ویزای سفر خود را بگیرید",
        subTitle: "خدمات ویزای سریع و مطمئن"
      };
    default:
      return {
        mainTitle: "کشف بهترین مقاصد سفری",
        subTitle: "تالارهای عروسی، یات‌های تفریحی، هتل‌های لوکس و اقامتگاه‌های خصوصی"
      };
  }
};

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

  const dynamicContent = getDynamicContent(heroSlides[currentSlide].category);

  return (
    <section className="fixed top-0 left-0 right-0 h-[60vh] w-full overflow-hidden -z-10">
      {/* Hero Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.location}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </div>
      ))}

      {/* Content Overlay - Dynamic based on slide category */}
      <div className="relative z-20 h-full flex flex-col justify-between">
        {/* Top Content - Changes with slides */}
        <div className="text-center text-white px-6 pt-20 max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-medium">{heroSlides[currentSlide].location}</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            {dynamicContent.mainTitle}
          </h1>
          <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90">
            {dynamicContent.subTitle}
          </p>
        </div>

        {/* Bottom Content - Static search bar */}
        <div className="pb-16 px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-full shadow-elevated p-1.5 md:p-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="کجا می‌خواهید بروید؟"
              className="flex-1 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base text-foreground focus:outline-none"
            />
            <Button className="bg-accent hover:bg-accent-hover rounded-full px-4 md:px-8 h-9 md:h-12 gap-2 text-sm md:text-base">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">جستجو</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-smooth flex items-center justify-center text-white"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-smooth flex items-center justify-center text-white"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 md:bottom-36 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-smooth ${
              index === currentSlide ? "bg-white w-6 md:w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;