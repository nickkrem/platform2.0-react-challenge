"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./catImage.module.scss";
import type { CAT_IMAGE_PROPS } from "@/lib/types";
import { getCatImageFromObj } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

export default function CatImage({ imageDetails }: CAT_IMAGE_PROPS) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //Get the correct image attributes needed for Image
  let catImage = getCatImageFromObj(imageDetails, pathname, searchParams);

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
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mO0Tvd1ZyACMI4qpK9CAJcxDCc4AjJpAAAAAElFTkSuQmCC"
        />
        {catImage.caption && <figcaption>{catImage.caption}</figcaption>}
      </figure>
    </Link>
  );
}
