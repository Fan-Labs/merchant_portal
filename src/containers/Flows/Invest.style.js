import styled from 'styled-components';

const InvestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 767px) {
    align-items: center;
  }

  .titleRow {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .rowItem {
    margin-right: 25px;
    @media only screen and (max-width: 767px) {
      margin: 0px 0px 15px 0px;
      justify-content: center;
      text-align: center;
    }
  }

  .timeline {
    margin-right: 20px;
    @media only screen and (max-width: 767px) {
      justify-self: center;
    }
  }

  .logo {
    //background: url(${props => props.logoUrl}) no-repeat center center;
    width: 200px;
    height: 70px;
    margin-right: 30px;
    @media only screen and (max-width: 767px) {
      margin: 0px 0px 20px 0px;
    }
  }

  .InvestContent {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 0.1fr 0.9fr;
    grid-gap: 25px;
    @media only screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .column {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  .alert {
    width: 100%;
    margin: 10px 0px 10px 0px;
  }
`

export default InvestWrapper