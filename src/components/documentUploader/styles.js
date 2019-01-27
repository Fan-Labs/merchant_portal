import styled from 'styled-components';

const AMLWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  .upload-button {
    margin-top: 10px;
  }

  .list-title {
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }

  .button-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

export default AMLWrapper