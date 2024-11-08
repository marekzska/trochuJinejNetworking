import queryString from "query-string";
import { ApiEnum } from "../enums/ApiEnum";
import { VideoSectionData, VideoSectionDataResponse } from "../interfaces/VideoSectionData";
import { fetchRequest } from "./fetchRequest";

export async function getVideoSectionData(): Promise<VideoSectionData> {
  const response = await fetchRequest<VideoSectionDataResponse>(
    `${process.env.NEXT_PUBLIC_CMS_URL}${ApiEnum.CMS_VIDEO_SECTION}`,
    queryString.stringify({ populate: "*" })
  );

  return response.data;
}
