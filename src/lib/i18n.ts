import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define translation objects directly
const faTranslation = {
  "hero": {
    "slides": {
      "wedding": {
        "title": "روز خاص خود را رقم بزنید",
        "subtitle": "تالارهای لوکس برای عروسی و مراسمات شما",
        "location": "تالار عروسی"
      },
      "destination": {
        "title": "سفر به بهشت زمین",
        "subtitle": "جزایر زیبا با اقامتگاه‌های روی آب",
        "location": "مالدیو"
      },
      "yacht": {
        "title": "تجربه کشتی تفریحی",
        "subtitle": "مناظر دریایی و غذاهای خوشمزه",
        "location": "یات لوکس"
      },
      "hotel": {
        "title": "اقامت در هتل‌های لوکس",
        "subtitle": "راحتی و آسایش در بهترین هتل‌های جهان",
        "location": "هتل 5 ستاره"
      },
      "realEstate": {
        "title": "مسکن رویایی شما",
        "subtitle": "ویلاها و خانه‌های خصوصی در بهترین مقاصد",
        "location": "اقامتگاه خصوصی"
      },
      "visa": {
        "title": "ویزای سفر خود را بگیرید",
        "subtitle": "فرآیند آسان و سریع برای تمامی کشورها",
        "location": "خدمات ویزا"
      }
    },
    "dynamicContent": {
      "wedding": {
        "mainTitle": "روز خاص خود را رقم بزنید",
        "subTitle": "تالارهای لوکس برای عروسی و مراسمات شما"
      },
      "destination": {
        "mainTitle": "کشف بهترین مقاصد سفری",
        "subTitle": "مقاصد گردشگری جهان را کشف کنید"
      },
      "yacht": {
        "mainTitle": "تجربه کشتی تفریحی",
        "subTitle": "سفرهای دریایی خاطره‌انگیز"
      },
      "hotel": {
        "mainTitle": "اقامت در هتل‌های لوکس",
        "subTitle": "راحتی و آسایش در بهترین هتل‌ها"
      },
      "realEstate": {
        "mainTitle": "مسکن رویایی شما",
        "subTitle": "خرید و اجاره بهترین املاک"
      },
      "visa": {
        "mainTitle": "ویزای سفر خود را بگیرید",
        "subTitle": "خدمات ویزای سریع و مطمئن"
      },
      "default": {
        "mainTitle": "کشف بهترین مقاصد سفری",
        "subTitle": "تالارهای عروسی، یات‌های تفریحی، هتل‌های لوکس و اقامتگاه‌های خصوصی"
      }
    },
    "searchPlaceholder": "کجا می‌خواهید بروید؟",
    "searchButton": "جستجو"
  },
  "navigation": {
    "destinations": "مقاصد",
    "europe": "اروپا",
    "europeDesc": "کشف شهرهای تاریخی و فرهنگ",
    "asia": "آسیا",
    "asiaDesc": "کشف مناظر عجیب و غریب",
    "americas": "آمریکاها",
    "americasDesc": "ماجرا در دنیای جدید منتظر است",
    "africa": "آفریقا",
    "africaDesc": "صحرای سافاری و شگفتی‌های طبیعی",
    "tours": "تورها",
    "experiences": "تجربیات",
    "about": "درباره",
    "contact": "تماس",
    "bookNow": "همین حالا رزرو کن"
  },
  "categories": {
    "visa": "ویزا",
    "visaDesc": "انواع ویزاهای توریستی، کاری و تحصیلی",
    "hotel": "هتل",
    "hotelDesc": "رزرو هتل‌های لوکس و اقتصادی",
    "housing": "مسکن",
    "housingDesc": "خرید و اجاره ملک در کشورهای مقصد",
    "marriage": "ازدواج",
    "marriageDesc": "برگزاری مراسم ازدواج در کشورهای مقصد",
    "ceremonies": "مراسمات",
    "ceremoniesDesc": "سازماندهی مراسمات خاص و تشریفات",
    "tours": "تور",
    "toursDesc": "تورهای تخصصی و سفرهای گروهی",
    "immigration": "مهاجرت",
    "immigrationDesc": "فرصت‌های مهاجرت و اخذ تابعیت",
    "services": "خدمات",
    "servicesDesc": "مشاوره و خدمات پس از سفر"
  },
  "visaTypes": {
    "tourist": "ویزای توریستی",
    "business": "ویزای کاری",
    "student": "ویزای تحصیلی",
    "work": "ویزای کار",
    "transit": "ویزای ترانزیت",
    "family": "ویزای خانواده",
    "marriage": "ویزای ازدواج",
    "investment": "ویزای سرمایه‌گذاری",
    "retirement": "ویزای بازنشستگی",
    "medical": "ویزای درمانی",
    "diplomatic": "ویزای دیپلماتیک",
    "journalist": "ویزای خبرنگاری",
    "cultural": "ویزای فرهنگی",
    "sport": "ویزای ورزشی",
    "shopping": "ویزای خرید",
    "cruise": "ویزای کروازی",
    "artist": "ویزای هنرمند",
    "religious": "ویزای مذهبی"
  },
  "popularVisas": {
    "title": "ویزاهای پرطرفدار",
    "subtitle": "بهترین فرصت‌ها برای دریافت ویزا به کشورهای محبوب",
    "viewAllButton": "مشاهده همه ویزاها",
    "processingTime": "زمان پردازش",
    "applyNow": "اکنون اعمال کنید",
    "visaTypes": {
      "tourist": "ویزای توریستی",
      "student": "ویزای تحصیلی",
      "work": "ویزای کاری"
    },
    "countries": {
      "canada": "کانادا",
      "turkey": "ترکیه",
      "germany": "آلمان",
      "dubai": "دبی",
      "australia": "استرالیا",
      "uk": "انگلستان"
    },
    "processingTimes": {
      "canada": "15-20 روز",
      "turkey": "10-15 روز",
      "germany": "20-30 روز",
      "dubai": "3-5 روز",
      "australia": "25-35 روز",
      "uk": "30-45 روز"
    }
  },
  "hotels": {
    "title": "انواع هتل برای رزرو",
    "subtitle": "بهترین هتل‌ها را برای اقامت خود انتخاب کنید",
    "viewAllButton": "مشاهده همه هتل‌ها",
    "perNight": "در شب",
    "bookNow": "همین حالا رزرو کن",
    "rooms": "{{count}} اتاق موجود",
    "types": {
      "luxury": "لوکس",
      "business": "بیزنس",
      "resort": "ریزورت",
      "budget": "اقتصادی",
      "boutique": "بوتیک",
      "family": "خانوادگی"
    },
    "names": {
      "luxury": "هتل 5 ستاره",
      "business": "هتل کسب و کار",
      "resort": "ریزورت ساحلی",
      "budget": "هتل مقرون به صرفه",
      "boutique": "هتل بوتیک",
      "family": "هتل خانوادگی"
    },
    "locations": {
      "dubai": "دبی، امارات",
      "istanbul": "استانبول، ترکیه",
      "antalya": "آنتالیا، ترکیه",
      "tehran": "تهران، ایران",
      "paris": "پاریس، فرانسه",
      "kualalumpur": "کوآلالامپور، مالزی"
    }
  },
  "notFound": {
    "title": "صفحه یافت نشد",
    "description": "صفحه‌ای که به دنبال آن هستید وجود ندارد.",
    "backToHome": "بازگشت به خانه"
  }
};

