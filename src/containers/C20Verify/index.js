import React from 'react'
import C20Verify from '../Flows/C20Verify'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import VerifyWrapper from './style'

const Verify = () => (
  <LayoutContentWrapper>
    <LayoutContent>
      <VerifyWrapper>
        <C20Verify />
      </VerifyWrapper>
    </LayoutContent>
  </LayoutContentWrapper>
)

export default Verify