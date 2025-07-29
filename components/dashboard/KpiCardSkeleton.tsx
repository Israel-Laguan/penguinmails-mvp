import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function KpiCardSkeleton() {
  return (
    <Card className={cn("shadow-sm")}>
      <CardContent className="flex items-center justify-between">
        <div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-20 mb-2"></div>
          <div className="h-8 bg-gray-200 rounded animate-pulse w-16"></div>
        </div>
        <div className="p-3 rounded-lg bg-gray-200 animate-pulse">
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
        </div>
      </CardContent>
    </Card>
  );
}

export default KpiCardSkeleton;
