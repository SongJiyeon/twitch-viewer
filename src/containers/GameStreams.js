import { connect } from 'react-redux';
import GameStreams from '../components/GameStreams';
import { changeSelectedStreamAction, openModalAction } from '../actions';
import { PREV, NEXT } from '../constants/modeNames';
import { fetchGameStreams } from '../utils/api';

const mapStateToProps = state => {
  return {
    cards: state.streams,
    cursor: state.cursor,
    title: state.gameName,
    pending: state.gameStreamPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCardClick(stream) {
      dispatch(changeSelectedStreamAction(stream));
      dispatch(openModalAction());
    },
    onButtonClick(mode, gameId, cursor) {
      const cardList = document.querySelector('div.game-streams div.card-list');
      const cardContainer = document.querySelector('.card-container');

      switch(mode) {
        case PREV:
          if (!cardList.scrollLeft) {
            return fetchGameStreams(gameId, dispatch, cursor, "before");
          } else {
            return cardList.scrollLeft -= cardContainer.offsetWidth;
          }
        case NEXT:
          if (cardList.scrollLeft + cardList.offsetWidth === cardList.scrollWidth) {
            return fetchGameStreams(gameId, dispatch, cursor, "after");
          } else {
            return cardList.scrollLeft += cardContainer.offsetWidth;
          }
        default:
          return;
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameStreams);
