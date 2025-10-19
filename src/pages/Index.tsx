import Navigation from "@/components/Home/Navigation";
import Hero from "@/components/Home/Hero";
import VisaTypes from "@/components/Home/VisaTypes";
import PopularVisas from "@/components/Home/PopularVisas";
import Hotels from "@/components/Home/Hotels";
import LuxuryDestinations from "@/components/Home/LuxuryDestinations";
import Events from "@/components/Home/Events";
import News from "@/components/Home/News";
import Mag from "@/components/Home/Mag";
import Destinations from "@/components/Home/Destinations";
import Footer from "@/components/Home/Footer";
import Category from "@/components/Home/Category";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { updateMetaTags, defaultMetaData, englishMetaData } from "@/lib/metaUtils";

const Index = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    // Detect language from URL path
    const pathParts = location.pathname.split('/').filter(part => part !== '');
    const lang = pathParts[0] === 'en' ? 'en' : 'fa';
    
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
      document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    }
    
    // Update meta tags based on current page and language
    const metaData = lang === 'en' ? { ...englishMetaData } : { ...defaultMetaData };
    
    // You can customize meta data based on the current section
    // For example, if you're on a specific visa page, you could update the meta data accordingly
    
    updateMetaTags(metaData);
  }, [location.pathname, i18n]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="relative z-10 mt-[calc(60vh-3rem)] bg-background rounded-t-[2rem] overflow-hidden">
        <Category />
        <VisaTypes />
        <PopularVisas />
        <Hotels />
        <LuxuryDestinations />
        <Events />
        <News />
        <Mag />
        <Destinations />
        <Footer />
      </div>
    </div>
  );
};

export default Index;