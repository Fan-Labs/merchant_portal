import styled from 'styled-components';
import { palette } from 'styled-theme';

const CreateBusinessFormWrapper = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${palette('grayscale', 0)};
  width: 150px;
  height: 200px;
  
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }


`

export default CreateBusinessFormWrapper