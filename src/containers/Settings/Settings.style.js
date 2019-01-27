import styled from 'styled-components';

const UploadWrapper = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  .upload-block {
    box-sizing: border-box;
    padding: 15px;
    width: 50%;
    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }
`


export {UploadWrapper}