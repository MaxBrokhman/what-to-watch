import React from 'react';

import {FilmsList} from '../films-list/films-list';
import {GenresList} from '../genres-list/genres-list';

export const MainPage = () => {
  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList />

        <FilmsList />

      </section>
    </div>
  );
};
