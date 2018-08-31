import styled from 'styled-components'
import DeckOfCards from './DeckOfCards.js'

const DeckOfCardsStyled = styled(DeckOfCards)`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .CardsContent {
    margin: 80px 0;
    width: 100%;
    max-width: 1000px;
  }

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export default DeckOfCardsStyled
