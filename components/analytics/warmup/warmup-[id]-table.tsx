import { DropDownFilter, Filter } from "@/components/Filter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { TableRow } from "@mui/material";
import { Calendar, Download } from "lucide-react";
const dailyStats = [
  {
    date: "Aug 11",
    emailsWarmed: 80,
    delivered: 76,
    spam: 2,
    replies: 1,
    bounce: 1,
    healthScore: 88,
  },
  {
    date: "Aug 10",
    emailsWarmed: 85,
    delivered: 83,
    spam: 1,
    replies: 1,
    bounce: 0,
    healthScore: 90,
  },
  {
    date: "Aug 09",
    emailsWarmed: 78,
    delivered: 75,
    spam: 2,
    replies: 0,
    bounce: 1,
    healthScore: 86,
  },
  {
    date: "Aug 08",
    emailsWarmed: 82,
    delivered: 79,
    spam: 1,
    replies: 2,
    bounce: 0,
    healthScore: 91,
  },
  {
    date: "Aug 07",
    emailsWarmed: 77,
    delivered: 74,
    spam: 1,
    replies: 1,
    bounce: 1,
    healthScore: 87,
  },
  {
    date: "Aug 06",
    emailsWarmed: 84,
    delivered: 81,
    spam: 2,
    replies: 0,
    bounce: 1,
    healthScore: 89,
  },
  {
    date: "Aug 05",
    emailsWarmed: 79,
    delivered: 76,
    spam: 1,
    replies: 2,
    bounce: 1,
    healthScore: 88,
  },
];
function WarmUpTable() {
  return (
    <>
      <Filter>
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4" />
          <DropDownFilter
            options={[
              { label: "Last 7 days", value: "7d" },
              {
                label: "Last 30 days",
                value: "30d",
              },
              {
                label: "Last 90 days",
                value: "90d",
              },
            ]}
          />
        </div>
        <div>
          <Button>
            <Download />
            Export CSV
          </Button>
        </div>
      </Filter>
      <Card>
        <CardHeader>
          <CardTitle>Daily Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                {[
                  { key: "date", label: "Date" },
                  { key: "emailsWarmed", label: "Emails Warmed" },
                  { key: "delivered", label: "Delivered" },
                  { key: "spam", label: "Spam" },
                  { key: "replies", label: "Replies" },
                  { key: "bounce", label: "Bounce" },
                  { key: "healthScore", label: "Health Score" },
                ].map((header) => (
                  <TableHead key={header.key}>{header.label}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {dailyStats.map((stat) => (
                <TableRow key={stat.date}>
                  <TableCell>{stat.date}</TableCell>
                  <TableCell>{stat.emailsWarmed}</TableCell>
                  <TableCell className="text-green-600">
                    {stat.delivered}
                  </TableCell>
                  <TableCell className="text-red-600">{stat.spam}</TableCell>
                  <TableCell className="text-blue-600">
                    {stat.replies}
                  </TableCell>
                  <TableCell className="text-orange-600">
                    {stat.bounce}
                  </TableCell>
                  <TableCell>
                    <span
                      className={
                        stat.healthScore >= 90
                          ? "text-green-600"
                          : stat.healthScore >= 70
                          ? "text-yellow-600"
                          : "text-red-600"
                      }
                    >
                      {stat.healthScore}%
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
export default WarmUpTable;
