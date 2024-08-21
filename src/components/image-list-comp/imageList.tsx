import CatImage from "../cat-image-comp/catImage";
import styles from "./imageList.module.scss";
import { getCatImages } from "@/lib/data";

export default async function ImageList() {
  const catImages = await getCatImages(10, "RAND", 0, true);

  return (
    <ul className={styles.imageList}>
      {catImages.map((catImage) => {
        return (
          <li key={catImage.id}>
            <CatImage catImage={catImage} />
          </li>
        );
      })}
    </ul>
  );
}
