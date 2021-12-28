import axios from "axios";
import {TMDB_API_KEY} from "../api-key.js";

export async function getMovieDetailsFromApi(id) {
  const url = 
  `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos&language=fr` 
  return await axios.get(url).then((response) => {
    return response.data
  }).
  catch(error => {
    console.log(error); 
  });
}
