"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Settings,
  Inbox,
  Layers,
  FileText,
  Zap,
  Menu,
  Send,
  X,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { signOut } from "firebase/auth";
import { authClient } from "@/lib/firebase/firebase-client";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
  badge?: {
    text: string;
    variant: "default" | "success" | "destructive";
  };
};

const mainNavItems: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { title: "Campaigns", href: "/dashboard/campaigns", icon: Send },
  { title: "Templates", href: "/dashboard/templates", icon: FileText },
  {
    title: "Inbox",
    href: "/dashboard/inbox",
    icon: Inbox,
    badge: { text: "8", variant: "default" },
  },
  { title: "Domains", href: "/dashboard/domains", icon: Zap },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const content = (
    <>
      {/* Collapse Button */}
      {!isMobile && (
        <div className="flex justify-start p-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-full"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      )}

      {/* Logo */}
      <div className="flex h-16 items-center border-b border-gray-200 dark:border-gray-800 px-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold text-lg text-gray-900 dark:text-gray-100"
        >
          <Layers className="h-6 w-6 text-primary" />
          {!collapsed && <span>PenguinMails</span>}
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto py-4 px-3">
        <nav className="grid gap-1">
          {mainNavItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center transition-all",
                collapsed ? "justify-center px-0" : "gap-3 px-3",
                "rounded-md py-2 text-sm",
                pathname === item.href ||
                  (item.href !== "/dashboard" && pathname.startsWith(item.href))
                  ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
              )}
              onClick={() => isMobile && setMobileOpen(false)}
            >
              <item.icon
                className={cn(
                  "transition-all",
                  collapsed ? "w-6 h-6 p-1" : "h-4 w-4"
                )}
              />
              {!collapsed && <span>{item.title}</span>}
              {!collapsed && item.badge && (
                <span
                  className={cn(
                    "ml-auto flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-medium",
                    item.badge.variant === "default" &&
                      "bg-primary text-primary-foreground",
                    item.badge.variant === "success" &&
                      "bg-green-500 text-white",
                    item.badge.variant === "destructive" &&
                      "bg-destructive text-destructive-foreground"
                  )}
                >
                  {item.badge.text}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* User Info */}
      <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-800">
        <div
          className={`flex items-start md:items-center justify-between rounded-md p-2 ${
            collapsed ? "flex-col" : "flex-row"
          }`}
        >
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full overflow-hidden relative">
              {user?.photoURL ? (
                <Image
                  src={user.photoURL}
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-primary grid place-items-center text-primary-foreground font-semibold">
                  {user?.displayName?.slice(0, 2).toUpperCase() || "??"}
                </div>
              )}
            </div>
            {!collapsed && (
              <div className="text-sm">
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  {user?.displayName} {user?.claims?.role}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {user?.claims?.plan} Account
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center">
            <div>
              <Link href="/dashboard/settings">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Settings className="h-5 w-3" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-red-600 hover:text-red-800"
                onClick={async () => {
                  try {
                    await signOut(authClient);
                    router.push("/login");
                  } catch (error) {
                    console.error("Error signing out:", error);
                  }
                }}
              >
                <LogOut className="h-5 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Hamburger Button */}
      {isMobile && (
        <div className="md:hidden p-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(true)}
            className="rounded-full"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden md:flex h-full bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-col transition-all duration-300",
          collapsed ? "w-20" : "w-64"
        )}
      >
        {content}
      </div>

      {/* Mobile Sidebar */}
      {isMobile && mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-gray-100 dark:bg-gray-900 h-full flex flex-col shadow-lg border-r border-gray-200 dark:border-gray-800">
            <div className="flex justify-end p-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            {content}
          </div>
          {/* overlay black background */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}
    </>
  );
}
