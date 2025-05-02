import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Import from the new UI library
import { Progress } from "@/components/ui/progress"; // Import Progress from the new UI library
import { Badge } from "@/components/ui/badge"; // Import Badge from the new UI library
import { cn } from "@/lib/utils";

// Define the structure for campaign data based on the screenshot
interface CampaignData {
  id: string;
  name: string;
  status: 'Running' | 'Paused' | 'Draft' | 'Completed';
  progressCurrent: number;
  progressTotal: number;
  opens: number;
  opensPercent: number;
  clicks: number;
  clicksPercent: number;
  replies: number;
  repliesPercent: number;
  lastActivity: string;
}

// Placeholder data matching the screenshot
const mockCampaigns: CampaignData[] = [
  {
    id: '1',
    name: 'Software CEOs Outreach',
    status: 'Running',
    progressCurrent: 1285,
    progressTotal: 2500,
    opens: 840,
    opensPercent: 65.4,
    clicks: 210,
    clicksPercent: 16.3,
    replies: 84,
    repliesPercent: 6.5,
    lastActivity: '2 hours ago',
  },
  {
    id: '2',
    name: 'Marketing Directors Follow-up',
    status: 'Paused',
    progressCurrent: 1800,
    progressTotal: 1800,
    opens: 1170,
    opensPercent: 65.0,
    clicks: 432,
    clicksPercent: 24.0,
    replies: 216,
    repliesPercent: 12.0,
    lastActivity: 'Yesterday',
  },
  {
    id: '3',
    name: 'Startup Founders Introduction',
    status: 'Draft',
    progressCurrent: 0,
    progressTotal: 1200,
    opens: 0,
    opensPercent: 0,
    clicks: 0,
    clicksPercent: 0,
    replies: 0,
    repliesPercent: 0,
    lastActivity: '3 days ago',
  },
  {
    id: '4',
    name: 'SaaS Decision Makers',
    status: 'Running',
    progressCurrent: 450,
    progressTotal: 1500,
    opens: 280,
    opensPercent: 62.2,
    clicks: 85,
    clicksPercent: 18.9,
    replies: 42,
    repliesPercent: 9.3,
    lastActivity: '5 minutes ago',
  },
  {
    id: '5',
    name: 'Enterprise IT Directors',
    status: 'Completed',
    progressCurrent: 2000,
    progressTotal: 2000,
    opens: 1400,
    opensPercent: 70.0,
    clicks: 600,
    clicksPercent: 30.0,
    replies: 320,
    repliesPercent: 16.0,
    lastActivity: '1 week ago',
  },
];

// Helper function to determine badge variant based on status
const getStatusVariant = (status: CampaignData['status']): "default" | "secondary" | "destructive" | "outline" => {
  switch (status) {
    case 'Running':
      return 'default'; // Use default (blue/primary) for Running
    case 'Paused':
      return 'secondary'; // Use secondary (gray) for Paused
    case 'Draft':
      return 'outline'; // Use outline for Draft
    case 'Completed':
      return 'secondary'; // Use secondary (gray) for Completed
    default:
      return 'secondary';
  }
};

const CampaignsTable: React.FC<{ campaigns: CampaignData[] }> = ({ campaigns }) => {
  return (
    <div className="rounded-md border shadow-sm bg-white"> {/* Added border and removed shadow-lg */} 
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Campaign</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Opens</TableHead>
            <TableHead>Clicks</TableHead>
            <TableHead>Replies</TableHead>
            <TableHead>Last Activity</TableHead>
            <TableHead className="text-right">Actions</TableHead> {/* Align actions right */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => {
            const progressValue = campaign.progressTotal > 0 ? (campaign.progressCurrent / campaign.progressTotal) * 100 : 0;
            return (
              <TableRow key={campaign.id}>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>
                  {/* Use Badge component for status */}
                  <Badge variant={getStatusVariant(campaign.status)}>{campaign.status}</Badge>
                </TableCell>
                <TableCell>
                  {/* Use Progress component */}
                  <div className="flex items-center">
                    <Progress value={progressValue} className="w-[100px] h-2 mr-2" />
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {campaign.progressCurrent.toLocaleString()}/{campaign.progressTotal.toLocaleString()}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="tabular-nums">
                  {campaign.opens.toLocaleString()} <span className="text-xs text-muted-foreground">({campaign.opensPercent.toFixed(1)}%)</span>
                </TableCell>
                <TableCell className="tabular-nums">
                  {campaign.clicks.toLocaleString()} <span className="text-xs text-muted-foreground">({campaign.clicksPercent.toFixed(1)}%)</span>
                </TableCell>
                <TableCell className="tabular-nums">
                  {campaign.replies.toLocaleString()} <span className="text-xs text-muted-foreground">({campaign.repliesPercent.toFixed(1)}%)</span>
                </TableCell>
                <TableCell>{campaign.lastActivity}</TableCell>
                <TableCell className="text-right">
                  {/* Placeholder for actions dropdown - Use DropdownMenu from UI library later */}
                  <button className="text-muted-foreground hover:text-foreground">...</button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

// Exporting mock data for use in the page component
export { mockCampaigns };
export default CampaignsTable;
