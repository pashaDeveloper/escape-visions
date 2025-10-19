import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";

interface MagItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const MagCard = ({ mag }: { mag: MagItem }) => {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-elevated transition-smooth">
      <div className="relative h-48 overflow-hidden">
        <img
          src={mag.image}
          alt={mag.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
        />
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-semibold text-primary-foreground">{mag.category}</span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{mag.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{mag.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors truncate">
          {mag.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {mag.excerpt}
        </p>
        
        <Button variant="ghost" size="sm" className="gap-2 p-0 h-auto hover:bg-transparent hover:text-primary">
          ادامه مطلب
          <ArrowRight className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default MagCard;