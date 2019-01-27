import styled from 'styled-components';
import { palette } from 'styled-theme';

const AddressWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  margin-top: 20px;
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    width: 100%;
    grid-gap: 5px;
  }

  .first-half {
    grid-column: 1 / 2;
    @media only screen and (max-width: 767px) {
      grid-column: 1 / 3;
    }
  }

  .second-half {
    grid-column: 2 / 3;
    @media only screen and (max-width: 767px) {
      grid-column: 1 / 3;
    }
  }

  .row {
    grid-column: 1 / 3;
  }
  .required {
    color: red;
  }

  label {
    font-weight: 500;
    display: flex;
  }

  input {
    &::-webkit-input-placeholder {
      color: ${palette('grayscale', 0)};
    }

    &:-moz-placeholder {
      color: ${palette('grayscale', 0)};
    }

    &::-moz-placeholder {
      color: ${palette('grayscale', 0)};
    }
    &:-ms-input-placeholder {
      color: ${palette('grayscale', 0)};
    }
  }

  .last-footer-button {
    grid-column: 2 / 3;
    display: flex;
    justify-content: flex-end;
  }

  .first-footer-button {
    grid-column: 1 / 2;
    display: flex;
  }

  .success{
    grid-column: 2 / 3;
    color: green;
  }
  .fail{
    grid-column: 2 / 3;
    color: red;
  }


`

export default AddressWrapper