import { Media } from "./Media";

export interface DifferentNetworkingSectionData {
  text: string;
  image: Media;
}

export interface DifferentNetworkingSectionDataResponse {
  data: DifferentNetworkingSectionData;
  meta: {};
}
