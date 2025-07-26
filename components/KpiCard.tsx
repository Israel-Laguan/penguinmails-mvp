import { Card, CardContent } from "@/components/ui/card"; // Import from the new UI library
import { cn } from "@/lib/utils"; // Import the cn utility
import React from "react";

interface KpiCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  color: string;
  className?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  icon,
  color,
  className,
}) => {
  const Icon = icon;

  return (
    <Card className={cn("shadow-sm")}>
      <CardContent
        className={cn("flex items-center justify-between", className)}
      >
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={cn("p-3 rounded-lg ", color)}>
          <Icon className="w-6 h-6 " />

        </div>
      </CardContent>
    </Card>
  );
};

export default KpiCard;
