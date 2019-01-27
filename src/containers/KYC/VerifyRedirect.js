import React from 'react'
import Wrapper from './Verify.style'
import IntlMessages from '../../components/utility/intlMessages'
import { Spin, Progress } from 'antd'
import VerifyModel from '../../models/Verify/VerifyRedirect'


const Verify = ({ isLoading, didSucceed, params }) => (
  <Wrapper>
    <IntlMessages id="jumio.scanResult" />
    {isLoading && (
      <Spin size="large" />
    )}
    {!isLoading && didSucceed && (
      <Progress type="circle" percent={100} />
    )}
    {!isLoading && params && params.errorCode && (
      <Progress type="circle" percent={100} status="exception" format={() => `${params.errorCode}` } />
    )}
  </Wrapper>
)

export default VerifyModel(Verify)