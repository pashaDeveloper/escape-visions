import { Plane, Briefcase, GraduationCap, Building2, Clock, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionHeader from "@/components/SectionHeader";

const visaTypes = [
  {
    id: 1,
    name: "Tourist Visa",
    image: "/lovable-uploads/visa-tourist.jpg",
  },
  {
    id: 2,
    name: "Business Visa",
    image: "/lovable-uploads/visa-business.jpg",
  },
  {
    id: 3,
    name: "Student Visa",
    image: "/lovable-uploads/visa-student.jpg",
  },
  {
    id: 4,
    name: "Work Visa",
    image: "/lovable-uploads/visa-work.jpg",
  },
  {
    id: 5,
    name: "Transit Visa",
    image: "/lovable-uploads/visa-transit.jpg",
  },
  {
    id: 6,
    name: "Family Visa",
    image: "/lovable-uploads/visa-family.jpg",
  },
];

const VisaTypes = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="انواع ویزا"
          subtitle="خدمات ویزای متنوع برای تمامی نیازهای سفر شما"
          align="center"
        />
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {visaTypes.map((visa) => (
              <CarouselItem key={visa.id} className="pl-4 basis-auto">
                <div className="group cursor-pointer">
                  <div className="relative w-48 h-32 rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth">
                    <img
                      src={visa.image}
                      alt={visa.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="font-semibold text-sm text-white">{visa.name}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default VisaTypes;
