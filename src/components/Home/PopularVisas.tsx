import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import SectionHeader from "@/components/Home/SectionHeader";
import PopularVisaCard from "@/components/shared/card/PopularVisaCard";

const popularVisas = [
  {
    id: 1,
    visaType: "ویزای توریستی",
    country: "کانادا",
    rating: 4.8,
    reviews: 324,
    processingTime: "15-20 روز",
    price: 850,
    image: "/lovable-uploads/popular-visa-1.jpg",
  },
  {
    id: 2,
    visaType: "ویزای تحصیلی",
    country: "ترکیه",
    rating: 4.9,
    reviews: 412,
    processingTime: "10-15 روز",
    price: 450,
    image: "/lovable-uploads/popular-visa-2.jpg",
  },
  {
    id: 3,
    visaType: "ویزای کاری",
    country: "آلمان",
    rating: 4.7,
    reviews: 289,
    processingTime: "20-30 روز",
    price: 1200,
    image: "/lovable-uploads/popular-visa-3.jpg",
  },
  {
    id: 4,
    visaType: "ویزای توریستی",
    country: "دبی",
    rating: 4.9,
    reviews: 567,
    processingTime: "3-5 روز",
    price: 280,
    image: "/lovable-uploads/popular-visa-4.jpg",
  },
  {
    id: 5,
    visaType: "ویزای تحصیلی",
    country: "استرالیا",
    rating: 4.8,
    reviews: 398,
    processingTime: "25-35 روز",
    price: 1400,
    image: "/lovable-uploads/popular-visa-5.jpg",
  },
  {
    id: 6,
    visaType: "ویزای کاری",
    country: "انگلستان",
    rating: 4.6,
    reviews: 276,
    processingTime: "30-45 روز",
    price: 1600,
    image: "/lovable-uploads/popular-visa-6.jpg",
  },
];

const PopularVisas = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-2">
        <SectionHeader 
          title="ویزاهای پرطرفدار"
          subtitle="بهترین فرصت‌ها برای دریافت ویزا به کشورهای محبوب"
        />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="py-4"
        >
          {popularVisas.map((visa) => (
            <SwiperSlide key={visa.id}>
              <PopularVisaCard visa={visa} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full px-8">
            مشاهده همه ویزاها
            <ArrowRight className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularVisas;