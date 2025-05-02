import React from 'react';

type CampaignStatus = 'Running' | 'Paused' | 'Draft' | 'Completed';

interface StatusIndicatorProps {
  status: CampaignStatus;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  let colorClass = '';
  let textClass = '';

  switch (status) {
    case 'Running':
      colorClass = 'bg-green-100';
      textClass = 'text-green-800';
      break;
    case 'Paused':
      colorClass = 'bg-yellow-100';
      textClass = 'text-yellow-800';
      break;
    case 'Draft':
      colorClass = 'bg-blue-100';
      textClass = 'text-blue-800';
      break;
    case 'Completed':
      colorClass = 'bg-gray-100';
      textClass = 'text-gray-800';
      break;
    default:
      colorClass = 'bg-gray-100';
      textClass = 'text-gray-800';
  }

  // Using a slightly different style than the simple dot to match modern UI trends, but keeping the color coding.
  // The screenshot shows a simple dot, this uses a badge style which is common.
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass} ${textClass}`}>
      {status}
    </span>
  );
};

export default StatusIndicator;
