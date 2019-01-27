import antdEn from 'antd/lib/locale-provider/ru_RU';
import appLocaleData from 'react-intl/locale-data/ru';
import enMessages from '../locales/ru_RU.json';
// import { getKeys, getValues } from '../conversion';
// getValues(enMessages);

const EnLang = {
  messages: {
    ...enMessages,
  },
  antd: antdEn,
  locale: 'ru-RU',
  data: appLocaleData,
};
export default EnLang;
