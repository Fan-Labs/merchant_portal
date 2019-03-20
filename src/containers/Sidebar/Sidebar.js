import React, { Component } from 'react'
import { connect } from 'react-redux'
import clone from 'clone'
import { Link } from 'react-router-dom'
import { Layout, Divider } from 'antd'
import Scrollbars from '../../components/utility/customScrollBar.js'
import Menu from '../../components/uielements/menu'
import IntlMessages from '../../components/utility/intlMessages'
import SidebarWrapper from './sidebar.style'
import { whitepaperFomoEvent } from '../../helpers/utility'
import appActions from '../../redux/app/actions'
import Logo from '../../components/utility/logo'
import { getCurrentTheme } from '../ThemeSwitcher/config'
import { themeConfig } from '../../config'

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;
const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed,
} = appActions;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  handleClick(e) {
    this.props.changeCurrent([e.key]);
    if (this.props.app.view === 'MobileView') {
      setTimeout(() => {
        this.props.toggleCollapsed();
        this.props.toggleOpenDrawer();
      }, 100);
    }
  }

  onOpenChange(newOpenKeys) {
    const { app, changeOpenKeys } = this.props;
    const latestOpenKey = newOpenKeys.find(
      key => !(app.openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = app.openKeys.find(
      key => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    changeOpenKeys(nextOpenKeys);
  }

  goHome() {
    this.props.history.push('/app/dashboard')
  }

  getAncestorKeys = key => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  };

  render() {
    const { url, app, toggleOpenDrawer, isKYCVerified, first_name, businesses } = this.props;
    const customizedTheme = getCurrentTheme('sidebarTheme', themeConfig.theme);
    const collapsed = clone(app.collapsed) && !clone(app.openDrawer);
    const { openDrawer } = app;
    const mode = collapsed === true ? 'vertical' : 'inline';
    const onMouseEnter = event => {
      if (openDrawer === false) {
        toggleOpenDrawer();
      }
      return;
    };
    const onMouseLeave = () => {
      if (openDrawer === true) {
        toggleOpenDrawer();
      }
      return;
    };
    const scrollheight = app.height;
    const styling = {
      backgroundColor: customizedTheme.backgroundColor,
    };
    const submenuStyle = {
      backgroundColor: 'rgba(0,0,0,0.3)',
      color: customizedTheme.textColor,
    };
    const submenuColor = {
      color: customizedTheme.textColor,
    };

    const busMenus = businesses.map((biz,i) => 
                  <Menu.Item style={submenuStyle} key={`biz${i}`}>
                    <Link style={submenuColor} to={`${url}/business/${biz.id}`}>
                      {biz.name}
                    </Link>
                  </Menu.Item>
                )

    return (
      <SidebarWrapper >
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={collapsed}
          width="240"
          className="isomorphicSidebar"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={styling}
        >
          <Logo collapsed={collapsed} goHome={this.goHome}/>
          <Scrollbars style={{ height: scrollheight - 70 }}>
            <Menu
              onClick={this.handleClick}
              theme="dark"
              mode={mode}
              openKeys={collapsed ? [] : app.openKeys}
              selectedKeys={app.current}
              onOpenChange={this.onOpenChange}
              className="isoDashboardMenu"
            >
              <Menu.Item  key="home">
                <Link style={submenuColor} to={`${url}/dashboard`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-home" />
                      <IntlMessages id="sidebar.dashboard" />
                  </span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="hyperion"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="icon-gamedex-icon" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.businesses" />
                    </span>
                  </span>
                }
              > 
              {busMenus}
                <Menu.Item style={submenuStyle}  key="new">
                  <Link style={submenuColor} to={`${url}/businesses/new`}>
                      <i className="ion-android-add-circle" />&nbsp;&nbsp;
                      { <IntlMessages id="sidebar.add_business" /> }
                  </Link>
                </Menu.Item>
              </SubMenu>


              <Menu.Item  key="settings">
                <Link style={submenuColor} to={`${url}/settings`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-gear-a" />

                      <IntlMessages id="topbar.settings" />

                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item  key="help">
                <a style={submenuColor} href="https://docs.gamedex.co/" target="_blank" rel="noopener noreferrer">
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-help-circled" />
                      <IntlMessages id="sidebar.help" />
                  </span>
                </a>
              </Menu.Item>
              <Menu.Item  key="discord">
                <a style={submenuColor} href="http://t.me/officialgamedex" target="_blank" rel="noopener noreferrer">
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="icon-telegram-icon" />
                      <IntlMessages id="discord.title" />
                  </span>
                </a>
              </Menu.Item>

              <Menu.Item  key="legal">
                <a style={submenuColor} href="https://www.gamedex.co/" target="_blank" rel="noopener noreferrer">
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-ios-compose" />
                      <IntlMessages id="legal.title" />
                  </span>
                </a>
              </Menu.Item>
            </Menu>

            <Divider orientation="left">
              <div className="divider">
                Social
              </div>
            </Divider>

            <div className="flex-row">
              <span className="isoMenuHolderSocial" style={submenuColor}><a className="centered" style={submenuColor} href="https://twitter.com/officialgamedex" target="_blank" rel="noopener noreferrer" title="Twitter"><i className="ion-social-twitter" /></a></span>
              <span className="isoMenuHolderSocial" style={submenuColor}><a style={submenuColor} href="https://www.facebook.com/officialgamedex/" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="ion-social-facebook" /></a></span>
              <span className="isoMenuHolderSocial" style={submenuColor}><a style={submenuColor} href="#youtube" target="_blank" rel="noopener noreferrer" title="YouTube"><i className="ion-social-youtube" /></a></span>
              <span className="isoMenuHolderSocial" style={submenuColor}><a style={submenuColor} href="#reddit" target="_blank" rel="noopener noreferrer" title="Reddit"><i className="ion-social-reddit" /></a></span><br/>
              <span className="isoMenuHolderSocial" style={submenuColor}><a style={submenuColor} href="#email" target="_blank" rel="noopener noreferrer" title="Email"><i className="ion-email" /></a></span>
              <span className="isoMenuHolderSocial" style={submenuColor}><a style={submenuColor} href="https://www.linkedin.com/company/gamedex/" target="_blank" rel="noopener noreferrer" title="Linkedin"><i className="ion-social-linkedin" /></a></span>
              <span className="isoMenuHolderSocial" style={submenuColor}><a style={submenuColor} href="https://medium.com/gamedex" target="_blank" rel="noopener noreferrer" title="Medium"><i>M</i></a></span>
              <span className="isoMenuHolderSocial" style={submenuColor}><a className="telegram-icon" style={submenuColor} href="http://t.me/officialgamedex" target="_blank" rel="noopener noreferrer" title="Telegram"><i></i></a></span>
            </div>

          </Scrollbars>
        </Sider>
      </SidebarWrapper>
    );
  }
}

export default connect(
  state => ({
    app: state.App.toJS(),
    businesses: state.Businesses.get('businesses'),
    isKYCVerified: state.Auth.get('user').verified,
    first_name: state.Auth.get('user').first_name,
  }),
  { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed }
)(Sidebar);
