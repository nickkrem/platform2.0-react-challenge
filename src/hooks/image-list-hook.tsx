import { CAT_IMAGE } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function useImageList(catImages: CAT_IMAGE[]) {
  const searchParams = useSearchParams();
  //Keep the initially loaded images along with the paginated ones
  const [homePageImages, setHomePageImages] = useState(catImages);
  let imageId;

  if (searchParams && searchParams.get("imageId")) {
    imageId = searchParams.get("imageId");
  }

  //Pass an onNextPage function down to the PaginationButton component so as to
  //get the next images and add them to the state
  function onNextPage(nextImages: CAT_IMAGE[]) {
    setHomePageImages([...homePageImages, ...nextImages]);
  }

  return {
    homePageImages,
    imageId,
    onNextPage,
  };
}
