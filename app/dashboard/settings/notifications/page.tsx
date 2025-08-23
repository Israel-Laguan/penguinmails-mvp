import NotificationsSettings from "@/components/settings/notifications/notifications-settings";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Notification Preferences</h1>
        <p className="text-muted-foreground">
          Choose how you want to be notified
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <NotificationsSettings />
        </CardContent>
      </Card>
    </div>
  );
}
export default page;
