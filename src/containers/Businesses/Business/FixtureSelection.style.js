import styled from 'styled-components';
import { palette } from 'styled-theme';

const FixtureSelectionWrapper = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  box-sizing: border-box;

  .title {
    font-size: 18px;
    font-weight: bold;
  }

`
const Row = styled.div`
    height: 140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 12px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 3px;
    background-image: linear-gradient(to right, ${props => props.isActive? '#42da1096' : '#ff000066'}, transparent);

    .info-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }

    .row {
      display: flex;
      align-items: center;
    }

    .team {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 150px;
      min-height: 80px;
      padding-left: 15px;
      padding-right: 15px;
      box-sizing: border-box;
    }
    .team-name {
      font-size: 14px;
      font-weight: bold;
      text-align: center;
    }
`
export {Row}
export default FixtureSelectionWrapper