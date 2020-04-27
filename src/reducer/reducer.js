import {useContext, createContext} from 'react';

export const initialState = {
  genre: `all genres`,
  filmsList: [],
  activeMovie: null,
  isFetching: false,
  error: null,
  isAuthorizationRequired: false,
  user: null,
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
    default:
      return state;
  }
};
