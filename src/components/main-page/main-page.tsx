import React, {Fragment, SyntheticEvent} from 'react';

import {FilmsList} from '../films-list/films-list';
import {GenresList} from '../genres-list/genres-list';
import {MainMovieCard} from '../main-movie-card/main-movie-card';
import {TFilm} from '../../reducer/types';
import {useAppContext} from '../../reducer/reducer';
import {useFilteredMovies} from '../../common-hooks/use-filtered-movies';

type TMainPageProps = {
  startVideoButtonHandler: (id: number) => (evt: SyntheticEvent) => void;
}

export const MainPage = ({
  startVideoButtonHandler,
}: TMainPageProps): JSX.Element => {
  const {state} = useAppContext();
  const moviesByGenre = state.genre === `all genres`
    ? state.filmsList
    : useFilteredMovies(
        state.filmsList,
        (movie: TFilm) => movie.genre === state.genre,
    );
  return (
    <Fragment>
      {
        Boolean(state.filmsList.length) && (
          <MainMovieCard
            onVideoStart={startVideoButtonHandler}
            movie={state.filmsList[0]}
          />
        )
      }
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmsList films={moviesByGenre} />
        </section>
      </div>
    </Fragment>
  );
};
