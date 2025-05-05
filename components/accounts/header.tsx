import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { copyText as t } from "./copy";
import Link from "next/link";

export function AccountsHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-tight">{t.title}</h1>
      <Link 
        href="/dashboard/accounts/new" 
        className="inline-flex items-center hover:underline"
      >
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          {t.buttons.addAccount}
        </Button>
      </Link>
    </div>
  );
}
