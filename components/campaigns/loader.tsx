import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Loader() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle><Skeleton className="h-8 w-48" /></CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-8 w-full" />
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-4 w-full">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-8 w-full" />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-8 w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex justify-center gap-2">
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-8 w-1/3" />
        </div>
        <div>
          <Card>
            <CardContent className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-1/6" />
                  <Skeleton className="h-4 w-1/6" />
                </div>
                <Skeleton className="h-8 w-full" />
              </div>

              <div className="flex flex-col gap-5">
                <Skeleton className="h-8 md:w-1/5 w-1/3" />
                <div className="flex flex-wrap gap-5">
                  <Skeleton className="h-4 md:w-1/10 w-10" />
                  <Skeleton className="h-4 md:w-1/10 w-10" />
                  <Skeleton className="h-4 md:w-1/10 w-10" />
                  <Skeleton className="h-4 md:w-1/10 w-10" />
                  <Skeleton className="h-4 md:w-1/10 w-10" />
                  <Skeleton className="h-4 md:w-1/10 w-10" />
                </div>
                <div className="flex flex-col gap-4">
                  <Skeleton className="h-6 md:w-1/5 w-1/3" />
                  <Skeleton className="h-20 w-full" />
                  <div className="flex gap-4">
                    <Skeleton className="h-6 md:w-1/6 w-1/3" />
                    <Skeleton className="h-6 md:w-1/6 w-1/3" />
                    <Skeleton className="h-6 md:w-1/6 w-1/3" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
