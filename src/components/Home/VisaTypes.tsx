import { Plane, Briefcase, GraduationCap, Building2, Clock, Users, Heart, Home, Trophy, Camera, Star, ShoppingCart, Anchor, Music } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import SectionHeader from "@/components/Home/SectionHeader";
import { useTranslation } from 'react-i18next';

const getVisaTypes = (t: any) => [
  {
    id: 1,
    name: t('visaTypes.tourist'),
    icon: <Plane className="w-6 h-6" />,
    image: "/lovable-uploads/visa-tourist.jpg",
  },
  {
    id: 2,
    name: t('visaTypes.business'),
    icon: <Briefcase className="w-6 h-6" />,
    image: "/lovable-uploads/visa-business.jpg",
  },
  {
    id: 3,
    name: t('visaTypes.student'),
    icon: <GraduationCap className="w-6 h-6" />,
    image: "/lovable-uploads/visa-student.jpg",
  },
  {
    id: 4,
    name: t('visaTypes.work'),
    icon: <Building2 className="w-6 h-6" />,
    image: "/lovable-uploads/visa-work.jpg",
  },
  {
    id: 5,
    name: t('visaTypes.transit'),
    icon: <Clock className="w-6 h-6" />,
    image: "/lovable-uploads/visa-transit.jpg",
  },
  {
    id: 6,
    name: t('visaTypes.family'),
    icon: <Users className="w-6 h-6" />,
    image: "/lovable-uploads/visa-family.jpg",
  },
  {
    id: 7,
    name: t('visaTypes.marriage'),
    icon: <Heart className="w-6 h-6" />,
    image: "/lovable-uploads/visa-family.jpg",
  },
  {
    id: 8,
    name: t('visaTypes.investment'),
    icon: <Trophy className="w-6 h-6" />,
    image: "/lovable-uploads/visa-business.jpg",
  },
  {
    id: 9,
    name: t('visaTypes.retirement'),
    icon: <Home className="w-6 h-6" />,
    image: "/lovable-uploads/visa-tourist.jpg",
  },
  {
    id: 10,
    name: t('visaTypes.medical'),
    icon: <Heart className="w-6 h-6" />,
    image: "/lovable-uploads/visa-tourist.jpg",
  },
  {
    id: 11,
    name: t('visaTypes.diplomatic'),
    icon: <Star className="w-6 h-6" />,
    image: "/lovable-uploads/visa-business.jpg",
  },
  {
    id: 12,
    name: t('visaTypes.journalist'),
    icon: <Camera className="w-6 h-6" />,
    image: "/lovable-uploads/visa-tourist.jpg",
  },
  {
    id: 13,
    name: t('visaTypes.cultural'),
    icon: <Star className="w-6 h-6" />,
    image: "/lovable-uploads/visa-tourist.jpg",
  },
  {
    id: 14,
    name: t('visaTypes.sport'),
    icon: <Trophy className="w-6 h-6" />,
    image: "/lovable-uploads/visa-tourist.jpg",
  },
  {
    id: 15,
    name: t('visaTypes.shopping'),
    icon: <ShoppingCart className="w-6 h-6" />,
    image: "/lovable-uploads/visa-tourist.jpg",
  },
  {
    id: 16,
    name: t('visaTypes.cruise'),
    icon: <Anchor className="w-6 h-6" />,
    image: "/lovable-uploads/visa-tourist.jpg",
  },
  {
    id: 17,
    name: t('visaTypes.artist'),
    icon: <Music className="w-6 h-6" />,
    image: "/lovable-uploads/visa-tourist.jpg",
  },
  {
    id: 18,
    name: t('visaTypes.religious'),
    icon: <Star className="w-6 h-6" />,
    image: "/lovable-uploads/visa-tourist.jpg",
  },
];

const VisaTypes = () => {
  const { t } = useTranslation();
  const visaTypes = getVisaTypes(t);

  return (
    <section className="py-8">
      <div className="container mx-auto px-2">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="py-4"
        >
          {visaTypes.map((visa) => (
            <SwiperSlide key={visa.id}>
              <div className="group cursor-pointer">
                <div className="relative w-full h-32 rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth">
                  <img
                    src={visa.image}
                    alt={visa.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-semibold text-sm text-white flex items-center gap-2">
                      {visa.icon}
                      {visa.name}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VisaTypes;