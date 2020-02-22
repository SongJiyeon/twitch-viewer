import { combineReducers } from 'redux'
import * as types from "../constants/actionTypes"

const topGamePending = (state = false, action) => {
  switch(action.type) {
    case types.FETCH_TOP_GAMES_PENDING:
      return true;
    case types.FETCH_TOP_GAMES_SUCCESS:
      return false;
    case types.FETCH_TOP_GAMES_ERROR:
      return false;
    default:
      return state;
  }
};

const gameStreamPending = (state = false, action) => {
  switch(action.type) {
    case types.FETCH_GAME_STREAMS_PENDING:
      return true;
    case types.FETCH_GAME_STREAMS_SUCCESS:
      return false;
    case types.FETCH_GAME_STREAMS_ERROR:
      return false;
    default:
      return state;
  }
};

const error = (state = false, action) => {
  switch(action.type) {
    case types.FETCH_TOP_GAMES_ERROR:
      return true;
    case types.FETCH_GAME_STREAMS_ERROR:
      return true;
    default:
      return state;
  }
};

const topGames = (state = [], action) => {
  switch(action.type) {
    case types.FETCH_TOP_GAMES_SUCCESS:
      return action.topGames;
    default:
      return state;
  };
};

const streams = (state = [], action) => {
  switch(action.type) {
    case types.FETCH_GAME_STREAMS_SUCCESS:
      return action.streams;
    default:
      return state;
  };
};

const stream = (state = {}, action) => {
  switch(action.type) {
    case types.CHANGE_SELETED_STREAM:
      return action.stream;
    default:
      return state;
    };
};

const cursor = (state = null, action) => {
  switch(action.type) {
    case types.FETCH_GAME_STREAMS_SUCCESS:
      return action.cursor;
    default:
      return state;
  }
}

const gameName = (state = '', action) => {
  switch(action.type) {
    case types.SET_GAME_NAME:
      return action.gameName;
    default:
      return state;
  }
}

const isModalActive = (state = false, action) => {
  switch(action.type) {
    case types.OPEN_MODAL:
      return true;
    case types.CLOSE_MODAL:
      return false;
    default:
      return false;
  }
}

export default combineReducers({
  topGamePending,
  gameStreamPending,
  error,
  topGames,
  streams,
  stream,
  cursor,
  gameName,
  isModalActive
});
