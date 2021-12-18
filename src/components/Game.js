import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import loadDetailsAction from "../action/detailsAction";
import { resize } from "../resize";
import { popUp } from "../animation";

const Game = ({ name, images, slug, video }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetailsAction(slug));
  };
  return (
    <Gamecard
      onClick={loadDetailHandler}
      layoutId={slug}
      variants={popUp}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${slug}`}>
        {
          <motion.img
            layoutId={`image ${slug}`}
            // src={images && resizeGameImage(images)}
            src={images && resize(images, 640)}
            // src={name}
            alt={name}
          />
        }
        {/* Video Thumb  */}
        {/* <video
          poster={images && resize(images, 640)}
          onMouseOver={(e) => e.target.play()}
          onMouseOut={(e) => e.target.pause()}
        >
          <source src={video} type="video/mp4"></source>
        </video> */}
        <h3>{name}</h3>
      </Link>
    </Gamecard>
  );
};
const Gamecard = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(59, 35, 35, 0.4);
  border-radius: 1rem;
  text-align: center;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
  cursor: pointer;
  overflow: hidden;
  @media screen and (max-width: 768px) {
  }
`;
export default Game;
