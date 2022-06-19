export const getGenresFromMovie = (genresList, movie_genre_ids) => {
  //   console.log(genresList);
  //   console.log(movie_genre_ids);
  let result = [];
  //   let results = movie_genre_ids.filter((value) => {
  //     if (genresList.includes(value.id)) {
  //       return value;
  //     }
  //   });
  //   console.log(results);
  genresList.forEach((element) => {
    //   console.log("hello", element);
    if (movie_genre_ids.includes(element.id)) {
      result.push(element);
      return;
    }
  });
  return result;
};
