export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";

export const toggleFavorites = (movies) => {
  return {
    type: TOGGLE_FAVORITES,
    movies,
  };
}
