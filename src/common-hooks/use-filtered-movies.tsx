import {useMemo} from "react";

import {TFilm} from "../reducer/types";

export const useFilteredMovies = (
    movies: Array<TFilm>,
    filter: (item: TFilm) => boolean,
): Array<TFilm> => {
  return useMemo(() => movies.filter(filter), [movies, filter]);
};
