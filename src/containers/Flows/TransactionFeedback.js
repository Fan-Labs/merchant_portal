import React from 'react'
import { Spin,  Alert } from 'antd';
import TransactionWrapper from './Transaction.style.js'
import TransactionFeedbackModel from '../../models/Invest/TransactionFeedback'

const TransactionFeedback = ({ isLoading, transactionConfirmed }) => (
  <TransactionWrapper>
    <Spin spinning={isLoading}>
    {transactionConfirmed? (
        <Alert
        message="Transaction Confirmed"
        description= "Thank you for investing in Hyperion Fund"
        type={isLoading? "info" : "success"}
        showIcon
      />
    ): (
      <Alert
        message="Waiting for confirmation"
        description="Waiting for transaction confirmation"
        type="info"
        showIcon
      />
    )}
      <div className="row">
        <span className="isoMenuHolderSocial"><a href="https://twitter.com/ic_invictus" target="_blank" rel="noopener noreferrer" title="Twitter"><i className="ion-social-twitter" /></a></span>
        <span className="isoMenuHolderSocial"><a href="https://www.facebook.com/Invictus-Capital-337934410058549/" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="ion-social-facebook" /></a></span>
        <span className="isoMenuHolderSocial"><a href="https://www.youtube.com/channel/UC0g401KOgBqe-XouUhlvvcw" target="_blank" rel="noopener noreferrer" title="YouTube"><i className="ion-social-youtube" /></a></span>
        <span className="isoMenuHolderSocial"><a href="https://www.reddit.com/r/InvictusCapital/" target="_blank" rel="noopener noreferrer" title="Reddit"><i className="ion-social-reddit" /></a></span><br/>
        <span className="isoMenuHolderSocial"><a href="mailto:info@invictuscapital.com" target="_blank" rel="noopener noreferrer" title="Email"><i className="ion-email" /></a></span>
        <span className="isoMenuHolderSocial"><a href="https://www.linkedin.com/company/invictuscapital/" target="_blank" rel="noopener noreferrer" title="Linkedin"><i className="ion-social-linkedin" /></a></span>
        <span className="isoMenuHolderSocial"><a href="https://medium.com/@CRYPTOtwenty" target="_blank" rel="noopener noreferrer" title="Medium">M</a></span>
      </div>
    </Spin>
  </TransactionWrapper>
)

export default TransactionFeedbackModel(TransactionFeedback)