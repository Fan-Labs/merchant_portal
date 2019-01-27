import styled from 'styled-components';
import { palette } from 'styled-theme';

const UserDetailsWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 50%;
  margin-top: 20px;
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    grid-gap: 5px;
  }

  .first-half {
    grid-column: 1 / 3;
    @media only screen and (max-width: 767px) {
      grid-column: 1 / 4;
    }
  }

  .second-half {
    grid-column: 3 / 5;
    @media only screen and (max-width: 767px) {
      grid-column: 1 / 4;
    }
  }

  .row {
    grid-column: 1 / 5;
    @media only screen and (max-width: 767px) {
      grid-column: 1 / 4;
    }
  }

  .three-quarters {
    grid-column: 1 / 4;
    @media only screen and (max-width: 767px) {
      grid-column: 1 / 4;
    }   
  }

  .right-button {
    grid-column: 4 / 5;
    align-self: flex-end;
    justify-self: end;
    @media only screen and (max-width: 767px) {
      grid-column: 1 / 4;
      width: 100%;
    }   
  }

  .update-button {
    @media only screen and (max-width: 767px) {
      grid-column: 1 / 4;
    } 
  }


  label {
    font-weight: 500;
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

  button {
    font-weight: 500;
    width: 100%;
    height: 42px;
    border: 0;
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

export default UserDetailsWrapper