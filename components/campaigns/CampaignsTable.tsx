import {
  Clock,
  Copy,
  Edit,
  Eye,
  Pause,
  Play,
  Server,
  Trash2,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

const campaigns = [
  {
    id: 1,
    name: "Q1 SaaS Outreach",
    status: "active",
    mailboxes: 3,
    leadsSent: 847,
    replies: 73,
    openRate: "34.2%",
    replyRate: "8.6%",
    lastSent: "2 hours ago",
    createdDate: "2024-01-01",
    assignedMailboxes: [
      "john@mycompany.com",
      "sarah@mycompany.com",
      "mike@mycompany.com",
    ],
  },
  {
    id: 2,
    name: "Enterprise Prospects",
    status: "paused",
    mailboxes: 5,
    leadsSent: 1203,
    replies: 124,
    openRate: "41.7%",
    replyRate: "10.3%",
    lastSent: "1 day ago",
    createdDate: "2024-01-05",
    assignedMailboxes: [
      "john@mycompany.com",
      "sarah@mycompany.com",
      "mike@mycompany.com",
      "lisa@mycompany.com",
      "david@mycompany.com",
    ],
  },
  {
    id: 3,
    name: "SMB Follow-up",
    status: "active",
    mailboxes: 2,
    leadsSent: 492,
    replies: 38,
    openRate: "28.9%",
    replyRate: "7.7%",
    lastSent: "4 hours ago",
    createdDate: "2024-01-10",
    assignedMailboxes: ["lisa@mycompany.com", "david@mycompany.com"],
  },
  {
    id: 4,
    name: "Product Launch Outreach",
    status: "completed",
    mailboxes: 4,
    leadsSent: 2156,
    replies: 287,
    openRate: "39.4%",
    replyRate: "13.3%",
    lastSent: "1 week ago",
    createdDate: "2023-12-15",
    assignedMailboxes: [
      "john@mycompany.com",
      "sarah@mycompany.com",
      "mike@mycompany.com",
      "lisa@mycompany.com",
    ],
  },
  {
    id: 5,
    name: "Partnership Outreach",
    status: "active",
    mailboxes: 2,
    leadsSent: 324,
    replies: 45,
    openRate: "42.1%",
    replyRate: "13.9%",
    lastSent: "6 hours ago",
    createdDate: "2024-01-12",
    assignedMailboxes: ["sarah@mycompany.com", "david@mycompany.com"],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800";
    case "paused":
      return "bg-yellow-100 text-yellow-800";
    case "completed":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "active":
      return <Play className="w-3 h-3" />;
    case "paused":
      return <Pause className="w-3 h-3" />;
    default:
      return <Clock className="w-3 h-3" />;
  }
};
export const campaigncolums = [
  { name: "Campaign Name", key: "name" },
  { name: "Status", key: "status" },
  { name: "Mailboxes", key: "mailboxes" },
  { name: "Performance", key: "performance" },
  { name: "Last Sent", key: "lastSent" },
  { name: "Actions", key: "actions" },
];
async function CampaignsTable() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-semibold mb-4">Campaigns Table</h1>
        <p className="text-gray-600">{5} campaigns found</p>
      </CardHeader>
      <Separator />
      <CardContent className="overflow-x-auto p-0">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {campaigncolums.map((column) => (
                <th key={column.key} className="px-8 py-4">
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {campaigns.map((campaign) => (
              <tr
                key={campaign.id}
                className="hover:bg-gray-50 transition-colors group"
              >
                <td className="px-8 py-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors text-lg">
                      {campaign.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {campaign.leadsSent} leads sent • {campaign.replies}{" "}
                      replies
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Created:{" "}
                      {new Date(campaign.createdDate).toLocaleDateString()}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <span
                    className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(
                      campaign.status
                    )}`}
                  >
                    {getStatusIcon(campaign.status)}
                    <span className="capitalize">{campaign.status}</span>
                  </span>
                </td>
                <td className="px-6 py-6">
                  <div className="flex items-center space-x-2">
                    <Server className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900">
                      {campaign.mailboxes} mailboxes
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {campaign.assignedMailboxes
                      .slice(0, 2)
                      .map((email) => email.split("@")[0])
                      .join(", ")}
                    {campaign.assignedMailboxes.length > 2 &&
                      ` +${campaign.assignedMailboxes.length - 2} more`}
                  </div>
                </td>
                <td className="px-6 py-6">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">
                        {campaign.openRate}
                      </span>
                      <span className="text-xs text-gray-500">open rate</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-green-600">
                        {campaign.replyRate}
                      </span>
                      <span className="text-xs text-gray-500">reply rate</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-6 text-sm text-gray-500">
                  {campaign.lastSent}
                </td>
                <td className="px-6 py-6 text-right ">
                  <CampaignsActions campaignId={campaign.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
function CampaignsActions({ campaignId }: { campaignId: number }) {
  return (
    <div className="flex items-center space-x-3 space-x-reverse">
      <Link
        href={`/dashboard/campaigns/${campaignId}`}
        className="text-gray-500 hover:text-gray-700"
      >
        <Eye className="w-4 h-4" />
      </Link>
      <Link
        href={`/dashboard/campaigns/${campaignId}/edit`}
        className="text-gray-500 hover:text-gray-700"
      >
        <Edit className="w-4 h-4" />
      </Link>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="text-gray-500 hover:text-gray-700 hover:bg-transparent cursor-pointer m-0"
      >
        <Copy className="w-4 h-4" />
      </Button>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="text-red-500 hover:text-red-700 hover:bg-transparent cursor-pointer m-0"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg font-semibold">
              Delete Campaign
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-gray-500 mt-2">
              Are you sure you want to delete this campaign? This action cannot
              be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-gray-600">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                variant="destructive"
                className="text-white bg-red-600 hover:bg-red-700"
              >
                Delete
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
export default CampaignsTable;
