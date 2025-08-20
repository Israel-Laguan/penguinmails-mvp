import Icon from "@/components/Icon";
import NavLink from "@/components/settings/nav-link";
import { Separator } from "@/components/ui/separator";
import { Bell, CreditCard, Shield, Target, User, Users } from "lucide-react";

const tabs = [
  { id: "", label: "General", icon: User },
  { id: "security", label: "Security", icon: Shield },
  { id: "notifications", label: "Notifications", icon: Bell },
  // { id: "team", label: "Team", icon: Users },
  { id: "tracking", label: "Tracking", icon: Target },
  { id: "billing", label: "Billing", icon: CreditCard },
];
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full gap-5">
      <div className="min-w-[200px] space-y-4">
        <h1 className="text-xl font-semibold">Settings</h1>
        <Separator orientation="horizontal" />
        <div className="flex flex-col space-y-4">
          {tabs.map((tab) => (
            <NavLink
              key={tab.label}
              href={`/dashboard/settings/${tab.id}`}
              className="w-full flex items-center px-3 py-2.5 rounded-lg text-left transition-colors gap-2"
              activeClassName="bg-blue-50 text-blue-700"
            >
              <Icon icon={tab.icon} className="h-4 w-4" />
              {tab.label}
            </NavLink>
          ))}
        </div>
      </div>
      <Separator orientation="vertical" />
      <div className="flex-1">{children}</div>
    </div>
  );
}
export default layout;
