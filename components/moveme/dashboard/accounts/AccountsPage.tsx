
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Mail,
  Shield,
  AlertTriangle,
  CheckCircle,
  Trash,
  Edit,
  RefreshCcw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Sample accounts data
const emailAccounts = [
  {
    id: 1,
    email: "john@example.com",
    provider: "Gmail",
    status: "Active",
    reputation: 85,
    warmupStatus: "Warming",
    dayLimit: 200,
    sent24h: 120,
    lastSync: "10 minutes ago",
    spf: true,
    dkim: true,
    dmarc: true,
  },
  {
    id: 2,
    email: "sales@example.com",
    provider: "Outlook",
    status: "Active",
    reputation: 92,
    warmupStatus: "Warmed",
    dayLimit: 300,
    sent24h: 250,
    lastSync: "30 minutes ago",
    spf: true,
    dkim: true,
    dmarc: true,
  },
  {
    id: 3,
    email: "marketing@example.com",
    provider: "SMTP",
    status: "Issue",
    reputation: 60,
    warmupStatus: "Warming",
    dayLimit: 150,
    sent24h: 80,
    lastSync: "1 hour ago",
    spf: true,
    dkim: false,
    dmarc: true,
  }
];

const domains = [
  {
    id: 1,
    domain: "example.com",
    provider: "Google Workspace",
    status: "Verified",
    daysActive: 120,
    reputation: 88,
    spf: true,
    dkim: true,
    dmarc: true,
  },
  {
    id: 2,
    domain: "marketing-domain.com",
    provider: "Namecheap",
    status: "Setup Required",
    daysActive: 30,
    reputation: 72,
    spf: true,
    dkim: false,
    dmarc: false,
  }
];

export default function AccountsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Email Accounts</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Account
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Email Accounts
            </CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{emailAccounts.length}</div>
            <p className="text-xs text-muted-foreground">
              {emailAccounts.filter(a => a.status === "Active").length} active
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Domains
            </CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{domains.length}</div>
            <p className="text-xs text-muted-foreground">
              {domains.filter(d => d.status === "Verified").length} verified
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Reputation
            </CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(
                [...emailAccounts.map(a => a.reputation), ...domains.map(d => d.reputation)]
                  .reduce((sum, score) => sum + score, 0) / 
                (emailAccounts.length + domains.length)
              )}%
            </div>
            <p className="text-xs text-muted-foreground">Overall sending health</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Email Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reputation</TableHead>
                <TableHead>Warmup</TableHead>
                <TableHead>Sent (24h)</TableHead>
                <TableHead>Authentication</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emailAccounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell className="font-medium">{account.email}</TableCell>
                  <TableCell>{account.provider}</TableCell>
                  <TableCell>
                    {account.status === "Active" ? (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <CheckCircle className="mr-1 h-3 w-3" /> Active
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        <AlertTriangle className="mr-1 h-3 w-3" /> Issue
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
                    <Badge className={account.warmupStatus === "Warmed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>
                      {account.warmupStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {account.sent24h} / {account.dayLimit}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Badge variant="outline" className={account.spf ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}>
                        SPF
                      </Badge>
                      <Badge variant="outline" className={account.dkim ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}>
                        DKIM
                      </Badge>
                      <Badge variant="outline" className={account.dmarc ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}>
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
                          <RefreshCcw className="mr-2 h-4 w-4" /> Sync
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" /> Delete
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
      
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">Domains</h2>
        <Button variant="outline">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Domain
        </Button>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Domain</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Reputation</TableHead>
                <TableHead>Authentication</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {domains.map((domain) => (
                <TableRow key={domain.id}>
                  <TableCell className="font-medium">{domain.domain}</TableCell>
                  <TableCell>{domain.provider}</TableCell>
                  <TableCell>
                    {domain.status === "Verified" ? (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <CheckCircle className="mr-1 h-3 w-3" /> Verified
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        <AlertTriangle className="mr-1 h-3 w-3" /> Setup Required
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{domain.daysActive} days</TableCell>
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
                      <Badge variant="outline" className={domain.spf ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}>
                        SPF
                      </Badge>
                      <Badge variant="outline" className={domain.dkim ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}>
                        DKIM
                      </Badge>
                      <Badge variant="outline" className={domain.dmarc ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}>
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
                        <DropdownMenuItem>Setup Guide</DropdownMenuItem>
                        <DropdownMenuItem>DNS Records</DropdownMenuItem>
                        <DropdownMenuItem>Verify</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" /> Delete
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
    </div>
  );
}
