import {dropRight, shuffle} from 'lodash'
import cards from '../content/cards.js'
import { saveSettings } from '../setupGame/gameState.js'


//Function: getGameSize
//Description: Functiont that is called to set the game difficulty
const getGameSize = (level) => {
  switch (level) {
    case 'easy':
      return 18
    case 'medium':
      return 24
    case 'hard':
      return 30

    default:
      return 12
  }
}

//Function: getGameLevel
//Description: Gets the game level and calculates the number of cards required and returns that array and number of cards
const getGameLevel = (level) => {
  const shuffledCards = shuffle(cards)
  const boardSize = getGameSize(level)
  const numberOfCards = shuffledCards.length - boardSize

  return dropRight(shuffledCards, numberOfCards)
}

//Function: setGameLevel
//Description: Set the level of the game from the user's choice
const setGameLevel = (level) => {
  saveSettings({
    level
  })
}

export {
  getGameLevel
}

export default setGameLevel
