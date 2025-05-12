import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  MoreHorizontal,
  AlertTriangle,
  CheckCircle,
  Cog,
  Trash,
  Shield,
} from "lucide-react";
import { copyText as t } from "./copy";
import { Domain } from "./types";
import Link from "next/link";

type DomainsTableProps = {
  domains: Domain[];
};

export function DomainsTable({ domains }: DomainsTableProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t.tables.domains.headers.domain}</TableHead>
              <TableHead>{t.tables.domains.headers.provider}</TableHead>
              <TableHead>{t.tables.domains.headers.status}</TableHead>
              <TableHead>{t.tables.domains.headers.age}</TableHead>
              <TableHead>{t.tables.domains.headers.reputation}</TableHead>
              <TableHead>{t.tables.domains.headers.accounts}</TableHead>
              <TableHead>{t.tables.domains.headers.authentication}</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {domains.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-muted-foreground">
                  {t.tables.domains.empty}
                </TableCell>
              </TableRow>
            ) : (
              domains.map((domain) => (
                <TableRow key={domain.id}>
                  <TableCell className="font-medium">
                    <Link
                      href={`/dashboard/domains/${domain.id}`}
                      className="hover:underline"
                    >
                      {domain.name}
                    </Link>
                  </TableCell>
                  <TableCell>{domain.provider}</TableCell>
                  <TableCell>
                    {domain.status === "VERIFIED" ? (
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        <CheckCircle className="mr-1 h-3 w-3" />
                        {t.status.VERIFIED}
                      </Badge>
                    ) : domain.status === "SETUP_REQUIRED" ? (
                      <Badge
                        variant="outline"
                        className="bg-yellow-50 text-yellow-700 border-yellow-200"
                      >
                        <AlertTriangle className="mr-1 h-3 w-3" />
                        {t.status.SETUP_REQUIRED}
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-700 border-blue-200"
                      >
                        <Shield className="mr-1 h-3 w-3" />
                        {t.status.PENDING}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {domain.daysActive} {t.tables.domains.ageText}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress value={domain.reputation} className="h-2 w-16" />
                      <span className="text-sm">{domain.reputation}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{domain.emailAccounts}</TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Badge
                        variant="outline"
                        className={
                          domain.spf
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }
                      >
                        {t.auth.SPF}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          domain.dkim
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }
                      >
                        {t.auth.DKIM}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          domain.dmarc
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }
                      >
                        {t.auth.DMARC}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/domains/${domain.id}/setup`}>
                            <Shield className="mr-2 h-4 w-4" />
                            {t.tables.domains.actions.setupGuide}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/domains/${domain.id}/settings`}>
                            <Cog className="mr-2 h-4 w-4" />
                            {t.tables.domains.actions.settings}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />
                          {t.tables.domains.actions.delete}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}