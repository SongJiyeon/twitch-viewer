import { connect } from "react-redux";
import CardList from "../components/CardList";
import { fetchTopGames, fetchGameStreams } from "../utils/api";
import { PREV, NEXT } from "../constants/modeNames";
import { setGameNameAction } from "../actions/index";

const CARDWIDTH = '160';
const CARDHEIGHT = '240';

const mapStateToProps = state => {
  return {
    cards: state.topGames,
    cursor: null,
    title: 'Top Games',
    setCardTitle(card) {
      return card.name;
    },
    setCardImgUrl(card) {
      return card.box_art_url.replace('{width}', CARDWIDTH).replace('{height}', CARDHEIGHT);
    },
    pending: state.topGamePending,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRender() {
      fetchTopGames(dispatch);
    },
    onCardClick(game) {
      fetchGameStreams(game.id, dispatch, null, null);
      dispatch(setGameNameAction(game.name));
    },
    onButtonClick(mode) {
      const cardList = document.querySelector('.card-list');
      const cardContainer = document.querySelector('.card-container');
      switch(mode) {
        case PREV:
          return cardList.scrollLeft -= cardContainer.offsetWidth;
        case NEXT:
          return cardList.scrollLeft += cardContainer.offsetWidth;
        default:
          return cardList.scrollLeft += cardContainer.offsetWidth;
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
