import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";
function WarmupSummarySkeleton() {
  return (
    <Card className="bg-white rounded-xl shadow-sm border border-gray-200 ">
      <CardHeader>
        <h3 className="font-semibold text-gray-900 mb-4">Warmup Status</h3>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Active Mailboxes</span>
          <Skeleton className="h-4 w-12 bg-gray-200 animate-pulse" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Warming Up</span>
          <Skeleton className="h-4 w-12 bg-gray-200 animate-pulse" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Ready to Send</span>
          <Skeleton className="h-4 w-12 bg-gray-200 animate-pulse" />
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-200">
        <Skeleton className="h-4 bg-gray-200 animate-pulse " />
      </CardFooter>
    </Card>
  );
}
export default WarmupSummarySkeleton;
