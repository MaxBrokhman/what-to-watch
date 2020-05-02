import React, {Fragment, SyntheticEvent} from 'react';
import {Link} from 'react-router-dom';

import {MyListButton} from '../my-list-button/my-list-button';
import {MovieCardHeader} from '../movie-card-header/movie-card-header';
import {PlayButton} from '../play-button/play-button';
import {Footer} from '../footer/footer';
import {useFavMovie} from '../../common-hooks/use-fav-movie';
import {useMovieById} from '../../common-hooks/use-movie-by-id';
import {useSimilarMovies} from './hooks';
import {FilmsList} from '../films-list/films-list';
import {Tabs} from '../tabs/tabs';
import {useAppContext} from '../../reducer/reducer';

type TMovieDetailsProps = {
  id: number;
  startVideoButtonHandler: (id: number) => (evt: SyntheticEvent) => void;
}

export const MovieDetails = ({id, startVideoButtonHandler}: TMovieDetailsProps): JSX.Element => {
  const {state} = useAppContext();
  const {movie} = useMovieById(id, state.filmsList);
  const {similarMovies} = useSimilarMovies(movie, state.filmsList);
  const {isFav, addToFavsClickHandler} = useFavMovie(movie);
  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.background_image} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <MovieCardHeader />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <PlayButton clickHandler={startVideoButtonHandler(movie.id)} />
                <MyListButton isFav={isFav} clickHandler={addToFavsClickHandler} />
                <Link to={`/movie-card/${id}/add-review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movie.poster_image} alt={movie.name} width="218" height="327" />
            </div>

            <Tabs movie={movie} />
          </div>
        </div>
      </section>
      <div className="page-content">
        {
          Boolean(similarMovies.length) && (
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>

              <FilmsList films={similarMovies} />
            </section>
          )
        }
        <Footer />
      </div>
    </Fragment>
  );
};
