import React from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import FundHistory from '../../components/fundHistory/fundHistory'

const History = () => (
  <LayoutContentWrapper>
    <LayoutContent>
      <FundHistory fund="crypto20" textKey="history.crypto20.intro" />
    </LayoutContent>
  </LayoutContentWrapper>
)
export default History

