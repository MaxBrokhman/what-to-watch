import React from 'react';

import {useTabs} from './hooks';

const tabs = [`overview`, `details`, `reviews`];

// eslint-disable-next-line
export const Tabs = ({movie}) => {
  const {tab, CurrentTab, tabClickHandler} = useTabs();
  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            tabs.map((tabCaption) => (
              <li
                className={`movie-nav__item ${tab === tabCaption
                  ? `movie-nav__item--active`
                  : ``}`}
                key={tabCaption}
              >
                <a
                  href="#"
                  className="movie-nav__link"
                  onClick={tabClickHandler(tabCaption)}
                >
                  {tabCaption}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>

      <CurrentTab movie={movie} />

    </div>
  );
};
