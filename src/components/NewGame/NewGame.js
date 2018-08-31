import React from 'react'

const LevelLink = ({ children, onClick, type }) => {
  return (
    <a onClick={onClick} className="newLink">
      {children}
    </a>
  )
}

const NewGame = ({
  className,
  onLevelSelect
}) => (
  <div className={className}>
    <h1 className="newTitle">
    The Memory Game
    </h1>

    <h3 className="newTitle2">
    Level Selection:
    </h3>
    
    <center>
      <ul>
        <LevelLink type="easy" onClick={() => onLevelSelect('easy')}> Easy </LevelLink>
      </ul>
      <ul>
        <LevelLink type="medium" onClick={() => onLevelSelect('medium')}> Medium </LevelLink>
      </ul>
      <ul>
        <LevelLink type="hard" onClick={() => onLevelSelect('hard')}> Hard </LevelLink>
      </ul>
    </center>

  </div>
)

export default NewGame
