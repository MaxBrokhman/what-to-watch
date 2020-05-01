import React from 'react';

import {useAppContext} from '../../reducer/reducer';

export const UserBlock = () => {
  const {state} = useAppContext();
  return (
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
  );
};
