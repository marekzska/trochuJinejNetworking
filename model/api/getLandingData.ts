import { ApiEnum } from "../enums/ApiEnum";
import { LandingData, LandingDataResponse } from "../interfaces/LandingData";
import { fetchRequest } from "./fetchRequest";

export async function getLandingData(): Promise<LandingData> {
  const response = await fetchRequest<LandingDataResponse>(
    `${process.env.NEXT_PUBLIC_CMS_URL}${ApiEnum.CMS_LANDING_TITLE}?populate=*`,
    null
  );

  return response.data;
}
