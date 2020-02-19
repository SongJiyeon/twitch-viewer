import { connect } from "react-redux";
import CardList from "../components/CardList";
import { fetchTopGames, fetchGameStreams } from "../utils/api";
import { PREV, NEXT } from "../constants/modeNames";

const CARDWIDTH = '200';
const CARDHEIGHT = '272';

const mapStateToProps = state => {
  console.log(state);
  return {
    cards: state.topGames,
    cursor: null,
    title: 'Top Games',
    setCardTitle(card) {
      return card.name;
    },
    setCardImgUrl(card) {
      return card.box_art_url.replace('{width}', CARDWIDTH).replace('{height}', CARDHEIGHT);
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRender() {
      fetchTopGames(dispatch);
    },
    onCardClick(game) {
      fetchGameStreams(game.id, dispatch, null, null);
    },
    onButtonClick(mode) {
      switch(mode) {
        case PREV:
          return console.log('prev');
        case NEXT:
          return console.log('next');
        default:
          return console.log('default');
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
