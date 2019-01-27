import styled from 'styled-components';

const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 80vh;
  overflow: scroll;
  padding: 0px 14px 14px 14px;
  width: 100%;
  color: rgba(0, 0, 0, 0.65);

  h1 {
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 500;
    margin-top: 15px;
    color: rgba(0, 0, 0, 0.65);
  }

  p {
    margin-top: 15px;
  }

  h2 {
    margin-top: 15px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 18px;
  }

  h3 {
    color: rgba(0, 0, 0, 0.65);
  }

  .invest {
    font-size: 32px;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1;
  }

  .subtitle {
    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 15px;    
  }

  .accept {
    width: 50%;
    @media only screen and (max-width: 767px) {
      width: 100%;
    }

    button {
      white-space: normal;
      padding: 8px 0px 8px 0px;
      height: auto;
    }
  }

  .accept-terms {
    margin-top: 15px;
    text-transform: uppercase;
    width: 100%;
    @media only screen and (max-width: 767px) {
      font-size: 12px;
    }
  }
`

export default TermsWrapper