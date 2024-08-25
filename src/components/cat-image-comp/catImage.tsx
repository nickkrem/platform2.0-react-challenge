"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./catImage.module.scss";
import type { CAT_IMAGE_PROPS } from "@/lib/types";
import { getCatImageFromObj } from "@/lib/utils";
import { headers } from "next/headers";

export default function CatImage({ imageDetails }: CAT_IMAGE_PROPS) {
  //Get pathname from headers, but first we need to set it in the middleware
  //See middleware.tsx
  //const headersList = headers();
  //const pathname = headersList.get("x-pathname") || "/";
  const pathname = "";

  //Get the correct image attributes needed for Image
  let catImage = getCatImageFromObj(imageDetails, pathname);

  const url = catImage.routePath ? catImage.routePath : `/`;

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
