"use client";

import { SyntheticEvent, useEffect, useRef } from "react";
import styles from "./modal.module.scss";
import { MODAL_PROPS } from "@/lib/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Modal({ title, children }: MODAL_PROPS) {
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const imageId = searchParams.get("imageId");
  const breedId = searchParams.get("breedId");

  //We need to show the modal in two cases.
  //The first is when we need to show the detail of a specific breed.
  //The second is when we need to show cat images of a specific breed.
  const showModal =
    //case 1
    (imageId && pathname === "/") ||
    //case 2
    (breedId && pathname === "/breeds");

  useEffect(() => {
    if (showModal) {
      showDialog();
    } else {
      closeDialog();
    }
  }, [showModal]);

  function onCloseDialog(e: SyntheticEvent<HTMLDialogElement, Event>) {
    router.push(pathname);
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function showDialog() {
    dialogRef.current?.showModal();
  }

  return (
    <dialog onClose={onCloseDialog} className={styles.dialog} ref={dialogRef}>
      <div className={styles.container}>
        <header>
          <h3 className="title">{title}</h3>
          <button onClick={closeDialog} className="closeBtn">
            X
          </button>
        </header>
        <main>{children}</main>
        <footer>
          <button onClick={closeDialog} className={`${styles.round} closeBtn`}>
            Close
          </button>
        </footer>
      </div>
    </dialog>
  );
}
