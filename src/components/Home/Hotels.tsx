import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import SectionHeader from "@/components/Home/SectionHeader";
import HotelCard from "@/components/shared/card/HotelCard";
import { useTranslation } from 'react-i18next';

const getHotels = (t: any) => [
  {
    id: 1,
    type: t('hotels.types.luxury'),
    name: t('hotels.names.luxury'),
    location: t('hotels.locations.dubai'),
    rating: 4.9,
    reviews: 1250,
    price: "۱,۵۰۰,۰۰۰",
    rooms: t('hotels.rooms', { count: 25 }),
    image: "/lovable-uploads/hotel-luxury.jpg",
  },
  {
    id: 2,
    type: t('hotels.types.business'),
    name: t('hotels.names.business'),
    location: t('hotels.locations.istanbul'),
    rating: 4.7,
    reviews: 890,
    price: "۸۵۰,۰۰۰",
    rooms: t('hotels.rooms', { count: 32 }),
    image: "/lovable-uploads/hotel-business.jpg",
  },
  {
    id: 3,
    type: t('hotels.types.resort'),
    name: t('hotels.names.resort'),
    location: t('hotels.locations.antalya'),
    rating: 4.8,
    reviews: 1100,
    price: "۱,۲۰۰,۰۰۰",
    rooms: t('hotels.rooms', { count: 18 }),
    image: "/lovable-uploads/hotel-resort.jpg",
  },
  {
    id: 4,
    type: t('hotels.types.budget'),
    name: t('hotels.names.budget'),
    location: t('hotels.locations.tehran'),
    rating: 4.5,
    reviews: 650,
    price: "۳۵۰,۰۰۰",
    rooms: t('hotels.rooms', { count: 45 }),
    image: "/lovable-uploads/hotel-budget.jpg",
  },
  {
    id: 5,
    type: t('hotels.types.boutique'),
    name: t('hotels.names.boutique'),
    location: t('hotels.locations.paris'),
    rating: 4.9,
    reviews: 780,
    price: "۱,۸۰۰,۰۰۰",
    rooms: t('hotels.rooms', { count: 12 }),
    image: "/lovable-uploads/hotel-boutique.jpg",
  },
  {
    id: 6,
    type: t('hotels.types.family'),
    name: t('hotels.names.family'),
    location: t('hotels.locations.kualalumpur'),
    rating: 4.6,
    reviews: 920,
    price: "۶۵۰,۰۰۰",
    rooms: t('hotels.rooms', { count: 28 }),
    image: "/lovable-uploads/hotel-family.jpg",
  },
];

const Hotels = () => {
  const { t } = useTranslation();
  const hotels = getHotels(t);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title={t('hotels.title')}
          subtitle={t('hotels.subtitle')}
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
          className="py-4 mb-8"
        >
          {hotels.map((hotel) => (
            <SwiperSlide key={hotel.id}>
              <HotelCard hotel={hotel} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="gap-2">
            {t('hotels.viewAllButton')}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hotels;