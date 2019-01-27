import React from 'react'
import Invest from '../Flows/Invest'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import logo from '../../image/funds/hyperion_logo.svg'

const InvestWrapper = ({match}) => (
  <LayoutContentWrapper>
    <LayoutContent>
      <Invest fund={match.params.fund} logoUrl={logo} />
    </LayoutContent>
  </LayoutContentWrapper>
)

export default InvestWrapper