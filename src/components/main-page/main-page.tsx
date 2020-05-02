import React, {Fragment, SyntheticEvent} from 'react';

import {FilmsList} from '../films-list/films-list';
import {GenresList} from '../genres-list/genres-list';
import {MainMovieCard} from '../main-movie-card/main-movie-card';
import {TFilm} from '../../reducer/types';

type TMainPageProps = {
  films: Array<TFilm>;
  startVideoButtonHandler: (id: number) => (evt: SyntheticEvent) => void;
  genre: string;
}

export const MainPage = ({
  films,
  startVideoButtonHandler,
  genre,
}: TMainPageProps): JSX.Element => (
  <Fragment>
    {
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
