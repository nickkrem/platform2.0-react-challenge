"use client";

//import { createAddFavouritesQueryBody, createUserID } from "@/lib/utils";
import styles from "./paginationButton.module.scss";
import type {
  CAT_IMAGE,
  FAVOURITES_BUTTON,
  PAGINATION_BUTTON_DATA,
} from "@/lib/types";
import { useActionState, useState } from "react";
import addFavourite from "@/serverActions/addFavourite";
import { getImagesPerPage } from "@/serverActions/getImagesPerPage";

export default function PaginationButton() {
  const initState: PAGINATION_BUTTON_DATA = {
    page: 0,
    images: [],
    error: "",
  };
  //const [state, action] = useActionState(getImagesPerPage, initState);

  //console.log(state);

  return (
    //This component will be a part of a list
    <li>
      <form action="">
        <button className={styles.pageButton}>
          <div>+</div>
        </button>
      </form>
    </li>
  );
}
