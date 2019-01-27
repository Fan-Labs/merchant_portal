import styled from 'styled-components';

const LiquidateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  .headline {
    font-size: 30px;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 15px;
  }

  .warning {
    color: red;
    font-size: 18px;
  }

  .content {
    margin-top: 15px;
    font-size: 16px;
  }

  li {
    margin: 5px 0px 5px 0px;
  }

  .dapp-frame {
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    min-height: 250px;
    border: 1px solid #00000057;
  }


`

export default LiquidateWrapper
