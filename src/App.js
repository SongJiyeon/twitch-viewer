import React, { Component } from 'react';
import TopGames from "./containers/TopGames";
import GameStreams from "./containers/GameStreams";
import Modal from './containers/Modal'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="top-games">
          <TopGames />
        </div>
        <GameStreams />
        <Modal />
      </div>
    );
  }
}

export default App;
