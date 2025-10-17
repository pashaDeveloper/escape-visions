import { Plane, Briefcase, GraduationCap, Building2, Clock, Users, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const visaTypes = [
  {
    id: 1,
    name: "Tourist Visa",
    nameFa: "ویزای توریستی",
    icon: Plane,
    applications: "1,245",
    image: "/lovable-uploads/visa-tourist.jpg",
    description: "Explore the world's most beautiful destinations with our tourist visa services. Perfect for vacation and leisure travel.",
  },
  {
    id: 2,
    name: "Business Visa",
    nameFa: "ویزای تجاری",
    icon: Briefcase,
    applications: "892",
    image: "/lovable-uploads/visa-business.jpg",
    description: "Expand your business globally with our business visa solutions. Ideal for meetings, conferences, and professional trips.",
  },
  {
    id: 3,
    name: "Student Visa",
    nameFa: "ویزای تحصیلی",
    icon: GraduationCap,
    applications: "1,104",
    image: "/lovable-uploads/visa-student.jpg",
    description: "Pursue your academic dreams abroad with our student visa assistance. Complete support for educational opportunities worldwide.",
  },
  {
    id: 4,
    name: "Work Visa",
    nameFa: "ویزای کاری",
    icon: Building2,
    applications: "1,356",
    image: "/lovable-uploads/visa-work.jpg",
    description: "Build your career internationally with our work visa services. Professional guidance for employment opportunities abroad.",
  },
  {
    id: 5,
    name: "Transit Visa",
    nameFa: "ویزای ترانزیت",
    icon: Clock,
    applications: "628",
    image: "/lovable-uploads/visa-transit.jpg",
    description: "Smooth transit through multiple countries with our transit visa solutions. Quick and hassle-free processing.",
  },
  {
    id: 6,
    name: "Family Visa",
    nameFa: "ویزای خانوادگی",
    icon: Users,
    applications: "756",
    image: "/lovable-uploads/visa-family.jpg",
    description: "Reunite with your loved ones through our family visa services. Comprehensive support for family reunification.",
  },
];

const VisaTypes = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visa Types
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the right visa for your journey
          </p>
        </div>

        <div className="space-y-8">
          {visaTypes.map((visa, index) => {
            const Icon = visa.icon;
            const isEven = index % 2 === 0;
            
            return (
              <Card
                key={visa.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-elevated transition-smooth bg-card"
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0`}>
                  {/* Image Section */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden">
                    <img
                      src={visa.image}
                      alt={visa.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
                      <span>Visa Application</span>
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      <span>{visa.applications} Applications</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                      {visa.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
                      {visa.description}
                    </p>
                    
                    <Button 
                      variant="default" 
                      className="w-fit gap-2 group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisaTypes;
