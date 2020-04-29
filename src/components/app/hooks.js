import {useEffect} from 'react';

import {
  setError,
  setFilms,
  setIsAuthorizationRequired,
} from '../../reducer/actions';
import {api, sendRequest} from '../../api/api';
import {useHistory} from 'react-router-dom';

export const useActiveMovie = () => {
  const history = useHistory();
  const startVideoButtonHandler = (id) => (evt) => {
    evt.preventDefault();
    history.push(`watch/${id}`);
  };

  const exitButtonHandler = (evt) => {
    evt.preventDefault();
    history.goBack();
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
  api.interceptors.response.use(null, (response) => {
    if (response.status === 401) {
      setIsAuthorizationRequired(true, dispatch);
    }
  });
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
