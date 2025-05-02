import { Button } from "@/components/ui/button";
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
import {
  PlusCircle,
  MoreHorizontal,
  AlertTriangle,
  CheckCircle,
  Trash,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { copyText as t } from "./copy";
import { Domain } from "./types";

type DomainsTableProps = {
  domains: Domain[];
};

export function DomainsTable({ domains }: DomainsTableProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">
          {t.tables.domains.title}
        </h2>
        <Button variant="outline">
          <PlusCircle className="mr-2 h-4 w-4" />
          {t.buttons.addDomain}
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t.tables.domains.headers.domain}</TableHead>
                <TableHead>{t.tables.domains.headers.provider}</TableHead>
                <TableHead>{t.tables.domains.headers.status}</TableHead>
                <TableHead>{t.tables.domains.headers.age}</TableHead>
                <TableHead>{t.tables.domains.headers.reputation}</TableHead>
                <TableHead>{t.tables.domains.headers.authentication}</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {domains.map((domain) => (
                <TableRow key={domain.id}>
                  <TableCell className="font-medium">{domain.domain}</TableCell>
                  <TableCell>{domain.provider}</TableCell>
                  <TableCell>
                    {domain.status === 'VERIFIED' ? (
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        <CheckCircle className="mr-1 h-3 w-3" />{" "}
                        {t.status.VERIFIED}
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="bg-yellow-50 text-yellow-700 border-yellow-200"
                      >
                        <AlertTriangle className="mr-1 h-3 w-3" />{" "}
                        {t.status.SETUP_REQUIRED}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {domain.daysActive} {t.tables.domains.ageText}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress
                        value={domain.reputation}
                        className="h-2 w-16"
                      />
                      <span className="text-sm">{domain.reputation}%</span>
                    </div>
                  </TableCell>
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
                        SPF
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          domain.dkim
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }
                      >
                        DKIM
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          domain.dmarc
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }
                      >
                        DMARC
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
                          {t.tables.domains.actions.setupGuide}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          {t.tables.domains.actions.dnsRecords}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          {t.tables.domains.actions.verify}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />{" "}
                          {t.tables.domains.actions.delete}
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
    </>
  );
}
