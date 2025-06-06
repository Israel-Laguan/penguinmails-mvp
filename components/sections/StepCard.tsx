import React from "react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isLast?: boolean;
}

export const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  IconComponent,
  isLast = false,
}) => (
  <div className="relative bg-[#1e293b] rounded-xl p-6 border border-gray-700 shadow-lg flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <IconComponent className="w-10 h-10 text-blue-400" />
      <span className="text-4xl">🐧</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
        {number}
      </span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-gray-400">{description}</p>

    {!isLast && (
      <div className="hidden md:block absolute top-1/2 right-[-25px] w-15 h-0.5 bg-blue-500/50 z-10" />
    )}
  </div>
);
