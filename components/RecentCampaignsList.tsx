import React from 'react';
import { Mail, BarChart2, MessageSquare, MousePointer } from 'lucide-react'; // Using lucide-react for icons
import Link from 'next/link';

// Define the expected data structure for props
interface CampaignStat {
  id: number;
  name: string;
  total: number;
  opens: number;
  clicks: number;
  replies: number;
}

interface RecentCampaignsListProps {
  campaigns: CampaignStat[];
}

// Accept campaigns as props
const RecentCampaignsList: React.FC<RecentCampaignsListProps> = ({ campaigns }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 h-64 flex flex-col">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Campaigns</h3>
      <div className="flex-grow overflow-y-auto">
        {/* Use the campaigns prop */}
        <ul className="divide-y divide-gray-200">
          {campaigns.map((campaign, index) => (
            <li key={index} className="py-3">
              <p className="text-sm font-medium text-gray-800 truncate mb-1">
                <Link
                  href={`/dashboard/campaigns/${campaign.id}`}
                  className="hover:text-blue-500"
                >
                {campaign.name}
                </Link>
              </p>
              <div className="flex items-center space-x-3 text-xs text-gray-500">
                <span className="flex items-center">
                  <Mail size={12} className="mr-1" /> {campaign.total}
                </span>
                <span className="flex items-center">
                  <BarChart2 size={12} className="mr-1" /> {campaign.opens}
                </span>
                <span className="flex items-center">
                  <MousePointer size={12} className="mr-1" /> {campaign.clicks}
                </span>
                <span className="flex items-center">
                  <MessageSquare size={12} className="mr-1" /> {campaign.replies}
                </span>
              </div>
            </li>
          ))}
          {/* Add a message if no campaigns */} 
          {campaigns.length === 0 && (
            <li className="py-3 text-sm text-gray-500 text-center">No recent campaigns found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RecentCampaignsList;
