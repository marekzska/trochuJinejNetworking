import { ApiEnum } from "../enums/ApiEnum";
import { Event, EventData } from "../interfaces/EventInterface";
import { fetchRequest } from "./fetchRequest";
import queryString from "query-string";

export async function getEvents(slug?: string): Promise<Event[]> {
  const response = await fetchRequest<EventData>(
    `${process.env.NEXT_PUBLIC_CMS_URL}${ApiEnum.CMS_EVENTS}`,
    queryString.stringify({
      populate: "*",
      ...(slug && { "filters[slug][$eq]": slug }),
    })
  );

  return response.data;
}
