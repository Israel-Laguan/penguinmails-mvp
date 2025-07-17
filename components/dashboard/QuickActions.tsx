import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Globe, Plus, Upload } from "lucide-react";
import Link from "next/link";
function QuickActions() {
  const btnStyle =
    "w-full justify-start h-fit  gap-3 p-3 text-left hover:bg-gray-50 rounded-lg";

  return (
    <Card className="bg-white rounded-xl shadow-sm border border-gray-200 ">
      <CardHeader>
        <h3 className="font-semibold text-gray-900 ">Quick Actions</h3>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-3">
        <Button variant={"ghost"} size={"icon"} className={btnStyle} asChild>
          <Link href="/dashboard/campaigns/create">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Plus className="w-4 h-4 text-blue-600" />
            </div>
            <span className="font-medium text-gray-900">Create Campaign</span>
          </Link>
        </Button>
        <Button variant={"ghost"} size={"icon"} className={btnStyle} asChild>
          <Link href="/dashboard/leads">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Upload className="w-4 h-4 text-green-600" />
            </div>
            <span className="font-medium text-gray-900">Upload Leads</span>
          </Link>
        </Button>
        <Button variant={"ghost"} size={"icon"} className={btnStyle} asChild>
          <Link href="/dashboard/domains/new">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <Globe className="w-4 h-4 text-purple-600" />
            </div>
            <span className="font-medium text-gray-900">Add Domain</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
export default QuickActions;
