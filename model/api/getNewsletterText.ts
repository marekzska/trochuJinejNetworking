import { ApiEnum } from "../enums/ApiEnum";
import {
  getNewsletterTextDataResponse,
  NewsletterTextData,
} from "../interfaces/NewsletterText";
import { fetchRequest } from "./fetchRequest";

export async function getNewsletterText(): Promise<NewsletterTextData> {
  const response = await fetchRequest<getNewsletterTextDataResponse>(
    `${process.env.NEXT_PUBLIC_CMS_URL}${ApiEnum.CMS_NEWSLETTER}?populate=*`,
    null
  );

  return response.data;
}