import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Bed, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">انواع هتل برای رزرو</h2>
          <p className="text-muted-foreground text-lg">
            بهترین هتل‌ها را برای اقامت خود انتخاب کنید
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full mb-8"
        >
          <CarouselContent className="-ml-4">
            {hotels.map((hotel) => (
              <CarouselItem key={hotel.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Card key={hotel.id} className="overflow-hidden group cursor-pointer hover:shadow-elevated transition-smooth">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold">{hotel.type}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{hotel.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{hotel.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{hotel.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Bed className="w-4 h-4" />
                  <span className="text-sm">{hotel.rooms}</span>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground">قیمت هر شب از</p>
                    <p className="text-xl font-bold">{hotel.price} تومان</p>
                  </div>
                  <Button size="sm" className="gap-2">
                    رزرو
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
              </Card>
            </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
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
