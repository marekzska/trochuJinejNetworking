import { ApiEnum } from "../enums/ApiEnum";
import { Event, EventData } from "../interfaces/EventInterface";
import { fetchRequest } from "./fetchRequest";

export async function getEvents(): Promise<Event[]> {
  const response = await fetchRequest<EventData>(
    `${process.env.NEXT_PUBLIC_CMS_URL}${ApiEnum.CMS_EVENTS}?populate=*`,
    null
  );

  return response.data;
}
