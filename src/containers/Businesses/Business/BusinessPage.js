import React from 'react'
import LayoutContentWrapper from '../../../components/utility/layoutWrapper'
import LayoutContent from '../../../components/utility/layoutContent'
import BusinessPageModel from '../../../models/Businesses/BusinessPage'
import BusinessPageWrapper from './BusinessPage.style'
import BusinessCalendar from './BusinessCalendar'
import FixtureSelection from './FixtureSelection'
import { Link } from 'react-router-dom'
import {Card, Drawer} from 'antd'
const { Meta } = Card;

const BusinessPage = ({ business, fixtures, currentBusinessFixtures, isDateDrawerOpen, setDateDrawer }) => (
  <LayoutContentWrapper>
    <LayoutContent>
      <BusinessPageWrapper >
        {business && (
          <div>I'm a business named {business.name}!</div>
        )}
        <br />
        <BusinessCalendar  />
        <Drawer
          width='40vw'
          placement="right"
          onClose={() => setDateDrawer(false)}
          visible={isDateDrawerOpen}
        >
          <FixtureSelection />
        </Drawer>
      </BusinessPageWrapper>
    </LayoutContent>
  </LayoutContentWrapper>
)

export default BusinessPageModel(BusinessPage)