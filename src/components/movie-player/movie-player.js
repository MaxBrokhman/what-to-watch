import React, {Fragment, useRef} from 'react';

import {Videoplayer} from '../videoplayer/videoplayer';
import {useMoviePlayer, useMovieRuntime} from './hooks';

// eslint-disable-next-line
export const MoviePlayer = ({onVideoExit, movie}) => {
  const videoRef = useRef(null);
  const {
    playClickHandler,
    playButtonIcon,
    fullscreenButtonHandler,
    isControlsVisible,
  } = useMoviePlayer(videoRef);
  // eslint-disable-next-line
  const {time} = useMovieRuntime(movie.run_time)
  return (
    <div className="player">
      <Videoplayer
        // eslint-disable-next-line
        src={movie.preview} 
        className="player__video"
        ref={videoRef}
        // eslint-disable-next-line
        poster={movie.background_image}
      />

      {isControlsVisible && (
        <Fragment>
          <button type="button" className="player__exit" onClick={onVideoExit}>Exit</button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value="30" max="100"></progress>
                <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
              </div>
              <div className="player__time-value">{time}</div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play" onClick={playClickHandler}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref={playButtonIcon}></use>
                </svg>
                <span>Play</span>
              </button>
              {// eslint-disable-next-line
              <div className="player__name">{movie.name}</div>}

              <button type="button" className="player__full-screen" onClick={fullscreenButtonHandler}>
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};
