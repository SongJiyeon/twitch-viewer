import React from 'react';
import { PREV, NEXT } from '../constants/modeNames';
import CardList from './layouts/CardList';
import PrevBoxButton from './buttons/PrevBoxButton';
import NextBoxButton from './buttons/NextBoxButton';
import Loading from './status/Loading';
import './style.css';

const CARDWIDTH = '422';
const CARDHEIGHT = '240';

export default function GameStreams ({ cards, cursor, title, pending, onCardClick, onButtonClick }) {
  const setCardTitle = (card) => {
    if (card.title.length > 30) {
      return card.title.slice(0, 30) + '...';
    } else {
      return card.title;
    }
  }
  const setCardImgUrl = (card) => {
    return card.thumbnail_url.replace('{width}', CARDWIDTH).replace('{height}', CARDHEIGHT);;
  }
  return (
    <>
      {pending ?
      <Loading />
      :(
      <CardList
        title={title}
        cards={cards}
        setCardTitle={setCardTitle}
        setCardImgUrl={setCardImgUrl}
        onClick={onCardClick}>
        <PrevBoxButton onClick={() => onButtonClick(PREV, cards[0].game_id, cursor)} />
        <NextBoxButton onClick={() => onButtonClick(NEXT, cards[0].game_id, cursor)} />
      </CardList>
      )}
    </>
  );
};
