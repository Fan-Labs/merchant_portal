import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Upload, Icon, message } from 'antd'
import Uploader from '../../components/documentUploader/documentUploader'
import CountrySelector from '../../components/uielements/countrySelector'
import Button from '../../components/uielements/button'
import { formInput } from '../../components/uielements/input'
import IntlMessages from '../../components/utility/intlMessages'
import AddressWrapper from './Address.style'
import { required } from './validate'

import KYCFormsModel from '../../models/Verify/KYCFormsModel'

const Address = ({ setInvestStep, valid, showAddressUpload }) => (
  <AddressWrapper>
    <div className="row">
      <label><IntlMessages id="kyc.address1" /><div className="required">*</div></label>
      <Field name="address.line1" validate={required} component={formInput}/>
    </div>
    <div className="row">
      <label><IntlMessages id="kyc.address2" /></label>
      <Field name="address.line2" component={formInput}/>
    </div>
    <div className="row">
      <label><IntlMessages id="kyc.city" /><div className="required">*</div></label>
      <Field name="address.city" validate={required} component={formInput}/>
    </div>
    <div className="first-half">
      <label><IntlMessages id="kyc.addressCountry" /><div className="required">*</div></label>
      <Field name="address.country" validate={required} component={CountrySelector} />
    </div>
    <div className="second-half">
      <label><IntlMessages id="kyc.region" /></label>
      <Field name="address.subdivision" component={formInput}/>
    </div>

    <div className="row">
      <label><IntlMessages id="kyc.postalCode" /><div className="required">*</div></label>
      <Field name="address.postal_code" validate={required} component={formInput}/>
    </div>

    {showAddressUpload && (
      <div className="row">
        <div style={{ fontSize: 20, fontWeight: 500 }}> <IntlMessages id="settings.upload_address" /> </div>
        <Uploader documentType="ADDRESS"/>
      </div>
    )}

    <div className="last-footer-button">
      <Button type="normal" onClick={() => setInvestStep('next')} disabled={!(valid)}>
        <IntlMessages id="kyc.next" /> <Icon type="right" />
      </Button>
    </div>
  </AddressWrapper>
)

const AddressForm = reduxForm({
  form: 'kyc',                 // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
})(Address)

export default KYCFormsModel(AddressForm)

    // kycStatus: PropTypes.string.isRequired,
    // kycAuthToken: PropTypes.string.isRequired,
    // kycStep: PropTypes.number.isRequired,
    // isLoading: PropTypes.bool.isRequired,
    // submitKYCerror: PropTypes.string.isRequired,
    // setKYCStep: PropTypes.func.isRequired,
    // submitKYC: PropTypes.func.isRequired,
    // clearAll: PropTypes.func.isRequired,