import { Media } from "./Media";

export interface Event {
  title: string;
  theme: string;
  longDescription: { children: { text: string }[] }[];
  icon: string;
  motto: string;
  date: string;
  location: string;
  price: number;
  slug: string;
  inPreparation: boolean;
  formDisclaimer: string;
  gallery: Media[];
  video: Media;
  locationNote: string;
  dateNote: string;
  registeredPeopleNote: string
  archived: boolean;
}
export interface EventData {
  data: Event[];
  meta: PaginationMetadata;
}

export interface PaginationMetadata {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
