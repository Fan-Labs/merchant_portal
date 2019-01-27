import styled from 'styled-components'
import { palette } from 'styled-theme'
import { transition, borderRadius } from '../../config/style-util'
import WithDirection from '../../config/withDirection'
import telegramIcon from '../../image/telegram-icon.svg'
import companyLogo from '../../image/Gamedex_Lockup_Black.svg'

const SidebarWrapper = styled.div`
  .isomorphicSidebar {
    z-index: 1000;
    background: ${palette('secondary', 0)};
    width: 280px;
    flex: 0 0 280px;

    .scrollarea {
      height: calc(100vh - 70px);
    }

    .verifiedColor {
      color: ${palette('success', 0)};
      filter: brightness(150%);
    }

    .unVerifiedColor {
      color: ${palette('primary', 0)};
      filter: brightness(150%);
    }

    .divider {
      color: #788195;
    }

    .flex-row {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ant-divider-horizontal.ant-divider-with-text-left:after{
      border-top: 1px solid #788195;
    }
    .ant-divider-horizontal.ant-divider-with-text-left:before{
      border-top: 1px solid #788195;
    }

    @media only screen and (max-width: 767px) {
      width: 240px !important;
      flex: 0 0 240px !important;
    }

    &.ant-layout-sider-collapsed {
      @media only screen and (max-width: 767px) {
        width: 0;
        min-width: 0 !important;
        max-width: 0 !important;
        flex: 0 0 0 !important;
      }

      .flex-row {
        flex-direction: column !important;
        .isoMenuHolderSocial {
          i {
          margin: 5px 0px 0px 0px !important;
          }
          justify-content: center;
        }
      }
    }

    .telegram-icon {
      background-image: url(${telegramIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 18px;
      height: 18px;
    }

    .isoLogoWrapper {
      box-sizing: border-box;
      cursor: pointer;
      height: 70px;
      background: white;
      margin: 0;
      padding: 0 10px;
      text-align: center;
      overflow: hidden;
      ${borderRadius()};

      .companyLogo {
        background: url(${companyLogo}) no-repeat center center;
        background-size: contain;
        width: 100%;
        height: 100%;
      }

      img {
        box-sizing: border-box;
        padding: 10px;
        height: 100%;
      }
    }

    &.ant-layout-sider-collapsed {
      .isoLogoWrapper {
        padding: 0;

        h3 {
          a {
            font-size: 27px;
            font-weight: 500;
            letter-spacing: 0;
          }
        }
      }
    }

    .isoDashboardMenu {
      padding-top: 35px;
      padding-bottom: 35px;
      background: transparent;

      a {
        text-decoration: none;
        font-weight: 400;
      }
      .ant-menu-submenu {
        i {
          &:before {
           ${transition()};
          }
        }
      }      
      .ant-menu-submenu-active {
        i {
          &:before {
           color: white !important;
          }
        }
      }

      .ant-menu-item {
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 24px;
        margin: 0;
        i {
          &:before {
           ${transition()};
          }
        }
      }

      .ant-menu-item-active {
        i {
          &:before {
            color: white !important;
          }
        }
      }

      .isoMenuHolder {
        display: flex;
        align-items: center;

        i {
          font-size: 19px;
          color: inherit;
          margin: ${props =>
            props['data-rtl'] === 'rtl' ? '0 0 0 30px' : '0 30px 0 0'};
          width: 18px;
          ${transition()};
        }
      }

      .isoMenuHolderSocial {
        display: flex;
        align-items: center;
        flex-direction: ${props => props.collapsed? 'column' : 'row'};
        height: 18px;

        i {
          font-size: 19px;
          font-style: normal;
          color: inherit;
          margin: ${props =>
            props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0'};
          width: 18px;
          ${transition()};
          &:hover {
            color: #fff;
          }
        }
      }

      .anticon {
        font-size: 18px;
        margin-right: 30px;
        color: inherit;
        ${transition()};
      }

      .nav-text {
        font-size: 14px;
        color: inherit;
        font-weight: 400;
        ${transition()};
      }

      .ant-menu-item-selected {
        background-color: rgba(0, 0, 0, 0.4) !important;
        .anticon {
          color: #fff;
        }

        i {
          color: #fff;
        }

        .nav-text {
          color: #fff;
        }
      }

      > li {
        &:hover {
          i,
          .nav-text {
            color: #ffffff;
          }
        }
      }
    }

    .ant-menu-dark .ant-menu-inline.ant-menu-sub {
      background: ${palette('secondary', 5)};
    }

    .ant-menu-submenu-inline,
    .ant-menu-submenu-vertical {
      > .ant-menu-submenu-title {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 24px;

        > span {
          display: flex;
          align-items: center;
        }

        .ant-menu-submenu-arrow {
          left: ${props => (props['data-rtl'] === 'rtl' ? '25px' : 'auto')};
          right: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : '25px')};

          &:before,
          &:after {
            width: 8px;
            ${transition()};
          }

          &:before {
            transform: rotate(-45deg) translateX(3px);
          }

          &:after {
            transform: rotate(45deg) translateX(-3px);
          }

          ${'' /* &:after {
            content: '\f123';
            font-family: 'Ionicons' !important;
            font-size: 16px;
            color: inherit;
            left: ${props => (props['data-rtl'] === 'rtl' ? '16px' : 'auto')};
            right: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : '16px')};
            ${transition()};
          } */};
        }

        &:hover {
          .ant-menu-submenu-arrow {
            &:before,
            &:after {
              color: #ffffff;
            }
          }
        }
      }

      .ant-menu-inline,
      .ant-menu-submenu-vertical {
        > li:not(.ant-menu-item-group) {
          padding-left: ${props =>
            props['data-rtl'] === 'rtl' ? '0px !important' : '74px !important'};
          padding-right: ${props =>
            props['data-rtl'] === 'rtl' ? '74px !important' : '0px !important'};
          font-size: 13px;
          font-weight: 400;
          margin: 0;
          color: inherit;
          ${transition()};

          &:hover {
            a {
              color: #ffffff !important;
            }
          }
        }

        .ant-menu-item-group {
          padding-left: 0;

          .ant-menu-item-group-title {
            padding-left: 100px !important;
          }
          .ant-menu-item-group-list {
            .ant-menu-item {
              padding-left: 125px !important;
            }
          }
        }
      }

      .ant-menu-sub {
        box-shadow: none;
        background-color: transparent !important;
      }
    }

    &.ant-layout-sider-collapsed {
      .nav-text {
        display: none;
      }

      .ant-menu-submenu-inline >  {
        .ant-menu-submenu-title:after {
          display: none;
        }
      }

      .ant-menu-submenu-vertical {
        > .ant-menu-submenu-title:after {
          display: none;
        }

        .ant-menu-sub {
          background-color: transparent !important;

          .ant-menu-item {
            height: 35px;
          }
        }
      }
    }
  }
`;

export default WithDirection(SidebarWrapper);
