"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Mail,
  Settings,
  PlusCircle,
  Inbox,
  Layers,
  FileText,
  Zap,
  UserCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
  badge?: {
    text: string;
    variant: "default" | "success" | "destructive";
  };
};

// TODO: Potentially fetch some of these dynamically or based on user role
const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "Campaigns",
    href: "/dashboard/campaigns",
    icon: Mail,
  },
  {
    title: "Templates",
    href: "/dashboard/templates",
    icon: FileText,
  },
  {
    title: "Inbox",
    href: "/dashboard/inbox",
    icon: Inbox,
    badge: {
      text: "8",
      variant: "default",
    },
  },
  {
    title: "Domains",
    href: "/dashboard/domains",
    icon: Zap,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    // Consider making width responsive or configurable
    <div className="hidden md:flex h-full bg-gray-100 dark:bg-gray-900 w-64 border-r border-gray-200 dark:border-gray-800 flex-col">
      <div className="flex h-16 items-center border-b border-gray-200 dark:border-gray-800 px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold text-lg text-gray-900 dark:text-gray-100">
          <Layers className="h-6 w-6 text-primary" />
          <span>PenguinMails</span> {/* Updated App Name */}
        </Link>
      </div>

      <div className="flex-1 overflow-auto py-4 px-3">
        <div className="mb-4">
          {/* TODO: Link to actual campaign creation page when implemented */}
          <Button asChild className="w-full justify-start gap-2" size="sm">
            <Link href="/dashboard/campaigns/create"> {/* Updated link */}
              <PlusCircle className="mr-2 h-4 w-4" />
              New Campaign
            </Link>
          </Button>
        </div>

        <nav className="grid gap-1">
          {mainNavItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                // Improved active state checking for nested routes
                pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
                  ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
              {item.badge && (
                <span
                  className={cn(
                    "ml-auto flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-medium",
                    item.badge.variant === "default" && "bg-primary text-primary-foreground",
                    item.badge.variant === "success" && "bg-green-500 text-white", // Example color
                    item.badge.variant === "destructive" && "bg-destructive text-destructive-foreground"
                  )}
                >
                  {item.badge.text}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* TODO: Replace with dynamic user info from session */}
      <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3 rounded-md p-2">
          <div className="h-8 w-8 rounded-full bg-primary grid place-items-center text-primary-foreground font-semibold">
            JD
          </div>
          <div className="text-sm">
            <div className="font-medium text-gray-900 dark:text-gray-100">John Doe</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Pro Account</div>
          </div>
          {/* Add Logout or Settings link here? */}
        </div>
      </div>
    </div>
  );
}

