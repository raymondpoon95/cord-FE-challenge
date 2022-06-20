import axios from "axios";

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovieList = async () => {
  try {
    const response = await axios.get(`
      https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    console.log(error);
  }
};

export const fetchGenreList = async () => {
  try {
    const response = await axios.get(`
    https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    console.log(error);
  }
};
