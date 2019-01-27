import { language } from '../../config.js';

import englishLang from '../../image/flag/uk.svg';
import germanLang from '../../image/flag/german.png';
import koreanLang from '../../image/flag/korea.png';
import russianLang from '../../image/flag/russia.png';
import japaneseLang from '../../image/flag/japan.svg';
import chineseLang from '../../image/flag/china.svg';

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: 'english',
      locale: 'en',
      text: 'English',
      icon: englishLang,
    },
    {
      languageId: 'german',
      locale: 'de',
      text: 'German',
      icon: germanLang,
    },
    {
      languageId: 'korean',
      locale: 'ko',
      text: 'Korean',
      icon: koreanLang,
    },
    {
      languageId: 'russian',
      locale: 'ru',
      text: 'Russian',
      icon: russianLang,
    },
    {
      languageId: 'japanese',
      locale: 'jp',
      text: 'Japanese',
      icon: japaneseLang,
    },
      {
          languageId: 'chinese',
          locale: 'zh',
          text: 'Chinese',
          icon: chineseLang,
      }
  ],
};

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
export default config;
