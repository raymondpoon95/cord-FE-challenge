export const getGenresFromMovie = (genresList, movie_genre_ids) => {
  let result = [];
  genresList.forEach((element) => {
    if (movie_genre_ids.includes(element.id)) {
      result.push(element);
      return;
    }
  });
  return result;
};
