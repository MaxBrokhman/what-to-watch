import React, {Fragment} from 'react';

import {FilmsList} from '../films-list/films-list';
import {GenresList} from '../genres-list/genres-list';
import {MainMovieCard} from '../main-movie-card/main-movie-card';

export const MainPage = ({
  // eslint-disable-next-line
  films, 
  // eslint-disable-next-line
  startVideoButtonHandler,
  // eslint-disable-next-line
  genre,
}) => (
  <Fragment>
    {// eslint-disable-next-line
      films.length && (
        <MainMovieCard
          onVideoStart={startVideoButtonHandler}
          movie={films[0]}
        />
      )
    }
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList />
        <FilmsList films={films} genre={genre} />
      </section>
    </div>
  </Fragment>
);
