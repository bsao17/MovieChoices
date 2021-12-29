export const SET_MOVIES = "SET_MOVIES";

export default function setMovie(movies) {
  return {
    type: SET_MOVIES,
    movies,
  };
}