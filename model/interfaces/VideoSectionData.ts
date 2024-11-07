import { Media } from "./Media";


export interface VideoSectionData {
  text: string;
  leftImage: Media;
  middleVideo: Media;
  rightImage: Media;
}

export interface VideoSectionDataResponse {
  data: VideoSectionData;
  meta: {};
}
