import React from 'react'
import {Icon} from 'antd'
import { reduxForm, Field } from 'redux-form'
import Button from '../../components/uielements/button'
import { formInput, TextAreaInput } from '../../components/uielements/input'
import { formSelect } from '../../components/uielements/select'
import CreateOfferWrapper,{SelectOfferTypeWrapper} from './CreateOffer.style.js'
import CreateOfferModel from '../../models/Offers/CreateOffer'
import {offerTypes, offerVariety, PERCENT_OPTIONS} from '../../constants/offerConstants'

const renderOfferTypes = ({input, label, ...custom}) => (
  <SelectOfferTypeWrapper>
    {offerTypes.map((offerType,i) => 
      <Button
       type="default"
       className={`type-button ${input.value === offerType.value? 'selected' : ''}`}
       key={i}
       onClick={()=> input.onChange(offerType.value)}
       >
        <Icon type={offerType.icon} style={{fontSize: '24px'}} />
        <div className="type-text">{offerType.label}</div>
      </Button>
    )}
  </SelectOfferTypeWrapper>
)

const renderOfferVariety = ({input, label, ...custom}) => (
  <SelectOfferTypeWrapper>
    {offerVariety.map((offerType,i) => 
      <Button
       type="default"
       className={`type-button ${input.value === offerType.value? 'selected' : ''}`}
       key={i}
       onClick={()=> input.onChange(offerType.value)}
       >
        <span className="icon"><i className={offerType.icon} /></span>
        <div className="type-text">{offerType.label}</div>
      </Button>
    )}
  </SelectOfferTypeWrapper>
)

const CreateOffer = ({handleSubmit, offer_type}) => (
  <CreateOfferWrapper onSubmit={handleSubmit}>
    <div className="row header">Choose Offer Type</div><br/>
    <Field name="offer_type" component={renderOfferTypes}/>
    <br />
    {offer_type==="percent_discount" && (
      <div className="row" style={{width: '50%'}}>
        <div className="label">Discount: </div>
        <Field name="percent_discount"  component={formSelect} data={PERCENT_OPTIONS}/>
      </div>
    )}
    {offer_type==="fixed_price" && (
      <div className="row" style={{width: '50%'}}>
        <div className="label">Price: </div>
        <Field name="fixed_price"  component={formInput}/>
      </div>
    )}
    <br/>
    <Field name="offer_substance" component={renderOfferVariety}/>
    <br/>
    <div className="row">
      <Field name="offer_details"  component={TextAreaInput} rows={4} placeholder="Offer details..."/>
    </div>
    <br/>
    <Button htmlType="submit">
      Submit
    </Button>
  </CreateOfferWrapper>
)

const CreateOfferForm = reduxForm({
  form: 'createOffer',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
})(CreateOffer)

export default CreateOfferModel(CreateOfferForm)