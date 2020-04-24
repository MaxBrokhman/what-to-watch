import {useContext, createContext} from 'react';

import {films} from '../mocks/films';

export const initialState = {
  genre: `all genres`,
  filmsList: films,
  activeMovie: null,
};

const initialContext = {
  state: initialState,
  dispatch: null,
};

export const Context = createContext(initialContext);

export const useAppContext = () => useContext(Context);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`:
      return Object.assign({}, state, {
        genre: action.payload,
      });
    case `SET_ACTIVE_MOVIE`:
      return Object.assign({}, state, {
        activeMovie: action.payload,
      });
    default:
      return state;
  }
};
