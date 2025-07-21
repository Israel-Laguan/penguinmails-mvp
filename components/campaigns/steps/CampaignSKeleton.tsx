import { Skeleton } from "@/components/ui/skeleton";

function CampaignSKeleton() {
  return (
    <div className="overflow-hidden max-h-11/12">
      <div>
        <div className="space-y-3">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-48" />
        </div>
      </div>

      <div className="overflow-y-auto space-y-8 p-6">
        <div className="space-y-4">
          <Skeleton className="h-6 w-40" />
          <div className="flex space-x-4">
            <Skeleton className="h-10 w-24 rounded-full" />
            <Skeleton className="h-10 w-24 rounded-full" />
            <Skeleton className="h-10 w-24 rounded-full" />
            <Skeleton className="h-10 w-24 rounded-full" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Skeleton className="h-6 w-36" />
            <div className="space-y-3">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-32 w-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Skeleton className="h-6 w-28" />
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center space-x-3 p-3 border rounded-lg"
                >
                  <Skeleton className="h-5 w-5 rounded" />
                  <div className="flex-1 space-y-1">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-48" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Skeleton className="h-6 w-40" />
            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-18" />
              </div>
              {[1, 2, 3, 4].map((row) => (
                <div key={row} className="grid grid-cols-4 gap-4 p-4 border-t">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-4 w-14" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-3">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-16" />
        <Skeleton className="h-10 w-20" />
      </div>
    </div>
  );
}

export default CampaignSKeleton;
