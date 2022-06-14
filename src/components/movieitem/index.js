import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

export default function MovieItem({ movie, genres }) {
  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      </LeftCont>
      <RightCont>
        <Title>
          {movie.title}
          <Rating>{movie.vote_average}</Rating>
        </Title>
        <Overview>{movie.overview}</Overview>
        <Date>{movie.release_date}</Date>
      </RightCont>
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
      object-cover: fit;
    }
  }
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  @media only screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
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
`;

const Rating = styled.p`
  border-radius: 5px;
  background-color: ${colors.primaryColor};
  color: white;
  padding: 5px;

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
