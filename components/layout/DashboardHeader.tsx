import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { HelpCircle, Settings } from "lucide-react";
import LinkIcon from "./IconLink";
import NotificationsPopover from "./NotificationsPopover";
import UserMenu from "./UserMenu";

function Header() {
  return (
    <header className="flex items-center justify-between p-4.5  ">
      <div className="flex items-center ">
        <SidebarTrigger className="mr-4" />
      </div>
      <div className="flex h-5 items-center space-x-1">
        <div className="flex items-center space-x-1 ">
          <LinkIcon href="/dashboard/help">
            <HelpCircle className="w-5 h-5 font-bold group-hover:scale-110 transition-transform" />
          </LinkIcon>
          <NotificationsPopover />
          <LinkIcon href="/dashboard/settings">
            <Settings className="w-5 h-5 font-bold group-hover:scale-110 transition-transform" />
          </LinkIcon>
        </div>
        <Separator orientation="vertical" className="mx-2 -ml-1.5" />
        <UserMenu />
      </div>
    </header>
  );
}
export default Header;
