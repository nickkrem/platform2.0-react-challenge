export type ORDER = "ASC" | "DESC" | "RAND";

interface IMAGE_TYPE {
  id: string;
  width: number;
  height: number;
  url: string;
}
export interface BREED {
  weight: {
    metric: string;
  };
  id: string;
  name: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  cat_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  bidability: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
  image?: IMAGE_TYPE;
}

export interface CAT_IMAGE extends IMAGE_TYPE {
  breeds?: BREED[];
}

export interface IMAGE_LIST_PROPS {
  images: CAT_IMAGE[] | BREED[];
}

export interface CAT_IMAGE_PROPS {
  imageAttr: CAT_IMAGE | BREED;
}

export interface MAIN_SECTION_PROPS {
  title: string;
  children: JSX.Element;
}
