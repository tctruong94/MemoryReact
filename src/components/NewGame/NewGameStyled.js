import styled from 'styled-components'
import NewGame from './NewGame.js'

const NewGameStyled = styled(NewGame)`
  .newTitle {
    text-align: center;
    font-weight: 300;
    font-size: 80px;
    color: black;
  }

  .newTitle2 {
    text-align: center;
    font-weight: 300;
    font-size: 50px;
    color: black;
  }
  .newLink {
    align-items: center;
    text-decoration: none;
    font-size: 30px;
    color: black;
    cursor: pointer;
    transition: opacity .3s ease-in-out;
    
    &:hover {
      opacity: .5;
    }
  }

 li{
    margin: 0;
    display: flex;

  }
`

export default NewGameStyled
