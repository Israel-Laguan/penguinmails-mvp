import Link from "next/link";
import { TabsTrigger } from "../ui/tabs";

function TabTrigger({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  const href = `/dashboard/domains/${to}`;

  return (
    <TabsTrigger value={to} className="tabs-trigger" asChild>
      <Link href={href}>{children}</Link>
    </TabsTrigger>
  );
}
export default TabTrigger;
