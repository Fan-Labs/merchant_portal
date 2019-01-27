import React from 'react'
import Button from '../../components/uielements/button'
import Wrapper from './DefaultETHStep.style.js'
import DefaultETH from '../Settings/DefaultETHAddress'
import ETHStepModel from '../../models/Invest/ETHStep'

const ETHStep = ({ next, eth_address }) => (
  <Wrapper>
    <DefaultETH />
    <div className="row">
    <Button className="next-button" type="default" onClick={next} disabled={eth_address? false : true}>Next ></Button>
    </div>
  </Wrapper>
)

export default ETHStepModel(ETHStep)