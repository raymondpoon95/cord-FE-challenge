import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";

export const SideNavBarDesktop = styled.div`
  display: none;

  @media only screen and (min-width: 976px) {
    display: block;
    position: fixed;
    z-index: 9;
    width: 280px;
    height: 100%;
    background-color: ${colors.sideNavBar};
    color: white;
  }
`;

export const SideNavBarCont = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: white;

  @media only screen and (min-width: 976px) {
    display: block;
  }
`;

export const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

export const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

export const SideNavHeader = styled.div`
  ${SectionsStyles}
`;

export const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`;

export const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`;

export const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: 0.8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover,
  &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
    opacity: 1;
  }
`;

export const StyledCross = styled.div`
  font-size: 2rem;
  color: white;
  z-index: 20;
  cursor: pointer;

  @media only screen and (max-width: 976px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  @media only screen and (min-width: 976px) {
    display: none;
  }
`;

export const StyledBurger = styled.div`
  font-size: 5rem;
  position: absolute;
  top: 1.5%;
  left: 3%;
  z-index: 20;
  cursor: pointer;

  @media only screen and (max-width: 976px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  @media only screen and (min-width: 976px) {
    display: none;
  }
`;
