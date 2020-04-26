import React from 'react';

// eslint-disable-next-line
export const MainMovieCard = ({onVideoStart, movie}) => (
  <section className="movie-card">
    <div className="movie-card__bg">
      {// eslint-disable-next-line
      <img src={movie.background_image} alt={movie.name} />}
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    </header>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          {// eslint-disable-next-line
          <img src={movie.poster_image} alt={movie.name} width="218" height="327" />}
        </div>

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
            <button
              className="btn btn--play movie-card__button"
              type="button"
              onClick={onVideoStart(movie)}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
