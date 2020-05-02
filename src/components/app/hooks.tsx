import {useEffect, SyntheticEvent} from 'react';

import {
  setError,
  setFilms,
  setIsAuthorizationRequired,
} from '../../reducer/actions';
import {api, sendRequest} from '../../api/api';
import {useHistory} from 'react-router-dom';
import {TDispatch} from '../../reducer/types';

type TUseActiveMovie = {
  startVideoButtonHandler: (id: number) => (evt: SyntheticEvent) => void;
  exitButtonHandler: (evt: SyntheticEvent) => void;
}

export const useActiveMovie = (): TUseActiveMovie => {
  const history = useHistory();
  const startVideoButtonHandler = (id: number) => (evt: SyntheticEvent): void => {
    evt.preventDefault();
    history.push(`watch/${id}`);
  };

  const exitButtonHandler = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    history.goBack();
  };

  return {
    startVideoButtonHandler,
    exitButtonHandler,
  };
};

export const useFetchedFilms = (dispatch: TDispatch): void => {
  const onFailure = (): void => {
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
