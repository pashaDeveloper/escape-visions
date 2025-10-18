import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "تغییرات جدید در قوانین ویزای کانادا",
    excerpt: "دولت کانادا اعلام کرد که از ماه آینده تغییرات مهمی در فرآیند صدور ویزای توریستی اعمال خواهد شد...",
    image: "/lovable-uploads/story-1.jpg",
    date: "۱۵ دی ۱۴۰۳",
    readTime: "۵ دقیقه",
    category: "قوانین ویزا"
  },
  {
    id: 2,
    title: "بهترین کشورها برای تحصیل در سال ۲۰۲۵",
    excerpt: "لیست جدید بهترین مقاصد تحصیلی برای دانشجویان بین‌المللی منتشر شد. کانادا، آلمان و استرالیا در صدر جدول...",
    image: "/lovable-uploads/story-2.jpg",
    date: "۱۲ دی ۱۴۰۳",
    readTime: "۷ دقیقه",
    category: "تحصیل"
  },
  {
    id: 3,
    title: "افزایش تقاضا برای ویزای کاری اروپا",
    excerpt: "آمار جدید نشان می‌دهد که تقاضا برای ویزای کاری در کشورهای اروپایی به بالاترین حد خود رسیده است...",
    image: "/lovable-uploads/story-3.jpg",
    date: "۱۰ دی ۱۴۰۳",
    readTime: "۶ دقیقه",
    category: "کار و اشتغال"
  },
  {
    id: 4,
    title: "راهنمای کامل سفر خانوادگی به ترکیه",
    excerpt: "همه چیز درباره مدارک مورد نیاز و نکات مهم برای دریافت ویزای خانوادگی ترکیه را در این مقاله بخوانید...",
    image: "/lovable-uploads/story-4.jpg",
    date: "۸ دی ۱۴۰۳",
    readTime: "۴ دقیقه",
    category: "سفر"
  },
  {
    id: 5,
    title: "سیستم ویزای الکترونیکی در امارات",
    excerpt: "امارات متحده عربی سیستم جدید صدور ویزای الکترونیکی را راه‌اندازی کرد که فرآیند را تا ۷۰٪ سریع‌تر می‌کند...",
    image: "/lovable-uploads/story-5.jpg",
    date: "۵ دی ۱۴۰۳",
    readTime: "۵ دقیقه",
    category: "تکنولوژی"
  },
  {
    id: 6,
    title: "مشاوره رایگان ویزا: نکات مهم",
    excerpt: "چگونه از خدمات مشاوره ویزا بهره‌مند شوید و از کلاهبرداری‌ها در امان باشید. نکات کلیدی که باید بدانید...",
    image: "/lovable-uploads/story-6.jpg",
    date: "۳ دی ۱۴۰۳",
    readTime: "۸ دقیقه",
    category: "مشاوره"
  },
];

const News = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">آخرین اخبار و مقالات</h2>
          <p className="text-muted-foreground text-lg">
            به‌روزترین اطلاعات و راهنماهای سفر و ویزا
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsItems.map((news) => (
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
          ))}
        </div>
        
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
