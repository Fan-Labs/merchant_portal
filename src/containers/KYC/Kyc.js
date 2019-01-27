import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import KycWrapper from './Kyc.style'
import { KYC_STATUSES } from '../../constants'
import IntlMessages from '../../components/utility/intlMessages'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import Steps from './Steps'

const KYC = ({ kycStatus, hasPhone }) => (
  <LayoutContentWrapper>
    <LayoutContent width="80%">
      <KycWrapper>
        <div className="page-title">
          <IntlMessages id="kyc.pageTitle" />
        </div>
        <div className="explainer">
          <IntlMessages id="kyc.explainer" />
        </div>
        <div className="explainer-two">
          <IntlMessages id="kyc.explainerCountries" />
        </div>
        { (kycStatus === KYC_STATUSES.NO_ATTEMPT || kycStatus === KYC_STATUSES.ID_PENDING) ? (
          <div className="instructions">
            <IntlMessages id="kyc.noAttemptInstructions" />
          </div>
        ) : ""}
        {hasPhone? (
          <Steps />
        ) : (
          <div className="instructions">
            <Link to="/app/settings"><IntlMessages id="settings.phoneRequiredForKYC" /></Link>
          </div>
        )}
      </KycWrapper>
    </LayoutContent>
  </LayoutContentWrapper>
)

export default connect(
  (state, ownProps) => ({
    kycStatus: state.Auth.get('kyc_status'),
    hasPhone: state.Auth.get('user').phone,
  })
)(KYC)