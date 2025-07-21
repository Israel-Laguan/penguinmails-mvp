import { campaignsData } from "@/lib/data/campaigns";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import CampaignsTableRow from "./CampaignsTableRow";


export const campaignColumns = [
  { name: "Campaign Name", key: "name" },
  { name: "Status", key: "status" },
  { name: "Mailboxes", key: "mailboxes" },
  { name: "Performance", key: "performance" },
  { name: "Last Sent", key: "lastSent" },
  { name: "Actions", key: "actions" },
];
async function CampaignsTable() {
  const campaigns = campaignsData;

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
              {campaignColumns.map((column) => (
                <th key={column.key} className="px-8 py-4">
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {campaigns.map((campaign) => (
              <CampaignsTableRow key={campaign.id} campaign={campaign} />
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

export default CampaignsTable;
