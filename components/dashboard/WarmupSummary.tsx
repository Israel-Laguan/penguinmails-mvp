import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
async function WarmupSummary() {
  return (
    <Card className="bg-white rounded-xl shadow-sm border border-gray-200 ">
      <CardHeader>
        <h3 className="font-semibold text-gray-900 mb-4">Warmup Status</h3>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Active Mailboxes</span>
          <span className="font-medium">8</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Warming Up</span>
          <span className="font-medium text-orange-600">3</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Ready to Send</span>
          <span className="font-medium text-green-600">5</span>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-200">
        <div className="flex items-center text-sm text-amber-600">
          <AlertTriangle className="w-4 h-4 mr-2" />2 mailboxes need attention
        </div>
      </CardFooter>
    </Card>
  );
}
export default WarmupSummary;
