import * as types from "../constants/actionTypes";

export const fetchTopGamesAction = topGames => {
  return {
    type: types.FETCH_TOP_GAMES,
    topGames
  };
};

export const fetchGameStreamsAction = (streams, cursor) => {
  return {
    type: types.FETCH_GAME_STREAMS,
    streams,
    cursor
  }
};

export const changeSelectedStreamAction = stream => {
  return {
    type: types.CHANGE_SELETED_STREAM,
    stream
  }
};

export const openModalAction = () => {
  return {
    type: types.OPEN_MODAL
  }
};

export const closeModalAction = () => {
  return {
    type: types.CLOSE_MODAL
  }
};
