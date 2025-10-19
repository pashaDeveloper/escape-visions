import DestinationCard from "@/components/shared/card/DestinationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import SectionHeader from "@/components/Home/SectionHeader";

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

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
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
          className="py-4"
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination.id}>
              <DestinationCard {...destination} />
            </SwiperSlide>
          ))}
        </Swiper>

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