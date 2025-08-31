"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ConditionalNewTemplateButton() {
  const pathname = usePathname();
  const shouldShowButton = !pathname.includes("/gallery");
  if (!shouldShowButton) {
    return null;
  }

  return (
    <Button asChild>
      <Link href="/dashboard/templates/new">Create New Template</Link>
    </Button>
  );
}

export default ConditionalNewTemplateButton;
