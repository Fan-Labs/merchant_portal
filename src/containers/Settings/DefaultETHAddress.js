import React from 'react'
import { reduxForm, Field } from 'redux-form'
import Wrapper from './ETHAddress.style'
import { isChecksumAddress } from '../../helpers/utility'
import IntlMessages from '../../components/utility/intlMessages'
import { formInput } from '../../components/uielements/input'
import Button from '../../components/uielements/button'

import ETHModel from '../../models/Settings/DefaultETHAddress'

const isEthereum = (value) => {
  console.log(value)
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

const DefaultETHAddress = ({ handleSubmit, successMessage, failMessage, valid, isLoading, initialValues: { eth_address } }) => (
  <Wrapper onSubmit={handleSubmit}>
    <div className="explainer">
      <IntlMessages id="settings.eth.explainer" />
    </div>
    <div className="instructions">
      <IntlMessages id="settings.eth.explainer2" />
    </div>
    <div className="block">
      <label><IntlMessages id="claim.eth_address" /></label>
      <Field name="eth_address" validate={isEthereum} component={formInput} placeholder="0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed"/>
    </div>
    <div className="block submit-block">
      <Button type="primary" htmlType="submit" disabled={!valid} loading={isLoading}>
        <IntlMessages id="page.resetPassSave" />
      </Button>
    </div>
    {successMessage && (
      <div className="success"><IntlMessages id={successMessage} /></div>
    )}
    {failMessage && (
      <div className="fail"><IntlMessages id={failMessage} /></div>
    )}
  </Wrapper>
)

export default ETHModel(reduxForm({
  form: 'DefaultETHAddress',
  destroyOnUnmount: true,
})(DefaultETHAddress));
