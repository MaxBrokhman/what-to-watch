import React from 'react';

import {Footer} from '../footer/footer';
import {Logo} from '../logo/logo';
import {UserBlock} from '../user-block/user-block';
import {FilmsList} from '../films-list/films-list';
import {useAppContext} from '../../reducer/reducer';

export const MyList = (): JSX.Element => {
  const {state} = useAppContext();
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={state.favorites} />

      </section>

      <Footer />
    </div>
  );
};
