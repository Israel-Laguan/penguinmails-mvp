import TrackingPreferences from "@/components/settings/tracking/tracking-preferences";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold ">Tracking Settings</h1>
        <p className="text-gray-600">
          Manage your tracking preferences and settings.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Tracking Information</CardTitle>
        </CardHeader>
        <CardContent>
          <TrackingPreferences />
        </CardContent>
      </Card>
    </div>
  );
}
export default page;
