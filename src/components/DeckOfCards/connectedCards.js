import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { drop, random, shuffle } from 'lodash'
import { getGameLevel } from '../../setupGame/setGameLevel'
import { loadGame, loadSettings, saveGame } from '../../setupGame/gameState'

import DeckOfCards from './DeckOfCardsStyled.js'

//Class: connectedCards
//Description: To start the game, connecting the DeckOfCards and putting them in a board like apperance
class connectedCards extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    const cards = this.constructor.getState()

    this.state = loadGame() ? loadGame() : {
      cards,
      cardAttempts: [],
      cardAttemptsCount: 0,
      gameFinished: false
    }
  }

//Function: getState()
//Desription: Get and generate the correct level and number of DeckOfCards for the game
//Output: Returns the correct array with the correct length of DeckOfCards
  static getState() {
    const levelSelected = loadSettings('level')
    const cards = getGameLevel(levelSelected)
    const states = []
    const Cardstack = shuffle([...cards, ...cards])

    for (let i=0; i<Cardstack.length; i++) {
      states.push({
        id: `${Cardstack[i]}-${random(0,100)}`,
        name: Cardstack[i],
        show: false
      })
    }

    return states
  }

//Function: getIndex()
//Description: Get the index of a current card
//Output: Returns current DeckOfCards id
  getIndex(id) {
    return this.state.cards.findIndex(card => {
      return card.id === id
    })
  }

//Function: showCard()
//Description: Show the current card being clicked
  showCard(id) {
    const cardIndex = this.getIndex(id)

    const cards = [...this.state.cards]
    cards[cardIndex].show = true

    this.setState({
      cards
    })
  }

//Function: hideCard()
//Description: Hide the last 2 attempted DeckOfCards since they do not match
  hideCard(id) {
    const cardIndex = this.getIndex(id)

    const cards = [...this.state.cards]
    cards[cardIndex].show = false

    this.setState({
      cards
    })
  }

//Function: addAttempts()
//Description: Add attempt to the cardAttemptsCount variable
  addAttempts(id, name) {
    const cardAttempts = this.state.cardAttempts
    cardAttempts.push({
      id,
      name
    })

    this.setState({
      cardAttempts,
      cardAttemptsCount: ++this.state.cardAttemptsCount
    })
  }

//Function: compareAttempts()
//Description: Takes the 2 most recent attempts and compares if the two DeckOfCards are the same
//Output: Returns true if DeckOfCards are equal
  compareAttempts() {
    const attempts = this.state.cardAttempts

    return attempts[0].name === attempts[1].name
  }

//Function: clearPrevAttempts()
//Description: Clears the field of previous attempts to reset for the next attempts
  clearPrevAttempts() {
    const attempts = [...this.state.cardAttempts]

    this.setState({
      cardAttempts: drop(attempts, 2),
      cardAttemptsCount: 1
    })
  }

//Funtion: CheckAttempts
//Description: If the DeckOfCards are not equal, call the hideCards function to flip the 2 selected DeckOfCards back over and clear the previous attempts
  checkAttempts() {
    if (!this.compareAttempts()) {
      this.hideCard(this.state.cardAttempts[0].id)
      this.hideCard(this.state.cardAttempts[1].id)
    }

    this.clearPrevAttempts()
  }

//Function: CheckAllRevealed
//Description: Check if all the DeckOfCards have been revealed
  checkAllRevealed() {
    const notShown = this.state.cards.some(card => {
      return !card.show
    })

    return !notShown
  }

//Function: saveGameState()
//Description: Save the current games state
  saveGameState() {
    saveGame(this.state)
  }

//Function: endGame()
//Description: Is called when the game has finished and all the DeckOfCards are revealed
  endGame() {
    setTimeout(
      () => {
        this.setState({
          gameFinished: true
        })
      }, 1500
    )
  }

//Function: handleClick()
//Description: This funtion handles what happens when two DeckOfCards are clicked.
//             First they are shown, then added to attempted list and compared.
//             If this happens to be the last two DeckOfCards, check for that, and end the game if true.

  handleClick(cardId, cardName) {
    this.showCard(cardId)
    this.addAttempts(cardId, cardName)

    if (this.state.cardAttemptsCount === 3) {
      this.checkAttempts()
    }

    if (this.checkAllRevealed()) {
      this.endGame()
    }

    this.saveGameState()
  }


  render() {
    return this.state.gameFinished
      ? <Redirect to="/game-complete" />
      : <DeckOfCards
          cards={this.state.cards}
          onClick={this.handleClick}
        />
  }
}

export default connectedCards
