import styled from 'styled-components';
import { palette } from 'styled-theme';

const BusinessDetailsWrapper = styled.div`
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
  
  .row {
  	margin-top: 15px;
  	margin-bottom: 15px;
  	width: 80%;
  }


`

export default BusinessDetailsWrapper