import ImageList from "@/components/image-list-comp/imageList";
import { getCatBreeds } from "@/lib/data";
import MainSection from "@/components/main-section/mainSection";

export default async function Breeds() {
  //Get the breeds here and pass it down to ImageList, so I can reuse ImageList
  const catBreeds = await getCatBreeds();

  return (
    <MainSection title="Check out our cat breeds">
      <ImageList images={catBreeds} />
    </MainSection>
  );
}
