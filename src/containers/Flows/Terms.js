import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../../components/uielements/input'
import Button from '../../components/uielements/button'
import IntlMessages from '../../components/utility/intlMessages'
import TermsWrapper from './Terms.style.js'


class Terms extends Component {

  constructor(props) {
    super(props)
    this.checkEmail = this.checkEmail.bind(this)
    this.state = {
      emailCheck: null,
    }
  }

  checkEmail(event) {
    event.preventDefault()
    this.setState({
      emailCheck: event.target.value
    })
  }

  render() {
    const { agree } = this.props
    const matched = `${this.state.emailCheck}`.toLowerCase() === `${this.props.email}`.toLowerCase()
    return (
      <TermsWrapper>
        Terms
      </TermsWrapper>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    isOpen: state.Invest.get('hyperion').open,
    email: state.Auth.get('user').email,
  })
)(Terms)