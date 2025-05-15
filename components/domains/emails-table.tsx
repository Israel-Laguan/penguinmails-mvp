import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
  Trash,
  Edit,
  RefreshCcw,
} from "lucide-react";
import { copyText as t } from "./copy";
import { EmailAccount } from "./types";
import Link from "next/link";

type EmailsTableProps = {
  emailAccounts: EmailAccount[];
  domainId: string;
};

export function EmailsTable({ emailAccounts, domainId }: EmailsTableProps) {
  return (
    <Card>
        <CardHeader>
          <CardTitle>{t.tables.emailAccounts.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t.tables.emailAccounts.headers.email}</TableHead>
                <TableHead>{t.tables.emailAccounts.headers.provider}</TableHead>
                <TableHead>{t.tables.emailAccounts.headers.status}</TableHead>
                <TableHead>
                  {t.tables.emailAccounts.headers.reputation}
                </TableHead>
                <TableHead>{t.tables.emailAccounts.headers.warmup}</TableHead>
                <TableHead>{t.tables.emailAccounts.headers.sent24h}</TableHead>
                <TableHead>
                  {t.tables.emailAccounts.headers.authentication}
                </TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emailAccounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell className="font-medium">
                    <Link
                      className="text-blue-500 hover:text-blue-700"
                      href={`${domainId}/accounts/${account.id}`}
                    >
                    {account.email}
                    </Link>
                    </TableCell>
                  <TableCell>{account.provider}</TableCell>
                  <TableCell>
                    {account.status === 'ACTIVE' ? (
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        <CheckCircle className="mr-1 h-3 w-3" />{" "}
                        {t.status.ACTIVE}
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="bg-red-50 text-red-700 border-red-200"
                      >
                        <AlertTriangle className="mr-1 h-3 w-3" />{" "}
                        {t.status.ISSUE}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress
                        value={account.reputation}
                        className="h-2 w-16"
                      />
                      <span className="text-sm">{account.reputation}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        account.warmupStatus === 'WARMED'
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }
                    >
                      {
                        t.warmupStatus[
                          account.warmupStatus as keyof typeof t.warmupStatus
                        ]
                      }
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {account.sent24h} / {account.dayLimit}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Badge
                        variant="outline"
                        className={
                          account.spf
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }
                      >
                        {t.auth.SPF}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          account.dkim
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }
                      >
                        {t.auth.DKIM}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          account.dmarc
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
                        <DropdownMenuItem>
                          <RefreshCcw className="mr-2 h-4 w-4" />{" "}
                          {t.tables.emailAccounts.actions.sync}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />{" "}
                          {t.tables.emailAccounts.actions.edit}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />{" "}
                          {t.tables.emailAccounts.actions.delete}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
  );
}
