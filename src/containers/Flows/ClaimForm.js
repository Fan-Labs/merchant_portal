import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { isChecksumAddress } from '../../helpers/utility'
import IntlMessages from '../../components/utility/intlMessages'
import { formInput } from '../../components/uielements/input'
import Button from '../../components/uielements/button'
import { required } from '../KYC/validate'

const isEthereum = (value) => {
  try {
    if(value && isChecksumAddress(value)) {
      return undefined
    }
    return "Must be a valid Ethereum checksum address"
  }
  catch(e) {
    return  "Must be a valid Ethereum checksum address"
  }
}

const isNumber = (value) => !value || isNaN(Number(value)) ? 'Must be a number' : undefined

const ClaimForm = ({ handleSubmit, valid, isLoading }) => (
  <form onSubmit={handleSubmit}>
    <div className="block">
      <label><IntlMessages id="claim.amount" /></label>
      <Field name="amount" validate={isNumber} component={formInput}/>
    </div>
    <div className="block">
      <label><IntlMessages id="claim.eth_address" /></label>
      <Field name="address" validate={isEthereum} component={formInput}/>
    </div>
    <div className="block">
      <label><IntlMessages id="claim.password" /></label>
      <Field name="password" validate={required} component={formInput} type="password"/>
    </div>

    <div className="block submit-block">
      <Button type="primary" htmlType="submit" disabled={!valid} loading={isLoading}>
        <IntlMessages id="claim.submit" />
      </Button>
    </div>
  </form>
)

export default reduxForm({
  form: 'ClaimTokens',
  destroyOnUnmount: true,
  initialValues: { password: '', address: '', amount: '' }
})(ClaimForm);
