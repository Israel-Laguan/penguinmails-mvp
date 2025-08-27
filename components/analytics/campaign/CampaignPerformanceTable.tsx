import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { campaignData } from "@/lib/data/analytics.mock";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

function CampaignPerformanceTable() {
  return (
    <>
      <>
        <div className="overflow-x-auto">
          <TooltipProvider>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Sent</TableHead>
                  <TableHead>Opens</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>Replies</TableHead>
                  <TableHead>Bounced</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Open Rate
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Shows percent based on total emails sent. Bar fills
                            from 0% to 100%.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Reply Rate
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Shows percent based on total emails sent. Bar fills
                            only up to 10%. If reply rate is above 10%, bar will
                            still show full but number will be correct.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaignData.map((campaign, index) => (
                  <TableRow key={index} className={cn("hover:bg-muted/50")}>
                    <TableCell className="font-medium">
                      {campaign.name}
                    </TableCell>
                    <TableCell>{campaign.sent.toLocaleString()}</TableCell>
                    <TableCell>
                      {campaign.opens === 0 || campaign.opens === null ? (
                        <span className="text-xs text-muted-foreground">
                          Not tracked
                        </span>
                      ) : (
                        campaign.opens.toLocaleString()
                      )}
                    </TableCell>
                    <TableCell>
                      {campaign.clicks === 0 || campaign.clicks === null ? (
                        <span className="text-xs text-muted-foreground">
                          Not tracked
                        </span>
                      ) : (
                        campaign.clicks.toLocaleString()
                      )}
                    </TableCell>
                    <TableCell>{campaign.replies.toLocaleString()}</TableCell>
                    <TableCell>
                      {campaign.bounced?.toLocaleString() || "0"}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress value={campaign.openRate} />
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
          </TooltipProvider>
        </div>
      </>
    </>
  );
}

export default CampaignPerformanceTable;
