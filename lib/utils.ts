import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isValidTimeRange = (firstSendTime: string, secondSendTime: string) => {
  const [startHour, startMinute] = firstSendTime.split(':').map(Number);
  const [endHour, endMinute] = secondSendTime.split(':').map(Number);

  if (
    isNaN(startHour) ||
    isNaN(startMinute) ||
    isNaN(endHour) ||
    isNaN(endMinute)
  ) {
    return true;
  }

  const startTimeInMinutes = startHour * 60 + startMinute;
  const endTimeInMinutes = endHour * 60 + endMinute;

  return endTimeInMinutes >= startTimeInMinutes;
};
