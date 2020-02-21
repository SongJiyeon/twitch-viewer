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

class App extends Component {

  componentDidMount() {
    this.props.fetchTopGames();
  }

  render() {
    this.props.topGames.length && this.props.fetchBestGameStreams(this.props.topGames[0]);

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
        {this.props.isActive && <Modal />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topGames: state.topGames,
    isActive: state.isActive,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTopGames() {
      fetchTopGames(dispatch);
    },
    fetchBestGameStreams(bestGame) {
      fetchGameStreams(bestGame.id, dispatch);
      dispatch(setGameNameAction("the Best Game Now"));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
