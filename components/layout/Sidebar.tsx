"use client";
import { Logo } from "@/assets/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavLink } from "@/types/nav-link";
import {
  BarChart3,
  BookOpen,
  FileText,
  Inbox,
  LayoutDashboard,
  Send,
  Server,
  Users,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
const navigationGroups: NavLink[] = [
  {
    title: "Overview",
    items: [{ to: "dashboard", label: "Dashboard", icon: LayoutDashboard }],
  },
  {
    title: "Getting Started",
    items: [
      {
        to: "onboarding",
        label: "Setup Guide",
        icon: BookOpen,
        highlight: true,
      },
    ],
  },
  {
    title: "Outreach Hub",
    items: [
      { to: "campaigns", label: "Campaigns", icon: Send },
      { to: "templates", label: "Templates", icon: FileText },
    ],
  },
  {
    title: "Lead Hub",
    items: [{ to: "leads", label: "Lead Lists", icon: Users }],
  },
  {
    title: "Communication",
    items: [{ to: "inbox", label: "Inbox", icon: Inbox }],
  },
  {
    title: "Infrastructure",
    items: [{ to: "domains", label: "Domains & Mailboxes", icon: Server }],
  },
  {
    title: "Analytics",
    items: [{ to: "analytics", label: "Analytics Hub", icon: BarChart3 }],
  },
];

function AppSideBar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <>
        <SidebarHeader className=" flex items-center justify-between ">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                className="flex items-center gap-2"
                size={"lg"}
              >
                <Logo />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="gap-0">
          {navigationGroups.map((group) => (
            <SidebarGroup
              key={group.title}
              title={group.title}
              className="p-1 "
            >
              <SidebarGroupLabel className="font-bold">
                {group.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarItem key={item.to} link={item} />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </>
    </Sidebar>
  );
}
export default AppSideBar;
