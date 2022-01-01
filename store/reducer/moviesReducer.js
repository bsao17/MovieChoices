import { TOGGLE_FAVORITES } from "../action/moviesAction";

export default function toggleFavorites(state = [], action) {
  if(action.type === TOGGLE_FAVORITES) {
    return {
      ...state,
      movies: state.findIndex(movie => movie.id === action.movies.id) === -1 ? [...state, action.movies] : state.filter(movie => movie.id !== action.movies.id)
    }
  }
  
} // end toggleFavorites