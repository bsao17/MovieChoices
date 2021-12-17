import axios from "axios";

const TMDB_API_KEY = "aa8f04f54fcce47385ba5669d91bccee";

export async function getMovieFromApiWithSearchText(text) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    TMDB_API_KEY +
    "&language=fr&query=" +
    text;
  return await axios.get(url).then((data) => {
    return data.data.results;
  });
}
