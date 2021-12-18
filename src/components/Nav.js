import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux
import { fetchSearch } from "../action/gameAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animation";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };
  return (
    <StyleNav>
      <Logo
        onClick={clearSearch}
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyleNav>
  );
};

const StyleNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 40%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    font-weight: bold;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    color: white;
    background: #ff7676;
  }
  font-family: "Source Sans Pro", sans-serif;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    input {
      width: 70%;
      margin-bottom: 1rem;
      font-size: 1rem;
    }
    button {
      font-size: 1rem;
    }
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;
