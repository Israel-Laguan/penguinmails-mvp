import { domains, mailboxes } from "@/lib/data/domains.mock";
import { cn } from "@/lib/utils";
import { CheckCircle, Clock, Globe, Mail } from "lucide-react";
import StatsCard from "../StatsCard";

function OverviewCards() {
  const readyMailboxes = mailboxes.filter(
    (m) => m.warmupStatus === "ready"
  ).length;

  const cards = [
    {
      title: "Total Domains",
      value: domains.length,
      icon: Globe,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Active Mailboxes",
      value: mailboxes.filter((m) => m.status === "active").length,
      icon: Mail,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Ready to Send",
      value: readyMailboxes,
      icon: CheckCircle,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Warming Up",
      value: 2,
      icon: Clock,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <StatsCard
          key={index}
          title={card.title}
          value={card.value.toString()}
          icon={card.icon}
          color={cn(card.iconBg, card.iconColor)}
          className="flex-row-reverse gap-5 justify-end"
        />
      ))}
    </div>
  );
}
export default OverviewCards;
