import styled from 'styled-components';
import { palette } from 'styled-theme';

const CreateBusinessWrapper = styled.div`
  display: flex;
  width: 100%;

  form {
    width: 50%;
    padding: 5px;
    box-sizing: border-box;
  }

  .map {
    width: 50%;
    padding: 5px;
    box-sizing: border-box;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }


`

export default CreateBusinessWrapper