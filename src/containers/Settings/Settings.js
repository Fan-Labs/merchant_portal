import React from 'react'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import Tabs, { TabPane } from '../../components/uielements/tabs'
import IntlMessages from '../../components/utility/intlMessages'
import { Icon } from 'antd'
import UserDetails from './UserDetails'
import Phone from './Phone'
import TwoFA from './2FA'
import {UploadWrapper} from './Settings.style.js'
import Uploader from '../../components/documentUploader/documentUploader'
import ETH from './DefaultETHAddress'
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
        <TabPane tab={
          <div>
            <Icon type="safety" style={{ fontSize: 20, marginRight: '8px' }} />
            <IntlMessages id="settings.tab2FA" />
          </div>
          }
          key="3"
          >
            <TwoFA />
        </TabPane>
        <TabPane tab={
          <div>
            <Icon type="exception" style={{ fontSize: 20, marginRight: '8px' }} />
            <IntlMessages id="settings.aml_documents" />
          </div>
          }
          key="4"
          >
          <UploadWrapper>
            <div className="upload-block">
              <div style={{ fontSize: 20, fontWeight: 500 }}> <IntlMessages id="settings.upload_address" /> </div>
              <Uploader documentType="ADDRESS"/>
            </div>
            <div className="upload-block">
              <div style={{ fontSize: 20, fontWeight: 500 }}> <IntlMessages id="settings.upload_funds" /> </div>
              <Uploader documentType="SOURCE_OF_FUNDS"/>
            </div>
          </UploadWrapper>
        </TabPane>
        <TabPane tab={
          <div>
            <Icon type="wallet" style={{ fontSize: 20, marginRight: '8px' }} />
            <IntlMessages id="settings.eth_address" />
          </div>
          }
          key="5"
          >
            <ETH />
        </TabPane>
      </Tabs>
    </LayoutContent>
  </LayoutContentWrapper>
)

export default Settings
