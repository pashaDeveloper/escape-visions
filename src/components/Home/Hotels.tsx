import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import SectionHeader from "@/components/Home/SectionHeader";
import HotelCard from "@/components/shared/card/HotelCard";

const hotels = [
  {
    id: 1,
    type: "لوکس",
    name: "هتل 5 ستاره",
    location: "دبی، امارات",
    rating: 4.9,
    reviews: 1250,
    price: "۱,۵۰۰,۰۰۰",
    rooms: "۲۵ اتاق موجود",
    image: "/lovable-uploads/hotel-luxury.jpg",
  },
  {
    id: 2,
    type: "بیزنس",
    name: "هتل کسب و کار",
    location: "استانبول، ترکیه",
    rating: 4.7,
    reviews: 890,
    price: "۸۵۰,۰۰۰",
    rooms: "۳۲ اتاق موجود",
    image: "/lovable-uploads/hotel-business.jpg",
  },
  {
    id: 3,
    type: "ریزورت",
    name: "ریزورت ساحلی",
    location: "آنتالیا، ترکیه",
    rating: 4.8,
    reviews: 1100,
    price: "۱,۲۰۰,۰۰۰",
    rooms: "۱۸ اتاق موجود",
    image: "/lovable-uploads/hotel-resort.jpg",
  },
  {
    id: 4,
    type: "اقتصادی",
    name: "هتل مقرون به صرفه",
    location: "تهران، ایران",
    rating: 4.5,
    reviews: 650,
    price: "۳۵۰,۰۰۰",
    rooms: "۴۵ اتاق موجود",
    image: "/lovable-uploads/hotel-budget.jpg",
  },
  {
    id: 5,
    type: "بوتیک",
    name: "هتل بوتیک",
    location: "پاریس، فرانسه",
    rating: 4.9,
    reviews: 780,
    price: "۱,۸۰۰,۰۰۰",
    rooms: "۱۲ اتاق موجود",
    image: "/lovable-uploads/hotel-boutique.jpg",
  },
  {
    id: 6,
    type: "خانوادگی",
    name: "هتل خانوادگی",
    location: "کوآلالامپور، مالزی",
    rating: 4.6,
    reviews: 920,
    price: "۶۵۰,۰۰۰",
    rooms: "۲۸ اتاق موجود",
    image: "/lovable-uploads/hotel-family.jpg",
  },
];

const Hotels = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="انواع هتل برای رزرو"
          subtitle="بهترین هتل‌ها را برای اقامت خود انتخاب کنید"
        />
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="py-4 mb-8"
        >
          {hotels.map((hotel) => (
            <SwiperSlide key={hotel.id}>
              <HotelCard hotel={hotel} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="gap-2">
            مشاهده همه هتل‌ها
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hotels;