"use client";

import type {
  PAGINATION_BUTTON_DATA,
  PAGINATION_BUTTON_PROPS,
} from "@/lib/types";
import { useEffect } from "react";
import { getImagesPerPage } from "@/serverActions/getImagesPerPage";
import { useFormState } from "react-dom";

const initState: PAGINATION_BUTTON_DATA = {
  page: 0,
  images: [],
  error: "",
};

export default function PaginationButton({
  onNextPage,
}: PAGINATION_BUTTON_PROPS) {
  //const [state, action] = useActionState(getImagesPerPage, initState);
  const [state, action] = useFormState(getImagesPerPage, initState);

  useEffect(() => {
    if (onNextPage) onNextPage(state.images);
    //I want to run onNextPage only when state is updated
    //onNextPage should not be a dependency here
  }, [state]);

  return (
    <li key="-1">
      <form action={action}>
        <button className="pageButton">
          <div>+</div>
        </button>
      </form>
    </li>
  );
}
