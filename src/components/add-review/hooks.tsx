import {
  useCallback,
  useState,
  useEffect,
  SyntheticEvent,
} from 'react';

type TUseReviewPosting = {
  btCaption: string;
  submitHandler: (evt: SyntheticEvent) => void;
}

export const useReviewPosting = (): TUseReviewPosting => {
  const [timer, setTimer] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const submitHandler = useCallback((evt): void => {
    clearTimeout(timer);
    evt.preventDefault();
    setTimer(setTimeout(() => {
      setLoaded(true);
    }, 1000));
  }, []);
  useEffect(() => {
    return (): void => {
      setLoaded(false);
      clearTimeout(timer);
    };
  }, []);
  const btCaption = isLoaded
    ? `Done!`
    : `Post`;
  return {
    submitHandler,
    btCaption,
  };
};
