import styled from 'styled-components';
import { palette } from 'styled-theme';

const BusinessPageWrapper = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;

  .business-name {
    font-size: 18px;
    font-weight: bold;
  }
  
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  .banner {
    background-image: ${props => `url(${props.image})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 100px;
  }

  .card-text-container {
    height: 100px;
    max-height: 100px;
    overflow: hidden;
    text-overflow: ellipses;
  }

  .events {
    font-size: 9px;
  }


`

export default BusinessPageWrapper