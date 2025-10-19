import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import SectionHeader from "@/components/Home/SectionHeader";
import MagCard from "@/components/shared/card/MagCard";

const magItems = [
  {
    id: 1,
    title: "بهترین کشورها برای تحصیل در سال ۲۰۲۵",
    excerpt: "لیست جدید بهترین مقاصد تحصیلی برای دانشجویان بین‌المللی منتشر شد. کانادا، آلمان و استرالیا در صدر جدول...",
    image: "/lovable-uploads/story-2.jpg",
    date: "۱۲ دی ۱۴۰۳",
    readTime: "۷ دقیقه",
    category: "تحصیل"
  },
  {
    id: 2,
    title: "راهنمای کامل سفر خانوادگی به ترکیه",
    excerpt: "همه چیز درباره مدارک مورد نیاز و نکات مهم برای دریافت ویزای خانوادگی ترکیه را در این مقاله بخوانید...",
    image: "/lovable-uploads/story-4.jpg",
    date: "۸ دی ۱۴۰۳",
    readTime: "۴ دقیقه",
    category: "سفر"
  },
  {
    id: 3,
    title: "مشاوره رایگان ویزا: نکات مهم",
    excerpt: "چگونه از خدمات مشاوره ویزا بهره‌مند شوید و از کلاهبرداری‌ها در امان باشید. نکات کلیدی که باید بدانید...",
    image: "/lovable-uploads/story-6.jpg",
    date: "۳ دی ۱۴۰۳",
    readTime: "۸ دقیقه",
    category: "مشاوره"
  },
];

const Mag = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="از ما بخوانید"
          subtitle="راهنماها و مقالات تخصصی برای سفر بهتر"
        />
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{
            delay: 5500,
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
          {magItems.map((mag) => (
            <SwiperSlide key={mag.id}>
              <MagCard mag={mag} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="gap-2">
            مشاهده همه مقالات
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Mag;