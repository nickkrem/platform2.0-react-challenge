"use client";

//import { createAddFavouritesQueryBody, createUserID } from "@/lib/utils";
import styles from "./paginationButton.module.scss";
import type {
  CAT_IMAGE,
  FAVOURITES_BUTTON,
  PAGINATION_BUTTON_DATA,
} from "@/lib/types";
import { useActionState, useReducer, useState } from "react";
import addFavourite from "@/serverActions/addFavourite";
import { getImagesPerPage } from "@/serverActions/getImagesPerPage";
import CatImage from "../cat-image-comp/catImage";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

const initState: PAGINATION_BUTTON_DATA = {
  page: 0,
  images: [],
  error: "",
};

export default function PaginationButton() {
  const router = useRouter();
  //const [state, action] = useFormState(getImagesPerPage, initState);
  const [state, action] = useActionState(getImagesPerPage, initState);

  console.log(state);

  return (
    <>
      {state.images.map((image) => {
        <li key={image.id}>
          <CatImage imageDetails={image} />
        </li>;
      })}
      <li key="-1">
        <form action={action}>
          <button className="pageButton">
            <div onClick={() => router.refresh()}>+</div>
          </button>
        </form>
      </li>
    </>
  );
}
