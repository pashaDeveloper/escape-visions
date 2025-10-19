import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const heroSlides = [
  {
    id: 1,
    category: "wedding"
  },
  {
    id: 2,
    category: "destination"
  },
  {
    id: 3,
    category: "yacht"
  },
  {
    id: 4,
    category: "hotel"
  },
  {
    id: 5,
    category: "realEstate"
  },
  {
    id: 6,
    category: "visa"
  },
];

const getDynamicContent = (category: string, t: any) => {
  switch (category) {
    case "wedding":
      return {
        mainTitle: t('hero.dynamicContent.wedding.mainTitle'),
        subTitle: t('hero.dynamicContent.wedding.subTitle'),
        location: t('hero.slides.wedding.location')
      };
    case "destination":
      return {
        mainTitle: t('hero.dynamicContent.destination.mainTitle'),
        subTitle: t('hero.dynamicContent.destination.subTitle'),
        location: t('hero.slides.destination.location')
      };
    case "yacht":
      return {
        mainTitle: t('hero.dynamicContent.yacht.mainTitle'),
        subTitle: t('hero.dynamicContent.yacht.subTitle'),
        location: t('hero.slides.yacht.location')
      };
    case "hotel":
      return {
        mainTitle: t('hero.dynamicContent.hotel.mainTitle'),
        subTitle: t('hero.dynamicContent.hotel.subTitle'),
        location: t('hero.slides.hotel.location')
      };
    case "realEstate":
      return {
        mainTitle: t('hero.dynamicContent.realEstate.mainTitle'),
        subTitle: t('hero.dynamicContent.realEstate.subTitle'),
        location: t('hero.slides.realEstate.location')
      };
    case "visa":
      return {
        mainTitle: t('hero.dynamicContent.visa.mainTitle'),
        subTitle: t('hero.dynamicContent.visa.subTitle'),
        location: t('hero.slides.visa.location')
      };
    default:
      return {
        mainTitle: t('hero.dynamicContent.default.mainTitle'),
        subTitle: t('hero.dynamicContent.default.subTitle'),
        location: ""
      };
  }
};

const getSlideData = (category: string, t: any) => {
  switch (category) {
    case "wedding":
      return {
        title: t('hero.slides.wedding.title'),
        subtitle: t('hero.slides.wedding.subtitle'),
        location: t('hero.slides.wedding.location'),
        image: "/lovable-uploads/event-hall-1.jpg"
      };
    case "destination":
      return {
        title: t('hero.slides.destination.title'),
        subtitle: t('hero.slides.destination.subtitle'),
        location: t('hero.slides.destination.location'),
        image: "/lovable-uploads/event-beach-1.jpg"
      };
    case "yacht":
      return {
        title: t('hero.slides.yacht.title'),
        subtitle: t('hero.slides.yacht.subtitle'),
        location: t('hero.slides.yacht.location'),
        image: "/lovable-uploads/event-yacht-1.jpg"
      };
    case "hotel":
      return {
        title: t('hero.slides.hotel.title'),
        subtitle: t('hero.slides.hotel.subtitle'),
        location: t('hero.slides.hotel.location'),
        image: "/lovable-uploads/hotel-luxury.jpg"
      };
    case "realEstate":
      return {
        title: t('hero.slides.realEstate.title'),
        subtitle: t('hero.slides.realEstate.subtitle'),
        location: t('hero.slides.realEstate.location'),
        image: "/lovable-uploads/event-garden-1.jpg"
      };
    case "visa":
      return {
        title: t('hero.slides.visa.title'),
        subtitle: t('hero.slides.visa.subtitle'),
        location: t('hero.slides.visa.location'),
        image: "/lovable-uploads/visa-tourist.jpg"
      };
    default:
      return {
        title: "",
        subtitle: "",
        location: "",
        image: ""
      };
  }
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isRtl = i18n.language === 'fa';

  // Update slide when language changes to maintain correct direction
  useEffect(() => {
    // Update document direction
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [isRtl]);

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

  const slideData = getSlideData(heroSlides[currentSlide].category, t);
  const dynamicContent = getDynamicContent(heroSlides[currentSlide].category, t);

  return (
    <section className="fixed top-0 left-0 right-0 h-[60vh] w-full overflow-hidden -z-10">
      {/* Hero Slides */}
      {heroSlides.map((slide, index) => {
        const data = getSlideData(slide.category, t);
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={data.image}
              alt={data.location}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          </div>
        );
      })}

      {/* Content Overlay - Dynamic based on slide category */}
      <div className="relative z-20 h-full flex flex-col justify-between">
        {/* Top Content - Changes with slides */}
        <div className="text-center text-white px-6 pt-20 max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-medium">{slideData.location}</span>
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
              placeholder={t('hero.searchPlaceholder')}
              className="flex-1 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base text-foreground focus:outline-none"
            />
            <Button className="bg-accent hover:bg-accent-hover rounded-full px-4 md:px-8 h-9 md:h-12 gap-2 text-sm md:text-base">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">{t('hero.searchButton')}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Adjusted for RTL/LTR */}
      <button
        onClick={handlePrev}
        className={`absolute ${isRtl ? 'right-2 md:right-6' : 'left-2 md:left-6'} top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-smooth flex items-center justify-center text-white`}
      >
        {isRtl ? (
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
        ) : (
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
        )}
      </button>
      <button
        onClick={handleNext}
        className={`absolute ${isRtl ? 'left-2 md:left-6' : 'right-2 md:right-6'} top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-smooth flex items-center justify-center text-white`}
      >
        {isRtl ? (
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
        ) : (
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
        )}
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