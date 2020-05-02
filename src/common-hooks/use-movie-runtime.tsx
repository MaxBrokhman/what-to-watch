type TUseMovieRuntime = {
  time: {
  full: string;
  hours: string;
  minutes: string;
};}

export const useMovieRuntime = (time: number): TUseMovieRuntime => {
  const fullHours = Math.floor(time / 60);
  const rawMinutes = time - (fullHours * 60);
  const hours = fullHours < 10
    ? `0${fullHours}`
    : `${fullHours}`;
  const minutes = rawMinutes < 10
    ? `0${rawMinutes}`
    : `${rawMinutes}`;
  return {
    time: {
      full: `${hours}:${minutes}:00`,
      hours,
      minutes,
    },
  };
};
