import React from 'react'
import IntlMessages from '../../components/utility/intlMessages'
import Button from '../../components/uielements/button'
import { Icon, Alert } from 'antd'
import Withdrawals from '../../components/fundHistory/withdrawals'
import ClaimWrapper from './Claim.style'
import ClaimForm from './ClaimForm'
import ClaimModel from '../../models/Claim/Claim'

const Claim = ({ fund, balance, isLoading, submitClaimError, tokenClaimResult, setTokenClaimResult, showClaimForm, initiateClaim, handleSubmit }) => (
  <ClaimWrapper >
      <h1>
        <IntlMessages id="claim.title"
          values={{
            fund,
          }}
        />
      </h1>
      <p><IntlMessages id="claim.explainer" /></p>
      <p><b><IntlMessages id="claim.warning" /></b></p>
      <p><IntlMessages id="claim.note" /></p>      
      <div className="balance-column">
        <div className="balance">
          <i className="icon-hyperion-icon" />
          <IntlMessages id="claim.balance"
            values={{
              fund,
            }}
          />
        </div>
        <div className="balance-box">
         {isLoading? ("Loading...") : ( 
           <React.Fragment>
           {balance? (Math.floor(balance * 100000) / 100000) : "--"}
           </React.Fragment>
         )}
        </div>
      </div>
      <div className="table-section">
        {!showClaimForm? (
          <React.Fragment>
            <Withdrawals fund={fund} />
            <Button type="primary" onClick={initiateClaim}>
              <IntlMessages id="claim.claim_balance"
                values={{
                  fund,
                }}
              />
              <Icon type="right-circle" />
            </Button>
          </React.Fragment>
        ) : (
          <ClaimForm
            onSubmit={handleSubmit}
            setTokenClaimResult={setTokenClaimResult}
            isLoading={isLoading}
           />
        )}
        {tokenClaimResult && (
          <div className="success">
            <Alert message={<IntlMessages id="claim.token_claim_success" />} type="success" showIcon />
          </div>
        )}
        {submitClaimError && (
          <div className="error">
            <IntlMessages id={submitClaimError} />
          </div>
        )}
      </div>       
  </ClaimWrapper>
)

export default ClaimModel(Claim);
