import React from 'react'
import LayoutContentWrapper from '../../../components/utility/layoutWrapper'
import LayoutContent from '../../../components/utility/layoutContent'
import BusinessPageModel from '../../../models/Businesses/BusinessPage'
import BusinessPageWrapper from './BusinessPage.style'
import BusinessCalendar from './BusinessCalendar'
import FixtureSelection from './FixtureSelection'
import BusinessDetails from './BusinessDetails'
import { Link } from 'react-router-dom'
import {Card, Drawer, Tabs} from 'antd'
const { Meta } = Card
const { TabPane } = Tabs

const BusinessPage = ({ business, fixtures, currentBusinessFixtures, isDateDrawerOpen, setDateDrawer }) => (
  <LayoutContentWrapper>
    <LayoutContent>
      <BusinessPageWrapper >
        {business && (
          <div className="business-name">{business.name}</div>
        )}
        <br />
        <Tabs defaultActiveKey="1">
          <TabPane tab="Details" key="1">
            <BusinessDetails business={business} />
          </TabPane>
          <TabPane tab="Calendar" key="2">
            <BusinessCalendar  />
            <Drawer
              width='40vw'
              placement="right"
              onClose={() => setDateDrawer(false)}
              visible={isDateDrawerOpen}
            >
              <FixtureSelection />
            </Drawer>
          </TabPane>
        </Tabs>
      </BusinessPageWrapper>
    </LayoutContent>
  </LayoutContentWrapper>
)

export default BusinessPageModel(BusinessPage)