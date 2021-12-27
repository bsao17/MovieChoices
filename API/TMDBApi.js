import axios from "axios";
import {TMDB_API_KEY} from "../api-key.js";


export async function getMovieFromApiWithSearchText(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    TMDB_API_KEY +
    "&language=fr&query=" +
    text
    + "&page=" + 
    page
  return await axios.get(url).then((response) => {
    return response.data;
  }).
  catch(error => {
    console.log(error);
  });
}
