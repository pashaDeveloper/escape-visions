import i18n from './i18n';

// Simple test without Jest globals
console.log('Testing i18n initialization...');
console.log('Default language:', i18n.language);

i18n.changeLanguage('en').then(() => {
  console.log('Language changed to:', i18n.language);
  const translated = i18n.t('hero.searchPlaceholder');
  console.log('Translated text:', translated);
});

i18n.changeLanguage('fa').then(() => {
  console.log('Language changed to:', i18n.language);
  const translated = i18n.t('hero.searchPlaceholder');
  console.log('Translated text:', translated);
});

export {};