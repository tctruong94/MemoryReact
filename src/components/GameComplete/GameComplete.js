import React from 'react'

const GameComplete = ({ className }) => {
  return (
    <div className={className}>
      <p className="win">
        Congratulations, You won!
      </p>
      <br/>
      <a href="/new-game" className="newLink">
        Play again?
      </a>
    </div>
  )
}

export default GameComplete
