import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as FaIcon from "@fortawesome/free-solid-svg-icons";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formattedDate(date: string) {
  return new Date(date).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
}

export function daysToEvent(date: string) {
  const eventDate = new Date(date);
  const currentDate = new Date();
  const difference = eventDate.getTime() - currentDate.getTime();
  return Math.floor(difference / (1000 * 60 * 60 * 24));
}

export function FinalIcon(icon: string) {
  return FaIcon[icon as keyof typeof FaIcon] || FaIcon.faQuestionCircle;
}
