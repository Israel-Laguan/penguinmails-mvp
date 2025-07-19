import { Mail, Send, TrendingUp, Users } from "lucide-react";
import KpiCard from "../KpiCard";
const statsCards = [
  { title: "Active Campaigns", value: "12", icon: Send, color: "bg-blue-500" },
  {
    title: "Leads Contacted",
    value: "2,847",
    icon: Users,
    color: "bg-green-500",
  },
  { title: "Open Rate", value: "34.2%", icon: Mail, color: "bg-purple-500" },
  {
    title: "Reply Rate",
    value: "8.7%",
    icon: TrendingUp,
    color: "bg-orange-500",
  },
];
async function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
      {statsCards.map((card) => (
        <KpiCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={`${card.color} text-white`}
        />
      ))}
    </div>
  );
}
export default KpiCards;
