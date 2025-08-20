import ProfileForm from "@/components/settings/profile-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold ">General Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and profile information
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          <ProfileForm />
        </CardContent>
      </Card>
    </div>
  );
}
export default page;
