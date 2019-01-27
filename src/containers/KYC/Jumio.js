import React from 'react'
import { Redirect } from 'react-router'
import JumioModel from '../../models/Verify/Jumio'
import { Icon } from 'antd'
import Button from '../../components/uielements/button'
import IntlMessages from '../../components/utility/intlMessages'
import JumioWrapper from './Jumio.style'

const Jumio = ({ kycAuthToken, kycStatus, setInvestStep }) => (
  <JumioWrapper>
  <div id="JUMIOIFRAME" className="iframe"></div>
    <Button type="normal" onClick={()=> setInvestStep(-1)}>
      <Icon type="left" /> <IntlMessages id="kyc.previous" />
    </Button>
    {(kycStatus==="PENDING") && (
      <Redirect to="/app/kyc_status" />
    )}
  </JumioWrapper>
)

export default JumioModel(Jumio)