import { ApiEnum } from "../enums/ApiEnum";
import { ExpectationsSectionData, getExpectationsSectionDataResponse } from "../interfaces/ExpectationsSectionData";
import { fetchRequest } from "./fetchRequest";

export async function getExpectationsSectionData(): Promise<ExpectationsSectionData> {
  const response = await fetchRequest<getExpectationsSectionDataResponse>(
    `${process.env.NEXT_PUBLIC_CMS_URL}${ApiEnum.CMS_EXPECTATIONS_SECTION}?populate=*`,
    null
  );

  return response.data;
}
