import {get_movies} from './actionsTypes';
import axios from 'axios';
// Create Actions Creators

export function getMovies() {
  return async dispatch => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=df1e96d91029f9f5bf185431b3540ec0&language=en-US&page=1',
      );
      const response2 = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=df1e96d91029f9f5bf185431b3540ec0&language=en-US&page=3',
      );
      const response3 = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=df1e96d91029f9f5bf185431b3540ec0&language=en-US&page=5',
      );
      dispatch({
        type: get_movies,
        payload: [
          ...response.data.results,
          ...response2.data.results,
          ...response3.data.results,
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };
}
