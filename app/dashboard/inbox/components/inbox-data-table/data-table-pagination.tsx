"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DatatablePaginationProps {
  page: number;
  pageSize: number;
  totalPages: number;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
  fetchAllMessages: () => void;
  type: "all" | "unread" | "starred";
}

function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

export default function DatatablePagination({
  page,
  pageSize,
  totalPages,
  setPage,
  setPageSize,
  fetchAllMessages,
}: DatatablePaginationProps) {
  const isMobile = useIsMobile();
  const pageSizes = [5, 10, 15];

  if (isMobile) {
    return (
      <div className="flex items-center justify-between px-4 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setPage(Math.max(page - 1, 1));
            fetchAllMessages();
          }}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setPage(Math.min(page + 1, totalPages));
            fetchAllMessages();
          }}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-end px-2 mt-3">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => setPageSize(Number(value))}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizes.map((size) => (
                <SelectItem key={size} value={`${size}`}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {page} of {totalPages}
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => {
              setPage(Math.max(page - 1, 1));
              fetchAllMessages();
            }}
            disabled={page === 1}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: totalPages })
            .map((_, i) => i + 1)
            .filter((pageNumber) => {
              const windowSize = 5;
              const halfWindow = Math.floor(windowSize / 2);
              const start = Math.max(1, page - halfWindow);
              const end = Math.min(totalPages, start + windowSize - 1);
              return pageNumber >= start && pageNumber <= end;
            })
            .map((pageNumber) => (
              <Button
                key={pageNumber}
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => {
                  setPage(pageNumber);
                  fetchAllMessages();
                }}
                disabled={page === pageNumber}
              >
                {pageNumber}
              </Button>
            ))}

          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => {
              setPage(page + 1);
              fetchAllMessages();
            }}
            disabled={page === totalPages}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
