import { Eye, Mail, MousePointer, Reply } from "lucide-react";
import StatsCard from "../StatsCard";

function AnalyticsStatistics({
  totalSent,
  openRate,
  replyRate,
  clickRate,
}: {
  totalSent: number | string;
  openRate: number | string;
  replyRate: number | string;
  clickRate: number | string;
}) {
  const cards = [
    {
      id: "total-sent",
      title: "Total Sent",
      value: totalSent,
      icon: Mail,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "open-rate",
      title: "Open Rate",
      value: `${openRate}%`,
      icon: Eye,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: "reply-rate",
      title: "Reply Rate",
      value:  `${replyRate}%`,
      icon: Reply,
      color: "bg-green-100 text-green-600",
    },
    {
      id: "click-rate",
      title: "Click Rate",
      value: `${clickRate}%`,
      icon: MousePointer,
      color: "bg-orange-100 text-orange-600",
    },
  ];
  return cards.map((card) => (
    <StatsCard
      key={card.id}
      title={card.title}
      value={card.value}
      icon={card.icon}
      color={card.color}
    />
  ));
}
export default AnalyticsStatistics;
