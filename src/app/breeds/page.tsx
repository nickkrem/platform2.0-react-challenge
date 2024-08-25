import ImageList from "@/components/image-list-comp/imageList";
import { getCatBreeds, getCatsByBreedId } from "@/lib/data";
import MainSection from "@/components/main-section/mainSection";
import { BREEDS_PAGE_PROPS, CAT_IMAGE } from "@/lib/types";
import Modal from "@/components/modal-comp/modal";
import { Suspense } from "react";
import styles from "./page.module.scss";

export default async function Breeds({ searchParams }: BREEDS_PAGE_PROPS) {
  //Get the breeds here and pass it down to ImageList, so I can reuse ImageList
  const catBreeds = await getCatBreeds();
  const breedId = searchParams?.breedId;
  let catImages: CAT_IMAGE[] = [];

  if (breedId) {
    catImages = await getCatsByBreedId(breedId);
  }

  return (
    <div className={styles.breedsContainer}>
      <MainSection title="Check out our cat breeds">
        <ImageList images={catBreeds} route="breeds" />
      </MainSection>

      {/* Modal initially is hidden. See Modal component */}
      <Modal title="Breed members">
        <>
          {breedId && (
            // TODO: A better loading skeleton
            <Suspense fallback={<div>Loading...</div>}>
              <ImageList images={catImages} route="breeds" />
            </Suspense>
          )}
        </>
      </Modal>
    </div>
  );
}
