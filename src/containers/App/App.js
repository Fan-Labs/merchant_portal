import React from 'react';
import { Layout, LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { AppLocale } from '../../dashApp';
import { Debounce } from 'react-throttle';
import WindowResizeListener from 'react-window-size-listener';
import { ThemeProvider } from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import AppRouter from './AppRouter';
import themes from '../../config/themes';
import { themeConfig } from '../../config';
import AppHolder from './commonStyle';
import IntlMessages from '../../components/utility/intlMessages'
import './global.css';
import AppModel from '../../models/App/App'

const { Content, Footer } = Layout;

const App = ({ toggleAll, locale, history, match: { url } }) => (
  <LocaleProvider locale={AppLocale[locale].antd}>
    <IntlProvider
      locale={AppLocale[locale].locale}
      messages={AppLocale[locale].messages}
    >
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <AppHolder>
          <Layout style={{ height: '100vh' }}>
            <Debounce time="1000" handler="onResize">
              <WindowResizeListener
                onResize={windowSize =>
                  toggleAll(
                    windowSize.windowWidth,
                    windowSize.windowHeight
                  )}
              />
            </Debounce>
            <Topbar url={url} />
            <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
              <Sidebar url={url} history={history} />
              <Layout
                className="isoContentMainLayout"
                style={{
                  height: '100vh'
                }}
              >
                <Content
                  className="isomorphicContent"
                  style={{
                    padding: '70px 0 0',
                    flexShrink: '0',
                  }}
                >
                  <AppRouter url={url} />
                </Content>
                <Footer
                  style={{
                    background: '#ffffff',
                    borderTop: '1px solid #ededed'
                  }}
                >
                  Footer Text
                </Footer>
              </Layout>
            </Layout>
          </Layout>
        </AppHolder>
      </ThemeProvider>
    </IntlProvider>
  </LocaleProvider>
)

export default AppModel(App);
