import styled from 'styled-components';

const OTPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .error {
    color: red;
    margin-top: 20px;
  }

  .backup{
    font-size: 10px;
    margin-top: 25px;
  }

  .send-backup {
    margin-top: 15px;
  }

  .field {
    margin: 8px 0px 8px 0px;
  }

  .login {
    margin-top: 15px;
    font-weight: 800;
  }
`

export default OTPWrapper