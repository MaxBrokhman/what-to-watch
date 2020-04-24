export const setGenre = (genre, dispatch) => dispatch({
  type: `SET_GENRE`,
  payload: genre,
});

export const setActiveMovie = (movie, dispatch) => dispatch({
  type: `SET_ACTIVE_MOVIE`,
  payload: movie,
});
