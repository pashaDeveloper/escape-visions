import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionHeader from "@/components/SectionHeader";

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
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full mb-8"
        >
          <CarouselContent className="-ml-4">
            {newsItems.map((news) => (
              <CarouselItem key={news.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Card key={news.id} className="overflow-hidden group cursor-pointer hover:shadow-elevated transition-smooth">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-primary-foreground">{news.category}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{news.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {news.excerpt}
                </p>
                
                <Button variant="ghost" size="sm" className="gap-2 p-0 h-auto hover:bg-transparent hover:text-primary">
                  ادامه مطلب
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
              </Card>
            </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
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
