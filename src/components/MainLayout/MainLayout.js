import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { DeckOfCards, GameComplete, NewGame } from '../../components'

const MainLayout = ({ className }) => (
  <BrowserRouter>
    <div className={className}>
      <Route exact path="/" render={() => <Redirect to="/new-game" />} />
      <Route path="/new-game" component={NewGame} />
      <Route path="/game" component={DeckOfCards} />
      <Route path="/game-complete" component={GameComplete} />
    </div>
  </BrowserRouter>
)

export default MainLayout
