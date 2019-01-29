import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MESSAGE_KEYS } from '../../constants'
import authAction from '../../redux/auth/actions';

const { login } = authAction
const { login_error } = MESSAGE_KEYS

function mapStateToProps(state, ownprops) {
  return {
    isLoggedIn: state.Auth.get('idToken') !== null ? true : false,
    loginErrorMessage: state.Messages.get(login_error),
    isLoading: state.App.get('isLoading'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.handleLogin = this.handleLogin.bind(this)
      this.state = {
        redirectToReferrer: false,
        user: null,
        password: null,
      }
    }

    componentWillReceiveProps(nextProps) {
      if (
        this.props.isLoggedIn !== nextProps.isLoggedIn &&
        nextProps.isLoggedIn === true
      ) {
        this.setState({ redirectToReferrer: true });
      }
    }

    handleLogin(event) {
      event.preventDefault();
      const user = event.target[0].value;
      const password = event.target[1].value;
      const { login } = this.props;
      debugger
      login(user, password);
      // window.grecaptcha.execute('6LfCh1wUAAAAAFpsjqKEGTdrouFgKwnVIYXOlj1e', {action: 'login'})
      //   .then(function(token) {
      //     login(user, password, token);
      //   });
    }


    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          handleLogin={this.handleLogin}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
