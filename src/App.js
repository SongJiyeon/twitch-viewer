import React, { Component } from 'react';
import TopGames from "./containers/TopGames";
import GameStreams from "./containers/GameStreams";
import Modal from './containers/Modal';
import Header from './components/Header';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="top-games">
          <TopGames />
        </div>
        <div className='game-streams'>
          <GameStreams />
        </div>
        <Modal />
      </div>
    );
  }
}

export default App;
