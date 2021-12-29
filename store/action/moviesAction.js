export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const addFavorites = (movies) => {
  return {
    type: ADD_TO_FAVORITES,
    movies,
  };
}

export const removeFavorites = (movies) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    movies,
  };
}