export const resize = (imgPath, size) => {
  const resizedImg = imgPath.match(/media\/screenshots/)
    ? imgPath.replace("media/screenshots", `media/resize/${size}/-/screenshots`)
    : imgPath.replace("media/games", `media/resize/${size}/-/games`);
  return resizedImg;
};
export const resizeGameImage = (imgPath) => {
  if (imgPath.match(/media\/games/)) {
    return imgPath.replace("media/games", `media/crop/600/400/games`);
  }
};
