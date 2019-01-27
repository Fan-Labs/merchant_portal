import styled from 'styled-components';

const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .page-title {
    font-size: 30px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  .info-messages {
    word-break: break-all;
  }

  .page-subtitle {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  .page-note {
    margin-bottom: 2rem;
    margin-top: 20px;
  }
  @media only screen and (max-width: 767px) {
    padding: 20px;
    margin: 0 10px 30px;
  }
  .transaction-row {
    font-size: 1vw;
  }
  @media screen and (min-width: 1400px) {
    .transaction-row {
       font-size: 1rem;
     }
  }

  td, th {
    padding: 5px !important;
    white-space: no-wrap;
  }
  .table-wrapper {
    overflow: scroll;
    width: 100%;
    .ant-table-wrapper {
      @media only screen and (max-width: 767px) {
        width: 200vw;
      }
    }
    td {
      font-size: 13px;
    }
  }
  .table-title {
    font-size: 14px;
    @media only screen and (max-width: 767px) {
      font-size: 12px;
    }
  }
`;

export default HistoryWrapper
