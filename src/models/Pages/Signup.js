import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MESSAGE_KEYS } from '../../constants'
import authAction from '../../redux/auth/actions'

const { signup } = authAction
const { signup_errors, signup_success } = MESSAGE_KEYS

function mapStateToProps(state, ownprops) {
  return {
    isLoggedIn: state.Auth.get('idToken') !== null ? true : false,
    signupErrorMessages: state.Messages.get(signup_errors),
    signupSuccessMessage: state.Messages.get(signup_success),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signup
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.handleSignup = this.handleSignup.bind(this)
      this.handleUpdate = this.handleUpdate.bind(this)
      this.onChange = this.onChange.bind(this)

      this.state = {
        redirectToReferrer: false,
        agreedToTerms: false,
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        confirm_password: null,
        showPasswordMessage: false,
        showEmailMessage: false,
        showRequiredMessage: false,
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

    handleSignup(event) {
      event.preventDefault()
      const { signup } = this.props;
      const { agreedToTerms, first_name, last_name, email, password, confirm_password } = this.state;

      this.setState({
        showRequiredMessage: false,
        showEmailMessage: false,
        showPasswordMessage: false
       });

      if (!agreedToTerms || !first_name || !last_name || !email || !password || !confirm_password) {
        this.setState({ showRequiredMessage: true });
        return;
      }

      const validEmail = /^[^@]+@[^@.]+(\.[^@.]+)+$/;
      if (!validEmail.test(email)) {
        this.setState({ showEmailMessage: true });
        return;
      }

      if (password !== confirm_password) {
        this.setState({ showPasswordMessage: true });
        return;
      }

      signup(first_name, last_name, email, password);
    }

    handleUpdate(event) {
      event.preventDefault()
      this.setState({
        [event.target.name]: event.target.value,
        showRequiredMessage: false,
        showPasswordMessage: false,
      });
    }

    onChange(e) {
      this.setState({
        agreedToTerms: e.target.checked,
      });
    }


    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          handleUpdate={this.handleUpdate}
          onChange={this.onChange}
          handleSignup={this.handleSignup}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
