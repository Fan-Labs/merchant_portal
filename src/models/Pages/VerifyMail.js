import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import queryString from 'query-string'
import { MESSAGE_KEYS } from '../../constants'
import authActions from '../../redux/auth/actions'

const { verifyMail } = authActions
const { email_verify_error, email_verify_success } = MESSAGE_KEYS

function mapStateToProps(state, ownprops) {
  return {
    verifyErrorMessage: state.Messages.get(email_verify_error),
    verifiedMessage: state.Messages.get(email_verify_success)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    verifyMail
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.state = {
        showTokenMessage: false,
      }
    }

    componentDidMount() {
      const { location: { search }, verifyMail } = this.props

      const { token } = queryString.parse(search)

      if(!token) {
        this.setState({showTokenMessage: true})
      } else  {
        verifyMail(token)
      }
    }


    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
