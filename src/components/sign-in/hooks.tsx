import {useState, SyntheticEvent, ChangeEvent} from 'react';
import {useHistory} from 'react-router-dom';

import {sendRequest} from '../../api/api';
import {
  setUser,
  setError,
  setIsAuthorizationRequired,
} from '../../reducer/actions';
import {useAppContext} from '../../reducer/reducer';
import {TUser, TDispatch} from '../../reducer/types';

type TUseAuthorization = {
  email: string;
  password: string;
  emailInputHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  passwordInutHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (evt: SyntheticEvent) => void;
}

export const useAuthorization = (): TUseAuthorization => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const {dispatch} = useAppContext();
  const history = useHistory();
  const emailInputHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setEmail(evt.target.value);
  };
  const passwordInutHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setPassword(evt.target.value);
  };
  const onSuccess = (response: TUser, innerDispatch: TDispatch): void => {
    setUser(response, innerDispatch);
    setIsAuthorizationRequired(false, innerDispatch);
    history.push(`/`);
  };
  const onFailure = (): void => {
    setError({
      message: `Unable to login. Please check your email and paswword and try again`,
    }, dispatch);
  };
  const submitHandler = (evt: SyntheticEvent): void => {
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
