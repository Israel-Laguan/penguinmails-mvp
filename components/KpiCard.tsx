import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import from the new UI library
import { cn } from "@/lib/utils"; // Import the cn utility

interface KpiCardProps {
  title: string;
  value: string;
  icon: React.ElementType; // Accept a React component as an icon
  color: string; // Allow passing a custom color class
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon, color }) => {
  const Icon = icon;

  return (
    <Card className={cn("shadow-sm")}>
      {" "}
      {/* Use Card component and cn utility */}
      {/* <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      </CardHeader> */}
      <CardContent className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </CardContent>
    </Card>
  );
};

export default KpiCard;
