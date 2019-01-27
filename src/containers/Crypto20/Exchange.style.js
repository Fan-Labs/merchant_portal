import styled from 'styled-components';

const ExchangeWrapper = styled.div`
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

  button {
    margin: 30px;
    font-size: 18px;
    height: 65px;
    width: 250px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 0px 2px rgba (0,0,0,0.3);
    background: rgb(141,217,252);
     cursor: pointer;
   }
`

export default ExchangeWrapper
