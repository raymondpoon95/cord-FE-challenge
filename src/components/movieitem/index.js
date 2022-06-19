import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";
import { getGenresFromMovie } from "../../helper";

export default function MovieItem({ movie, genres }) {
  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
      </LeftCont>
      <RightWrapper>
        <RightCont>
          <Title>{movie.title}</Title>
          <Rating>{movie.vote_average}</Rating>
        </RightCont>
        <GenreContainer>
          {getGenresFromMovie(genres, movie.genre_ids).map((genre, index) => (
            <p key={index}>{genre.name}</p>
          ))}
        </GenreContainer>
        <Overview>{movie.overview}</Overview>
        <Date>{movie.release_date}</Date>
      </RightWrapper>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  display: flex;
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 10px 10px;
  margin: 15px 0;

  @media only screen and (min-width: 768px) {
    padding: 20px;
  }
`;

const LeftCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    object-cover: fit;
  }

  @media only screen and (min-width: 768px) {
    img {
      width: 200px;
    }
  }

  @media only screen and (min-width: 976px) {
    img {
      width: 150px;
    }
  }

  @media only screen and (min-width: 1440px) {
    img {
      width: 200px;
    }
  }
`;

const RightCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 100%;

  @media only screen and (min-width: 1440px) {
    padding: 0 20px;
    flex: 1;
    flex-wrap: wrap;
  }
`;

const Title = styled.h2`
  font-size: 0.9rem;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 976px) {
    font-size: 20px;
  }
`;

const Overview = styled.p`
  font-size: 10px;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 976px) {
    white-space: nowrap;
    font-size: 16px;
    width: 100px;
  }

  @media only screen and (min-width: 1024px) {
    width: 200px;
  }

  @media only screen and (min-width: 1440px) {
    white-space: normal;
    font-size: 16px;
    width: 100%;
  }
`;

const Rating = styled.p`
  border-radius: 5px;
  background-color: ${colors.primaryColor};
  color: white;
  padding: 5px;
  min-width: 25px;
  text-align: center;
  font-size: 0.7rem;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const Date = styled.p`
  font-size: 10px;
  text-align: justify;
  color: ${colors.primaryColor};

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const GenreContainer = styled.div`
  font-size: 10px;
  display: flex;
  color: ${colors.primaryColor};

  p:first-child {
    padding-left: 0;
  }

  p {
    padding: 0 5px;
    border-right: 1.5px solid ${colors.primaryColor};
  }

  p:last-child {
    border-right: none;
  }

  @media only screen and (min-width: 768px) {
    flex-wrap: wrap;
    font-size: 14px;
  }

  @media only screen and (min-width: 976px) {
    font-size: 16px;
  }
`;
