import {useState, MutableRefObject, useEffect, SyntheticEvent} from 'react';

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

type TUseMovieProgressProps = {
  video: HTMLVideoElement;
  runTime: number;
  progress: HTMLProgressElement;
  toggler: HTMLDivElement;
}

type TUseMovieProgress = {
  onProgressClick: (evt: SyntheticEvent) => void;
}

export const useMovieProgress = ({
  video,
  runTime,
  progress,
  toggler,
}: TUseMovieProgressProps): TUseMovieProgress => {
  let animationId: number;
  const setProgress = (): void => {
    if (video && progress && toggler) {
      const value = Math.floor(video.currentTime / runTime * 100);
      progress.value = value;
      toggler.style.left = `${value}%`;
    }
    animationId = requestAnimationFrame(setProgress);
  };
  useEffect(() => {
    setProgress();
    return (): void => {
      cancelAnimationFrame(animationId);
    };
  }, [video, progress, toggler]);

  const onProgressClick = (evt: SyntheticEvent<HTMLProgressElement, MouseEvent>): void => {
    const x = evt.nativeEvent.pageX - progress.offsetLeft;
    const value = Math.floor(x * (progress.max - 1) / progress.offsetWidth);
    progress.value = value;
    video.currentTime = runTime / 100 * value;
    toggler.style.left = `${value}%`;
  };

  return {
    onProgressClick,
  };
};
