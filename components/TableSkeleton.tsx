import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";

function TableSkeleton({
  title = "Table Skeleton",
  className = "",
  columns,
}: {
  title?: string;
  className?: string;
  columns?: {
    name: string;
    key: string;
  }[];
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>
        <Skeleton className="h-6 w-1/3 mb-2" />
      </CardHeader>
      <Separator />
      <CardContent className="overflow-x-auto p-0">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {columns?.map((column, index) => (
                <th key={index} className="px-8 py-4">
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                {/* Campaign Name Column */}
                <td className="px-8 py-6">
                  <div>
                    <Skeleton className="h-5 w-48 mb-2" />
                    <Skeleton className="h-4 w-32 mb-1" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </td>
                {/* Status Column */}
                <td className="px-6 py-6">
                  <Skeleton className="h-8 w-20 rounded-full" />
                </td>
                {/* Mailboxes Column */}
                <td className="px-6 py-6">
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                </td>
                {/* Performance Column */}
                <td className="px-6 py-6">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </td>
                {/* Last Sent Column */}
                <td className="px-6 py-6">
                  <Skeleton className="h-4 w-16" />
                </td>
                {/* Actions Column */}
                <td className="px-6 py-6 text-right">
                  <div className="flex items-center justify-end space-x-3">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-4" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

export default TableSkeleton;
