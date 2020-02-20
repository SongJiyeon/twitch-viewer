import axios from "axios";
import * as actions from "../actions";

const api = axios.create({
  headers: {
    'Client-ID': '2g3403r94753zm9wo5sidmlqtihskf'
  }
});

export const fetchTopGames = async (dispatch) => {
  await dispatch(actions.fetchTopGamesPending());
  try {
    const result = await api.get('https://api.twitch.tv/helix/games/top?first=10');
    await dispatch(actions.fetchTopGamesSuccess(result.data.data));
  } catch (error) {
    dispatch(actions.fetchTopGamesError());
  }
};

export const fetchGameStreams = async (gameId, dispatch, cursor, mode) => {
  await dispatch(actions.fetchGameStreamsPending());
  try {
    const url = `https://api.twitch.tv/helix/streams?game_id=${gameId}`;
    const result = await api.get(cursor ? url+`&${mode}=${cursor}` : url)
    dispatch(actions.fetchGameStreamsSuccess(result.data.data, result.data.pagination.cursor));
  } catch (error) {
    dispatch(actions.fetchGameStreamsError());
  }
  
};
