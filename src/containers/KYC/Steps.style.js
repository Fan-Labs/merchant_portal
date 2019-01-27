import styled from 'styled-components';

const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .currentStepWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .error {
    color: red;
  }

`

export default StepsWrapper