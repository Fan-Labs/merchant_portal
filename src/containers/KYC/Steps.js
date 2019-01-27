import React from 'react'
import StepMap from '../../models/Verify/StepMap'
import { Icon } from 'antd'
import { Steps } from 'antd'
import StepsWrapper from './Steps.style'
import IntlMessages from '../../components/utility/intlMessages'
import StepsModel from '../../models/Verify/Steps'

const Step = Steps.Step

const KYCSteps = ({ kycStatus, investStep, setInvestStep, submitKYCerror, isLoading, requiredSteps }) => {
  debugger
  return(
  <StepsWrapper>
    <Steps current={investStep} size="small">
      {requiredSteps.map((step, i) => {
        return(<Step key={`stepKey_${i}`} title={StepMap[step].title} icon={i===2? <Icon type="exception" /> : null} />)
      })}
    </Steps>
    <div className="currentStepWrapper">
      {requiredSteps.length>0? StepMap[requiredSteps[investStep]].component : null}
    {submitKYCerror && (
      <div className="error">
        <IntlMessages id={submitKYCerror} />
      </div>
    )}
    </div>
  </StepsWrapper>
)
}

export default StepsModel(KYCSteps)