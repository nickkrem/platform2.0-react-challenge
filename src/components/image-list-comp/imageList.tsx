import { IMAGE_LIST_PROPS } from "@/lib/types";
import CatImage from "../cat-image-comp/catImage";
import styles from "./imageList.module.scss";

export default function ImageList({ images }: IMAGE_LIST_PROPS) {
  return (
    <ul className={styles.imageList}>
      {images.map((imageDetails) => {
        //imageDetails is either a cat image object or a breed object
        return (
          <li key={imageDetails.id}>
            <CatImage imageDetails={imageDetails} />
          </li>
        );
      })}
    </ul>
  );
}
