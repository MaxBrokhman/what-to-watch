import {useContext, createContext} from 'react';

import {TState, TContext} from './types';

export const initialState: TState = {
  genre: `all genres`,
  filmsList: [],
  activeMovie: null,
  isFetching: false,
  error: null,
  isAuthorizationRequired: false,
  user: null,
  favorites: [],
};

const initialContext: TContext = {
  state: initialState,
  dispatch: null,
};

export const Context = createContext(initialContext);

export const useAppContext = (): TContext => useContext(Context);

export const reducer = (state = initialState, action): TState => {
  switch (action.type) {
    case `SET_GENRE`:
      return Object.assign({}, state, {
        genre: action.payload,
      });
    case `SET_FILMS`:
      return Object.assign({}, state, {filmsList: action.payload});
    case `SET_ERROR`:
      return Object.assign({}, state, {error: action.payload});
    case `SET_FETCHING`:
      return Object.assign({}, state, {isFetching: action.payload});
    case `SET_AUTHORIZATION`:
      return Object.assign({}, state, {isAuthorizationRequired: action.payload});
    case `SET_USER`:
      return Object.assign({}, state, {user: action.payload});
    case `ADD_FAVORITE`:
      return Object.assign({}, state, {favorites: state.favorites.concat(action.payload)});
    case `REMOVE_FAVORITE`:
      const itemToRemoveIdx = state.favorites.findIndex((movie) => movie.id === action.payload);
      const updatedFavorites = itemToRemoveIdx > -1
        ? state.favorites
          .slice(0, itemToRemoveIdx)
          .concat(state.favorites.slice(itemToRemoveIdx + 1))
        : state.favorites;
      return Object.assign({}, state, {favorites: updatedFavorites});
    default:
      return state;
  }
};
