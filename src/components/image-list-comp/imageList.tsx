import { IMAGE_LIST_PROPS } from "@/lib/types";
import CatImage from "../cat-image-comp/catImage";
import styles from "./imageList.module.scss";

export default async function ImageList({ images }: IMAGE_LIST_PROPS) {
  return (
    <ul className={styles.imageList}>
      {images.map((imageAttr) => {
        //imageAttr is either a cat image object or a breed object
        return (
          <li key={imageAttr.id}>
            <CatImage imageAttr={imageAttr} />
          </li>
        );
      })}
    </ul>
  );
}
