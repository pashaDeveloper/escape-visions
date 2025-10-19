import DestinationCard from "./DestinationCard";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionHeader from "@/components/SectionHeader";

const destinations = [
  {
    id: 1,
    name: "Santorini Escape",
    location: "Greece",
    rating: 4.9,
    reviews: 234,
    price: 1299,
    duration: "7 days, 6 nights",
  },
  {
    id: 2,
    name: "Bali Adventure",
    location: "Indonesia",
    rating: 4.8,
    reviews: 189,
    price: 899,
    duration: "5 days, 4 nights",
  },
  {
    id: 3,
    name: "Swiss Alps Trek",
    location: "Switzerland",
    rating: 4.9,
    reviews: 312,
    price: 1599,
    duration: "8 days, 7 nights",
  },
  {
    id: 4,
    name: "Dubai Luxury",
    location: "UAE",
    rating: 4.7,
    reviews: 156,
    price: 1799,
    duration: "6 days, 5 nights",
  },
  {
    id: 5,
    name: "Machu Picchu",
    location: "Peru",
    rating: 5.0,
    reviews: 428,
    price: 1450,
    duration: "9 days, 8 nights",
  },
  {
    id: 6,
    name: "Iceland Explorer",
    location: "Iceland",
    rating: 4.9,
    reviews: 267,
    price: 1350,
    duration: "7 days, 6 nights",
  },
];

const Destinations = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Top Destinations"
          subtitle="Handpicked destinations for unforgettable experiences. From pristine beaches to mountain peaks, your next adventure starts here."
        />

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
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {destinations.map((destination) => (
              <CarouselItem key={destination.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <DestinationCard {...destination} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="text-center mt-12">
          <button className="text-primary font-semibold hover:text-primary-dark transition-smooth inline-flex items-center gap-2">
            View All Destinations
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
