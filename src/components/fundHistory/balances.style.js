import styled from 'styled-components';

const BalancesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  .page-subtitle {
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  .page-subtext {
    font-size: 18px;
    margin-bottom: 15px;
  }

  .coming {
    font-size: 18px;
  }

  @media only screen and (max-width: 767px) {
    align-items: center;
  }

`;

export default BalancesWrapper