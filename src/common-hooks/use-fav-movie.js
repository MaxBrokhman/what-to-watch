import {useAppContext} from '../reducer/reducer';
import {addFavorite, removeFavorite} from '../reducer/actions';

export const useFavMovie = (movie) => {
  const {dispatch, state} = useAppContext();
  const isFav = Boolean(
      state.favorites.find((film) => film.id === movie.id)
  );
  const addToFavsClickHandler = () => {
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
