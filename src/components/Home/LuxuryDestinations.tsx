import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import SectionHeader from "@/components/Home/SectionHeader";
import LuxuryDestinationCard from "@/components/shared/card/LuxuryDestinationCard";

const destinations = [
  {
    id: 1,
    name: "دبی، امارات",
    description: "شهر آسمان‌خراش‌ها و لاکچری‌ترین مراکز خرید",
    image: "/lovable-uploads/destination-1.jpg",
    rating: 4.9,
    attractions: "برج خلیفه، مارینا، پالم جمیرا",
    type: "شهر لاکچری"
  },
  {
    id: 2,
    name: "مالدیو",
    description: "بهشت استوایی با ویلاهای روی آب",
    image: "/lovable-uploads/destination-2.jpg",
    rating: 5.0,
    attractions: "ریزورت‌های لاکچری، غواصی، ساحل خصوصی",
    type: "جزیره بهشتی"
  },
  {
    id: 3,
    name: "پاریس، فرانسه",
    description: "پایتخت رمانتیک و هنر اروپا",
    image: "/lovable-uploads/destination-3.jpg",
    rating: 4.8,
    attractions: "برج ایفل، شانزلیزه، لوور",
    type: "شهر تاریخی"
  },
  {
    id: 4,
    name: "سانتورینی، یونان",
    description: "جزیره رویایی با خانه‌های سفید و آبی",
    image: "/lovable-uploads/destination-4.jpg",
    rating: 4.9,
    attractions: "غروب ایا، ساحل قرمز، شهر فیرا",
    type: "جزیره رمانتیک"
  },
  {
    id: 5,
    name: "توکیو، ژاپن",
    description: "ترکیب منحصربفرد سنت و مدرنیته",
    image: "/lovable-uploads/destination-5.jpg",
    rating: 4.7,
    attractions: "شیبویا، معابد باستانی، برج توکیو",
    type: "شهر مدرن"
  },
  {
    id: 6,
    name: "آلپ سوئیس",
    description: "بهشت زمستانی با ریزورت‌های لاکچری",
    image: "/lovable-uploads/destination-6.jpg",
    rating: 4.9,
    attractions: "پیست اسکی، شاله‌های لوکس، مناظر طبیعی",
    type: "کوهستان"
  },
];

const LuxuryDestinations = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="مکان‌های گردشگری "
          subtitle="لوکس‌ترین مقاصد سفر و اقامتگاه‌های پنج ستاره دنیا"
        />
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="py-4 mb-8"
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination.id}>
              <LuxuryDestinationCard destination={destination} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="text-center">
          <Button size="lg" className="gap-2">
            <Sparkles className="w-5 h-5" />
            کشف همه مقاصد لاکچری
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryDestinations;