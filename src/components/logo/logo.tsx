import React from 'react';
import {Link} from 'react-router-dom';

export const Logo = (): JSX.Element => (
  <div className="logo">
    <Link to='/' className="logo__link">
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);
