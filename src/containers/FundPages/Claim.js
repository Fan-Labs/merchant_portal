import React from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import Claim from '../Flows/Claim'

const ClaimWrapper = ({match}) => (
  <LayoutContentWrapper>
    <LayoutContent>
      <Claim fund="Gamedex" />
    </LayoutContent>
  </LayoutContentWrapper>
)

export default ClaimWrapper