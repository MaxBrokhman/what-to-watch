import React from 'react';

import {Logo} from '../logo/logo';
import {UserBlock} from '../user-block/user-block';

export const MovieCardHeader = (): JSX.Element => {
  return (
    <header className="page-header movie-card__head">
      <Logo />

      <UserBlock />
    </header>
  );
};
