import {useEffect} from 'react';

import {
  setActiveMovie,
  setError,
  setFilms,
} from '../../reducer/actions';
import {sendRequest} from '../../api/api';

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

export const useFetchedFilms = (dispatch) => {
  const onFailure = () => {
    setError({
      message: `Films are not available right now. Please, try again later`,
    }, dispatch);
  };
  useEffect(() => {
    sendRequest({
      url: `/films`,
      onSuccess: setFilms,
      onFailure,
      dispatch,
      method: `get`,
    });
  }, []);
};
