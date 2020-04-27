import {useState} from 'react';

import {sendRequest} from '../../api/api';
import {
  setUser,
  setError,
  setIsAuthorizationRequired,
} from '../../reducer/actions';
import {useAppContext} from '../../reducer/reducer';

export const useAuthorization = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const {dispatch} = useAppContext();
  const emailInputHandler = (evt) => {
    setEmail(evt.target.value);
  };
  const passwordInutHandler = (evt) => {
    setPassword(evt.target.value);
  };
  const onSuccess = (response, innerDispatch) => {
    setUser(response, innerDispatch);
    setIsAuthorizationRequired(false, innerDispatch);
  };
  const onFailure = () => {
    setError({
      message: `Unable to login. Please check your email and paswword and try again`,
    }, dispatch);
  };
  const submitHandler = (evt) => {
    evt.preventDefault();
    if (email && password) {
      sendRequest({
        url: `/login`,
        method: `post`,
        data: {
          email,
          password,
        },
        onSuccess,
        onFailure,
        dispatch,
      });
    }
  };
  return {
    email,
    password,
    emailInputHandler,
    passwordInutHandler,
    submitHandler,
  };
};
