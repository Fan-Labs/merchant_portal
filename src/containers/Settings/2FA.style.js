import styled from 'styled-components';

const TwoFAWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .explainer {
    font-size: 20px;
    margin-bottom: 15px;
    @media only screen and (max-width: 767px) {
      font-size: 15px;
      text-align: center;
    }
  }

  .centered-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card {
    padding: 15px;
    width: 40%;
    background-color: #f1f5f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 767px) {
      width: 90%;
    }
  }

  .provisioning {
    word-break: break-all;
    padding: 10px 15px 10px 15px;
    background-color: #f1f5f9;
    width: 100%;
    font-size: 10px;
    text-align: center;
    margin-bottom: 15px;
  }

  .steps {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    margin-bottom: 15px;
  }

  .row {
    display: flex;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  .success {
    color: green;
    margin-top: 10px;
  }

  .error {
    color: red;
    margin-top: 15px;
    text-align: center;
  }

  .warning {
    color: red;
    margin-top: 15px;
    text-align: center;
  }
`
export default TwoFAWrapper