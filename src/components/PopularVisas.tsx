import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionHeader from "@/components/SectionHeader";

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

const PopularVisaCard = ({ visa }: { visa: typeof popularVisas[0] }) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img
          src={visa.image}
          alt={`${visa.visaType} ${visa.country}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">{visa.rating}</span>
          <span className="text-xs text-muted-foreground">({visa.reviews})</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              {visa.visaType} {visa.country}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm gap-1">
              <MapPin className="w-4 h-4" />
              <span>{visa.country}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Clock className="w-4 h-4" />
          <span>{visa.processingTime}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">${visa.price}</span>
            <span className="text-sm text-muted-foreground ml-1">/ نفر</span>
          </div>
          <Button className="bg-accent hover:bg-accent-hover rounded-full px-6">
            درخواست ویزا
          </Button>
        </div>
      </div>
    </div>
  );
};

const PopularVisas = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="ویزاهای پرطرفدار"
          subtitle="بهترین فرصت‌ها برای دریافت ویزا به کشورهای محبوب"
        />

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3500,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {popularVisas.map((visa) => (
              <CarouselItem key={visa.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <PopularVisaCard visa={visa} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

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
