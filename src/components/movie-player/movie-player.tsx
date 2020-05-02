import React, {
  Fragment,
  useRef,
  SyntheticEvent,
} from 'react';

import {Videoplayer} from '../videoplayer/videoplayer';
import {useMoviePlayer, useMovieProgress} from './hooks';
import {useMovieRuntime} from '../../common-hooks/use-movie-runtime';
import {useMovieById} from '../../common-hooks/use-movie-by-id';
import {useAppContext} from '../../reducer/reducer';

type TMoviePlayerProps = {
  onVideoExit: (evt: SyntheticEvent) => void;
  id: number;
}

export const MoviePlayer = ({onVideoExit, id}: TMoviePlayerProps): JSX.Element => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const togglerRef = useRef(null);
  const {state} = useAppContext();
  const {movie} = useMovieById(id, state.filmsList);
  const {
    playClickHandler,
    playButtonIcon,
    fullscreenButtonHandler,
    isControlsVisible,
  } = useMoviePlayer(videoRef);
  const {time} = useMovieRuntime(movie.run_time);
  const {onProgressClick} = useMovieProgress({
    video: videoRef.current,
    runTime: movie.run_time,
    progress: progressRef.current,
    toggler: togglerRef.current,
  });
  return (
    <div className="player">
      <Videoplayer
        src={movie.preview_video_link}
        className="player__video"
        ref={videoRef}
        poster={movie.background_image}
        loop={false}
      />
      {
        isControlsVisible && (
          <Fragment>
            <button type="button" className="player__exit" onClick={onVideoExit}>Exit</button>

            <div className="player__controls">
              <div className="player__controls-row">
                <div className="player__time">
                  <progress
                    className="player__progress"
                    value={0}
                    max="100"
                    ref={progressRef}
                    onClick={onProgressClick}
                  ></progress>
                  <div className="player__toggler" style={{left: `${0}%`}} ref={togglerRef}>Toggler</div>
                </div>
                <div className="player__time-value">{time.full}</div>
              </div>

              <div className="player__controls-row">
                <button type="button" className="player__play" onClick={playClickHandler}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref={playButtonIcon}></use>
                  </svg>
                  <span>Play</span>
                </button>
                <div className="player__name">{movie.name}</div>

                <button type="button" className="player__full-screen" onClick={fullscreenButtonHandler}>
                  <svg viewBox="0 0 27 27" width="27" height="27">
                    <use xlinkHref="#full-screen"></use>
                  </svg>
                  <span>Full screen</span>
                </button>
              </div>
            </div>
          </Fragment>
        )
      }
    </div>
  );
};
