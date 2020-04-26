export const setGenre = (genre, dispatch) => dispatch({
  type: `SET_GENRE`,
  payload: genre,
});

export const setActiveMovie = (movie, dispatch) => dispatch({
  type: `SET_ACTIVE_MOVIE`,
  payload: movie,
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
