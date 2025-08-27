"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function IconLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const currentPage = usePathname();
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        className={cn(
          "p-2.5 rounded-lg transition-all duration-200 group ",
          currentPage === href
            ? "text-blue-600 bg-blue-50"
            : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
        )}
      >
        {children}
      </Button>
    </Link>
  );
}
export default IconLink;
