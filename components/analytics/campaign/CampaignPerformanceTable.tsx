import {campaignData} from "@/lib/data/analytics.mock";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Progress} from "@/components/ui/progress";
import {cn} from "@/lib/utils";

function CampaignPerformanceTable() {
  return (
      < >

        <>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Sent</TableHead>
                  <TableHead>Opens</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>Replies</TableHead>
                  <TableHead>Open Rate</TableHead>
                  <TableHead>Reply Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaignData.map((campaign, index) => (
                    <TableRow key={index} className={cn("hover:bg-muted/50")}>
                      <TableCell className="font-medium">{campaign.name}</TableCell>
                      <TableCell>{campaign.sent.toLocaleString()}</TableCell>
                      <TableCell>{campaign.opens.toLocaleString()}</TableCell>
                      <TableCell>{campaign.clicks.toLocaleString()}</TableCell>
                      <TableCell>{campaign.replies.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress
                              value={campaign.openRate}
                          />
                          <span className="text-sm font-medium">
                        {campaign.openRate}%
                      </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress
                              value={campaign.replyRate * 10}
                              className={cn("flex-1 h-2", "[&>div]:bg-green-500")}


                          />
                          <span className="text-sm font-medium">
                        {campaign.replyRate}%
                      </span>
                        </div>
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      </>
  );
}

export default CampaignPerformanceTable;