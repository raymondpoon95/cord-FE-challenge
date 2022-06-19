import React from "react";
import styled from "styled-components";

import MovieItem from "../movieitem";

export default function MovieList({ movies, genres, filteredMovies }) {
  return (
    <MoviesWrapper>
      {filteredMovies.length === 0
        ? movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} genres={genres} />
          ))
        : filteredMovies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} genres={genres} />
          ))}
    </MoviesWrapper>
  );
}

const MoviesWrapper = styled.div`
  position: relative;
`;
