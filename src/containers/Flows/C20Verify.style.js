import styled from 'styled-components';

const C20Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 767px) {
    align-items: center;
    text-align: center;
  }

  .explainer {
    width: 100%;
    margin-bottom: 15px;
    font-size: 18px;
  }

  .verified {
    display: flex;
    flex-direction: column;
    font-size: 24px;
    align-items: center;
  }

  .jsonText {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }

  .errorMessage {
    font-size: 14px;
    color: red;
    margin-left: 5px;
    margin-right: 5px;
    @media only screen and (max-width: 767px) {
      margin: 0px 0px 10px 0px;
    }  
  }

  .verifyRow {
    margin: 15px 0px 15px 0px;
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  .verifyButton {
     @media only screen and (max-width: 767px) {
      margin-bottom: 10px;
    }   
  }

  .signThis {
    font-size: 21px;
    margin: 15px;
    word-break: break-all;
  }

  .signThisError {
    font-size: 20px;
    color: red;
  }


`

export default C20Wrapper