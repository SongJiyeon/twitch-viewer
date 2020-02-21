import { connect } from 'react-redux';
import TopGames from '../components/TopGames';
import { fetchGameStreams } from '../utils/api';
import { setGameNameAction } from '../actions/index';

const mapStateToProps = state => {
  return {
    cards: state.topGames,
    pending: state.topGamePending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCardClick(game) {
      fetchGameStreams(game.id, dispatch);
      dispatch(setGameNameAction(game.name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopGames);
