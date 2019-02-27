import React from 'react'
import BusinessesModel from '../../models/Businesses/Businesses'
import BusinessCardListWrapper from './BusinessCardList.style'
import CreateBusinessCard from './CreateBusinessCard'
import BusinessCard from './BusinessCard'

const BusinessCardList = ({businesses}) => (
  <BusinessCardListWrapper>
  	{businesses.map((bus, i) => 
  		<BusinessCard business={bus} index={i} />
  	)}
  	<CreateBusinessCard />

  </BusinessCardListWrapper>
)

export default BusinessesModel(BusinessCardList)