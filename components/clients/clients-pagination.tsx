import { Button } from "@/components/ui/button";
import { copyText as t } from "./copy";

interface ClientsPaginationProps {
  currentPage: number;
  totalPages: number;
  loading: boolean;
  onPageChange: (page: number) => void;
}

export function ClientsPagination({
  currentPage,
  totalPages,
  loading,
  onPageChange,
}: ClientsPaginationProps) {
  return (
    <div className="flex items-center justify-between space-x-2 py-4">
      <div className="text-sm text-muted-foreground">
        {t.table.pagination.replace("{0}", currentPage.toString()).replace("{1}", totalPages.toString())}
      </div>
      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || loading}
        >
          {t.buttons.previous}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || loading}
        >
          {t.buttons.next}
        </Button>
      </div>
    </div>
  );
}
