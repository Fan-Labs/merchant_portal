import React from 'react'
import { withTheme } from 'styled-components'
import { Progress, Card } from 'antd'
import ProgressWrapper from './Progress.style'

import ProgressModel from '../../models/Dashboard/ProfileProgress'
import KycAlert, { ClaimAddressAlert, PhoneAlert, TwoFAAlert, EmailAlert } from './Alerts'

const ProfileProgress = ({ percentageComplete, kycStatus, ethAddress, phone, emailVerified, isTwoFAEnabled, theme}) => {

  //console.log(ethAddress)

  return(
  <ProgressWrapper color={theme.palette.primary[0]} percentageComplete={percentageComplete}>
    <Card title= {
      <React.Fragment>
        <div className="progress-subtitle">
          Profile Status: <span className="percentage">{percentageComplete}% Complete</span>
        </div>
        <Progress percent={percentageComplete} status="active" strokeWidth={25} showInfo={false} />
      </React.Fragment>
    }>
      <div className="progress-list">
        <KycAlert kycStatus={kycStatus} />
        <ClaimAddressAlert ethAddress={ethAddress} />
        <PhoneAlert phone={phone} />
        <TwoFAAlert isTwoFAEnabled={isTwoFAEnabled} />
        <EmailAlert emailVerified={emailVerified} />
      </div>
    </Card>

  </ProgressWrapper>
)
}

export default ProgressModel(withTheme(ProfileProgress))