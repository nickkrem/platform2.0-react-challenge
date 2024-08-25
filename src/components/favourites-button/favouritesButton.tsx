"use client";

import styles from "./favouritesButton.module.scss";
import type { FAVOURITES_BUTTON } from "@/lib/types";
import { useEffect, useState } from "react";
import addFavourite from "@/serverActions/addFavourite";

export default function FavouritesButton({
  imageId,
  onClick,
}: FAVOURITES_BUTTON) {
  const [isImageAddedToFavourites, setIsImageAddedToFavourites] =
    useState(false);
  const [pending, setPending] = useState(false);
  let text = "Add to favourites";

  useEffect(() => {});

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
