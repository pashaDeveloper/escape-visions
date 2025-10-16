import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Wanderlust</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Destinations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 hover:bg-muted transition-smooth">
                        <div className="text-sm font-medium leading-none">Europe</div>
                        <p className="text-sm text-muted-foreground">
                          Explore historic cities and culture
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 hover:bg-muted transition-smooth">
                        <div className="text-sm font-medium leading-none">Asia</div>
                        <p className="text-sm text-muted-foreground">
                          Discover exotic landscapes
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 hover:bg-muted transition-smooth">
                        <div className="text-sm font-medium leading-none">Americas</div>
                        <p className="text-sm text-muted-foreground">
                          Adventure awaits in the New World
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 hover:bg-muted transition-smooth">
                        <div className="text-sm font-medium leading-none">Africa</div>
                        <p className="text-sm text-muted-foreground">
                          Safari and natural wonders
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#tours" className="text-foreground hover:text-primary transition-smooth font-medium">
              Tours
            </a>
            <a href="#experiences" className="text-foreground hover:text-primary transition-smooth font-medium">
              Experiences
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Globe className="w-4 h-4" />
              <span>EN</span>
              <ChevronDown className="w-3 h-3" />
            </Button>
            <Button
              className="bg-accent hover:bg-accent-hover text-accent-foreground transition-smooth rounded-full px-6"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#destinations" className="text-foreground hover:text-primary transition-smooth font-medium">
                Destinations
              </a>
              <a href="#tours" className="text-foreground hover:text-primary transition-smooth font-medium">
                Tours
              </a>
              <a href="#experiences" className="text-foreground hover:text-primary transition-smooth font-medium">
                Experiences
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
                Contact
              </a>
              <Button className="bg-accent hover:bg-accent-hover text-accent-foreground w-full rounded-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
