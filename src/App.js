import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './containers/Modal';
import TopGames from './containers/TopGames';
import GameStreams from './containers/GameStreams';
import Header from './components/layouts/Header';
import Error from './components/status/Error';
import { fetchTopGames, fetchGameStreams } from './utils/api';
import { setGameNameAction } from './actions/index'
import './App.css';
import ModalDetails from './components/ModalDetails';

class App extends Component {

  componentDidMount() {
    this.props.fetchTopGames();
  }

  render() {
    return (
      <div className="App">
        <Header logoUrl='https://brand.twitch.tv/assets/logos/svg/wordmark-extruded/black.svg' />
        {this.props.error ?
        <Error /> 
        :(
        <div>
          <div className="top-games">
            <TopGames />
          </div>
          <div className="game-streams">
            <GameStreams />
          </div>
        </div>
        )}
        {this.props.isModalActive &&
        <Modal>
          <ModalDetails stream={this.props.stream} />
        </Modal>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topGames: state.topGames,
    stream: state.stream,
    pending: state.topGamePending,
    isModalActive: state.isModalActive,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTopGames() {
      return new Promise(resolve => {
        fetchTopGames(dispatch);
        resolve();
      });
    },
    fetchBestGameStreams(bestGame) {
      console.log('best game@');
      fetchGameStreams(bestGame.id, dispatch);
      dispatch(setGameNameAction("the Best Game Now"));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
