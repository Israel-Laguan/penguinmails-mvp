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
import SidebarLink from "./SidebarLink";
const navigationGroups: NavLink[] = [
  {
    title: "Overview",
    items: [{ to: "/dashboard", label: "Dashboard", icon: LayoutDashboard }],
  },
  {
    title: "Getting Started",
    items: [
      {
        to: "/dashboard/onboarding",
        label: "Setup Guide",
        icon: BookOpen,
        highlight: true,
      },
    ],
  },
  {
    title: "Outreach Hub",
    items: [
      { to: "/dashboard/campaigns", label: "Campaigns", icon: Send },
      { to: "/dashboard/templates", label: "Templates", icon: FileText },
    ],
  },
  {
    title: "Lead Hub",
    items: [{ to: "/dashboard/leads", label: "Lead Lists", icon: Users }],
  },
  {
    title: "Communication",
    items: [{ to: "/dashboard/inbox", label: "Inbox", icon: Inbox }],
  },
  {
    title: "Infrastructure",
    items: [
      { to: "/dashboard/domains", label: "Domains & Mailboxes", icon: Server },
    ],
  },
  {
    title: "Analytics",
    items: [
      { to: "/dashboard/analytics", label: "Analytics Hub", icon: BarChart3 },
    ],
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
          <SidebarMenu>
            {navigationGroups.map((group) => (
              <SidebarGroup key={group.title}>
                <SidebarGroupLabel className="select-none">{group.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.to}>
                      
                        <SidebarLink link={item} />
                      
                    </SidebarMenuItem>
                  ))}
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </>
    </Sidebar>
  );
}
export default AppSideBar;
