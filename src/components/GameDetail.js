import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { resize } from "../resize";

//images {find better solution}
import playstation from "../img/playstation.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import pc from "../img/pc.svg";
import android from "../img/android.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetails = ({ pathId }) => {
  const { game, screenshots, loading } = useSelector((state) => state.details);
  const history = useHistory();
  const togglerHandler = (e) => {
    const element = e.target;
    // console.log(element);
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //platfroms
  const getPlatform = (platform) => {
    switch (platform) {
      case "xbox":
        return xbox;
      case "pc":
        return pc;
      case "playstation":
        return playstation;
      case "nintendo":
        return nintendo;
      case "mac":
        return apple;
      case "android":
        return android;
      default:
        return gamepad;
    }
  };

  //Rating
  const getRating = () => {
    const star = [];
    const rating = Math.floor(game.rating);
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        star.push(<img src={starFull} alt="star" key={i} />);
      } else {
        star.push(<img src={starEmpty} alt="star" key={i} />);
      }
    }
    return star;
  };

  return (
    <>
      {!loading && (
        <CardShadow className="shadow" onClick={togglerHandler}>
          <Details layoutId={pathId}>
            <h2>{game.name}</h2>
            <Stats>
              <div className="rating">
                <p>Rating: {game.rating}</p>
                {getRating()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.parent_platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.slug)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={resize(game.background_image, 640)}
                alt={game.background_image}
              />
            </Media>
            <Description
              dangerouslySetInnerHTML={{ __html: game.description }}
            ></Description>
            <div className="gallery">
              {screenshots.map((data) => (
                <img
                  src={resize(data.image, 640)}
                  alt={data.id}
                  key={data.id}
                />
              ))}
            </div>
          </Details>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  position: fixed;
  z-index: 5;
  background-color: rgb(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  img {
    width: 100%;
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  z-index: 10;
  position: absolute;
  left: 10%;
  background: #fff;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    left: 0;
    h2 {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    display: inline;
    height: 2rem;
    width: 2rem;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 1rem;
      height: 1rem;
    }
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: center;
  img {
    margin-left: 3rem;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      margin: auto;
      height: 1rem;
    }
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  p {
    margin: 1rem 0rem;
  }
`;

export default GameDetails;
