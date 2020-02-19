import axios from "axios";
import { fetchTopGamesAction, fetchGameStreamsAction } from "../actions";

const api = axios.create({
  headers: {
    'Client-ID': '2g3403r94753zm9wo5sidmlqtihskf'
  }
});

export const fetchTopGames = async (dispatch) => {
  const result = await api.get('https://api.twitch.tv/helix/games/top?first=10');
  await dispatch(fetchTopGamesAction(result.data.data));
};

export const fetchGameStreams = async (gameId, dispatch, cursor, mode) => {
  const url = `https://api.twitch.tv/helix/streams?game_id=${gameId}`;
  const result = await api.get(cursor ? url+`&${mode}=${cursor}` : url);
  await dispatch(fetchGameStreamsAction(result.data.data, result.data.pagination.cursor));
};
