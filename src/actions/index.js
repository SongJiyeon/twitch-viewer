import * as types from "../constants/actionTypes";

export const fetchTopGamesPending = () => {
  return {
    type: types.FETCH_TOP_GAMES_PENDING
  };
};

export const fetchTopGamesSuccess = topGames => {
  return {
    type: types.FETCH_TOP_GAMES_SUCCESS,
    topGames
  };
};

export const fetchTopGamesError = () => {
  return {
    type: types.FETCH_TOP_GAMES_ERROR
  };
};

export const fetchGameStreamsPending = () => {
  return {
    type: types.FETCH_GAME_STREAMS_PENDING
  };
};

export const fetchGameStreamsSuccess = (streams, cursor) => {
  return {
    type: types.FETCH_GAME_STREAMS_SUCCESS,
    streams,
    cursor
  };
};

export const fetchGameStreamsError = () => {
  return {
    type: types.FETCH_GAME_STREAMS_ERROR
  };
};

export const setGameNameAction = gameName => {
  return {
    type: types.SET_GAME_NAME,
    gameName
  };
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
