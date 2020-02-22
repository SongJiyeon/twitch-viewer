import React from 'react';
import { PREV, NEXT } from '../constants/modeNames';
import CardList from './layouts/CardList';
import PrevBoxButton from './buttons/PrevBoxButton';
import NextBoxButton from './buttons/NextBoxButton';
import Loading from './status/Loading';
import { truncate } from '../utils/helper'
import './style.css';

const CARDWIDTH = '422';
const CARDHEIGHT = '240';

export default function GameStreams ({ cards, cursor, title, pending, onCardClick, onButtonClick }) {
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
        setCardTitle={truncate}
        setCardImgUrl={setCardImgUrl}
        onClick={onCardClick}>
        <PrevBoxButton onClick={() => onButtonClick(PREV, cards[0].game_id, cursor)} />
        <NextBoxButton onClick={() => onButtonClick(NEXT, cards[0].game_id, cursor)} />
      </CardList>
      )}
    </>
  );
};
