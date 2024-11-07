import { Media } from "./Media";

export interface VisionSectionData {
  text: string;
  image: Media;
}

export interface VisionSectionDataResponse {
  data: VisionSectionData;
  meta: {};
}
