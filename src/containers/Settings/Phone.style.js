import styled from 'styled-components';

const PhoneWrapper = styled.div`
  min-height: 400px;
  width: 100%;


  .verifyButton {
    margin-left: 20px;
    @media only screen and (max-width: 767px) {
      margin: 15px 0px 10px 0px;
    }
  }

  .header {
    font-size: 18px;
    margin-bottom: 10px;
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
    margin-top: 10px;
  }


`

const OTPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .label {
    font-weight: 500;
    font-size: 22px;
  }
  .resend {
    margin: 10px 0px 10px 0px;
    color: #1890ff;
    font-size: 18px;
    cursor: pointer;
  }

  .error {
    color: red;
    margin-top: 10px;
  }

`;

export {OTPWrapper}
export default PhoneWrapper