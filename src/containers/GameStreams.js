import { connect } from "react-redux";
import CardList from "../components/CardList";
import { changeSelectedStreamAction, openModalAction } from "../actions";
import { PREV, NEXT } from "../constants/modeNames";
import { fetchGameStreams } from "../utils/api";

const CARDWIDTH = '480';
const CARDHEIGHT = '272';

const mapStateToProps = state => {
  return {
    cards: state.streams,
    cursor: state.cursor,
    title: 'Streaming Videos',
    setCardTitle(card) {
      if (card.title.length > 30) {
        return card.title.slice(0, 30) + '...';
      } else {
        return card.title;
      }
    },
    setCardImgUrl(card) {
      return card.thumbnail_url.replace('{width}', CARDWIDTH).replace('{height}', CARDHEIGHT);;
    }
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
      switch(mode) {
        case PREV:
          return fetchGameStreams(gameId, dispatch, cursor, 'before');
        case NEXT:
          return fetchGameStreams(gameId, dispatch, cursor, 'after');
        default:
          return console.log('default');
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
