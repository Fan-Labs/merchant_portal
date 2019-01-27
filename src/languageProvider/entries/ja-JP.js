import antdEn from 'antd/lib/locale-provider/ja_JP';
import appLocaleData from 'react-intl/locale-data/ja';
import enMessages from '../locales/ja_JP.json';
// import { getKeys, getValues } from '../conversion';
// getValues(enMessages);

const EnLang = {
  messages: {
    ...enMessages,
  },
  antd: antdEn,
  locale: 'ja-JP',
  data: appLocaleData,
};
export default EnLang;
