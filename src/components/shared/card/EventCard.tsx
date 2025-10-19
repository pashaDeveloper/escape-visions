import { Star, Users, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Event {
  id: number;
  name: string;
  type: string;
  image: string;
  capacity: string;
  rating: number;
  features: string[];
  priceRange: string;
}

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[450px] cursor-pointer">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        {/* Type Badge */}
        <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white border-0 px-4 py-1">
          {event.type}
        </Badge>

        {/* Rating */}
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">{event.rating}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">
          {event.name}
        </h3>

        {/* Capacity */}
        <div className="flex items-center gap-2 mb-3 text-white/90">
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">ظرفیت: {event.capacity}</span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.features.map((feature, idx) => (
            <span
              key={idx}
              className="text-xs bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between pt-4 border-t border-white/20">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">{event.priceRange}</span>
          </div>
          <button className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
            رزرو
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;