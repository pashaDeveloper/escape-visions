import { Star, Users, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionHeader from "@/components/SectionHeader";

const Events = () => {
  const events = [
    {
      id: 1,
      name: "تالار کریستال",
      type: "تالار لوکس",
      image: "/lovable-uploads/event-hall-1.jpg",
      capacity: "500 نفر",
      rating: 4.9,
      features: ["سالن VIP", "لوستر کریستال", "سیستم صوتی"],
      priceRange: "تماس برای قیمت",
    },
    {
      id: 2,
      name: "باغ رویایی",
      type: "باغ تالار",
      image: "/lovable-uploads/event-garden-1.jpg",
      capacity: "300 نفر",
      rating: 4.8,
      features: ["فضای سبز", "آلاچیق", "روف گاردن"],
      priceRange: "تماس برای قیمت",
    },
    {
      id: 3,
      name: "یات سلطنتی",
      type: "کشتی تفریحی",
      image: "/lovable-uploads/event-yacht-1.jpg",
      capacity: "150 نفر",
      rating: 5.0,
      features: ["منظره دریا", "غذای تازه", "DJ مخصوص"],
      priceRange: "تماس برای قیمت",
    },
    {
      id: 4,
      name: "تالار امپراطور",
      type: "تالار سلطنتی",
      image: "/lovable-uploads/event-hall-2.jpg",
      capacity: "600 نفر",
      rating: 4.9,
      features: ["دکوراسیون طلایی", "فرش دستباف", "نورپردازی"],
      priceRange: "تماس برای قیمت",
    },
    {
      id: 5,
      name: "باغ شبستان",
      type: "باغ لوکس",
      image: "/lovable-uploads/event-garden-2.jpg",
      capacity: "400 نفر",
      rating: 4.7,
      features: ["آبنما", "نورپردازی شب", "محوطه باز"],
      priceRange: "تماس برای قیمت",
    },
    {
      id: 6,
      name: "کروز غروب",
      type: "کشتی لوکس",
      image: "/lovable-uploads/event-yacht-2.jpg",
      capacity: "200 نفر",
      rating: 5.0,
      features: ["منظره غروب", "عکاس حرفه‌ای", "شام رستوران"],
      priceRange: "تماس برای قیمت",
    },
    {
      id: 7,
      name: "روف تاپ آسمان",
      type: "روف گاردن",
      image: "/lovable-uploads/event-rooftop-1.jpg",
      capacity: "250 نفر",
      rating: 4.8,
      features: ["منظره شهر", "فضای باز", "نورپردازی LED"],
      priceRange: "تماس برای قیمت",
    },
    {
      id: 8,
      name: "کاخ گلستان",
      type: "کاخ تاریخی",
      image: "/lovable-uploads/event-palace-1.jpg",
      capacity: "450 نفر",
      rating: 5.0,
      features: ["معماری ایرانی", "تالار آینه", "باغ موزه"],
      priceRange: "تماس برای قیمت",
    },
    {
      id: 9,
      name: "ساحل طلایی",
      type: "ساحل لوکس",
      image: "/lovable-uploads/event-beach-1.jpg",
      capacity: "200 نفر",
      rating: 4.9,
      features: ["ساحل خصوصی", "منظره دریا", "آلاچیق سفید"],
      priceRange: "تماس برای قیمت",
    },
    {
      id: 10,
      name: "هتل الماس",
      type: "هتل 5 ستاره",
      image: "/lovable-uploads/event-modern-1.jpg",
      capacity: "700 نفر",
      rating: 4.9,
      features: ["سالن بزرگ", "پارکینگ VIP", "کترینگ هتل"],
      priceRange: "تماس برای قیمت",
    },
  ];

  return (
    <section className="py-16 section-glow">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="برگزاری مراسمات لوکس"
          subtitle="تالارها، باغ‌های لوکس و کشتی‌های تفریحی برای برگزاری بهترین مراسمات شما"
        />

        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: "rtl",
          }}
          plugins={[
            Autoplay({
              delay: 3500,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {events.map((event) => (
              <CarouselItem key={event.id} className="pl-4 basis-[85%] sm:basis-[70%] md:basis-[45%] lg:basis-[32%] xl:basis-[30%]">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[450px] cursor-pointer">
                  {/* Background Image with Parallax Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    {/* Type Badge */}
                    <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white border-0 px-4 py-1">
                      {event.type}
                    </Badge>

                    {/* Rating */}
                    <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{event.rating}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">
                      {event.name}
                    </h3>

                    {/* Capacity */}
                    <div className="flex items-center gap-2 mb-3 text-white/90">
                      <Users className="w-5 h-5" />
                      <span className="text-sm font-medium">ظرفیت: {event.capacity}</span>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-semibold">{event.priceRange}</span>
                      </div>
                      <button className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                        رزرو
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Events;
