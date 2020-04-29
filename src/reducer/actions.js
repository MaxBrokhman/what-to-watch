export const setGenre = (genre, dispatch) => dispatch({
  type: `SET_GENRE`,
  payload: genre,
});

export const setFilms = (films, dispatch) => dispatch({
  type: `SET_FILMS`,
  payload: films,
});

export const setFetching = (isFetching, dispatch) => dispatch({
  type: `SET_FETCHING`,
  payload: isFetching,
});

export const setError = (error, dispatch) => dispatch({
  type: `SET_ERROR`,
  payload: error,
});

export const setIsAuthorizationRequired = (status, dispatch) => dispatch({
  type: `SET_AUTHORIZATION`,
  payload: status,
});

export const setUser = (user, dispatch) => dispatch({
  type: `SET_USER`,
  payload: user,
});

export const addFavorite = (favorite, dispatch) => dispatch({
  type: `ADD_FAVORITE`,
  payload: favorite,
});

export const removeFavorite = (id, dispatch) => dispatch({
  type: `REMOVE_FAVORITE`,
  payload: id,
});
