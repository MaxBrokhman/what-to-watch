import {useContext, createContext} from 'react';

import {films} from '../mocks/films';

const initialState = {
  genre: ``,
  filmsList: films,
};

const initialContext = {
  state: initialState,
  dispatch: null,
};

export const Context = createContext(initialContext);

export const useAppContext = () => useContext(Context);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_FILTER`:
      return Object.assign({}, state, {
        genre: action.payload,
      });
    default:
      return state;
  }
};
