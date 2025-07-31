import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function ConversationSkeleton() {
  return (
    <Card className="shadow-none border-0 rounded-none gap-0 p-0">
      <CardHeader className="p-0">
        {/* Conversation Header Skeleton */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
          </div>
        </div>

        {/* Notes Panel Skeleton */}
        <div className="p-4 border-b">
          <div className="space-y-3">
            <Skeleton className="h-4 w-20" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* Conversation Messages Skeleton */}
        <div className="space-y-4 p-4 max-h-96 overflow-y-auto">
          {/* Message 1 - Received */}
          <div className="flex space-x-3">
            <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-12" />
              </div>
              <div className="bg-muted p-3 rounded-lg max-w-xs">
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-4/5" />
                  <Skeleton className="h-3 w-3/5" />
                </div>
              </div>
            </div>
          </div>

          {/* Message 2 - Sent */}
          <div className="flex space-x-3 justify-end">
            <div className="flex-1 space-y-2 max-w-xs">
              <div className="flex items-center justify-end space-x-2">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-3 w-16" />
              </div>
              <div className="bg-primary p-3 rounded-lg ml-auto">
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full bg-primary-foreground/20" />
                  <Skeleton className="h-3 w-3/4 bg-primary-foreground/20" />
                </div>
              </div>
            </div>
            <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
          </div>

          {/* Message 3 - Received */}
          <div className="flex space-x-3">
            <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-12" />
              </div>
              <div className="bg-muted p-3 rounded-lg max-w-xs">
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-0">
        {/* Conversation Reply Skeleton */}
        <div className="w-full p-4 border-t">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-6 w-6 rounded" />
              <Skeleton className="h-6 w-6 rounded" />
              <Skeleton className="h-6 w-6 rounded" />
              <div className="flex-1" />
              <Skeleton className="h-6 w-6 rounded" />
              <Skeleton className="h-6 w-6 rounded" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-20 w-full rounded-md" />
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-8 w-16 rounded" />
                  <Skeleton className="h-8 w-16 rounded" />
                </div>
                <Skeleton className="h-8 w-20 rounded" />
              </div>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ConversationSkeleton;
