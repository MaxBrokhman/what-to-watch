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

export const useMovieRuntime = (time) => {
  const fullHours = Math.floor(time / 60);
  const rawMinutes = time - (fullHours * 60);
  const hours = fullHours < 10
    ? `0${fullHours}`
    : fullHours;
  const minutes = rawMinutes < 10
    ? `0${rawMinutes}`
    : rawMinutes;
  return {
    time: `${hours}:${minutes}:00`,
  };
};
