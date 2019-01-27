import styled from 'styled-components';

const AMLWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  .button-row {
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .page-title {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
    @media only screen and (max-width: 767px) {
      font-size: 26px;
    }
  }

  .sub-title {
    font-size: 18px;
    margin-bottom: 15px;
  }

  .explainer {
    font-size: 20px;
    margin-bottom: 10px;
    @media only screen and (max-width: 767px) {
      font-size: 18px;
    }
  }

  .explainer-two {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 16px;
  }

  .instructions {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 18px;

  }
`

export default AMLWrapper