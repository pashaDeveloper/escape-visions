import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { updateMetaTags, defaultMetaData, englishMetaData } from "@/lib/metaUtils";

const NotFound = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Update meta tags for 404 page
    const metaData = i18n.language === 'en' ? { ...englishMetaData } : { ...defaultMetaData };
    metaData.title = i18n.language === 'en' ? 'Page Not Found - Escape Visions' : 'صفحه یافت نشد - Escape Visions';
    metaData.description = i18n.language === 'en' ? 'The page you are looking for does not exist.' : 'صفحه‌ای که به دنبال آن هستید وجود ندارد.';
    
    updateMetaTags(metaData);
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          {t('notFound.title')}
        </h2>
        <p className="text-muted-foreground mb-8">
          {t('notFound.description')}
        </p>
        <a 
          href="/" 
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          {t('notFound.backToHome')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;