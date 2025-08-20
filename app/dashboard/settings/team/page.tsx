import TeamMembersTable from "@/components/settings/team/team-members-table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";

function page() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Team Management</h1>
          <p className="text-gray-600">
            Manage your team members and their roles
          </p>
        </div>
        <div>
          <Button>
            <Plus />
            Invite Member
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <TeamMembersTable />
        </CardContent>
      </Card>
    </div>
  );
}
export default page;
