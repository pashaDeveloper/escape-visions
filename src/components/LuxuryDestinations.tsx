import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight, Sparkles } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">مکان‌های گردشگری و شهرک‌های لاکچری</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            لوکس‌ترین مقاصد سفر و اقامتگاه‌های پنج ستاره دنیا
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4500,
            }),
          ]}
          className="w-full mb-8"
        >
          <CarouselContent className="-ml-4">
            {destinations.map((destination) => (
              <CarouselItem key={destination.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Card key={destination.id} className="overflow-hidden group cursor-pointer hover:shadow-elevated transition-smooth border-0">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                    <span className="text-xs font-semibold text-gray-900">{destination.type}</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-white" />
                    <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-3">{destination.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 bg-yellow-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-white text-white" />
                      <span className="text-xs font-bold text-white">{destination.rating}</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="gap-2 bg-white/95 text-gray-900 hover:bg-white"
                    >
                      اطلاعات بیشتر
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4 bg-card">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">{destination.attractions}</p>
                </div>
              </CardContent>
              </Card>
            </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
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
