import type { CAT_IMAGE, ORDER } from "./types";

//Get the secured API KEY from local env
const API_KEY = process.env.API_KEY;

const THE_CAT_API_URL = "https://api.thecatapi.com/v1";
const THE_CAT_API_URL_FAVOURITES = `${THE_CAT_API_URL}/favourites`;
const THE_CAT_API_URL_IMAGES = `${THE_CAT_API_URL}/images`;
const THE_CAT_API_SEARCH_URL = `${THE_CAT_API_URL_IMAGES}/search`;

// I need this function to only run on server
export async function getCatImages(
  limit: number = 1,
  order: ORDER = "RAND",
  page = 0,
  useKey = false
): Promise<CAT_IMAGE[]> {
  //Get cat images without the api key by default
  let url = `${THE_CAT_API_SEARCH_URL}?limit=${limit}&order=${order}&page=${page}`;

  if (useKey) {
    //add the api key to the url
    url += `&api_key=${API_KEY}`;
  }

  const res = await fetch(url);

  return res.json();
}
