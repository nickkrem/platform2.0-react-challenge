"use client";

import styles from "./favouritesButton.module.scss";
import type { FAVOURITES_BUTTON } from "@/lib/types";
import { useEffect, useState } from "react";
import addFavourite from "@/serverActions/addFavourite";
import isFavourite from "@/serverActions/isFavourite";

export default function FavouritesButton({
  imageId,
  onClick,
}: FAVOURITES_BUTTON) {
  const [isImageAddedToFavourites, setIsImageAddedToFavourites] =
    useState(false);
  const [pending, setPending] = useState(false);
  let text = "Add to favourites";

  //Make a request when first rendering the button
  // in order to check if image has already been added to favourites
  useEffect(() => {
    let requestIsCancelled = false;

    const getIsFavourite = async () => {
      const isFavouriteObj = await isFavourite(imageId);
      console.log(isFavouriteObj);
      setIsImageAddedToFavourites(isFavouriteObj.isFavourite);
    };

    //Just so to prevent possible unnecessary requests
    //Couldn't use Signal on server action
    //if (!requestIsCancelled) {
    getIsFavourite();
    //}

    return () => {
      requestIsCancelled = true;
    };
  }, []);

  if (pending) {
    text = "Adding to favourites...";
  }

  if (isImageAddedToFavourites) {
    text = "Added to favourites";
  }

  return (
    <button
      type="button"
      onClick={async () => {
        setPending(true);
        await addFavourite(imageId);
        setPending(false);
        setIsImageAddedToFavourites(true);
        onClick?.();
      }}
      className={`${
        (isImageAddedToFavourites || pending) && styles.disabled
      } btn round`}
      disabled={isImageAddedToFavourites || pending}
    >
      {text}
    </button>
  );
}
