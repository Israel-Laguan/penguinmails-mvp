import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { NavLinkItem } from "@/types/nav-link";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SidebarItem({ link }: { link: NavLinkItem }) {
  const isActive = usePathname() === link.to;
  return (
    <SidebarMenuItem key={link.to}>
      <SidebarMenuButton tooltip={link.label} asChild>
        <Link
          href={link.to}
          className={cn(
            "w-full flex items-center space-x-3 px-3 font-semibold   py-2.5 rounded-lg text-left transition-all duration-200",
            {
              "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg":
                isActive && link.highlight,
              "bg-blue-50 text-blue-700 border-r-2 border-blue-600 shadow-sm":
                isActive && !link.highlight,
              "text-gray-700 hover:bg-gray-50 hover:text-gray-900": !isActive,
            }
          )}
        >
          {link.icon && (
            <link.icon
              className={cn(
                "w-5 h-5 flex-shrink-0",
                isActive
                  ? link.highlight
                    ? "text-white"
                    : "text-blue-600"
                  : "text-gray-500"
              )}
            />
          )}
          <span>{link.label}</span>
          {link.highlight && (
            <div className="ml-auto">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export default SidebarItem;
