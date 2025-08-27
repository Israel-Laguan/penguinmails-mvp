export type Notification = {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
};
export enum NotificationType {
  REPLY = "reply",
  CAMPAIGN = "campaign",
  WARNING = "warning",
  SUCCESS = "success",
  INFO = "info",
}