const enTranslation = {
  "hero": {
    "slides": {
      "wedding": {
        "title": "Make Your Special Day Unforgettable",
        "subtitle": "Luxury halls for your wedding and ceremonies",
        "location": "Wedding Hall"
      },
      "destination": {
        "title": "Journey to Paradise on Earth",
        "subtitle": "Beautiful islands with overwater accommodations",
        "location": "Maldives"
      },
      "yacht": {
        "title": "Experience Luxury Yachting",
        "subtitle": "Seascape views and delicious food",
        "location": "Luxury Yacht"
      },
      "hotel": {
        "title": "Stay at Luxury Hotels",
        "subtitle": "Comfort and relaxation at the world's best hotels",
        "location": "5-Star Hotel"
      },
      "realEstate": {
        "title": "Your Dream Home",
        "subtitle": "Villas and private homes in the best destinations",
        "location": "Private Accommodation"
      },
      "visa": {
        "title": "Get Your Travel Visa",
        "subtitle": "Easy and fast process for all countries",
        "location": "Visa Services"
      }
    },
    "dynamicContent": {
      "wedding": {
        "mainTitle": "Make Your Special Day Unforgettable",
        "subTitle": "Luxury halls for your wedding and ceremonies"
      },
      "destination": {
        "mainTitle": "Discover the Best Travel Destinations",
        "subTitle": "Explore the world's tourist destinations"
      },
      "yacht": {
        "mainTitle": "Experience Luxury Yachting",
        "subTitle": "Memorable sea journeys"
      },
      "hotel": {
        "mainTitle": "Stay at Luxury Hotels",
        "subTitle": "Comfort and relaxation at the best hotels"
      },
      "realEstate": {
        "mainTitle": "Your Dream Home",
        "subTitle": "Buying and renting the best properties"
      },
      "visa": {
        "mainTitle": "Get Your Travel Visa",
        "subTitle": "Fast and reliable visa services"
      },
      "default": {
        "mainTitle": "Discover the Best Travel Destinations",
        "subTitle": "Wedding halls, recreational yachts, luxury hotels and private accommodations"
      }
    },
    "searchPlaceholder": "Where do you want to go?",
    "searchButton": "Search"
  },
  "navigation": {
    "destinations": "Destinations",
    "europe": "Europe",
    "europeDesc": "Explore historic cities and culture",
    "asia": "Asia",
    "asiaDesc": "Discover exotic landscapes",
    "americas": "Americas",
    "americasDesc": "Adventure awaits in the New World",
    "africa": "Africa",
    "africaDesc": "Safari and natural wonders",
    "tours": "Tours",
    "experiences": "Experiences",
    "about": "About",
    "contact": "Contact",
    "bookNow": "Book Now"
  },
  "categories": {
    "visa": "Visa",
    "visaDesc": "Tourist, business and student visa types",
    "hotel": "Hotel",
    "hotelDesc": "Book luxury and budget hotels",
    "housing": "Housing",
    "housingDesc": "Buy and rent property in destination countries",
    "marriage": "Marriage",
    "marriageDesc": "Organize wedding ceremonies in destination countries",
    "ceremonies": "Events",
    "ceremoniesDesc": "Organize special events and ceremonies",
    "tours": "Tours",
    "toursDesc": "Specialized tours and group travel",
    "immigration": "migrate",
    "immigrationDesc": "Immigration opportunities and citizenship",
    "services": "Services",
    "servicesDesc": "Consultation and post-travel services"
  },
  "visaTypes": {
    "tourist": "Tourist Visa",
    "business": "Business Visa",
    "student": "Student Visa",
    "work": "Work Visa",
    "transit": "Transit Visa",
    "family": "Family Visa",
    "marriage": "Marriage Visa",
    "investment": "Investment Visa",
    "retirement": "Retirement Visa",
    "medical": "Medical Visa",
    "diplomatic": "Diplomatic Visa",
    "journalist": "Journalist Visa",
    "cultural": "Cultural Visa",
    "sport": "Sport Visa",
    "shopping": "Shopping Visa",
    "cruise": "Cruise Visa",
    "artist": "Artist Visa",
    "religious": "Religious Visa"
  },
  "popularVisas": {
    "title": "Popular Visas",
    "subtitle": "Best opportunities to obtain visas to popular countries",
    "viewAllButton": "View All Visas",
    "processingTime": "Processing Time",
    "applyNow": "Apply Now",
    "visaTypes": {
      "tourist": "Tourist Visa",
      "student": "Student Visa",
      "work": "Work Visa"
    },
    "countries": {
      "canada": "Canada",
      "turkey": "Turkey",
      "germany": "Germany",
      "dubai": "Dubai",
      "australia": "Australia",
      "uk": "UK"
    },
    "processingTimes": {
      "canada": "15-20 days",
      "turkey": "10-15 days",
      "germany": "20-30 days",
      "dubai": "3-5 days",
      "australia": "25-35 days",
      "uk": "30-45 days"
    }
  },
  "hotels": {
    "title": "Types of Hotels for Booking",
    "subtitle": "Choose the best hotels for your stay",
    "viewAllButton": "View All Hotels",
    "perNight": "per night",
    "bookNow": "Book Now",
    "rooms": "{{count}} rooms available",
    "types": {
      "luxury": "Luxury",
      "business": "Business",
      "resort": "Resort",
      "budget": "Budget",
      "boutique": "Boutique",
      "family": "Family"
    },
    "names": {
      "luxury": "5-Star Hotel",
      "business": "Business Hotel",
      "resort": "Beach Resort",
      "budget": "Budget Hotel",
      "boutique": "Boutique Hotel",
      "family": "Family Hotel"
    },
    "locations": {
      "dubai": "Dubai, UAE",
      "istanbul": "Istanbul, Turkey",
      "antalya": "Antalya, Turkey",
      "tehran": "Tehran, Iran",
      "paris": "Paris, France",
      "kualalumpur": "Kuala Lumpur, Malaysia"
    }
  },
  "notFound": {
    "title": "Page Not Found",
    "description": "The page you are looking for does not exist.",
    "backToHome": "Back to Home"
  }
};

// Resources object
const resources = {
  fa: {
    translation: faTranslation
  },
  en: {
    translation: enTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fa', // default language
    fallbackLng: 'fa', // fallback language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;