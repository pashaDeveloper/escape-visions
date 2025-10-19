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
  // Added new items with existing images
  {
    id: 4,
    title: "رازهای سفر ارزان به اروپا",
    excerpt: "با رعایت نکات ساده این مقاله می‌توانید هزینه سفر خود به اروپا را تا ۵۰٪ کاهش دهید...",
    image: "/lovable-uploads/story-1.jpg",
    date: "۲۸ آذر ۱۴۰۳",
    readTime: "۶ دقیقه",
    category: "سفر ارزان"
  },
  {
    id: 5,
    title: "جدیدترین تغییرات ویزای شنگن",
    excerpt: "از تغییرات جدید قوانین ویزای شنگن در سال ۲۰۲۵ باخبر شوید و برای سفر خود آماده شوید...",
    image: "/lovable-uploads/story-3.jpg",
    date: "۲۵ آذر ۱۴۰۳",
    readTime: "۵ دقیقه",
    category: "ویزای اروپا"
  },
  {
    id: 6,
    title: "معرفی هتل‌های لوکس جهان",
    excerpt: "معرفی ۱۰ هتل لوکس جهان که تجربه اقامت در آن‌ها را فراموش نخواهید کرد...",
    image: "/lovable-uploads/story-5.jpg",
    date: "۲۰ آذر ۱۴۰۳",
    readTime: "۹ دقیقه",
    category: "هتل‌های لوکس"
  },
  {
    id: 7,
    title: "غذاهای محلی در سفرهای بین‌المللی",
    excerpt: "تجربه غذاهای محلی یکی از بهترین بخش‌های هر سفر است. با ما بیشتر بخوانید...",
    image: "/lovable-uploads/hero-1.jpg",
    date: "۱۵ آذر ۱۴۰۳",
    readTime: "۴ دقیقه",
    category: "غذا و فرهنگ"
  },
  {
    id: 8,
    title: "راهنمای ویزای دیجیتال نومادها",
    excerpt: "کشورهایی که ویزای دیجیتال برای نومادهای جهانی ارائه می‌دهند و نحوه دریافت آن...",
    image: "/lovable-uploads/hero-2.jpg",
    date: "۱۰ آذر ۱۴۰۳",
    readTime: "۵ دقیقه",
    category: "نومادها"
  },
  {
    id: 9,
    title: "مقاصد گردشگری پنهان آسیا",
    excerpt: "کشف مقاصد گردشگری کمتر شناخته شده در آسیا که تجربه‌ای منحصربه‌فرد ارائه می‌دهند...",
    image: "/lovable-uploads/hero-3.jpg",
    date: "۵ آذر ۱۴۰۳",
    readTime: "۶ دقیقه",
    category: "آسیا"
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
              slidesPerView: 4,
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