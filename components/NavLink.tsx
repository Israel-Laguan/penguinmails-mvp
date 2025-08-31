"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({
  children,
  title,
  to,
  className,
}: {
  children?: React.ReactNode;
  title?: string;
  to: string;
  className?: string;
}) {
  const pathName = usePathname();
  const isActive = pathName === to;
  return (
    <Link
      href={to}
      className={cn(className, {
        active: isActive,
      })}
    >
      {children || title}
    </Link>
  );
}
export default NavLink;
