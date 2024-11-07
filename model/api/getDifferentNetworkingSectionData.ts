import { ApiEnum } from "../enums/ApiEnum";
import { DifferentNetworkingSectionData, DifferentNetworkingSectionDataResponse } from "../interfaces/DifferentNetworkingSectionData";
import { fetchRequest } from "./fetchRequest";

export async function getDifferentNetworkingSectionData(): Promise<DifferentNetworkingSectionData> {
  const response = await fetchRequest<DifferentNetworkingSectionDataResponse>(
    `${process.env.NEXT_PUBLIC_CMS_URL}${ApiEnum.CMS_DIFFERENT_NETWORKING_SECTION}?populate=*`,
    null
  );

  return response.data;
}
