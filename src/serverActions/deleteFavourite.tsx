"use server";

import { revalidatePath } from "next/cache";
import Error from "next/error";
import { redirect } from "next/navigation";

export default async function deleteFavourite(
  favouriteId: number
): Promise<string> {
  try {
    const url = `${process.env.THE_CAT_API_URL_FAVOURITES}/${favouriteId}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json; charset=utf-8",
        "x-api-key": `${process.env.API_KEY}`,
      },
    });
    const data = await res.json();

    //revalidatePath("/favourites");

    return data.message;
  } catch (error) {
    console.log(error);
    //if there is an error return server error message
    return "ERROR";
  }
}
