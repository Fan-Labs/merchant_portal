import styled from 'styled-components';
import { palette } from 'styled-theme';

const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: center;
  width: ${props => props.width};
  @media only screen and (max-width: 767px) {
      width: 100%;
      flex-direction: column;
    }
  justify-content: space-around;
  background-color: #2f3896;
  border: 2px solid #f2f2f2;
  color: white;
  padding: 8px 20px 20px 20px;
  
  .image {
    display:${props => props.direction!=='column'? 'none' : 'inherit'};
    fill: white;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    background-image: ${props => `url(${props.logo})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: ${props => props.direction==='column'? '80%' : '20%'};
    height: 60px;
    @media only screen and (max-width: 767px) {
      width: 80%;
    }
  }

  .title {
    font-size: 30px;
    font-weight: 800;
    border-top: 1px solid;
    margin: ${props => props.direction=='column'? '0px' : '8px 0px 10px 0px'};
    border-bottom: 1px solid;
    padding: 4px 0px 4px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    text-align: center;
    @media only screen and (max-width: 767px) {
      text-align: center;
    }
  }

  .subtitle {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    margin: ${props => props.direction=='column'? '0px 8px 5px 8px' : '0px 10px 0px 10px'};
  }

  .value-label {
    text-align: center;
    text-transform: capitalize;
    font-weight: 300;
    font-size: 22px;
    margin-top: ${props => props.direction=='column'? '20px' : '0px'};
  }

  .columnish {
    display: flex;
    flex-direction: column;
  }

  .rowish {
    display: flex;
    flex-direction: ${props => props.direction? props.direction : 'flex-start'};
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 767px) {
      width: 100%;
      flex-direction: column;
      margin-bottom: 0px;
    }
  }

  a {
    text-align: center;
    text-transform: uppercase;
    background-color: #2554c7;
    color: white;
    padding: 10px 12px 10px 12px;
    margin-top: 10px;
    font-weight: 500;
    font-size: 18px;
  }

`;

export default VerticalWrapper
