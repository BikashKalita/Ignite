import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { loadGamesData } from "../action/gameAction";
import { useLocation } from "react-router-dom";
import Game from "../components/Game";
import GameDetails from "../components/GameDetail";
import { fadeIn } from "../animation";
const Home = () => {
  //fetch game
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGamesData());
  }, [dispatch]);

  //get the data
  const { popular, newGames, upcoming, search } = useSelector(
    (state) => state.games
  );
  //console.log(popular);
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  // console.log(pathId);
  return (
    <GameList variants={fadeIn} iinitial="hidden" animate="show">
      <AnimateSharedLayout>
        <AnimatePresence>
          {pathId && <GameDetails pathId={pathId} />}
        </AnimatePresence>
        {search && search.length ? (
          <div>
            <h2>Search Games</h2>
            <Games>
              {search.map((game) => (
                <Game
                  slug={game.slug}
                  name={game.name}
                  images={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming &&
            upcoming.map((game) => (
              <Game
                slug={game.slug}
                name={game.name}
                images={game.background_image}
                video={game.clip.clip}
                key={game.id}
              />
            ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular &&
            popular.map((game) => (
              <Game
                slug={game.slug}
                name={game.name}
                images={game.background_image}
                key={game.id}
              />
            ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames &&
            newGames.map((game) => (
              <Game
                slug={game.slug}
                name={game.name}
                images={game.background_image}
                key={game.id}
              />
            ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    h2 {
      padding: 2rem 0;
    }
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-row-gap: 2rem;
  }
`;
export default Home;
