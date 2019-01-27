import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
  }


  .row {
    display: flex;
    justify-content: space-between;
    padding: 8px 10px 8px 10px;

    .mv-item {
      display: flex;
      align-items: baseline;
      margin: 0px 5px 0px 5px;
    }
  }

  .time-unit {
    position: relative;
    font-size: 12px;
    font-weight: 500;
    color: #a2a2a2;
  }

  .percentage {
    font-weight: 500;
    font-size: 16px;
  }

  .negative {
    i {
      position: absolute;
      bottom: -10px;
      right: 0px;
      color: red;
    }
  }

  .positive {
    i {
      position: absolute;
      bottom: 10px;
      right: 0px;
      color: green;
    }
  }
`
export default Wrapper

const ExchangeCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    background-color: #d4d4d4;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    width: 100%;
  }

  .card {
    width: 25%;
    background-color: #c6d9fb;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
  }

  .exchange-logo {
    background-image: ${props => `url(${props.logo})`};
    background-repeat: no-repeat;
    background-position: contain;
    background-size: contain;
    width: 60%;
    height: 80px;
    margin: 10px 0px 10px 0px;
  }



`
export {ExchangeCardWrapper}