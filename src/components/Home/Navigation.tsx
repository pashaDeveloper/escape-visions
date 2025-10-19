import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-soft transition-smooth">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-2xl font-bold text-foreground">kuarmonia</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    {t('navigation.destinations')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 hover:bg-muted transition-smooth">
                        <div className="text-sm font-medium leading-none">{t('navigation.europe')}</div>
                        <p className="text-sm text-muted-foreground">
                          {t('navigation.europeDesc')}
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 hover:bg-muted transition-smooth">
                        <div className="text-sm font-medium leading-none">{t('navigation.asia')}</div>
                        <p className="text-sm text-muted-foreground">
                          {t('navigation.asiaDesc')}
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 hover:bg-muted transition-smooth">
                        <div className="text-sm font-medium leading-none">{t('navigation.americas')}</div>
                        <p className="text-sm text-muted-foreground">
                          {t('navigation.americasDesc')}
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-lg p-3 hover:bg-muted transition-smooth">
                        <div className="text-sm font-medium leading-none">{t('navigation.africa')}</div>
                        <p className="text-sm text-muted-foreground">
                          {t('navigation.africaDesc')}
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#tours" className="text-foreground hover:text-primary transition-smooth font-medium">
              {t('navigation.tours')}
            </a>
            <a href="#experiences" className="text-foreground hover:text-primary transition-smooth font-medium">
              {t('navigation.experiences')}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
              {t('navigation.about')}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              {t('navigation.contact')}
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button
              className="bg-accent hover:bg-accent-hover text-accent-foreground transition-smooth rounded-full px-6"
            >
              {t('navigation.bookNow')}
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
                {t('navigation.destinations')}
              </a>
              <a href="#tours" className="text-foreground hover:text-primary transition-smooth font-medium">
                {t('navigation.tours')}
              </a>
              <a href="#experiences" className="text-foreground hover:text-primary transition-smooth font-medium">
                {t('navigation.experiences')}
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
                {t('navigation.about')}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
                {t('navigation.contact')}
              </a>
              <div className="flex items-center space-x-2">
                <LanguageSwitcher />
                <Button className="bg-accent hover:bg-accent-hover text-accent-foreground w-full rounded-full">
                  {t('navigation.bookNow')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;