import {setGenre} from '../../reducer/actions';

export const useGenres = (movies, dispatch) => {
  const res = [`all genres`];
  for (let movie of movies) {
    if (res.indexOf(movie.genre) === -1) {
      res.push(movie.genre);
    }
  }
  const clickHandler = (genre) => (evt) => {
    evt.preventDefault();
    setGenre(genre, dispatch);
  };
  return {
    genres: res,
    clickHandler,
  };
};
