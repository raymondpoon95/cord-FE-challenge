import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../checkbox";

const AccordionFilter = ({ genres, ratings, languages, onChange }) => {
  const [openGenre, setOpenGenre] = useState(false);
  const [openRating, setOpenRating] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);

  return (
    <GenreContainer>
      {/* Select genre */}
      <SubHeading>
        <ExpandButtons onClick={() => setOpenGenre((prevState) => !prevState)}>
          {openGenre ? <>&#8722;</> : <>&#43;</>}
        </ExpandButtons>
        Select Genre(s)
      </SubHeading>
      <ContentContainer className={openGenre ? "visible" : ""}>
        {genres &&
          genres.map((genre) => (
            <Checkbox
              key={genre.name}
              id={genre.id}
              name={genre.name}
              label={genre.name}
              open={openGenre}
              onChange={onChange}
            />
          ))}
      </ContentContainer>

      {/* Select rating */}
      <SubHeading>
        <ExpandButtons onClick={() => setOpenRating((prevState) => !prevState)}>
          {openRating ? <>&#8722;</> : <>&#43;</>}
        </ExpandButtons>
        Select Rating
      </SubHeading>
      <ContentContainer className={openRating ? "visible" : ""}>
        {ratings &&
          ratings.map((rating) => (
            <Checkbox
              key={rating.name}
              id={rating.id}
              name={rating.name}
              label={rating.name}
              open={openRating}
              onChange={onChange}
            />
          ))}
      </ContentContainer>

      {/* Select language */}
      <SubHeading>
        <ExpandButtons
          onClick={() => setOpenLanguage((prevState) => !prevState)}
        >
          {openLanguage ? <>&#8722;</> : <>&#43;</>}
        </ExpandButtons>
        Select Language
      </SubHeading>
      <ContentContainer className={openLanguage ? "visible" : ""}>
        {languages &&
          languages.map((language) => (
            <Checkbox
              key={language.name}
              id={language.id}
              name={language.name}
              label={language.name}
              open={openLanguage}
              onChange={onChange}
            />
          ))}
      </ContentContainer>
    </GenreContainer>
  );
};

export default AccordionFilter;

const GenreContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubHeading = styled.h2`
  display: flex;
  align-items: center;
`;

const ExpandButtons = styled.span`
  font-size: 2rem;
  padding-right: 10px;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  opacity: 0;
  height: 0px;

  &.visible {
    opacity: 1;
    height: auto;
  }
`;
