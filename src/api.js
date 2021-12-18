//Base Url
const base_url = "https://rawg.io/api/";

//getting data
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDate = () => {
  const date = new Date().getDate();
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};

// current day
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDate = getCurrentDate();
const today = `${currentYear}-${currentMonth}-${currentDate}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDate}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDate}`;

//api url
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${today}&page_size=9`;
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${today},${nextYear}&page_size=9`;
const new_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${today}&ordering=-released&page_size=9`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

export const gameDetailsURL = (id) =>
  `${base_url}games/${id}?key=${process.env.REACT_APP_RAWG_API}`;

export const gameScreenShotURL = (id) =>
  `${base_url}games/${id}/screenshots?key=${process.env.REACT_APP_RAWG_API}`;

export const searchGameURL = (name) =>
  `${base_url}games?page_size=9&search=${name}&page=1&key=${process.env.REACT_APP_RAWG_API}`;
