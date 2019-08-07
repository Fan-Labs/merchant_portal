import React from 'react'
import BusinessProfileWrapper from './BusinessProfile.style'
import { Link } from 'react-router-dom'
const { Meta } = Card
const { TabPane } = Tabs

const BusinessProfile = ({ business, currentBusinessFixtures }) => (
  <LayoutContentWrapper>
    <LayoutContent>
      <BusinessPageWrapper >
        {business && (
          <div className="business-name">{business.name}</div>
        )}
        <br />
        <Tabs defaultActiveKey="1">
          <TabPane tab="Details" key="1">

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

export default BusinessProfile