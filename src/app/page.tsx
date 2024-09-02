import { getCatImages } from "@/lib/data";

import HomePage from "@/components/home-page/homePage";

export default async function Home() {
  //Get the images here and pass it down to ImagesList, so I can reuse ImageList
  const catImages = await getCatImages(10, "RAND", 0, true);

  //We need this Home Page wrapper client component to keep initial images
  //along with the paginated ones in state and display them from that state.
  //See HomePage Component...
  return <HomePage catImages={catImages} />;
}
