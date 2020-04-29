import React from 'react';
import {Link} from 'react-router-dom';

import {useAppContext} from '../../reducer/reducer';

export const MovieCardHeader = () => {
  const {state} = useAppContext();
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link to='/' className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="user-block">
        {
          state.user
            ? (
              <div className="user-block__avatar">
                <img
                  src={`https://htmlacademy-react-2.appspot.com/${state.user.avatar_url}`}
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            )
            : <a href="#">Sign In</a>
        }
      </div>
    </header>
  );
};
