"use client";
import React from "react";
import { copyText as t } from "./copy";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  TableRow 
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  BarChart3,
  Mail,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

interface WarmupAccount {
  id: number;
  email: string;
  status: string;
  sentToday: number;
  inboxRate: number;
  spamRate: number;
  reputation: number;
  dailyLimit: number;
  daysActive: number;
}

interface WarmupContentProps {
  accounts: WarmupAccount[];
  stats: {
    name: string;
    volume: number;
    inbox: number;
    spam: number;
    reputation: number;
  }[];
}

export default function WarmupContent({ accounts, stats }: WarmupContentProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{t.title}</h1>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>
        <div className="space-x-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard/campaigns">See all accounts and domains</Link>
          </Button>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            {t.settings}
          </Button>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t.accountsWarming}
            </CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">{accounts.filter(a => a.status === "Active").length} / {accounts.length}</div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              {t.goodProgress}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t.averageInboxRate}
            </CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">
              {(accounts.reduce((sum, acc) => sum + acc.inboxRate, 0) / accounts.length).toFixed(1)}%
            </div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              {t.weeklyInboxChange}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t.averageReputation}
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">
              {(accounts.reduce((sum, acc) => sum + acc.reputation, 0) / accounts.length).toFixed(1)}%
            </div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              {t.weeklyReputationChange}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t.emailsSentToday}
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">{accounts.reduce((sum, acc) => sum + acc.sentToday, 0)}</div>
            <div className="stat-label">
              {t.ofLimit.replace("{0}", accounts.reduce((sum, acc) => sum + acc.dailyLimit, 0).toString())}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">{t.overview}</TabsTrigger>
          <TabsTrigger value="accounts">{t.accounts}</TabsTrigger>
          <TabsTrigger value="settings">{t.settingsTab}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t.warmupProgress}</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={stats}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
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
                    />
                    <Area
                      type="monotone"
                      dataKey="inbox"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      fillOpacity={0.1}
                    />
                    <Area
                      type="monotone"
                      dataKey="spam"
                      stroke="#ff8042"
                      fill="#ff8042"
                      fillOpacity={0.1}
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
                  { stats.length > 0 ? (<LineChart
                    data={stats}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
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
                    />
                  </LineChart>) : <></>}
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>{t.dailyWarmupStats}</CardTitle>
            </CardHeader>
            <CardContent>
              {stats.length > 0 ? (<Table>
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
                        {((day.inbox / day.volume) * 100).toFixed(1)}%
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress 
                            value={day.reputation} 
                            className="h-2 w-16"
                          />
                          <span className="text-sm">{day.reputation}%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>) : <></>}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="accounts" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>{t.accounts}</CardTitle>
            </CardHeader>
            <CardContent>
              {accounts.length > 0 ?(<Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t.email}</TableHead>
                    <TableHead>{t.status}</TableHead>
                    <TableHead>{t.sentToday}</TableHead>
                    <TableHead>{t.inboxRate}</TableHead>
                    <TableHead>{t.reputation}</TableHead>
                    <TableHead>{t.daysActive}</TableHead>
                    <TableHead className="text-right">{t.actions}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accounts.map((account) => (
                    <TableRow key={account.id}>
                      <TableCell className="font-medium">{account.email}</TableCell>
                      <TableCell>
                        <Badge className={account.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                          {account.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{account.sentToday} / {account.dailyLimit}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <span>{account.inboxRate}%</span>
                          {account.inboxRate > account.spamRate ? (
                            <ArrowUpRight className="h-3 w-3 text-green-600" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 text-red-600" />
                          )}
                        </div>
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
                      <TableCell>{account.daysActive} {t.daysText}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Switch checked={account.status === "Active"} />
                          <Button variant="outline" size="sm">{t.details}</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>) : <></>}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>{t.warmupSettings}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">{t.warmupSchedule}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t.warmupScheduleDesc}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="initial-volume">{t.initialDailyVolume}</Label>
                      <Input id="initial-volume" type="number" defaultValue="10" />
                      <p className="text-xs text-muted-foreground">
                        {t.initialVolumeDesc}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="increase-rate">{t.dailyIncreaseRate}</Label>
                      <Input id="increase-rate" type="number" defaultValue="5" />
                      <p className="text-xs text-muted-foreground">
                        {t.increaseRateDesc}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="max-volume">{t.maxDailyVolume}</Label>
                      <Input id="max-volume" type="number" defaultValue="100" />
                      <p className="text-xs text-muted-foreground">
                        {t.maxVolumeDesc}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="warmup-speed">{t.warmupSpeed}</Label>
                      <Select defaultValue="moderate">
                        <SelectTrigger id="warmup-speed">
                          <SelectValue placeholder="Select speed" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="slow">{t.speedSlow}</SelectItem>
                          <SelectItem value="moderate">{t.speedModerate}</SelectItem>
                          <SelectItem value="fast">{t.speedFast}</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        {t.warmupSpeedDesc}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">{t.seedNetwork}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t.seedNetworkDesc}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="reply-rate">{t.replyRate}</Label>
                      <Select defaultValue="80">
                        <SelectTrigger id="reply-rate">
                          <SelectValue placeholder="Select reply rate" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="70">70%</SelectItem>
                          <SelectItem value="80">80%</SelectItem>
                          <SelectItem value="90">90%</SelectItem>
                          <SelectItem value="100">100%</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        {t.replyRateDesc}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="thread-depth">{t.threadDepth}</Label>
                      <Select defaultValue="3">
                        <SelectTrigger id="thread-depth">
                          <SelectValue placeholder="Select thread depth" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">{t.threadDepthOne}</SelectItem>
                          <SelectItem value="2">{t.threadDepthTwo}</SelectItem>
                          <SelectItem value="3">{t.threadDepthThree}</SelectItem>
                          <SelectItem value="5">{t.threadDepthFive}</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        {t.threadDepthDesc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center space-x-2">
                      <Switch id="auto-adjust" defaultChecked />
                      <Label htmlFor="auto-adjust">{t.autoAdjust}</Label>
                    </div>
                    <p className="pl-7 text-xs text-muted-foreground mt-1">
                      {t.autoAdjustDesc}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">{t.resetDefaults}</Button>
                  <Button>{t.saveSettings}</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}