import SET_MOVIES from '../action/moviesAction';

export default function moviesReducer(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.payload;
    default:
      return state;
  }
}   // moviesReducer