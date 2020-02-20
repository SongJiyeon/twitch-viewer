import { connect } from "react-redux";
import CardList from "../components/CardList";
import { changeSelectedStreamAction, openModalAction } from "../actions";
import { PREV, NEXT } from "../constants/modeNames";
import { fetchGameStreams } from "../utils/api";

const CARDWIDTH = '422';
const CARDHEIGHT = '240';

const mapStateToProps = state => {
  return {
    cards: state.streams,
    cursor: state.cursor,
    title: state.gameName,
    setCardTitle(card) {
      if (card.title.length > 30) {
        return card.title.slice(0, 30) + '...';
      } else {
        return card.title;
      }
    },
    setCardImgUrl(card) {
      return card.thumbnail_url.replace('{width}', CARDWIDTH).replace('{height}', CARDHEIGHT);;
    },
    pending: state.gameStreamPending,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRender() {
      return null;
    },
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
            return fetchGameStreams(gameId, dispatch, cursor, 'before');
          } else {
            return cardList.scrollLeft -= cardContainer.offsetWidth;
          }
        case NEXT:
          if (cardList.scrollLeft + cardList.offsetWidth === cardList.scrollWidth) {
            return fetchGameStreams(gameId, dispatch, cursor, 'after');
          } else {
            return cardList.scrollLeft += cardContainer.offsetWidth;
          }
        default:
          return;
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
