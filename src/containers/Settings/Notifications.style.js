import styled from 'styled-components';
import { palette } from 'styled-theme';

const NotificationsWrapper = styled.form`
  display: flex;
  flex-direction: column;

  .category {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0px 10px 0px;
  }

  .row {
    display: flex;
  }

  .item-row {
    display: flex;
    width: 200px;
    justify-content: space-between;
    margin-left: 15px;
    margin-bottom: 15px;
  }

  .submit-button {
    width: 20%;
    margin-top: 10px;
    @media only screen and (max-width: 767px) {
      width: 100%;
    } 
  }

  .header {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .susbscription-list {
    display: flex;
    flex-direction: column;
  }
`

export default NotificationsWrapper