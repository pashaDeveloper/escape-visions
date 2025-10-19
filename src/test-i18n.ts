import i18n from './lib/i18n';

async function testI18n() {
  console.log('Testing i18n implementation...');
  
  // Test default language
  console.log('Default language:', i18n.language);
  
  // Test translation in default language (Persian)
  const persianText = i18n.t('hero.searchPlaceholder');
  console.log('Persian translation:', persianText);
  
  // Test language switching to English
  await i18n.changeLanguage('en');
  console.log('Language changed to:', i18n.language);
  
  // Test translation in English
  const englishText = i18n.t('hero.searchPlaceholder');
  console.log('English translation:', englishText);
  
  // Switch back to Persian
  await i18n.changeLanguage('fa');
  console.log('Language changed back to:', i18n.language);
  
  // Test translation in Persian again
  const persianText2 = i18n.t('hero.searchPlaceholder');
  console.log('Persian translation again:', persianText2);
  
  console.log('i18n implementation test completed successfully!');
}

testI18n().catch(console.error);