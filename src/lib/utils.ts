import type { CAT_IMAGE, BREED } from "./types";
import imageNotAvailable from "public/no-image-available.png";

/**
 *
 * @param {CAT_IMAGE | BREED} obj - This is either the breed details object or the image details object
 * @returns {CAT_IMAGE} - Returns an object that has all the necessary attributes to provide an Image
 *
 */
export function getCatImageFromObj(obj: CAT_IMAGE | BREED) {
  let catImage = obj as CAT_IMAGE;
  catImage["routeId"] = catImage.id;

  //Check if imageDetails is a BREED object. If so, get it's property image
  // We distinguish betwenn objects by the "name" property, which only exists
  // in the BREED object
  if ((obj as BREED).name) {
    const breed = obj as BREED;
    catImage = breed.image as CAT_IMAGE;

    //There are cases where breeds do not have an image object. If so create
    if (!catImage) {
      catImage = {
        id: "",
        url: imageNotAvailable.src,
        width: imageNotAvailable.width,
        height: imageNotAvailable.height,
      } as CAT_IMAGE;
    }

    catImage["alt"] = breed.name;
    catImage["caption"] = breed.name;
    catImage["routeId"] = breed.id;
  }

  return catImage;
}
