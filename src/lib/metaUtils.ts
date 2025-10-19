// Utility functions for updating meta tags dynamically
interface MetaData {
  title: string;
  description: string;
  image: string;
  url: string;
  locale: string;
}

export const updateMetaTags = (metaData: MetaData) => {
  // Update title
  document.title = metaData.title;
  
  // Update meta tags
  updateMetaTag('meta[name="title"]', metaData.title);
  updateMetaTag('meta[name="description"]', metaData.description);
  
  // Update Open Graph tags
  updateMetaTag('meta[property="og:title"]', metaData.title);
  updateMetaTag('meta[property="og:description"]', metaData.description);
  updateMetaTag('meta[property="og:image"]', metaData.image);
  updateMetaTag('meta[property="og:url"]', metaData.url);
  updateMetaTag('meta[property="og:locale"]', metaData.locale);
  
  // Update Twitter tags
  updateMetaTag('meta[property="twitter:title"]', metaData.title);
  updateMetaTag('meta[property="twitter:description"]', metaData.description);
  updateMetaTag('meta[property="twitter:image"]', metaData.image);
};

const updateMetaTag = (selector: string, content: string) => {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute('content', content);
  }
};

// Default meta data
export const defaultMetaData: MetaData = {
  title: 'Escape Visions - خدمات ویزا، هتل و مسافرت',
  description: 'کشف بهترین مقاصد سفری با خدمات ویزا، رزرو هتل و برنامه‌ریزی سفر. تجربه‌ای فراموش‌نشدنی با Escape Visions.',
  image: '/lovable-uploads/og-image.jpg',
  url: 'https://escape-visions.com/',
  locale: 'fa_IR'
};

// English meta data
export const englishMetaData: MetaData = {
  title: 'Escape Visions - Visa, Hotel and Travel Services',
  description: 'Discover the best travel destinations with visa services, hotel booking and trip planning. An unforgettable experience with Escape Visions.',
  image: '/lovable-uploads/og-image.jpg',
  url: 'https://escape-visions.com/',
  locale: 'en_US'
};