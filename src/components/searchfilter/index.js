import React, { useState } from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilter from "../accordionfilter";
import SearchBar from "../../components/searchbar";

import SearchIcon from "../../images/search-icon-yellow.png";
import YearIcon from "../../images/year-icon.png";
import FilterIcon from "../../images/filter-icon.png";

export default function SearchFilters({
  genres,
  ratings,
  languages,
  onSearch,
  handleFilterMovies,
}) {
  const [genresChecked, setGenresChecked] = useState([]);
  const [open, setOpen] = useState(false);

  const onSearchChange = (value) => {
    onSearch(value);
  };

  const onFilterMoviesChange = (value) => {
    const currentIndex = genresChecked.indexOf(value);
    const newGenresChecked = [...genresChecked];

    if (currentIndex === -1) {
      newGenresChecked.push(value);
    } else {
      newGenresChecked.splice(currentIndex, 1);
    }

    setGenresChecked(newGenresChecked);
    handleFilterMovies(newGenresChecked);
  };

  return (
    <FiltersWrapper>
      <SearchFiltersCont
        className="search_inputs_cont"
        open={open}
        marginBottom
      >
        <SearchBar
          id="keyword_search_input"
          type="text"
          icon={{ src: SearchIcon, alt: "Magnifying glass" }}
          placeholder="Search for movies"
          onChange={onSearchChange}
        />
        <SearchBar
          id="year_search_input"
          type="number"
          icon={{ src: YearIcon, alt: "Calendar icon" }}
          placeholder="Year of release"
        />
        <MobileFilter
          src={FilterIcon}
          alt="Filter icon"
          onClick={() => setOpen(!open)}
        ></MobileFilter>
      </SearchFiltersCont>

      <SearchFiltersContMobile>
        <CategoryTitle>Movies</CategoryTitle>
        {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories */}
        {/* pass the filter options data here from the API -> genre, language, rating */}
        <ExpandableFilter
          genres={genres}
          ratings={ratings}
          languages={languages}
          onChange={onFilterMoviesChange}
        />
      </SearchFiltersContMobile>
      {open && (
        <SearchFiltersContMobile className={open ? "visible" : ""}>
          <CategoryTitle>Movies</CategoryTitle>
          <ExpandableFilter
            genres={genres}
            ratings={ratings}
            languages={languages}
            onChange={onFilterMoviesChange}
          />
        </SearchFiltersContMobile>
      )}
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  .search_bar_wrapper:first-child {
    width: 85%;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 768px) {
    .search_bar_wrapper:nth-child(2) {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    align-items: initial;
    justify-content: initial;

    .search_bar_wrapper:first-child {
      width: 100%;
    }
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const SearchFiltersContMobile = styled(SearchFiltersCont)`
  display: none;

  &.visible {
    display: block;
  }

  @media only screen and (min-width: 976px) {
    display: block;
  }
`;

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;

const MobileFilter = styled.img`
  disply: block;
  border-bottom: 2px solid ${colors.primaryColor};
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
