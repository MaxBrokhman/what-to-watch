import React, {Fragment} from 'react';

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

// eslint-disable-next-line
export const MovieDetails = ({id, startVideoButtonHandler}) => {
  const {state} = useAppContext();
  const {movie} = useMovieById(id, state.filmsList);
  const {similarMovies} = useSimilarMovies(movie, state.filmsList);
  const {isFav, addToFavsClickHandler} = useFavMovie(movie);
  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            {// eslint-disable-next-line
          <img src={movie.background_image} alt={movie.name} />}
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <MovieCardHeader />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              {// eslint-disable-next-line
            <h2 className="movie-card__title">{movie.name}</h2>}
              <p className="movie-card__meta">
                {// eslint-disable-next-line
              <span className="movie-card__genre">{movie.genre}</span>}
                {// eslint-disable-next-line
              <span className="movie-card__year">{movie.released}</span>}
              </p>

              <div className="movie-card__buttons">
                <PlayButton clickHandler={startVideoButtonHandler(movie.id)} />
                <MyListButton isFav={isFav} clickHandler={addToFavsClickHandler} />
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              {// eslint-disable-next-line
            <img src={movie.poster_image} alt={movie.name} width="218" height="327" />}
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

              <FilmsList genre={movie.genre} films={similarMovies} />
            </section>
          )
        }
        <Footer />
      </div>
    </Fragment>
  );
};
