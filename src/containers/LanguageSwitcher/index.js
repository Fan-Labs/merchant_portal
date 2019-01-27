import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import { connect } from 'react-redux';
import DropdownWrapper, { MenuButton } from './styles'
import actions from '../../redux/languageSwitcher/actions';
import config from './config';

const { changeLanguage } = actions;

class LanguageSwitcher extends Component {
  render() {
    const { language, changeLanguage } = this.props;
    const menu = (
      <Menu>
      {config.options.map((option,i) => {
        const { languageId } = option;
        return (
          <Menu.Item key={languageId}>
          <MenuButton
            onClick={() => {
              changeLanguage(languageId);
            }}
            src={option.icon}
          >
          </MenuButton>
          </Menu.Item>
        );
      })}
      </Menu>
    )

    return (
      <DropdownWrapper>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#lang">
            <img src={process.env.PUBLIC_URL + language.icon} alt="flag" className="flag"/>
          </a>
        </Dropdown>
      </DropdownWrapper>
    )
  }
}

export default connect(
  state => ({
    ...state.LanguageSwitcher.toJS(),
  }),
  { changeLanguage }
)(LanguageSwitcher);
