"use client";
import { cn } from "@/lib/utils";
import { BarChart3, Mail, Target, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../Icon";

const links = [
  { id: "", label: "Overview", icon: BarChart3 },
  { id: "campaigns", label: "By Campaign", icon: Target },
  { id: "mailboxes", label: "By Mailbox", icon: Mail },
  { id: "warmup", label: "By Warmup", icon: Zap },
];

function AnalyticsNavLinks() {
  const pathName = usePathname();
  const isActive = (id: string) =>
    pathName === `/dashboard/analytics${id ? `/${id}` : ""}`;

  return (
    <div className="flex gap-4 border-b border-gray-200">
      {links.map((link) => (
        <Link
          key={link.id}
          href={`/dashboard/analytics/${link.id}`}
          className={cn(
            "py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 ",
            {
              "border-blue-500 text-blue-600": isActive(link.id),
              "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300":
                !isActive(link.id),
            }
          )}
        >
          <Icon icon={link.icon} className="w-4 h-4" />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
export default AnalyticsNavLinks;
