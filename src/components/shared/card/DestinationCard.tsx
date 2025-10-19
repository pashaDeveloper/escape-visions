import { Button } from "@/components/ui/button";
import { Star, MapPin, Calendar } from "lucide-react";

interface DestinationCardProps {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  duration: string;
}

const DestinationCard = ({
  id,
  name,
  location,
  rating,
  reviews,
  price,
  duration,
}: DestinationCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img
          src={`/lovable-uploads/destination-${id}.jpg`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">{rating}</span>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
            <div className="flex items-center text-muted-foreground text-sm gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default DestinationCard;
