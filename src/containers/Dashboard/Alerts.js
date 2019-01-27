import React from 'react'
import { Link } from 'react-router-dom';
import IntlMessages from '../../components/utility/intlMessages';
import { Alert } from 'antd'

const KycAlert = ({kycStatus}) => (
  <React.Fragment>
  { kycStatus === "NO_ATTEMPT" && (
    <NotVerifiedAlert />
  )}
  { kycStatus === "ID_PENDING" && (
    <NotVerifiedAlert />
  )}
  { kycStatus === "APPROVED" && (
    <VerifiedAlert />
  )}
  { kycStatus === "DELAYED" && (
    <DelayedAlert />
  )}
  { kycStatus === "PENDING" && (
    <PendingAlert />
  )}
  </React.Fragment>
)

const VerifiedAlert = () => (
    <Alert
      message={<IntlMessages id="dashboard.KYCConfirmedTitle" />}
      type="success"
      showIcon
    />
)

const IdPendingAlert = () => (
    <Alert
      message={<IntlMessages id="dashboard.KYCIdPendingTitle" />}
      description={
        <React.Fragment>
          <IntlMessages id="dashboard.KYCIdPending" /><br/>
          <Link to="/app/kycverification">
            <IntlMessages id="dashboard.KYCIdLink" />
          </Link>
        </React.Fragment>
      }
      type="info"
      showIcon
    />
)

const PendingAlert = () => (
    <Alert
      message={<IntlMessages id="dashboard.KYCPendingTitle" />}
      description={<IntlMessages id="dashboard.KYCPending" />}
      type="info"
      showIcon
    />
)

const DelayedAlert = () => (
    <Alert
      message={<IntlMessages id="dashboard.KYCDelayedTitle" />}
      description={<IntlMessages id="dashboard.KYCDelayed" />}
      type="warning"
      showIcon
    />
)

const NotVerifiedAlert = () => (
    <Alert
      message={
        <IntlMessages id="dashboard.KYCUnconfirmedTitle" />
      }
      description={
        <React.Fragment>
          <IntlMessages id="dashboard.KYCUnconfirmed" /><br/>
          <Link to="/app/kycverification">
            <IntlMessages id="dashboard.KYCLink" />
          </Link>
        </React.Fragment>
      }
      type="error"
      showIcon
    />
)

const ClaimAddressAlert = ({ethAddress}) => (
  <React.Fragment>
  { ethAddress?
    <Alert
      message={<IntlMessages id="dashboard.ClaimAddressPresent" />}
      type="success"
      showIcon
    />
    :
    <Alert
      message={
      <div className="alert-content">
        <IntlMessages id="dashboard.ClaimAddress" />&nbsp;&nbsp;
          <Link to="/app/settings">
            <IntlMessages id="topbar.settings" />
          </Link>
        </div>
      }
      type="error"
      showIcon
    />
  }
  </React.Fragment>
)

const PhoneAlert = ({phone}) => (
  <React.Fragment>
  { phone?
    <Alert
      message={<IntlMessages id="dashboard.PhonePresent" />}
      type="success"
      showIcon
    />
    :
    <Alert
      message={
        <div className="alert-content">
        <IntlMessages id="dashboard.NoPhone" />&nbsp;&nbsp;
          <Link to="/app/settings">
            <IntlMessages id="topbar.settings" />
          </Link>
        </div>
      }
      type="error"
      showIcon
    />
  }
  </React.Fragment>
)

const TwoFAAlert = ({isTwoFAEnabled}) => (
  <React.Fragment>
  {isTwoFAEnabled}
  { isTwoFAEnabled?
    <Alert
      message={<IntlMessages id="dashboard.2FAPresent" />}
      type="success"
      showIcon
    />
    :
    <Alert
      message={
        <div className="alert-content">
          <IntlMessages id="dashboard.No2FA" />&nbsp;&nbsp;
          <Link to="/app/settings">
            <IntlMessages id="topbar.settings" />
          </Link>
        </div>
      }
      type="warning"
      showIcon
    />
  }
  </React.Fragment>
)

const EmailAlert = ({emailVerified}) => (
  <React.Fragment>
  { emailVerified?
    <Alert
      message={<IntlMessages id="dashboard.EmailVerified" />}
      type="success"
      showIcon
    />
    :
    <Alert
      message={
        <div className="alert-content">
          <IntlMessages id="dashboard.NoEmail" />&nbsp;&nbsp;
          <Link to="/app/settings">
            <IntlMessages id="topbar.settings" />
          </Link>
        </div>
      }
      type="warning"
      showIcon
    />
  }
  </React.Fragment>
)

export default KycAlert
export { NotVerifiedAlert, ClaimAddressAlert, PhoneAlert, TwoFAAlert, EmailAlert, IdPendingAlert }