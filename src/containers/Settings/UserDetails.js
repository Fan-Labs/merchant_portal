import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, isDirty } from 'redux-form'
import { Icon, message, Tag } from 'antd'
import authActions from '../../redux/auth/actions'
import UserDetailsWrapper from './UserDetails.style'
import { formInput } from '../../components/uielements/input'
import Button from '../../components/uielements/button'
import IntlMessages from '../../components/utility/intlMessages'
import {MESSAGE_KEYS} from '../../constants'

const { startUpdateUser, requestEmailVerification } = authActions
const { user_update_error, user_update_success, email_verify_request } = MESSAGE_KEYS

class UserDetails extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    const user = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email
    }
    this.props.startUpdateUser(user)
  }

  render() {
    const { initialValues, isDirty, successMessage, failMessage, isLoading, requestEmailVerification, requestEmailMessage, addressDocs } = this.props

    return (
      <DetailsFormComponent
      onSubmit={this.handleSubmit}
      initialValues={initialValues}
      isDirty={isDirty}
      addressDocs={addressDocs}
      successMessage={successMessage}
      failMessage={failMessage}
      isLoading={isLoading}
      requestEmailVerification={requestEmailVerification}
      requestEmailMessage={requestEmailMessage}
      />
    )
  }
}

class DetailsForm extends Component {

  constructor(props) {
    super(props)
    this.verifyEmail = this.verifyEmail.bind(this)
  }

  verifyEmail(event) {
    event.preventDefault()
    this.props.requestEmailVerification()
  }

  render() {
    const { addressDocs, isDirty, isLoading, successMessage, failMessage, requestEmailMessage, initialValues: { email_verified } } = this.props //TODO docs by address type

    return (
      <UserDetailsWrapper onSubmit={this.props.handleSubmit}>
        <div className="row">
          <label><IntlMessages id="settings.firstName" /></label>
            <Field name="first_name" component={formInput}/>
        </div>
        <div className="row">
          <label><IntlMessages id="settings.lastName" /></label>
            <Field name="last_name" component={formInput}/>
        </div>
        <div className="three-quarters">
          <label><IntlMessages id="settings.email" /></label>
            <Field name="email" component={formInput}/>
        </div>
        <div className="right-button">
          {email_verified?
            (<Tag color="#87d068"><IntlMessages id="settings.emailVerified" /></Tag>) :
            (<Button type="normal" onClick={this.verifyEmail} loading={isLoading} style={{width: "100%"}}><IntlMessages id="settings.verifyButton" /></Button>)
          }
        </div>
        <div className="update-button">
          <Button type="primary" loading={isLoading} htmlType="submit" disabled={!isDirty}><IntlMessages id="settings.updateDetailsButton" /></Button>
        </div>
        {requestEmailMessage && (
          <div className="success"><IntlMessages id={requestEmailMessage} /></div>
        )}
        {successMessage && (
          <div className="success"><IntlMessages id={successMessage} /></div>
        )}
        {failMessage && (
          <div className="fail"><IntlMessages id={failMessage} /></div>
        )}
      </UserDetailsWrapper>
    );
  }
}

let DetailsFormComponent = reduxForm({
  form: 'UserDetails'
})(DetailsForm)

export default connect(
  state => ({
    initialValues: state.Auth.get('user'),
    addressDocs: state.Auth.get('aml_docs'),
    isDirty: isDirty('UserDetails')(state),
    isLoading: state.App.get('isLoading'),
    successMessage: state.Messages.get(user_update_success),
    failMessage: state.Messages.get(user_update_error),
    requestEmailMessage: state.Messages.get(email_verify_request),
  }),
  { startUpdateUser, requestEmailVerification }
)(UserDetails)
