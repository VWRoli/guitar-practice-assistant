export const formatTime = (duration) => {
  const min = String(Math.trunc(duration / 60)).padStart(2, 0);
  const sec = String(duration % 60).padStart(2, 0);
  return `${min}:${sec}`;
};
