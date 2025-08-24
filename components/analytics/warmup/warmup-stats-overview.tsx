import StatsCard from "@/components/StatsCard";
import { mockMailboxes } from "@/lib/data/analytics.mock";
import { AlertTriangle, Mail, MessageSquare, Zap } from "lucide-react";

interface DailyStats {
  date: string;
  emailsWarmed: number;
  delivered: number;
  spam: number;
  replies: number;
  bounce: number;
  healthScore: number;
}
const dailyStats: DailyStats[] = [
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

function WarmupStatsOverview({ id }: { id: string }) {
  const mailbox = mockMailboxes.find((mailbox) => mailbox.id === id);

  // Mock daily stats data

  const totalStats = dailyStats.reduce(
    (acc, day) => ({
      emailsWarmed: acc.emailsWarmed + day.emailsWarmed,
      delivered: acc.delivered + day.delivered,
      spam: acc.spam + day.spam,
      replies: acc.replies + day.replies,
      bounce: acc.bounce + day.bounce,
    }),
    { emailsWarmed: 0, delivered: 0, spam: 0, replies: 0, bounce: 0 }
  );

  const deliveryRate = (
    (totalStats.delivered / totalStats.emailsWarmed) *
    100
  ).toFixed(1);
  const replyRate = (
    (totalStats.replies / totalStats.emailsWarmed) *
    100
  ).toFixed(1);

  const stats = [
    {
      label: "Health Score",
      value: `${mailbox?.healthScore || 0}%`,
      icon: Zap,
      color: "bg-green-100 ",
      textColor: "text-green-600"
    },
    {
      label: "Delivery Rate",
      value: `${deliveryRate || 0}%`,
      icon: Mail,
      color: "bg-blue-100 ",
      textColor: "text-blue-600"
    },
    {
      label: "Reply Rate",
      value: `${replyRate || 0}%`,
      icon: MessageSquare,
      color: "bg-green-100 ",
      textColor: "text-green-600"
    },
    {
      label: "Total Spam",
      value: `${totalStats.spam || 0}`,
      icon: AlertTriangle,
      color: "bg-red-100 ",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="grid  grid-cols-responsive gap-4">
      {stats.map((stat) => (
        <StatsCard
          key={stat.label}
          title={stat.label}
          value={stat.value}
          icon={stat.icon}
          color={stat.color}
          className={stat.textColor}
        />
      ))}
    </div>
  );
}
export default WarmupStatsOverview;
