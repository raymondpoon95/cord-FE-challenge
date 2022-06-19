import React, { useState } from "react";
import {
  SideNavBarCont,
  SideNavHeader,
  SideNavMainLink,
  SideNavSectionTitle,
  NavLink,
  HeaderText,
  StyledBurger,
  StyledCross,
} from "./sidenavbar.styles";

import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledBurger
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        {!isOpen && <>&#8801;</>}
      </StyledBurger>
      <SideNavBarCont isOpen={isOpen}>
        <SideNavHeader>
          Wesley
          {!isOpen ? (
            <img src={Arrow} alt="Arrow pointing down" />
          ) : (
            <StyledCross
              onClick={() => {
                setIsOpen((prevState) => !prevState);
              }}
            >
              &#10005;
            </StyledCross>
          )}
        </SideNavHeader>
        <SideNavMainLink to="/discover" exact>
          Discover
          <img src={SearchWhite} alt="Magnifying glass" />
        </SideNavMainLink>
        <SideNavSectionTitle>
          <HeaderText>Watched</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/watched/movies">Movies</NavLink>
        <NavLink to="/watched/tv-shows">Tv Shows</NavLink>
        <SideNavSectionTitle>
          <HeaderText>Saved</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/saved/movies">Movies</NavLink>
        <NavLink to="/saved/tv-shows">Tv Shows</NavLink>
      </SideNavBarCont>
    </>
  );
}
