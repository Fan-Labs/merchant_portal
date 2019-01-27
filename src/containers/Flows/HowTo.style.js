import styled from 'styled-components';
import screenshot from '../../image/HowToScreenshot.png'

const HowToWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .stepTitle {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
    @media only screen and (max-width: 767px) {
      font-size: 18px;
    }
  }

  .step {
    font-size: 18px;
    overflow-wrap: break-word;
    margin-bottom: 20px;
    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  }

  .image {
    width: 90%;
    height: 400px;
    margin-bottom: 15px;
     background: url(${screenshot}) no-repeat center center;
     background-size: contain;
    @media only screen and (max-width: 767px) {
      height: 250px;
    }
  }
`

export default HowToWrapper