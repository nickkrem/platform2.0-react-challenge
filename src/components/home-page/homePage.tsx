"use client";

import { useState } from "react";
import ImageDetails from "../image-details/imageDetails";
import ImageList from "../image-list-comp/imageList";
import MainSection from "../main-section/mainSection";
import Modal from "../modal-comp/modal";
import { CAT_IMAGE, HOME_PAGE_PROPS } from "@/lib/types";
import { useSearchParams } from "next/navigation";

//We need this Home Page wrapper client component to keep initial images
//along with the paginated ones in state and display them from that state.
//Otherwise ImageDetails component will not have the newlly updated list of images
//so clicking on a newlly added image won't display details for that image
export default function HomePage({ catImages }: HOME_PAGE_PROPS) {
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

  return (
    <>
      <MainSection title="Look at these beauties!!!">
        <ImageList images={homePageImages} onNextPage={onNextPage} />
      </MainSection>
      {/* Modal initially is hidden. See Modal component */}
      <Modal title="Breed Details">
        <>
          {imageId && (
            // TODO: A better loading skeleton
            <ImageDetails id={imageId} catImages={homePageImages} />
          )}
        </>
      </Modal>
    </>
  );
}
