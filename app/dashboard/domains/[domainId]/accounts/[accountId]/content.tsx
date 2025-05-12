"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUpRight,
  Mail,
  Activity,
  BarChart3,
  Inbox,
  Settings, // Added Settings icon
  ArrowDownRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

// This interface should match the one in page.tsx and the API response
interface AccountDetails {
  id: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Warming';
  sentToday: number;
  dailyLimit: number;
  inboxRate: number;
  spamRate: number;
  reputation: number;
  daysActive: number;
  parentDomain: string;
  stats: {
    name: string; // Typically a date string like "May 05"
    volume: number;
    inbox: number;
    spam: number;
    reputation: number;
  }[];
}

interface AccountWarmupDetailsContentProps {
  accountDetails: AccountDetails;
}

export default function AccountWarmupDetailsContent({ accountDetails }: AccountWarmupDetailsContentProps) {
  const {
    id,
    email,
    status,
    sentToday,
    dailyLimit,
    inboxRate,
    spamRate,
    reputation,
    daysActive,
    parentDomain,
    stats, // Added stats
  } = accountDetails;

  const isActive = status === 'Active' || status === 'Warming';

  // Text constants, similar to how they might be in a copy.ts file
  const t = {
    warmupProgress: "Warmup Progress",
    reputationGrowth: "Reputation Growth",
    dailyWarmupStats: "Daily Warmup Stats",
    date: "Date",
    emailsSent: "Emails Sent",
    inbox: "Inbox",
    spam: "Spam",
    inboxRate: "Inbox Rate",
    reputation: "Reputation",
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Account Warmup: {email}
          </h1>
          <p className="text-muted-foreground">Domain: {parentDomain}</p>
        </div>
        <div className="flex space-x-2"> {/* Added a div to group buttons */}
          <Button asChild variant="outline">
            <Link href={`/dashboard/domains/${parentDomain}/accounts/${id}/settings`}>
              <Settings className="mr-2 h-4 w-4" />
              Account Settings
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/dashboard/inbox/${id}`}>
              <Inbox className="mr-2 h-4 w-4" />
              Go to Inbox
            </Link>
          </Button>
        </div>
      </div>

      {/* Summary Stat Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Account Status</CardTitle>
            <Activity className={`h-4 w-4 ${isActive ? 'text-green-500' : 'text-muted-foreground'}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{status}</div>
            <p className={`text-xs ${isActive ? 'text-green-500' : 'text-muted-foreground'}`}>
              {isActive ? "Currently warming up" : "Paused or inactive"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Inbox Rate</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inboxRate}%</div>
            <p className="text-xs text-muted-foreground">
              Based on recent activity
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Reputation</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reputation}%</div>
            <p className="text-xs text-muted-foreground">
              Current sender score
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emails Sent Today</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sentToday} / {dailyLimit}</div>
            <p className="text-xs text-muted-foreground">
              Towards daily warmup limit
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t.warmupProgress}</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={stats}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="volume"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.1}
                  name="Sent"
                />
                <Area
                  type="monotone"
                  dataKey="inbox"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.1}
                  name="Inbox"
                />
                <Area
                  type="monotone"
                  dataKey="spam"
                  stroke="#ff8042"
                  fill="#ff8042"
                  fillOpacity={0.1}
                  name="Spam"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.reputationGrowth}</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              {stats && stats.length > 0 ? (
                <LineChart
                  data={stats}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="reputation"
                    stroke="#0ea5e9"
                    strokeWidth={2}
                    name="Reputation"
                  />
                </LineChart>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  No reputation data available.
                </div>
              )}
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Daily Warmup Stats Table */}
      <Card>
        <CardHeader>
          <CardTitle>{t.dailyWarmupStats}</CardTitle>
        </CardHeader>
        <CardContent>
          {stats && stats.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t.date}</TableHead>
                  <TableHead>{t.emailsSent}</TableHead>
                  <TableHead>{t.inbox}</TableHead>
                  <TableHead>{t.spam}</TableHead>
                  <TableHead>{t.inboxRate}</TableHead>
                  <TableHead>{t.reputation}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...stats].reverse().map((day) => (
                  <TableRow key={day.name}>
                    <TableCell>{day.name}</TableCell>
                    <TableCell>{day.volume}</TableCell>
                    <TableCell>{day.inbox}</TableCell>
                    <TableCell>{day.spam}</TableCell>
                    <TableCell>
                      {day.volume > 0 ? ((day.inbox / day.volume) * 100).toFixed(1) + "%" : "N/A"}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress value={day.reputation} className="h-2 w-16" />
                        <span className="text-sm">{day.reputation}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              No daily warmup statistics available.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Account Properties Display */}
      <Card>
        <CardHeader>
          <CardTitle>Account Properties</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Email Address:</span>
            <span>{email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Account ID:</span>
            <span>{id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Parent Domain:</span>
            <span>{parentDomain}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Status:</span>
            <span>{status}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sent Today:</span>
            <span>{sentToday}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Daily Limit:</span>
            <span>{dailyLimit}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Overall Inbox Rate:</span>
            <span>{inboxRate}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Overall Spam Rate:</span>
            <span>{spamRate}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Overall Reputation:</span>
            <span>{reputation}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Days Active:</span>
            <span>{daysActive}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}