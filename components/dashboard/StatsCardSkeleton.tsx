import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

function StatsCardSkeleton({ className }: { className?: string }) {
  return (
    <Card className={cn("shadow-sm")}>
      <CardContent
        className={cn("flex items-center justify-between p-4", className)}
      >
        <div>
          <Skeleton className="h-4 bg-gray-200 rounded animate-pulse w-20 mb-2"></Skeleton>
          <Skeleton className="h-8 bg-gray-200 rounded animate-pulse w-16"></Skeleton>
        </div>
        <div className="p-3 rounded-lg bg-gray-200 animate-pulse">
          <Skeleton className="w-6 h-6 bg-gray-300 rounded"></Skeleton>
        </div>
      </CardContent>
    </Card>
  );
}

export default StatsCardSkeleton;
