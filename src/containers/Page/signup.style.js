import styled from 'styled-components';
import { palette } from 'styled-theme';
import WithDirection from '../../config/withDirection';
import companyLogo from '../../image/Gamedex_Lockup_Black.svg'

const SignUpStyleWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  background-size: cover;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 1;
    top: 0;
    left: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '0')};
    right: ${props => (props['data-rtl'] === 'rtl' ? '0' : 'inherit')};
  }

  .isoSignUpContentWrapper {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    z-index: 10;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
  }

  .isoSignUpContent {
    min-height: 100%;
    width: 33%;
    display: flex;
    flex-direction: column;
    padding: 70px 50px;
    position: relative;
    background-color: #ffffff;

    @media only screen and (max-width: 767px) {
      width: 100%;
      padding: 70px 20px;
    }

    .logo {
      background: url(${companyLogo}) no-repeat center center;
      background-size: contain;
      width: 100%;
      height: 35px;
      min-height: 35px;
      margin-bottom: 15px;
    }

    .isoLogoWrapper {
      width: 100%;
      display: flex;
      margin-bottom: 50px;
      justify-content: center;
      flex-shrink: 0;

      a {
        font-size: 24px;
        font-weight: 300;
        line-height: 1;
        color: ${palette('primary', 0)};
      }
    }

    .isoSignUpForm {
      width: 100%;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;

      .required {
        border-color: ${palette('secondary', 0)};
      }

      .message {
        color: ${palette('error', 0)};
        margin-top: 15px;
      }
      .success {
        color: ${palette('success', 0)};
      }

      .isoInputWrapper {
        margin-bottom: 15px;

        &:last-child {
          margin-bottom: 0;
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
      }

      .isoLeftRightComponent {
        input {
          width: calc(100% - 10px);

          &:first-child {
            margin-right: ${props =>
              props['data-rtl'] === 'rtl' ? 'inherit' : '20px'};
            margin-left: ${props =>
              props['data-rtl'] === 'rtl' ? '20px' : 'inherit'};
          }
        }
      }

      .isoHelperWrapper {
        margin-top: 35px;
        flex-direction: column;
      }

      .isoForgotPass {
        font-size: 12px;
        color: ${palette('text', 2)};
        margin-bottom: 10px;

        &:hover {
          color: ${palette('primary', 0)};
        }
      }

      button {
        font-weight: 500;
        width: 100%;
        height: 42px;
        border: 0;
      }
    }
  }
`;

export default WithDirection(SignUpStyleWrapper);
