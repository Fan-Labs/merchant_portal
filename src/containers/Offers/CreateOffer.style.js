import styled from 'styled-components';
import { palette } from 'styled-theme';

const CreateOfferWrapper = styled.form`
  display: flex;
  padding: 10px;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;

  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .label {
    display: flex;
    flex-direction: row;
    font-weight: bold;
    box-sizing: border-box;
    padding: 5px;
  }

  .header {
    font-size: 18px
    font-weight: bold;
  }
`
const SelectOfferTypeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  .type-button {
    transition: all .4s ease;
    white-space: normal;
    padding: 10px;
    width: 90px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-weight: bold;
  }

  .selected {
    border-width: none !important;
    background-color: rgba(0,128,0,0.2) !important;
  }

  .type-text {

  }

  .type-description {

  }



  .icon {
      display: flex;
      align-items: center;

      i {
        font-size: 19px;
        color: inherit;
        width: 18px;
      }
    }

`
export {SelectOfferTypeWrapper}
export default CreateOfferWrapper