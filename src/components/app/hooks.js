import {setActiveMovie} from '../../reducer/actions';

export const useActiveMovie = (dispatch) => {
  const startVideoButtonHandler = (movie) => (evt) => {
    evt.preventDefault();
    setActiveMovie(movie, dispatch);
  };

  const exitButtonHandler = (evt) => {
    evt.preventDefault();
    setActiveMovie(null, dispatch);
  };

  return {
    startVideoButtonHandler,
    exitButtonHandler,
  };
};
