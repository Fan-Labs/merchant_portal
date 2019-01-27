import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd'
import IntlMessages from '../../components/utility/intlMessages';
import LanguageSwitcher from '../LanguageSwitcher'
import appActions from '../../redux/app/actions';
import TopbarUser from './topbarUser';
import TopbarWrapper from './topbar.style';
import themes from '../../config/themes';
import { themeConfig } from '../../config';

const { Header } = Layout;
const { toggleCollapsed } = appActions;
const customizedTheme = themes[themeConfig.theme];

class Topbar extends Component {
  render() {
    const { toggleCollapsed, url, locale } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: 'fixed',
      width: '100%',
      height: 70
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'
          }
        >
          <div className="isoLeft">
            <button
              className={
                collapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'
              }
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            />
            <div className="header-title">
              <IntlMessages id="topbar.investor_portal" />
            </div>
          </div>

          <ul className="isoRight">
            <LanguageSwitcher />
            <li
              onClick={() => this.setState({ selectedItem: 'user' })}
              className="isoUser"
            >
              <TopbarUser url={url} locale={locale} />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.App.toJS(),
    locale: state.LanguageSwitcher.toJS().language.locale,
  }),
  { toggleCollapsed }
)(Topbar);
