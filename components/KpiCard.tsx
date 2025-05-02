import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Import from the new UI library
import { cn } from "@/lib/utils"; // Import the cn utility

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  className?: string; // Allow passing additional classes
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, change, changeType, className }) => {
  const changeColor = changeType === 'increase' ? 'text-green-600' : changeType === 'decrease' ? 'text-red-600' : 'text-gray-600';
  const changeIcon = changeType === 'increase' ? '↑' : changeType === 'decrease' ? '↓' : '';

  return (
    <Card className={cn("shadow-sm", className)}> {/* Use Card component and cn utility */}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        {/* Optional: Add an icon here if needed later */}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={cn("text-xs text-muted-foreground flex items-center", changeColor)}>
          {changeIcon && <span className="mr-1">{changeIcon}</span>}
          {change}
        </p>
      </CardContent>
    </Card>
  );
};

export default KpiCard;
