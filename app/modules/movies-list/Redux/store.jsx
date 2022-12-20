import {MoviesReducer} from './Reducers';
import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
export const store = configureStore({
  reducer: {
    movies: MoviesReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(thunkMiddleware);
  },
});
