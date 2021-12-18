const initState = {
  game: {},
  screenshots: {},
  loding: true,
};

const detailReducer = (state = { initState }, action) => {
  switch (action.type) {
    case "FETCH_DETAIL":
      return {
        ...state,
        game: action.payload.details,
        screenshots: action.payload.screenshots,
        loading: false,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
