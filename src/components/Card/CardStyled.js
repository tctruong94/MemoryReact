import styled from 'styled-components'
import Card from './Card.js'

const Cardstyled = styled(Card)`
  height: 110px;
  width: 80px;
  position: relative;
  perspective: 360px;
  margin-bottom: 10px;

  .cardContent {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 10px;
    align-items: center;
    position: absolute;
    display: flex;
    justify-content: center;
    background-color:#FFFFFF;
    backface-visibility: hidden;
  }
  
  .frontContent {
    transform: rotateY(180deg);
  }
  
  .backContent {
    color: white;
    font-size: 50px;
  }

  .cardComponent {
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    transform-style: preserve-3d;
    user-select: none;

    img {
    width: 50px;
    }

    cursor: ${props => props.show ? 'default' : 'pointer'};

    ${props => !props.show &&
      `&:hover {
        opacity: .7
      }`
    };
    
    ${props => props.show &&
      `transform: rotateY(180deg)`
    };
  }

`

export default Cardstyled
