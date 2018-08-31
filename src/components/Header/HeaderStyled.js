import styled from 'styled-components'
import Header from './Header.js'

const HeaderStyled = styled(Header)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 20px;
  background-color: white;
  color: black;
  z-index: 10;
  
  .newGame{
    color: black;
    text-decoration: none;
  }
`

export default HeaderStyled
