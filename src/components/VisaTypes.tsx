import { Plane, Briefcase, GraduationCap, Building2, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const visaTypes = [
  {
    id: 1,
    name: "Tourist Visa",
    nameFa: "ویزای توریستی",
    icon: Plane,
    applications: "1,245",
    color: "from-blue-400 to-cyan-300",
  },
  {
    id: 2,
    name: "Business Visa",
    nameFa: "ویزای تجاری",
    icon: Briefcase,
    applications: "892",
    color: "from-purple-400 to-pink-300",
  },
  {
    id: 3,
    name: "Student Visa",
    nameFa: "ویزای تحصیلی",
    icon: GraduationCap,
    applications: "1,104",
    color: "from-green-400 to-emerald-300",
  },
  {
    id: 4,
    name: "Work Visa",
    nameFa: "ویزای کاری",
    icon: Building2,
    applications: "1,356",
    color: "from-orange-400 to-amber-300",
  },
  {
    id: 5,
    name: "Transit Visa",
    nameFa: "ویزای ترانزیت",
    icon: Clock,
    applications: "628",
    color: "from-red-400 to-rose-300",
  },
  {
    id: 6,
    name: "Family Visa",
    nameFa: "ویزای خانوادگی",
    icon: Users,
    applications: "756",
    color: "from-indigo-400 to-blue-300",
  },
];

const VisaTypes = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Visa Types
          </h2>
          <p className="text-muted-foreground">
            Choose the right visa for your journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {visaTypes.map((visa) => {
            const Icon = visa.icon;
            return (
              <Card
                key={visa.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-elevated transition-smooth bg-card"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${visa.color} opacity-90 group-hover:opacity-100 transition-smooth`} />
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-white/90 group-hover:scale-110 transition-smooth" strokeWidth={1.5} />
                  </div>

                  {/* Decorative circles */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10 blur-lg" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="text-white">
                      <p className="text-xs opacity-80 mb-1">Visa Application</p>
                      <h3 className="font-bold text-sm mb-1">{visa.name}</h3>
                      <p className="text-xs opacity-90">{visa.applications} Applications</p>
                    </div>
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
