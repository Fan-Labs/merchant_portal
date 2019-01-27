import styled from 'styled-components';

const DepositWrapper = styled.div`
  width: 100%;
  .title {
    font-size: 16px;
    margin-bottom: 20px;
    @media only screen and (max-width: 767px) {
      text-align: center;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    @media only screen and (max-width: 767px) {
      grid-template-columns: 1fr;
      grid-gap: 15px;
    }
  }

  .info {
    font-size: 16px;
    margin: 5px 0px 10px 0px;
    font-weight: 500;
  }
`

const CardImage = styled.div`
  background: url(${props => props.imgUrl}) no-repeat center center;
  margin: 10px 0px 10px 0px;
  background-size: contain;
  width: 100%;
  height: 100px;
`

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  .rate-block {
    display: flex;
    flex-direction: column;
    width: 30%;
    @media only screen and (max-width: 767px) {
      width: 100%;
      align-items: center;
    }
  }

  .field-header {
    font-weight: 500;
    margin: 8px 0px 8px 0px;
  }

  .field-data {

  }

  .instructions {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .row{
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  .ant-card ant-card-head{
    background: 323b4e9 !important;
    background-color: 323b4e9 !important;
  }

  .address{
    color: white;
    font-size: 24px;
    font-weight: 500;
    word-break: break-all;
    @media only screen and (max-width: 767px) {
      font-size: 14px;
      text-align: center;
    }
  }

  .centered {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rates{
    font-size: 24px;
    width: 100%;
    font-weight: 500;
    @media only screen and (max-width: 767px) {
      font-size: 16px;
      text-align: center;
      margin-bottom: 20px;
    }
  }
`

 const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  .currentStepWrapper {
    margin-top: 40px;
    padding: 15px;
    background-color: #f1f5f9;
  }
 `

export default DepositWrapper
export { CardImage, AddressWrapper, StepsWrapper }