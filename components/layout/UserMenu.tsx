import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="p-0 rounded-full transition-all duration-200 group"
        >
          <Avatar className="w-8 h-8">
            <AvatarImage src="/path/to/user/avatar.jpg" alt="User Avatar" />
            <AvatarFallback>
              <AvatarCallback />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      {/* <DropdownMenuContent></DropdownMenuContent> */}
    </DropdownMenu>
  );
}
function AvatarCallback() {
  return (
    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
      <User className="w-4 h-4 text-white" />
    </div>
  );
}
export default UserMenu;
