"use server";

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

    return { isFavourite: true };
  } catch (error) {
    console.log(error);
    //if there is an error just return false
    return { isFavourite: false };
  }
}
