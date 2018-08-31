import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { clearGame } from '../../setupGame/gameState.js'
import setGameLevel from '../../setupGame/setGameLevel.js'
import NewGame from './NewGameStyled';



class connectNewGame extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirectToGame: false
    }

    this.handleSelectedLevel = this.handleSelectedLevel.bind(this)
  }

//Function: handleSelectedLevel
//Description: Takes in the selected level and recreats a new game with that level of difficulty
  handleSelectedLevel(level) {
    clearGame()
    setGameLevel(level)
    this.setState({
      redirectToGame: true
    })
  }

  render() {
    return this.state.redirectToGame
      ? <Redirect to="/game" />
      : <NewGame onLevelSelect={this.handleSelectedLevel} />
  }
}

export default connectNewGame
