import {useAppContext} from '../reducer/reducer';
import {addFavorite, removeFavorite} from '../reducer/actions';
import {TFilm} from '../reducer/types';

type TUseFavMovie = {
  addToFavsClickHandler: () => void;
  isFav: boolean;
}

export const useFavMovie = (movie: TFilm): TUseFavMovie => {
  const {dispatch, state} = useAppContext();
  const isFav = Boolean(
      state.favorites.find((film) => film.id === movie.id)
  );
  const addToFavsClickHandler = (): void => {
    if (isFav) {
      removeFavorite(movie.id, dispatch);
    } else {
      addFavorite(movie, dispatch);
    }
  };

  return {
    addToFavsClickHandler,
    isFav,
  };
};
