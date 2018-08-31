import React from 'react'

  const Card = ({ className, id, name, onClick }) => {
  const image = require(`./images/${name}.svg`)
  const image2 = require(`./images/nbalogo.svg`)

  return image ? (
    <li className={className}>
      <a className="cardComponent" onClick={() => onClick(id, name)}>
        <div className="cardContent backContent"> <img alt="nbalogo" src={image2} />
        </div>
        <div className="cardContent frontContent"> <img src={image} alt={name} />
        </div>
      </a>
    </li>
  ) : null
}

export default Card
