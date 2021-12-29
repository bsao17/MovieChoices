import { SET_MOVIES } from "../action/moviesAction";

export default function moviesReducer(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: [...state.push(action.movies)],
      };
    default:
      return state;
  }
} // moviesReducer
