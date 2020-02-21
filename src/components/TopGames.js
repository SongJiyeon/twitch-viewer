import React from 'react';
import { PREV, NEXT } from '../constants/modeNames';
import PrevBoxButton from './buttons/PrevBoxButton';
import NextBoxButton from './buttons/NextBoxButton';
import CardList from './layouts/CardList';
import Loading from './status/Loading';
import './style.css';

const CARDWIDTH = '160';
const CARDHEIGHT = '240';

export default function TopGames ({ cards, pending, onCardClick }) {

  const setCardImgUrl = (card) => {
    return card.box_art_url.replace('{width}', CARDWIDTH).replace('{height}', CARDHEIGHT);
  };

  const onButtonClick = mode => {
    const cardList = document.querySelector('.card-list');
    const cardContainer = document.querySelector('.card-container');
    switch(mode) {
      case PREV:
        return cardList.scrollLeft -= cardContainer.offsetWidth;
      case NEXT:
        return cardList.scrollLeft += cardContainer.offsetWidth;
      default:
        return cardList.scrollLeft += cardContainer.offsetWidth;
    };
  }

  return (
    <>
      {pending ?
      <Loading />
      :(
      <CardList
        title="Top Games"
        cards={cards}
        setCardImgUrl={setCardImgUrl}
        onClick={onCardClick}>
        <PrevBoxButton onClick={() => onButtonClick(PREV)} />
        <NextBoxButton onClick={() => onButtonClick(NEXT)} />
      </CardList>
      )}
    </>
  );
};
