import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Bed, ArrowRight } from "lucide-react";

interface Hotel {
  id: number;
  type: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  rooms: string;
  image: string;
}

const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-elevated transition-smooth">
      <div className="relative h-56 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold">{hotel.type}</span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold">{hotel.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">{hotel.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-1">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{hotel.location}</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Bed className="w-4 h-4" />
          <span className="text-sm">{hotel.rooms}</span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-sm text-muted-foreground">قیمت هر شب از</p>
            <p className="text-xl font-bold">{hotel.price} تومان</p>
          </div>
          <Button size="sm" className="gap-2">
            رزرو
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;