import Link from "next/link";
import { TabsTrigger } from "../ui/tabs";

function TabTrigger({
  id,
  children,
  href,
}: {
  id: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <TabsTrigger value={id} className="tabs-trigger" asChild>
      <Link href={href}>{children}</Link>
    </TabsTrigger>
  );
}
export default TabTrigger;
