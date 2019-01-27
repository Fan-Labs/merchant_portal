import antdEn from 'antd/lib/locale-provider/zh_CN';
import appLocaleData from 'react-intl/locale-data/zh';
import enMessages from '../locales/zh_CN.json';
// import { getKeys, getValues } from '../conversion';
// getValues(enMessages);

const EnLang = {
    messages: {
        ...enMessages,
    },
    antd: antdEn,
    locale: 'zh-CN',
    data: appLocaleData,
};
export default EnLang;
