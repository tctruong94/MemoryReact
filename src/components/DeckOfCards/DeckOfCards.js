import React from 'react';
import {chunk} from 'lodash'

import {Card, Header} from '../../components'

const DeckOfCards = ({ cards, className, onClick }) => {
  const chunkedCards = chunk(cards,6)

  return (
    <div className={className}>
      <Header/>
      <div className="CardsContent">
        {chunkedCards.map((DeckOfCards, index) =>
          <ul key={index}>
            {DeckOfCards.map((card, index) =>
              <Card
                className="Card"
                id={card.id}
                key={`${card.name}--${index}`}
                name={card.name}
                onClick={() => !card.show && onClick(card.id, card.name)}
                show={card.show}
              />
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

export default DeckOfCards;
