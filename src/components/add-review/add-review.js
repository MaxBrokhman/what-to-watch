import React from 'react';
import {Link} from 'react-router-dom';

import {useMovieById} from '../../common-hooks/use-movie-by-id';
import {useAppContext} from '../../reducer/reducer';
import {Logo} from '../logo/logo';
import {UserBlock} from '../user-block/user-block';
import {useReviewPosting} from './hooks';

// eslint-disable-next-line
export const AddReview = ({id}) => {
  const {state} = useAppContext();
  const {movie} = useMovieById(id, state.filmsList);
  const {submitHandler, btCaption} = useReviewPosting();
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          {// eslint-disable-next-line
          <img src={movie.background_image} alt={movie.name} />}
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  to={`/movie-card/${movie.id}`}
                  className="breadcrumbs__link"
                >
                  {movie.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          {
            <img // eslint-disable-next-line
              src={movie.poster_image}
              alt={movie.name}
              width="218"
              height="327"
            />}
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={submitHandler}
        >
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
            ></textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
              >
                {btCaption}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
