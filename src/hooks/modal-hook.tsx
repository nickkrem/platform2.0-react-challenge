import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useSearchParams, usePathname } from "next/navigation";
import { MutableRefObject, useCallback, useEffect } from "react";

export default function useModal(
  dialogRef: MutableRefObject<HTMLDialogElement | null>,
  router: AppRouterInstance
) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const imageId = searchParams.get("imageId");
  const breedId = searchParams.get("breedId");

  //We need to show the modal in three cases.
  //The first is when we need to show the detail of a specific breed.
  //The second is when we need to show cat images of a specific breed.
  //The third is when we need to show the detail of a specific breed when we are at breeds page.
  const showModal =
    //case 1
    (imageId && pathname === "/") ||
    //case 2
    (breedId && pathname === "/breeds") ||
    //case 3
    (imageId && pathname === "/breeds");

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
  }, [dialogRef]);
  // function closeDialog() {
  //   dialogRef.current?.close();
  // }

  const showDialog = useCallback(() => {
    dialogRef.current?.showModal();
  }, [dialogRef]);

  // function showDialog() {
  //   dialogRef.current?.showModal();
  // }

  useEffect(() => {
    if (showModal) {
      showDialog();
    } else {
      closeDialog();
    }

    return () => {
      if (showModal) {
        closeDialog;
      } else {
        showDialog();
      }
    };
  }, [showModal, closeDialog, showDialog]);

  function onCloseDialog() {
    if (!router) return;

    //We have to check where this modal came from
    //and on close of the modal push the route back to it's destination
    if (pathname === "/") {
      router.push(pathname);
    }

    if (pathname === "/breeds" && breedId && imageId) {
      router.push(`${pathname}?breedId=${breedId}`);
    }

    if (pathname === "/breeds" && breedId && !imageId) {
      router.push(pathname);
    }
  }

  return {
    imageId,
    onCloseDialog,
    closeDialog,
  };
}
