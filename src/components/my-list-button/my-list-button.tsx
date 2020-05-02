import React from 'react';

type TMyListButtonProps = {
  isFav: boolean;
  clickHandler: () => void;
}

export const MyListButton = ({isFav, clickHandler}: TMyListButtonProps): JSX.Element => {
  const svgLink = isFav ? `#in-list` : `#add`;
  const caption = isFav ? `In my list` : `My list`;
  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={clickHandler}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={svgLink}></use>
      </svg>
      <span>{caption}</span>
    </button>
  );
};
