import React from 'react'
import CreateBusinessModel from '../../models/Businesses/CreateBusiness'
import { reduxForm, Field } from 'redux-form'
import IntlMessages from '../../components/utility/intlMessages'
import { formInput } from '../../components/uielements/input'
import Button from '../../components/uielements/button'
import { required } from '../KYC/validate'
import GeoSuggestInput from '../../components/geoSuggestInput/geoSuggest'


const CreateBusinessForm = ({ handleSubmit, valid, isLoading }) => (
  <form onSubmit={handleSubmit}>
    <div className="block">
      <label>Business Name</label>
      <Field name="name" component={GeoSuggestInput} onlyPlaces={true}/>
    </div>
    <div className="block">
      <label>Description</label>
      <Field name="description" component={formInput}/>
    </div>
    <div className="block">
      <label>Location</label>
      <Field name="address" component={GeoSuggestInput} />
    </div>
    <div className="block">
      <label>Phone Number</label>
      <Field name="phoneNumber" component={formInput}/>
    </div>
    <div className="block">
      <label>Website</label>
      <Field name="website" component={formInput}/>
    </div>

    <div className="block submit-block">
      <Button type="primary" htmlType="submit" disabled={!valid} loading={isLoading}>
        Save
      </Button>
    </div>
  </form>
)

export default reduxForm({
  form: 'NewBusiness',
  destroyOnUnmount: true,
})(CreateBusinessForm);
