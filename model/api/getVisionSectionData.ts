import { ApiEnum } from "../enums/ApiEnum";
import {
  VisionSectionData,
  VisionSectionDataResponse,
} from "../interfaces/VisionSectionData";
import { fetchRequest } from "./fetchRequest";

export async function getVisionSectionData(): Promise<VisionSectionData> {
  const response = await fetchRequest<VisionSectionDataResponse>(
    `${process.env.NEXT_PUBLIC_CMS_URL}${ApiEnum.CMS_VISION_SECTION}?populate=*`,
    null
  );

  return response.data;
}
