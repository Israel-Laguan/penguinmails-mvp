"use client";
import Link from "next/link";
import { TabsTrigger } from "../ui/tabs";
import { usePathname } from "next/navigation";

function TabTrigger({
  id,
  children,
  href,
}: {
  id: string;
  children: React.ReactNode;
  href: string;
}) {
  const pathName = usePathname();
  return (
    <TabsTrigger value={id} className="tabs-trigger" asChild>
      <Link href={href}>{children}</Link>
    </TabsTrigger>
  );
}
export default TabTrigger;
