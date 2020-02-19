import { combineReducers } from "redux";
import { FETCH_TOP_GAMES, FETCH_GAME_STREAMS, CHANGE_SELETED_STREAM, OPEN_MODAL, CLOSE_MODAL } from "../constants/actionTypes"

const topGames = (state=[], action) => {
  switch(action.type) {
    case FETCH_TOP_GAMES:
      return action.topGames;
    default:
      return state;
  };
};

const streams = (state=[], action) => {
  switch(action.type) {
    case FETCH_GAME_STREAMS:
      return action.streams;
    default:
      return state;
  };
};

const stream = (state={}, action) => {
  switch(action.type) {
    case CHANGE_SELETED_STREAM:
      return action.stream;
    default:
      return state;
    };
};

const cursor = (state=null, action) => {
  switch(action.type) {
    case FETCH_GAME_STREAMS:
      return action.cursor;
    default:
      return state;
  }
}

const isModalOpen = (state=false, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false;
    default:
      return state;
  };
};

export default combineReducers({
  topGames,
  streams,
  stream,
  cursor,
  isModalOpen
});
