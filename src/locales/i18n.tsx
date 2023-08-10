import { format as formatDate } from 'date-fns';
import { enUS, de } from 'date-fns/locale';
import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './en.json';
import translationGE from './ge.json';

// date-fns formats => https://date-fns.org/v2.16.1/docs/format#arguments

// Dil paketleri
const resources = {
  en: { translation: translationEN },
  de: { translation: translationGE }
};

const locales = {
  en: enUS,
  de: de
};

//@ts-ignore
i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // fallback language just in case!
    // lng: 'en', // Starting language
    // lng: 'tr', // Starting language
    // keySeparator: true, // messages.title gibi tanımlama yapmadığımız için false.
    // lng: navigator.language || navigator.userLanguage,
    // load: 'languageOnly',
    interpolation: {
      escapeValue: false, //XSS koruması için gerekli.
      format: (value, format, lng) => {
        const language = lng?.split('-')[0]; // en - tr
        const currency = language === 'tr' ? 'TRY' : 'USD';
        //@ts-ignore
        const locale = locales[language];

        switch (format) {
          case 'number':
            return new Intl.NumberFormat(lng).format(value);
          case 'currency':
            return new Intl.NumberFormat(lng, { style: 'currency', currency, minimumFractionDigits: 3 }).format(value);
          case 'time-short':
            return formatDate(value, 'kk:mm', { locale }); // 12:00 AM
          case 'date-short':
            return formatDate(value, 'P', { locale }); // 02/25/2022
          case 'date-medium':
            return formatDate(value, 'PP', { locale }); // May 29, 1453
          case 'date-long':
            return formatDate(value, 'PPPP', { locale }); // Sunday, May 29th, 1453
          case 'combined-date-time':
            return formatDate(value, 'Pp', { locale }); // May 29, 1453, 12:00:00 AM

          // for more formats:
          // https://date-fns.org/v2.29.3/docs/format

          default:
            break;
        }
      }
    }
  });
export default i18n;

/*

DATE USAGE

t('date-short', { date: new Date() })
t('date-medium', { date: new Date() })
t('date-long', { date: new Date() })
t('date-combined', { date: new Date() })
*/
