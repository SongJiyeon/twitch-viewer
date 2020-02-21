import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';

export default function CardList (props) {
  return (
    <div className='card-container'>
      <div className='card-list-title'>{props.title}</div>
      <div className='card-list'>
        {props.children}
        {props.cards && props.cards.map(card => {
          return (
            <div className='card' key={card.id} onClick={() => props.onClick(card)}>
              {props.setCardTitle && <div className='card-title'>{props.setCardTitle(card)}</div>}
              {props.setCardImgUrl && <img src={props.setCardImgUrl(card)} alt="" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

CardList.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  children: PropTypes.array,
  setCardTitle: PropTypes.func,
  setCardImgUrl: PropTypes.func,
  onClick: PropTypes.func
};
