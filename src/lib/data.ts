import type { BREED, CAT_IMAGE, ORDER } from "./types";

//Get the secured API KEY from local env
const API_KEY = process.env.API_KEY;

const THE_CAT_API_URL = "https://api.thecatapi.com/v1";
const THE_CAT_API_URL_FAVOURITES = `${THE_CAT_API_URL}/favourites`;
const THE_CAT_API_URL_BREEDS = `${THE_CAT_API_URL}/breeds`;
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

export async function getCatBreeds(): Promise<BREED[]> {
  //const url = `${THE_CAT_API_URL_BREEDS}?limit=1`;
  const res = await fetch(THE_CAT_API_URL_BREEDS, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": `${API_KEY}`,
    },
  });

  return res.json();
}

export async function getCatDetails(id: string): Promise<CAT_IMAGE> {
  const url = `${THE_CAT_API_URL_IMAGES}/${id}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": `${API_KEY}`,
    },
  });

  return res.json();
}

export async function getCatByBreedId(id: string): Promise<CAT_IMAGE[]> {
  const url = `${THE_CAT_API_SEARCH_URL}?limit=10&breed_ids=${id}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": `${API_KEY}`,
    },
  });

  return res.json();
}
