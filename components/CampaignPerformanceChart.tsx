'use client';

import React from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  // Legend 
} from 'recharts';

// Define the expected data structure for props
interface ChartDataPoint {
  name: string;
  [key: string]: unknown; // Allow other properties like opens, clicks, etc.
}

interface CampaignPerformanceChartProps {
  data: ChartDataPoint[];
}

// Custom Tooltip component (remains the same)
const CustomTooltip = ({ 
  active, 
  payload, 
  label 
}: { 
  active?: boolean;
  payload?: {
    color: string;
    name: string;
    value: number;
  }[];
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow rounded border border-gray-200">
        <p className="font-semibold text-sm text-gray-700">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }} className="text-xs">
            {`${entry.name} : ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Accept data as props
const CampaignPerformanceChart: React.FC<CampaignPerformanceChartProps> = ({ data }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 h-96 flex flex-col">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Campaign Performance</h3>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          {/* Use the data prop */}
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 0, // Adjusted left margin
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#d1d5db', strokeWidth: 1 }} />
            {/* <Legend verticalAlign="top" height={36}/> */}
            <Line type="monotone" dataKey="opens" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Opens" />
            <Line type="monotone" dataKey="clicks" stroke="#60A5FA" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Clicks" />
            <Line type="monotone" dataKey="replies" stroke="#93C5FD" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Replies" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CampaignPerformanceChart;
