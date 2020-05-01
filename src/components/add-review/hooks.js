import {
  useCallback,
  useState,
  useEffect,
} from 'react';

export const useReviewPosting = () => {
  const [timer, setTimer] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const submitHandler = useCallback((evt) => {
    clearTimeout(timer);
    evt.preventDefault();
    setTimer(setTimeout(() => {
      setLoaded(true);
    }), 1000);
  }, []);
  useEffect(() => {
    return () => {
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
