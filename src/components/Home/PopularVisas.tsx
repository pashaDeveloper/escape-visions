import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import SectionHeader from "@/components/Home/SectionHeader";
import PopularVisaCard from "@/components/shared/card/PopularVisaCard";
import { useTranslation } from 'react-i18next';

const getPopularVisas = (t: any) => [
  {
    id: 1,
    visaType: t('popularVisas.visaTypes.tourist'),
    country: t('popularVisas.countries.canada'),
    rating: 4.8,
    reviews: 324,
    processingTime: t('popularVisas.processingTimes.canada'),
    price: 850,
    image: "/lovable-uploads/popular-visa-1.jpg",
  },
  {
    id: 2,
    visaType: t('popularVisas.visaTypes.student'),
    country: t('popularVisas.countries.turkey'),
    rating: 4.9,
    reviews: 412,
    processingTime: t('popularVisas.processingTimes.turkey'),
    price: 450,
    image: "/lovable-uploads/popular-visa-2.jpg",
  },
  {
    id: 3,
    visaType: t('popularVisas.visaTypes.work'),
    country: t('popularVisas.countries.germany'),
    rating: 4.7,
    reviews: 289,
    processingTime: t('popularVisas.processingTimes.germany'),
    price: 1200,
    image: "/lovable-uploads/popular-visa-3.jpg",
  },
  {
    id: 4,
    visaType: t('popularVisas.visaTypes.tourist'),
    country: t('popularVisas.countries.dubai'),
    rating: 4.9,
    reviews: 567,
    processingTime: t('popularVisas.processingTimes.dubai'),
    price: 280,
    image: "/lovable-uploads/popular-visa-4.jpg",
  },
  {
    id: 5,
    visaType: t('popularVisas.visaTypes.student'),
    country: t('popularVisas.countries.australia'),
    rating: 4.8,
    reviews: 398,
    processingTime: t('popularVisas.processingTimes.australia'),
    price: 1400,
    image: "/lovable-uploads/popular-visa-5.jpg",
  },
  {
    id: 6,
    visaType: t('popularVisas.visaTypes.work'),
    country: t('popularVisas.countries.uk'),
    rating: 4.6,
    reviews: 276,
    processingTime: t('popularVisas.processingTimes.uk'),
    price: 1600,
    image: "/lovable-uploads/popular-visa-6.jpg",
  },
];

const PopularVisas = () => {
  const { t } = useTranslation();
  const popularVisas = getPopularVisas(t);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-2">
        <SectionHeader 
          title={t('popularVisas.title')}
          subtitle={t('popularVisas.subtitle')}
        />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="py-4"
        >
          {popularVisas.map((visa) => (
            <SwiperSlide key={visa.id}>
              <PopularVisaCard visa={visa} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full px-8">
            {t('popularVisas.viewAllButton')}
            <ArrowRight className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularVisas;