import { ADD_TO_FAVORITES } from "../action/moviesAction";
import { REMOVE_FROM_FAVORITES } from "../action/moviesAction";

export default function moviesReducer(state = [], action) {
    let nextState;
  switch (action.type) {
    case ADD_TO_FAVORITES:
      nextState = {
        ...state,
        movies: [...state.push(action.movies)],
      };
      case REMOVE_FROM_FAVORITES:
        nextState = {
            ...state,
            movies: [...state.filter(movies => movies.id !== action.movies.id)],
        };
      return nextState;
    default:
      return state;
  }
} // moviesReducer
