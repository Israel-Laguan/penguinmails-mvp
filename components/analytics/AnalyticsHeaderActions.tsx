import { Download, RefreshCw } from "lucide-react";
import { Button } from "../ui/button";

function AnalyticsHeaderActions() {
  return (
    <div className="flex items-center space-x-3">
      <Button variant="outline">
        <RefreshCw className="w-4 h-4" />
      </Button>
      <Button>
        <Download className="w-4 h-4" />
        <span>Export</span>
      </Button>
    </div>
  );
}
export default AnalyticsHeaderActions;
