import React, { useState, useEffect } from "react";
import styled from "styled-components";

import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

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

  const [filteredMovies, setFilteredMovies] = useState([]);

  const getListData = async () => {
    const { results, total_results } = await fetcher.fetchMovieList();

    setMovieData((prevState) => ({
      ...prevState,
      results,
      totalCount: total_results,
    }));
  };

  const getGenreData = async () => {
    const { genres } = await fetcher.fetchGenreList();

    setMovieData((prevState) => ({
      ...prevState,
      genreOptions: genres,
    }));
  };

  // TODO: Preload and set the popular movies and movie genres when page loads
  useEffect(() => {
    getListData();
    getGenreData();
  }, []);

  // TODO: Update search results based on the keyword and year inputs
  const searchMovies = (input, year = 0) => {
    const { results } = movieData;
    const filteredResults = results.filter((value) =>
      value.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredMovies(filteredResults);
  };

  const handleFilterMovies = (input, heading) => {
    const { results } = movieData;

    const filteredResults = results.filter((movie) => {
      const movieGenre = [...movie.genre_ids];
      if (movieGenre.includes(+input)) {
        return movie;
      }
    });
    setFilteredMovies(filteredResults);
  };

  const { genreOptions, languageOptions, ratingOptions, totalCount, results } =
    movieData;

  return (
    <DiscoverWrapper>
      <MobilePageTitle>
        <h1>Discover</h1>
      </MobilePageTitle>{" "}
      {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
      <TotalCount>{totalCount} results</TotalCount>
      <MovieFilters>
        <SearchFilters
          genres={genreOptions}
          ratings={ratingOptions}
          languages={languageOptions}
          onSearch={(keyword, year) => searchMovies(keyword, year)}
          handleFilterMovies={handleFilterMovies}
        />
      </MovieFilters>
      <MovieResults>
        <MovieList
          movies={results || []}
          genres={genreOptions || []}
          filteredMovies={filteredMovies}
        />
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

const MobilePageTitle = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 976px) {
    display: none;
  }

  h1 {
    margin-left: 5%;
    padding-left: 10px;
  }
`;

const TotalCount = styled.strong`
  display: block;
`;
