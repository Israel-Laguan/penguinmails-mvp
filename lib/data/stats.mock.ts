import { ChartData } from "@/types/campaign";
import { Eye, Mail, Send, TrendingUp, Users } from "lucide-react";
export const generateData = (days: number): ChartData[] => {
  const data: ChartData[] = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    
    const sent = Math.floor(Math.random() * 50) + 15;
    const opened = Math.floor(sent * (0.25 + Math.random() * 0.35));
    const clicked = Math.floor(opened * (0.15 + Math.random() * 0.30));
    const replied = Math.floor(opened * (0.10 + Math.random() * 0.20));
    const bounced = Math.floor(sent * (0.02 + Math.random() * 0.08));
    
    data.push({
      date: date.toISOString().split('T')[0],
      sent,
      opened,
      replied,
      bounced,
      clicked,
      formattedDate: date.toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'short' 
      }),
    });
  }
  
  return data;
};



export const statsCards = [
  {
    title: "Total Compaigns",
    value: "12",
    icon: Send,
    color: "bg-blue-100 text-blue-600",
  },
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
  {
    title: "Open Rate",
    value: "34.2%",
    icon: Eye,
    color: "text-orange-500  bg-orange-100",
  },
  {
    title: "Reply Rate",
    value: "8.7%",
    icon: Users,
    color: "text-pink-600 bg-pink-100",
  },
];
