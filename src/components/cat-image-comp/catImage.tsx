import Link from "next/link";
import Image from "next/image";
import styles from "./catImage.module.scss";
import { CAT_IMAGE_PROPS } from "@/lib/types";

export default function CatImage({ catImage }: CAT_IMAGE_PROPS) {
  const url = `/cat-images/${catImage.id}?openModal=true`;

  return (
    <Link href={url}>
      <Image
        src={catImage.url}
        alt="A beautiful cat"
        className={styles.catImage}
        width={catImage.width}
        height={catImage.height}
      />
    </Link>
  );
}
