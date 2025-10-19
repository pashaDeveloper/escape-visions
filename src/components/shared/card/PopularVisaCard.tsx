import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock } from "lucide-react";
import { useTranslation } from 'react-i18next';

interface Visa {
  id: number;
  visaType: string;
  country: string;
  rating: number;
  reviews: number;
  processingTime: string;
  price: number;
  image: string;
}

const PopularVisaCard = ({ visa }: { visa: Visa }) => {
  const { t } = useTranslation();
  
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

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{t('popularVisas.processingTime')}</span>
            </div>
            <span className="font-medium">{visa.processingTime}</span>
          </div>
          
      
        </div>
      </div>
    </div>
  );
};

export default PopularVisaCard;