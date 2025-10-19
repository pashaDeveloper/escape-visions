import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Update document direction based on language
    document.documentElement.dir = lng === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    
    // Update URL path
    const pathParts = location.pathname.split('/').filter(part => part !== '');
    // Remove language prefix if it exists
    if (pathParts[0] === 'fa' || pathParts[0] === 'en') {
      pathParts.shift(); // Remove language part
    }
    
    // Add new language prefix
    const newPath = pathParts.length > 0 
      ? `/${lng}/${pathParts.join('/')}` 
      : `/${lng}`;
    
    // Navigate to new path and reload to ensure proper language loading
    navigate(newPath);
    window.location.reload();
    
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-foreground hover:bg-accent hover:text-accent-foreground"
      >
        <Languages className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-background border rounded-md shadow-lg z-50">
          <button
            onClick={() => changeLanguage('fa')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-accent ${
              i18n.language === 'fa' ? 'bg-accent font-medium' : ''
            }`}
          >
            فارسی
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-accent ${
              i18n.language === 'en' ? 'bg-accent font-medium' : ''
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;