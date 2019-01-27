import Enlang from './entries/en-US';
import Delang from './entries/de-DE';
import Jalang from './entries/ja-JP';
import Rulang from './entries/ru-RU';
import Kolang from './entries/ko-KR';
import Jplang from './entries/ja-JP';
import Cnlang from './entries/cn-CN';
import Chnlang from './entries/zh-CN';
import { addLocaleData } from 'react-intl';

const AppLocale = {
  en: Enlang,
  de: Delang,
  ja: Jalang,
  ru: Rulang,
  ko: Kolang,
  jp: Jplang,
  cn: Cnlang,
  zh: Chnlang,
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.de.data);
addLocaleData(AppLocale.ja.data);
addLocaleData(AppLocale.ru.data);
addLocaleData(AppLocale.ko.data);
addLocaleData(AppLocale.jp.data);
//addLocaleData(AppLocale.cn.data);
addLocaleData(AppLocale.zh.data);

export default AppLocale;
