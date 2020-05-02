import {useState, MutableRefObject} from 'react';

type TUseMoviePlayer = {
  playClickHandler: () => void;
  playButtonIcon: string;
  isControlsVisible: boolean;
  fullscreenButtonHandler: () => void;
}

export const useMoviePlayer = (videoRef: MutableRefObject<HTMLVideoElement>): TUseMoviePlayer => {
  const [isPlaying, setPlaying] = useState(false);
  const [isControlsVisible, setControlsVisible] = useState(true);
  const playClickHandler = (): void => {
    if (!isPlaying) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  const fullscreenChangeHandler = (): void => {
    setControlsVisible(true);
    document.documentElement.removeEventListener(`fullscreenchange`, fullscreenChangeHandler);
  };

  const fullscreenButtonHandler = (): void => {
    document.documentElement.requestFullscreen().then(() => {
      setControlsVisible(false);
      setTimeout(() => {
        document.documentElement.addEventListener(`fullscreenchange`, fullscreenChangeHandler);
      }, 200);
    }).catch(() => {
      setControlsVisible(true);
    });

  };
  const playButtonIcon = isPlaying
    ? `#pause`
    : `#play-s`;
  return {
    playClickHandler,
    playButtonIcon,
    fullscreenButtonHandler,
    isControlsVisible,
  };
};
