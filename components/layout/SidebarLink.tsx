import { cn } from "@/lib/utils";
import { NavLinkItem } from "@/types/nav-link";
import { redirect, usePathname, useRouter } from "next/navigation";
import Icon from "../Icon";
import { SidebarMenuButton, useSidebar } from "../ui/sidebar";

function SidebarLink({ link }: { link: NavLinkItem }) {
  const isActive = usePathname() === link.to;
  const router = useRouter();
  const {
    toggleSidebar,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    state,
  } = useSidebar();

  function navigate() {
    router.push(link.to);
  }

  return (
    <SidebarMenuButton
      tooltip={link.label}
      onClick={navigate}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer",
        {
          "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:from-purple-700 hover:to-blue-700 hover:text-white":
            isActive && link.highlight,
          "bg-blue-50 text-blue-700 border-r-2 border-blue-600 shadow-sm hover:bg-blue-100":
            isActive && !link.highlight,
          "text-gray-700 hover:bg-gray-200 hover:text-gray-900": !isActive,
        }
      )}
    >
      <Icon
        icon={link.icon}
        className={cn(
          "w-5 h-5 flex-shrink-0",
          isActive
            ? link.highlight
              ? "text-white"
              : "text-blue-600"
            : "text-gray-500"
        )}
      />
      <span>{link.label}</span>
      {link.highlight && (
        <div className="ml-auto">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      )}
    </SidebarMenuButton>
  );
}

export default SidebarLink;
