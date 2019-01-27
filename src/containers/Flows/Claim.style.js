import styled from 'styled-components';

const ClaimWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  h1 {
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.65);
  }

  label {
    color: #4577b7;
    font-size: 22px;
    font-weight: 500;
  }

  form {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    width: 50%;
    @media only screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  .block {
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 767px) {
      margin-top: 8px;
    }
  }

  .submit-block {
    grid-column: 1 / 2;
  }

  .error {
    color: red;
  }
  
  .success {
    margin-top: 15px;
  }
  
  .balance {
    font-size: 32px;
    color: #04377a;
    font-weight: 500;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    &>:before {
      color: #04377a;
      margin-right: 5px;
    }
    @media only screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  .row {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .balance-column {
    display: flex;
    flex-direction: column;
    width: 50%;
    @media only screen and (max-width: 767px) {
      width: 100%;
      align-items: center;
    }
  }

  .balance-box {
    border: 1px solid #d8d8d8;
    padding: 10px 6px 10px 6px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }

  .table-section {
    margin-top: 35px;
    width: 100%;

    button {
      text-transform: uppercase;
    }
  }

  .table-title {
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    color: #3d6bbc;
  }

`

export default ClaimWrapper