import antdEn from 'antd/lib/locale-provider/ko_KR';
import appLocaleData from 'react-intl/locale-data/ko';
import enMessages from '../locales/ko_KR.json';
// import { getKeys, getValues } from '../conversion';
// getValues(enMessages);

const EnLang = {
  messages: {
    ...enMessages,
  },
  antd: antdEn,
  locale: 'ko-KR',
  data: appLocaleData,
};
export default EnLang;
