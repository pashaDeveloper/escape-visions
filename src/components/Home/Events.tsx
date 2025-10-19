import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import SectionHeader from "@/components/Home/SectionHeader";
import EventCard from "@/components/shared/card/EventCard";

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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="برگزاری مراسمات لوکس"
          subtitle="تالارها، باغ‌های لوکس و کشتی‌های تفریحی برای برگزاری بهترین مراسمات شما"
        />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.2}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3.5,
            },
          }}
          className="py-4"
          dir="rtl"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <EventCard event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Events;