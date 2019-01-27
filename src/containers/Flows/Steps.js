import React from 'react'
import { Steps } from 'antd'
import { StepsWrapper } from './Deposit.style.js'
import StepsModel from '../../models/Invest/InvestSteps'

const Step = Steps.Step

const InvestFlow = ({ investStep, steps }) => (
  <StepsWrapper>
    <Steps current={investStep}>
      {steps.map(item => <Step key={item.title} title={item.title} />)}
    </Steps>
    <div className="currentStepWrapper">
      {steps[investStep > steps.length-1? steps.length-1 : investStep].component}
    </div>
  </StepsWrapper>
)

export default StepsModel(InvestFlow)