import React, { useState } from "react";
import styled from "styled-components";
// import { NavLink as Link } from "react-router-dom";

// import * as colors from "../../colors";
// import Arrow from "../../images/arrow-icon.png";
// import SearchWhite from "../../images/search-icon-white.png";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};

export default Burger;

const StyledBurger = styled.div`
  margin-right: 20px;
  width: 2rem;
  height: 2rem;
  top: 15px;
  left: 20px;
  z-index: 20;
  display: none;

  @media only screen and (max-width: 976px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  @media only screen and (min-width: 976px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
