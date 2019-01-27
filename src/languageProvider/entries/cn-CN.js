import antdEn from 'antd/lib/locale-provider/en_US';
import appLocaleData from 'react-intl/locale-data/zh';
import enMessages from '../locales/cn_CN.json';
// import { getKeys, getValues } from '../conversion';
// getValues(enMessages);

const EnLang = {
  messages: {
    ...enMessages,
  },
  antd: antdEn,
  locale: 'cn-CN',
  data: appLocaleData,
};
export default EnLang;
