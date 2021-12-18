import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <>
      <Foot>
        <p>Ignite | Power by Rawg.io</p>
      </Foot>
    </>
  );
};

const Foot = styled.div`
  margin-top: 2.5rem;
  bottom: 0;
  text-align: center;
`;

export default Footer;
