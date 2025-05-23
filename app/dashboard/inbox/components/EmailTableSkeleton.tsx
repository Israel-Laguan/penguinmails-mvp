import React from "react";

export default function EmailTableSkeleton() {
  return (
    <div className="border rounded-lg overflow-hidden animate-pulse">
      <div className="grid grid-cols-5 gap-4 px-4 py-3 bg-gray-100 text-sm font-medium text-gray-600">
        <div>Starred</div>
        <div>From</div>
        <div>Email</div>
        <div>Subject</div>
        <div>Preview</div>
        <div>Date</div>
      </div>

      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="grid grid-cols-5 gap-4 px-4 py-3 border-t items-center"
        >
          <div className="h-4 w-4 bg-gray-300 rounded-full mx-auto" />
          <div className="h-4 w-20 bg-gray-300 rounded" />
          <div className="h-4 w-32 bg-gray-300 rounded" />
          <div className="h-4 w-64 bg-gray-300 rounded" />
          <div className="h-4 w-24 bg-gray-300 rounded" />
        </div>
      ))}
    </div>
  );
}
