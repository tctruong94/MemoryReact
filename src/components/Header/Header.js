import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({ className }) => (
  <header className={className}>
    <NavLink to="/new-game" className="newGame">
      Start Over
    </NavLink>
    <br></br>
  </header>
)



export default Header
