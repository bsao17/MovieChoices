export const SET_MOVIES = "SET_MOVIES";

const actionMovies = {
    setMovies: (movies) => ({
        type: SET_MOVIES,
        payload: movies
    })
};
