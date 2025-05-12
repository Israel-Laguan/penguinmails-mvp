"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface NotificationSettingsProps {
  notificationSettings: {
    email: {
      campaignCompletions: boolean;
      newReplies: boolean;
      weeklyReports: boolean;
      systemAnnouncements: boolean;
    };
    inApp: {
      realtimeCampaignAlerts: boolean;
      emailAccountAlerts: boolean;
    };
  };
}

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({ notificationSettings }) => {
  // In a real application, you would handle state and updates here or with a form library

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Configure how and when you receive notifications.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">Campaign Completions</h4>
              <p className="text-xs text-muted-foreground">
                Receive notifications when a campaign is completed
              </p>
            </div>
            <Switch defaultChecked={notificationSettings.email.campaignCompletions} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">New Replies</h4>
              <p className="text-xs text-muted-foreground">
                Get notified when someone replies to your campaigns
              </p>
            </div>
            <Switch defaultChecked={notificationSettings.email.newReplies} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">Weekly Reports</h4>
              <p className="text-xs text-muted-foreground">
                Receive weekly performance reports via email
              </p>
            </div>
            <Switch defaultChecked={notificationSettings.email.weeklyReports} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">System Announcements</h4>
              <p className="text-xs text-muted-foreground">
                Important updates about the platform and new features
              </p>
            </div>
            <Switch defaultChecked={notificationSettings.email.systemAnnouncements} />
          </div>
        </div>

        <div className="space-y-4 border-t pt-6">
          <h3 className="text-lg font-medium">In-App Notifications</h3>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">Real-time Campaign Alerts</h4>
              <p className="text-xs text-muted-foreground">
                Show notifications for campaign events in real-time
              </p>
            </div>
            <Switch defaultChecked={notificationSettings.inApp.realtimeCampaignAlerts} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">Email Account Alerts</h4>
              <p className="text-xs text-muted-foreground">
                Notifications for email account issues or warnings
              </p>
            </div>
            <Switch defaultChecked={notificationSettings.inApp.emailAccountAlerts} />
          </div>
        </div>
        {/* Save preferences button would likely be part of a form in a real app */}
        {/* <div className="flex justify-end">
          <Button>Save Preferences</Button>
        </div> */}
      </CardContent>
    </Card>
  );
};
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface NotificationSettingsProps {
  notificationSettings: {
    email: {
      campaignCompletions: boolean;
      newReplies: boolean;
      weeklyReports: boolean;
      systemAnnouncements: boolean;
    };
    inApp: {
      realtimeCampaignAlerts: boolean;
      emailAccountAlerts: boolean;
    };
  };
}

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({ notificationSettings }) => {
  // In a real application, you would handle state and updates here or with a form library

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Configure how and when you receive notifications.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">Campaign Completions</h4>
              <p className="text-xs text-muted-foreground">
                Receive notifications when a campaign is completed
              </p>
            </div>
            <Switch defaultChecked={notificationSettings.email.campaignCompletions} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">New Replies</h4>
              <p className="text-xs text-muted-foreground">
                Get notified when someone replies to your campaigns
              </p>
            </div>
            <Switch defaultChecked={notificationSettings.email.newReplies} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">Weekly Reports</h4>
              <p className="text-xs text-muted-foreground">
                Receive weekly performance reports via email
              </p>
            </div>
            <Switch defaultChecked={notificationSettings.email.weeklyReports} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">System Announcements</h4>
              <p className="text-xs text-muted-foreground">
                Important updates about the platform and new features
              </p>
            </div>
            <Switch defaultChecked={notificationSettings.email.systemAnnouncements} />
          </div>
        </div>

        <div className="space-y-4 border-t pt-6">
          <h3 className="text-lg font-medium">In-App Notifications</h3>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">Real-time Campaign Alerts</h4>
              <p className="text-xs text-muted-foreground">
                Show notifications for campaign events in real-time
              </p>
            </div>
            <Switch defaultChecked={notificationSettings.inApp.realtimeCampaignAlerts} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">Email Account Alerts</h4>
              <p className="text-xs text-muted-foreground">
                Notifications for email account issues or warnings
              </p>
            </div>
            <Switch defaultChecked={notificationSettings.inApp.emailAccountAlerts} />
          </div>
        </div>
        {/* Save preferences button would likely be part of a form in a real app */}
        {/* <div className="flex justify-end">
          <Button>Save Preferences</Button>
        </div> */}
      </CardContent>
    </Card>
  );
};