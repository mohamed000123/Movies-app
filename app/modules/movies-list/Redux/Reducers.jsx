import {get_movies} from './actionsTypes';

const initialState = {
  movies: [],
};
export const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_movies:
      return {...state, movies: action.payload};
    default:
      return state;
  }
};
