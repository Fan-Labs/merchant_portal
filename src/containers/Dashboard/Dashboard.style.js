import styled from 'styled-components';

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 767px) {
      flex-direction: column;
  }

  .column{
    display: flex;
    flex-direction: column;
    width: 100%;
    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }

  .welcomeRow {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .welcome {
    font-size: 24px;
    font-weight: 500;
    
    @media only screen and (max-width: 767px) {
      font-size: 18px;
    }
  }

  .welcomeMessage{
    font-weight: 300;
    font-size: 50px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  }

  .subheader {
    font-size: 18px;
    font-weight: 800;
  }

  .grid {
    display: grid;
    grid-gap: 30px;
  }

  .instructions {
    font-size: 20px;
    margin-bottom: 20px;
    @media only screen and (max-width: 767px) {
      font-size: 16px;
    }
  }

  .alerts {
    display: flex;
    flex-direction: column;
  }

  .alert {
    width: 100%;
    margin: 10px 0px 10px 0px;
  }

  .widget{
    padding: 10px 15px 10px 15px;
    background-color: #f1f5f9;
    grid-column: 3 / 5;
    @media only screen and (max-width: 767px) {
      grid-column: 1 / 2;
    }
    .widgetTitle{
      font-size: 24px;
      font-weight: 500;
      @media only screen and (max-width: 767px) {
        font-size: 18px;
        text-align: center;
      }
    }
  }
`

export default DashboardWrapper