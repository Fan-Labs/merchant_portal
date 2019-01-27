import styled from 'styled-components';
import { palette } from 'styled-theme';

const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .ant-progress-bg {
    background-color: ${props => props.percentageComplete<26? palette('error', 0) : (props.percentageComplete<76? palette('warning', 0) : palette('success', 0))};
  }

  .progress-list {
    .ant-alert {
      border: none;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    width: 100%;
    @media only screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      .ant-alert {
        margin-bottom: 10px;
      }
    }
  }

  .progress-title {
    font-size: 22px;
    font-weight: 500;
  }

  .progress-subtitle {
    font-size: 16px;
    font-style: italic;
    margin-bottom: 10px;
  }

  .percentage {
    color: ${props => props.percentageComplete<26? palette('error', 0) : (props.percentageComplete<76? palette('warning', 0) : palette('success', 0))};
  }

`

export default ProgressWrapper