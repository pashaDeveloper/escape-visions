import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import SectionHeader from "@/components/Home/SectionHeader";
import NewsCard from "@/components/shared/card/NewsCard";

const newsItems = [
  {
    id: 1,
    title: "تغییرات جدید در قوانین ویزای کانادا",
    excerpt: "دولت کانادا اعلام کرد که از ماه آینده تغییرات مهمی در فرآیند صدور ویزای توریستی اعمال خواهد شد...",
    image: "/lovable-uploads/story-1.jpg",
    date: "۱۵ دی ۱۴۰۳",
    readTime: "۵ دقیقه",
    category: "خبر فوری"
  },
  {
    id: 2,
    title: "افزایش تقاضا برای ویزای کاری اروپا",
    excerpt: "آمار جدید نشان می‌دهد که تقاضا برای ویزای کاری در کشورهای اروپایی به بالاترین حد خود رسیده است...",
    image: "/lovable-uploads/story-3.jpg",
    date: "۱۰ دی ۱۴۰۳",
    readTime: "۶ دقیقه",
    category: "خبر"
  },
  {
    id: 3,
    title: "سیستم ویزای الکترونیکی در امارات",
    excerpt: "امارات متحده عربی سیستم جدید صدور ویزای الکترونیکی را راه‌اندازی کرد که فرآیند را تا ۷۰٪ سریع‌تر می‌کند...",
    image: "/lovable-uploads/story-5.jpg",
    date: "۵ دی ۱۴۰۳",
    readTime: "۵ دقیقه",
    category: "خبر"
  },
];

const News = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="آخرین اخبار"
          subtitle="به‌روزترین اطلاعات و رویدادهای دنیای ویزا"
        />
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
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
          {newsItems.map((news) => (
            <SwiperSlide key={news.id}>
              <NewsCard news={news} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="gap-2">
            مشاهده همه اخبار
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;