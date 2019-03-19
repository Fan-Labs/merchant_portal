import React from 'react'
import LayoutContentWrapper from '../../../components/utility/layoutWrapper'
import LayoutContent from '../../../components/utility/layoutContent'
import BusinessPageModel from '../../../models/Businesses/BusinessPage'
import BusinessPageWrapper from './BusinessPage.style'
import { Link } from 'react-router-dom'
import {Card, Carousel} from 'antd'
const { Meta } = Card;

const BusinessPage = ({ business }) => (
  <LayoutContentWrapper>
    <LayoutContent>
      <BusinessPageWrapper >
        {business && (
          <div>I'm a business named {business.name}!</div>
        )}
      </BusinessPageWrapper>
    </LayoutContent>
  </LayoutContentWrapper>
)

export default BusinessPageModel(BusinessPage)