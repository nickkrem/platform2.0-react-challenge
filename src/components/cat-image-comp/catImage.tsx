import Link from "next/link";
import Image from "next/image";
import styles from "./catImage.module.scss";
import imageNotAvailable from "public/no-image-available.png";
import { BREED, CAT_IMAGE, CAT_IMAGE_PROPS } from "@/lib/types";

export default function CatImage({ imageAttr }: CAT_IMAGE_PROPS) {
  const url = `/cat-images/${imageAttr.id}?openModal=true`;
  let catImage: CAT_IMAGE;
  let alt = "A beautiful cat";
  let showCaption = false;

  //Check if imageAttr is a BREED object. If so, get it's property image
  if ((imageAttr as BREED).name) {
    const breed = imageAttr as BREED;
    alt = breed.name;
    catImage = breed.image as CAT_IMAGE;

    //There are cases where breeds do not have an image object. If so create
    if (!breed.image) {
      catImage = {
        id: "",
        url: imageNotAvailable.src,
        width: imageNotAvailable.width,
        height: imageNotAvailable.height,
      } as CAT_IMAGE;
    }

    showCaption = true;
  }
  //If imageAttr is not a BREED object it must be a CAT_IMAGE object. Get it as it is...
  else {
    catImage = imageAttr as CAT_IMAGE;
  }

  return (
    <Link href={url}>
      <figure className={styles.figure}>
        <Image
          src={catImage.url}
          alt={alt}
          className={styles.catImage}
          width={catImage.width}
          height={catImage.height}
        />
        {showCaption && <figcaption>{alt}</figcaption>}
      </figure>
    </Link>
  );
}
