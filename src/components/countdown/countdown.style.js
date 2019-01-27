import styled from 'styled-components';

const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: center;
  justify-content: space-around;
  width: ${props => props.width};
  @media only screen and (max-width: 767px) {
      width: 100%;
      flex-direction: column;
    }
  background-color: #133775;
  color: white;
  padding: 5px 10px 25px 10px;
  .image {
    fill: white;
    margin-top: 15px;
    margin-bottom: 10px;
    background-image: ${props => `url(${props.logo})`};
    background-repeat: no-repeat;
    background-position: contain;
    background-size: contain;
    width: 50%;
    height: 60px;
  }

  .countdown {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .title {
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 15px;
    border-top 1px solid white;
    border-bottom 1px solid white;
  }

  .number {
    font-size: 40px;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
  }

  .link{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #205ac5;
    color: white;
    font-size: 18px;
    border-radius: 6px;
    padding: 18px 23px 18px 23px;
    text-decoration: none;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    transition: all 0.2s linear;
    &:hover {
      filter: brightness(120%);
      transform: translateY(-3px);
    }
  }
`;

export default VerticalWrapper
