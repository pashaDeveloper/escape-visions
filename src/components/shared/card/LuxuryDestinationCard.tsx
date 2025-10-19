import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight, Sparkles } from "lucide-react";

interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  attractions: string;
  type: string;
}

const LuxuryDestinationCard = ({ destination }: { destination: Destination }) => {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-elevated transition-smooth border-0">
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
            <span className="text-xs font-semibold text-gray-900">{destination.type}</span>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-white" />
            <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
          </div>
          <p className="text-white/90 text-sm mb-3">{destination.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 bg-yellow-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <Star className="w-3 h-3 fill-white text-white" />
              <span className="text-xs font-bold text-white">{destination.rating}</span>
            </div>
            <Button 
              size="sm" 
              className="gap-2 bg-white/95 text-gray-900 hover:bg-white"
            >
              اطلاعات بیشتر
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 bg-card">
        <div className="flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-xs text-muted-foreground">{destination.attractions}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LuxuryDestinationCard;