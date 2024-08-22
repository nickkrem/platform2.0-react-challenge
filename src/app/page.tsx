import ImageList from "@/components/image-list-comp/imageList";
import { getCatImages } from "@/lib/data";
import MainSection from "@/components/main-section/mainSection";

export default async function Home() {
  //Get the images here and pass it down to ImagesList, so I can reuse ImageList
  const catImages = await getCatImages(10, "RAND", 0, true);

  return (
    <MainSection title="Check out our cat images">
      <ImageList images={catImages} />
    </MainSection>
  );
}
