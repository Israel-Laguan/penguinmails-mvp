"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";

function DownloadButton({ invoiceId }: { invoiceId: string }) {
  function handleDownload() {
    toast.success(`Invoice ${invoiceId} downloaded successfully`);
  }
  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 text-green-600"
      onClick={handleDownload}
    >
      <Download className="h-4 w-4" />
      <span className="sr-only">Download invoice {invoiceId}</span>
    </Button>
  );
}
export default DownloadButton;
