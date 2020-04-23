import React from 'react';

import {FilmsList} from '../films-list/films-list';
import {films} from '../../mocks/films';
import {GenresList} from '../genres-list/genres-list';

export const MainPage = () => (
  <div className="page-content">
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />

      <FilmsList movies={films} />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  </div>
);
