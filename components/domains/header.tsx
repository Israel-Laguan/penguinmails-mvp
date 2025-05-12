import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { copyText as t } from "./copy";
import Link from "next/link";

export function DomainsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t.title}</h1>
        <p className="text-muted-foreground">{t.description}</p>
      </div>
      <div className="space-x-2">
        <Button variant="outline" asChild>
          <Link href="/dashboard/domains/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            {t.buttons.addDomain}
          </Link>
        </Button>
      </div>
    </div>
  );
}