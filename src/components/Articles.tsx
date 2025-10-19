import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionHeader from "@/components/SectionHeader";

const articles = [
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

const Articles = () => {
  return (
    <section className="py-16 section-glow">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="از ما بخوانید"
          subtitle="راهنماها و مقالات تخصصی برای سفر بهتر"
        />
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5500,
            }),
          ]}
          className="w-full mb-8"
        >
          <CarouselContent className="-ml-4">
            {articles.map((article) => (
              <CarouselItem key={article.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Card key={article.id} className="overflow-hidden group cursor-pointer hover:shadow-elevated transition-smooth">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-primary-foreground">{article.category}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
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
            مشاهده همه مقالات
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
