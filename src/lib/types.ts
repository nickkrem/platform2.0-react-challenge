export type ORDER = "ASC" | "DESC" | "RAND";
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
}

export interface CAT_IMAGE {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds?: BREED[];
}

export interface IMAGE_LIST_PROPS {
  catImages: CAT_IMAGE[];
}

export interface CAT_IMAGE_PROPS {
  catImage: CAT_IMAGE;
}
