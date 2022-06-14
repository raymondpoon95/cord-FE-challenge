import React, { useState, useEffect } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

// class Discover extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       keyword: "",
//       year: 0,
//       results: [],
//       totalCount: 0,
//       genreOptions: [],
//       ratingOptions: [
//         { id: 7.5, name: 7.5 },
//         { id: 8, name: 8 },
//         { id: 8.5, name: 8.5 },
//         { id: 9, name: 9 },
//         { id: 9.5, name: 9.5 },
//         { id: 10, name: 10 },
//       ],
//       languageOptions: [
//         { id: "GR", name: "Greek" },
//         { id: "EN", name: "English" },
//         { id: "RU", name: "Russian" },
//         { id: "PO", name: "Polish" },
//       ],
//     };
//   }

const Discover = () => {
  const [movieData, setMovieData] = useState({
    keyword: "",
    year: 0,
    results: [],
    totalCount: 0,
    genreOptions: [],
    ratingOptions: [
      { id: 7.5, name: 7.5 },
      { id: 8, name: 8 },
      { id: 8.5, name: 8.5 },
      { id: 9, name: 9 },
      { id: 9.5, name: 9.5 },
      { id: 10, name: 10 },
    ],
    languageOptions: [
      { id: "GR", name: "Greek" },
      { id: "EN", name: "English" },
      { id: "RU", name: "Russian" },
      { id: "PO", name: "Polish" },
    ],
  });

  const getListData = async () => {
    console.log(await fetcher.fetchMovieList());
    const { results, genre_ids, total_results } =
      await fetcher.fetchMovieList();

    setMovieData((prevState) => ({
      ...prevState,
      results,
      totalCount: total_results,
      genreOptions: genre_ids,
    }));
  };

  // TODO: Preload and set the popular movies and movie genres when page loads
  useEffect(() => {
    getListData();
  }, []);

  // TODO: Update search results based on the keyword and year inputs

  const { genreOptions, languageOptions, ratingOptions, totalCount, results } =
    movieData;

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle>{" "}
      {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
      <TotalCount>{totalCount} results</TotalCount>
      <MovieFilters>
        <SearchFilters
          genres={genreOptions}
          ratings={ratingOptions}
          languages={languageOptions}
          searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
        />
      </MovieFilters>
      <MovieResults>
        <MovieList movies={results || []} genres={genreOptions || []} />
      </MovieResults>
    </DiscoverWrapper>
  );
};

export default Discover;

const DiscoverWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 35px;

  @media only screen and (min-width: 976px) {
    display: block;
  }
`;

const MovieResults = styled.div`
  display: inline-block;
  width: 100%;

  @media only screen and (min-width: 976px) {
    width: calc(100% - 295px);
  }
`;

const MovieFilters = styled.div`
  float: right;
  margin-top: 15px;

  @media only screen and (min-width: 976px) {
    width: 280px;
  }
`;

const MobilePageTitle = styled.h1`
  display: none;
`;

const TotalCount = styled.strong`
  display: block;
`;