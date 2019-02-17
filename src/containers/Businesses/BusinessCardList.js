import React from 'react'
import BusinessesModel from '../../models/Businesses/Businesses'
import BusinessCardListWrapper from './BusinessCardList.style'
import CreateBusinessCard from './CreateBusinessCard'

const BusinessCardList = ({businesses}) => (
  <BusinessCardListWrapper>
  	<CreateBusinessCard />

  </BusinessCardListWrapper>
)

export default BusinessesModel(BusinessCardList)