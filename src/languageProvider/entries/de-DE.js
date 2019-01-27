import antdEn from 'antd/lib/locale-provider/de_DE';
import appLocaleData from 'react-intl/locale-data/de';
import enMessages from '../locales/de_DE.json';
// import { getKeys, getValues } from '../conversion';
// getValues(enMessages);

const EnLang = {
  messages: {
    ...enMessages,
  },
  antd: antdEn,
  locale: 'de-DE',
  data: appLocaleData,
};
export default EnLang;
