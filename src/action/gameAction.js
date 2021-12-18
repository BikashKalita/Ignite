import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

//action
export const loadGamesData = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAME",
    payload: {
      popular: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
    },
  });
};

export const fetchSearch = (name) => async (dispatch) => {
  const searchGame = await axios.get(searchGameURL(name));
  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      searched: searchGame.data.results,
    },
  });
};
