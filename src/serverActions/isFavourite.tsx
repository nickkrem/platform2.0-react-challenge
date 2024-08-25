"use server";

import { revalidatePath } from "next/cache";

//Get the secured API KEY from local env

export default async function isFavourite(
  favouriteId: string
): Promise<{ isFavourite: boolean }> {
  try {
    const url = `${process.env.THE_CAT_API_URL_FAVOURITES}/${favouriteId}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
        "x-api-key": `${process.env.API_KEY}`,
      },
    });

    let data = await res.json();
    if (data === "NOT_FOUND") {
      return { isFavourite: false };
    }

    console.log("EDWWWWWWWWWWWWWWWW");
    revalidatePath("/");

    return { isFavourite: true };
  } catch (error) {
    console.log(error);
    //if there is an error return server error message
    return { isFavourite: false };
  }
}
