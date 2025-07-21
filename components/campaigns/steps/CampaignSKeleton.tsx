import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { DialogTitle } from "@radix-ui/react-dialog";

function CampaignSKeleton() {
  return (
    <>
      {/* Dialog Header Skeleton */}
      <DialogHeader>
        <div className="space-y-3">
          <DialogTitle>
            <Skeleton className="h-8 w-64" /> {/* Title skeleton */}
          </DialogTitle>
          <Skeleton className="h-4 w-48" /> {/* Subtitle skeleton */}
        </div>
      </DialogHeader>

      {/* Main Content Skeleton */}
      <div className="overflow-y-auto space-y-8 p-6">
        {/* Campaign Steps Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-6 w-40" /> {/* Steps title */}
          <div className="flex space-x-4">
            <Skeleton className="h-10 w-24 rounded-full" /> {/* Step 1 */}
            <Skeleton className="h-10 w-24 rounded-full" /> {/* Step 2 */}
            <Skeleton className="h-10 w-24 rounded-full" /> {/* Step 3 */}
            <Skeleton className="h-10 w-24 rounded-full" /> {/* Step 4 */}
          </div>
        </div>

        {/* Campaign Form Skeleton */}
        <div className="space-y-6">
          {/* Form sections */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" /> {/* Section title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" /> {/* Label */}
                <Skeleton className="h-10 w-full" /> {/* Input */}
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" /> {/* Label */}
                <Skeleton className="h-10 w-full" /> {/* Input */}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Skeleton className="h-6 w-36" /> {/* Section title */}
            <div className="space-y-3">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" /> {/* Label */}
                <Skeleton className="h-32 w-full" /> {/* Textarea */}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" /> {/* Label */}
                  <Skeleton className="h-10 w-full" /> {/* Select */}
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" /> {/* Label */}
                  <Skeleton className="h-10 w-full" /> {/* Input */}
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" /> {/* Label */}
                  <Skeleton className="h-10 w-full" /> {/* Input */}
                </div>
              </div>
            </div>
          </div>

          {/* Additional form sections */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-28" /> {/* Section title */}
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center space-x-3 p-3 border rounded-lg"
                >
                  <Skeleton className="h-5 w-5 rounded" /> {/* Checkbox */}
                  <div className="flex-1 space-y-1">
                    <Skeleton className="h-4 w-32" /> {/* Option title */}
                    <Skeleton className="h-3 w-48" /> {/* Option description */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table skeleton for campaign data */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-40" /> {/* Table title */}
            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50">
                <Skeleton className="h-4 w-20" /> {/* Header 1 */}
                <Skeleton className="h-4 w-24" /> {/* Header 2 */}
                <Skeleton className="h-4 w-16" /> {/* Header 3 */}
                <Skeleton className="h-4 w-18" /> {/* Header 4 */}
              </div>
              {[1, 2, 3, 4].map((row) => (
                <div key={row} className="grid grid-cols-4 gap-4 p-4 border-t">
                  <Skeleton className="h-4 w-16" /> {/* Cell 1 */}
                  <Skeleton className="h-4 w-20" /> {/* Cell 2 */}
                  <Skeleton className="h-4 w-12" /> {/* Cell 3 */}
                  <Skeleton className="h-4 w-14" /> {/* Cell 4 */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog Footer Skeleton */}
      <DialogFooter>
        <div className="flex space-x-3">
          <Skeleton className="h-10 w-20" /> {/* Cancel button */}
          <Skeleton className="h-10 w-16" /> {/* Back button */}
          <Skeleton className="h-10 w-20" /> {/* Next button */}
        </div>
      </DialogFooter>
    </>
  );
}

export default CampaignSKeleton;
