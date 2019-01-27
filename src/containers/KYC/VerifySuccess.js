import React from 'react'
import KycWrapper from './Kyc.style'
import IntlMessages from '../../components/utility/intlMessages'
import { Spin, Progress } from 'antd'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import { NotVerifiedAlert } from '../../containers/Dashboard/Alerts'
import VerifyModel from '../../models/Verify/Verified'

const Verified = ({ isLoading, kycStatus }) => (
  <LayoutContentWrapper>
    <LayoutContent width="60%">
      <KycWrapper>
      <div className="centered">
        <div className="page-title">
          <IntlMessages id="kyc.statusPage" />
        </div>
        {isLoading && (
          <Spin size="large" />
        )}
        {kycStatus==="APPROVED"  && (
          <React.Fragment>
            <div className="sub-title">
              <IntlMessages id="kyc.done" />
            </div>
            <Progress type="circle" percent={100} width={80} />
          </React.Fragment>
        )}
        {kycStatus==="PENDING"  && (
          <React.Fragment>
            <div className="sub-title">
              <IntlMessages id="dashboard.KYCPending" />
            </div>
            <Progress type="circle" status="active" percent={65} format={percent => <IntlMessages id="kyc.pending" />} />
          </React.Fragment>
        )}
        {kycStatus==="DELAYED"  && (
          <React.Fragment>
            <div className="sub-title">
              <IntlMessages id="dashboard.KYCDelayed" />
            </div>
            <Progress type="circle" status="exception" percent={60} format={percent => <IntlMessages id="kyc.delayed" />} />
          </React.Fragment>
        )}
        { (kycStatus==="NO_ATTEMPT" || kycStatus==="ID_PENDING")  && (
          <NotVerifiedAlert />
        )}
      </div>
      </KycWrapper>
    </LayoutContent>
  </LayoutContentWrapper>
)

export default VerifyModel(Verified)