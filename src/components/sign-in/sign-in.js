import React from 'react';

import {useAuthorization} from './hooks';

export const SignIn = () => {
  const {
    email,
    password,
    emailInputHandler,
    passwordInutHandler,
    submitHandler,
  } = useAuthorization();
  return (
    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form" onSubmit={submitHandler}>
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
              value={email}
              onChange={emailInputHandler}
              required
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="user-password"
              id="user-password"
              value={password}
              onChange={passwordInutHandler}
              required
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
};
