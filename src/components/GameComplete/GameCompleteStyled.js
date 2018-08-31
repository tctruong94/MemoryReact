import GameComplete from './GameComplete.js'
import styled from 'styled-components'


const EndGameStyled = styled(GameComplete)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: 30px;
  line-height: 1.5;
  
  .win {
    display: block;
    text-align: center;
  }
  
  .newLink {
    color: black;
    text-decoration: none;
    
    &:hover {
      opacity: .7
    }
  }
`

export default EndGameStyled
