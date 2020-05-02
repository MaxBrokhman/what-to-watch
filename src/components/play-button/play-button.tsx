import React, {SyntheticEvent} from 'react';

type TPlayButtonProps = {
  clickHandler: (evt: SyntheticEvent) => void;
}

export const PlayButton = ({clickHandler}: TPlayButtonProps): JSX.Element => (
  <button
    className="btn btn--play movie-card__button"
    type="button"
    onClick={clickHandler}
  >
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>
    <span>Play</span>
  </button>
);
