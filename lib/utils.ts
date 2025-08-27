import moment from 'moment-timezone'
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



export function calculateMaxEmails(startTime:string, endTime:string, delayMinutes:number) {
  const [startHours, startMinutes] = startTime.split(":").map(Number)
  const [endHours, endMinutes] = endTime.split(":").map(Number)

  const totalStartMinutes = startHours * 60 + startMinutes
  const totalEndMinutes = endHours * 60 + endMinutes

  const totalMinutes = totalEndMinutes - totalStartMinutes
  const maxEmails = Math.floor(totalMinutes / delayMinutes)

  return Math.max(maxEmails, 0)
}
export const allTimezones = moment.tz.names().map(tz => {
  const offset = moment.tz(tz).utcOffset()
  const sign = offset >= 0 ? '+' : '-'
  const absOffset = Math.abs(offset)
  const hours = String(Math.floor(absOffset / 60)).padStart(2, '0')
  const minutes = String(absOffset % 60).padStart(2, '0')
  const formattedOffset = `UTC${sign}${hours}:${minutes}`
  return {
    label: `${formattedOffset} (${tz.replace('_', ' ')})`,
    value: tz
  }
})


 export  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return date.toLocaleDateString();
  };
