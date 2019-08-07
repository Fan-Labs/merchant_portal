import React from 'react'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import Tabs, { TabPane } from '../../components/uielements/tabs'
import IntlMessages from '../../components/utility/intlMessages'
import { Icon } from 'antd'
import UserDetails from './UserDetails'
import Phone from './Phone'
import {UploadWrapper} from './Settings.style.js'
// import Notifications from './Notifications'

const Settings = () => (
  <LayoutContentWrapper style={{ minHeight: '100vh' }}>
    <LayoutContent>
      <Tabs defaultActiveKey="1" size="small">
        <TabPane tab={
          <div>
            <Icon type="user" style={{ fontSize: 20, marginRight: '8px' }} />
            <IntlMessages id="settings.tabUser" />
          </div>
          }
          key="1"
          >
          <UserDetails />
        </TabPane>
        <TabPane tab={
          <div>
            <Icon type="phone" style={{ fontSize: 20, marginRight: '8px' }} />
            <IntlMessages id="settings.tabPhone" />
          </div>
          }
          key="2"
          >
          <Phone />
        </TabPane>
       
       
      </Tabs>
    </LayoutContent>
  </LayoutContentWrapper>
)

export default Settings
