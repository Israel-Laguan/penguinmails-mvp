import { DropDownFilter, Filter } from "@/components/Filter";
import Icon from "@/components/Icon";
import { Calendar, Filter as FilterIcon } from "lucide-react";

function WarmupAnalyticsFilter() {
  return (
    <Filter className="shadow-none border-none ">
      <div className="flex items-center space-x-4 ml-auto">
        <div className="flex items-center space-x-4 ">
          <Icon icon={Calendar} className="text-gray-500 w-5  h-5" />
          <DropDownFilter
            options={[
              {
                label: "Last 7 days",
                value: "7d",
              },
              {
                label: "Last 30 days",
                value: "30d",
              },
              {
                label: "Last 90 days",
                value: "90d",
              },
              {
                label: "Last 1 Year",
                value: "1y",
              },
            ]}
          />
        </div>
        <div className="flex items-center space-x-4">
          <Icon icon={FilterIcon} className="text-gray-500 w-5  h-5" />
          <DropDownFilter
            options={[
              {
                label: "Daily",
                value: "daily",
              },
              {
                label: "Weekly",
                value: "weekly",
              },
              {
                label: "Monthly",
                value: "monthly",
              },
            ]}
          />
        </div>
      </div>
    </Filter>
  );
}
export default WarmupAnalyticsFilter;
