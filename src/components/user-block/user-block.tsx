import React from 'react';
import {Link} from 'react-router-dom';

import {useAppContext} from '../../reducer/reducer';

export const UserBlock = (): JSX.Element => {
  const {state} = useAppContext();
  return (
    <div className="user-block">
      {
        state.user
          ? (
            <div className="user-block__avatar">
              <Link to='/my-list'>
                <img
                  src={`https://htmlacademy-react-2.appspot.com/${state.user.avatar_url}`}
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </Link>
            </div>
          )
          : <Link to='/login'>Sign In</Link>
      }
    </div>
  );
};
