import Link from "next/link";
import Image from "next/image";
import styles from "./catImage.module.scss";
import type { CAT_IMAGE_PROPS } from "@/lib/types";
import { getCatImageFromObj } from "@/lib/utils";

export default async function CatImage({ imageDetails }: CAT_IMAGE_PROPS) {
  //Get the correct image attributes needed for Image
  let catImage = getCatImageFromObj(imageDetails);

  const url = `/?imageId=${catImage.routeId}`;
  //const url = `/cat-images/${catImage.routeId}`;

  return (
    <Link href={url}>
      <figure className={styles.figure}>
        <Image
          src={catImage.url}
          alt={catImage.alt || "A beautiful cat"}
          className={styles.catImage}
          width={catImage.width}
          height={catImage.height}
        />
        {catImage.caption && <figcaption>{catImage.caption}</figcaption>}
      </figure>
    </Link>
  );
}
