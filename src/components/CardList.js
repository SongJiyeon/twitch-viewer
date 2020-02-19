import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { PREV, NEXT } from "../constants/modeNames";
import './style.css';

export default function CardList ({ cards, cursor=null, title, setCardTitle, setCardImgUrl, onRender, onCardClick, onButtonClick }) {
  useEffect(() => {
    onRender();
  }, []);

  return (
    <div className='card-container'>
      {!!cards.length &&
      <div>
        <div className='card-list-title'>{title}</div>
        <div className='card-list'>
          <button className='card-prev-button card-button' onClick={() => onButtonClick(PREV, cards[0].game_id, cursor)}>
            <i className="fas fa-chevron-left fa-7x"></i>
          </button>
          <button className='card-next-button card-button' onClick={() => onButtonClick(NEXT, cards[0].game_id, cursor)}>
            <i className="fas fa-chevron-right fa-7x"></i>
          </button>
          {cards && cards.map(card => {
            return (
              <div className='card' key={card.id} onClick={() => onCardClick(card)}>
                <div className='card-title'>{setCardTitle(card)}</div>
                <img src={setCardImgUrl(card)} alt="" />
              </div>
            );
          })}
        </div>
      </div>}
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  setCardTitle: PropTypes.func.isRequired,
  setCardImgUrl: PropTypes.func.isRequired,
  onRender: PropTypes.func,
  onButtonClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired
}
