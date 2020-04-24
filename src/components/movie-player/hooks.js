import {useState} from 'react';

export const useMoviePlayer = (videoRef) => {
  const [isPlaying, setPlaying] = useState(false);
  const [isControlsVisible, setControlsVisible] = useState(true);
  const playClickHandler = () => {
    if (!isPlaying) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  const fullscreenChangeHandler = () => {
    setControlsVisible(true);
    document.documentElement.removeEventListener(`fullscreenchange`, fullscreenChangeHandler);
  };

  const fullscreenButtonHandler = () => {
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
