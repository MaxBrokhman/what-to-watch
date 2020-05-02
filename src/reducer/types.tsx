type TAction = {
  type: string;
  payload: string | Array<TFilm> | TError | TUser | TFilm | number | boolean;
}

export type TDispatch = (action: TAction) => void;

export type TFilm = {
  name: string;
  preview_image: string;
  preview_video_link: string;
  genre: string;
  background_image: string;
  poster_image: string;
  run_time: number;
  released: number;
  id: number;
  director: string;
  starring: Array<string>;
  rating: number;
  description: string;
}

export type TError = {
  message: string;
}

export type TUser = {
  name: string;
  email: string;
  avatar_url: string;
}

export type TState = {
  genre: string;
  filmsList: Array<TFilm>;
  activeMovie: TFilm;
  isFetching: boolean;
  error: TError;
  isAuthorizationRequired: boolean;
  user: TUser;
  favorites: Array<TFilm>;
}

export type TContext = {
  state: TState;
  dispatch: TDispatch;
}
