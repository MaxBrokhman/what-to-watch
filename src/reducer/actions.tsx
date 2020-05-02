import {
  TDispatch,
  TFilm,
  TError,
  TUser,
} from "./types";

export const setGenre = (genre: string, dispatch: TDispatch): void => dispatch({
  type: `SET_GENRE`,
  payload: genre,
});

export const setFilms = (films: Array<TFilm>, dispatch: TDispatch): void => dispatch({
  type: `SET_FILMS`,
  payload: films,
});

export const setFetching = (
    isFetching: boolean,
    dispatch: TDispatch,
): void => dispatch({
  type: `SET_FETCHING`,
  payload: isFetching,
});

export const setError = (error: TError, dispatch: TDispatch): void => dispatch({
  type: `SET_ERROR`,
  payload: error,
});

export const setIsAuthorizationRequired = (
    status: boolean,
    dispatch: TDispatch,
): void => dispatch({
  type: `SET_AUTHORIZATION`,
  payload: status,
});

export const setUser = (user: TUser, dispatch: TDispatch): void => dispatch({
  type: `SET_USER`,
  payload: user,
});

export const addFavorite = (favorite: TFilm, dispatch: TDispatch): void => dispatch({
  type: `ADD_FAVORITE`,
  payload: favorite,
});

export const removeFavorite = (id: number, dispatch: TDispatch): void => dispatch({
  type: `REMOVE_FAVORITE`,
  payload: id,
});
