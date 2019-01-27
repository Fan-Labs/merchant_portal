import styled from 'styled-components';

const Wrapper = styled.div`
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
    justify-content: flex-end;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
`
export default Wrapper