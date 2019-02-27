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

  .column {
    width: 50%;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  .ant-carousel .slick-slide {
    text-align: center;
    height: 150px;
    background: transparent;
    overflow: hidden;
  }

  .ant-carousel .slick-slide h3 {
    color: #fff;
  }

  img {
    object-fit: contain;
    height: 150px;

  }

`

export default CreateBusinessWrapper