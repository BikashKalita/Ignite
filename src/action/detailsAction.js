import axios from "axios";
import { gameDetailsURL, gameScreenShotURL } from "../api";

const loadDetailsAction = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  const gameDetails = await axios.get(gameDetailsURL(id));
  const getScreenShots = await axios.get(gameScreenShotURL(id));
  dispatch({
    type: "FETCH_DETAIL",
    payload: {
      details: gameDetails.data,
      screenshots: getScreenShots.data.results,
    },
  });
};
export default loadDetailsAction;
