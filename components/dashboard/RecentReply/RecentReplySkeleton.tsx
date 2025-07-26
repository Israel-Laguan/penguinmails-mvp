function RecentReplySkeleton() {
  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
            <span className="text-sm text-gray-300">•</span>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
            <div className="h-6 bg-gray-200 rounded-full animate-pulse w-16"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          </div>
          <div className="h-3 bg-gray-200 rounded animate-pulse w-16 mt-2"></div>
        </div>
      </div>
    </div>
  );
}
export default RecentReplySkeleton;
