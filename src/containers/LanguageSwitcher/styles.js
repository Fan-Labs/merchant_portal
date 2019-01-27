import styled from 'styled-components';


const DropdownWrapper = styled.div`
  width: 30px;
  /*margin-right: 25px;*/

  .flag{
    width: 100%;
  }

  .flag-button {
    width: 25px;
    height: 18px;
  }
`
const MenuButton = styled.div`
  width: 30px;
  height: 26px;
  background-image: ${props => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
  padding: 1px;
  .flag{
    width: 100%;
  }
`


export default DropdownWrapper
export { MenuButton }