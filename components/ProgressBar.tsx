import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = total > 0 ? Math.min(100, Math.max(0, (current / total) * 100)) : 0;

  return (
    <div className="flex items-center">
      <div className="w-24 bg-gray-200 rounded-full h-1.5 mr-2 overflow-hidden">
        <div 
          className="bg-blue-600 h-1.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-500 tabular-nums">{current.toLocaleString()}/{total.toLocaleString()}</span>
    </div>
  );
};

export default ProgressBar;
