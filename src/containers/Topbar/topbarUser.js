import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Popover from '../../components/uielements/popover';
import IntlMessages from '../../components/utility/intlMessages';
import { Avatar } from 'antd'
import authAction from '../../redux/auth/actions';
import TopbarDropdownWrapper from './topbarDropdown.style';

const { logout } = authAction;

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { url, firstName } = this.props;
    const content = (
      <TopbarDropdownWrapper className="isoUserDropdown">
        <Link className="isoDropdownLink" to={`${url}/settings`}>
          <IntlMessages id="topbar.settings" />
        </Link>
        <Link className="isoDropdownLink" to={`${url}/password`}>
          <IntlMessages id="topbar.password" />
        </Link>
        <a className="isoDropdownLink" onClick={this.props.logout}>
          <IntlMessages id="topbar.logout" />
        </a>
      </TopbarDropdownWrapper>
    );

    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        arrowPointAtCenter={true}
        placement="bottomLeft"
      >
        <div className="isoImgWrapper">
          <Avatar style={{ color: '#7c97b3', backgroundColor: '#cee5ff' }}><b>{firstName? firstName.toString().substring(0,1) : "?"}</b></Avatar>
          <span className="userActivity online" />
        </div>
      </Popover>
    );
  }
}
export default connect(  (state, ownProps) => ({
    firstName: state.Auth.get('user').first_name
  }),
{ logout })(TopbarUser);
