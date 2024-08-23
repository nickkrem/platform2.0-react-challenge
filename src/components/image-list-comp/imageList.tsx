import { IMAGE_LIST_PROPS } from "@/lib/types";
import CatImage from "../cat-image-comp/catImage";
import styles from "./imageList.module.scss";
import { Suspense } from "react";

export default function ImageList({ images }: IMAGE_LIST_PROPS) {
  return (
    <ul className={styles.imageList}>
      {images.map((imageDetails) => {
        //imageDetails is either a cat image object or a breed object
        return (
          <li key={imageDetails.id}>
            {/* TODO: A better loading skeleton */}
            <Suspense fallback={<div>Loading...</div>}>
              <CatImage imageDetails={imageDetails} />
            </Suspense>
          </li>
        );
      })}
    </ul>
  );
}
