import KpiCard from "@/components/KpiCard";
import {
  Eye,
  Mail,
  Send,
  TrendingUp,
  Users
} from "lucide-react";
const statsCards = [
  { title: "Total Compaigns", value: "12", icon: Send, color: "bg-blue-100 text-blue-600" },
  {
    title: "Total Sent",
    value: "2,847",
    icon: Mail,
    color: "text-purple-600 bg-purple-100",
  },
  {
    title: "Total Replies",
    value: "8.7%",
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
  },
  { title: "Open Rate", value: "34.2%", icon: Eye, color: "text-orange-500  bg-orange-100" },
  {
    title: "Reply Rate",
    value: "8.7%",
    icon: Users,
    color: "text-pink-600 bg-pink-100",
  },
];
async function StatsCards() {
  return statsCards.map(item=><KpiCard
  className="flex-row-reverse justify-end gap-2 "
    key={item.title}
    title={item.title}
    value={item.value}
    icon={item.icon}
    color={item.color}
  />)
}
export default StatsCards;
