const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  details: [],
  search: [],
};
const gameReducer = (state = { initState }, action) => {
  switch (action.type) {
    case "FETCH_GAME":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    case "FETCH_SEARCH":
      return {
        ...state,
        search: action.payload.searched,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        search: [],
      };
    default:
      return { ...state };
  }
};

export default gameReducer;
