import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Icon } from 'antd'
import CountrySelector from '../../components/uielements/countrySelector'
import { SOURCE_OF_FUNDS } from '../../constants'
import Button from '../../components/uielements/button'
import { formInput } from '../../components/uielements/input'
import { formSelect } from '../../components/uielements/select'
import IntlMessages from '../../components/utility/intlMessages'
import AddressWrapper from './Address.style'
import { required } from './validate'

import KYCFormsModel from '../../models/Verify/KYCFormsModel'

const UserDetails = ({ setInvestStep, isLoading, handleSubmit, valid }) => (
  <AddressWrapper onSubmit={handleSubmit}>
    <div className="row">
      <label><IntlMessages id="kyc.occupation" /><div className="required">*</div></label>
      <Field name="occupation" validate={required} component={formInput}/>
    </div>
    <div className="row">
      <label><IntlMessages id="kyc.sourceOfFunds" /><div className="required">*</div></label>
      <Field name="source_of_funds" validate={required} component={formSelect} data={SOURCE_OF_FUNDS}/>
    </div>
    <div className="row">
      <label><IntlMessages id="kyc.estimatedInvestment" /><div className="required">*</div></label>
      <Field name="estimated_investment" validate={required} component={formInput}/>
    </div>
    <div className="first-footer-button">
      <Button type="normal" onClick={() => setInvestStep(0)}>
        <Icon type="left" /> <IntlMessages id="kyc.previous" />
      </Button>
    </div>
    <div className="last-footer-button">
      <Button type="primary" htmlType="submit" disabled={!valid} loading={isLoading}>
        <IntlMessages id="kyc.submit" /> <Icon type="right" />
      </Button>
    </div>
  </AddressWrapper>
)

const UserDetailsForm = reduxForm({
  form: 'kyc',  
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(UserDetails)

export default KYCFormsModel(UserDetailsForm)