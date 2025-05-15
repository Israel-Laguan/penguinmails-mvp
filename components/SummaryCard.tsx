import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Import from the new UI library
import { cn } from "@/lib/utils"; // Import the cn utility

interface SummaryCardProps {
  title: string;
  value: string | number;
  className?: string; // Allow passing additional classes
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, className }) => {
  return (
    <Card className={cn("shadow-sm", className)}> {/* Use Card component and cn utility */}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        {/* Optional: Add an icon here if needed later */}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
