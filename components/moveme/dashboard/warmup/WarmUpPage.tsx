"use client";
import React from "react";
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

// Sample warmup data
const data = [
  {
    name: "Apr 20",
    volume: 10,
    inbox: 10,
    spam: 0,
    reputation: 72,
  },
  {
    name: "Apr 21",
    volume: 15,
    inbox: 14,
    spam: 1,
    reputation: 75,
  },
  {
    name: "Apr 22",
    volume: 20,
    inbox: 19,
    spam: 1,
    reputation: 77,
  },
  {
    name: "Apr 23",
    volume: 25,
    inbox: 24,
    spam: 1,
    reputation: 80,
  },
  {
    name: "Apr 24",
    volume: 30,
    inbox: 29,
    spam: 1,
    reputation: 83,
  },
  {
    name: "Apr 25",
    volume: 35,
    inbox: 34,
    spam: 1,
    reputation: 86,
  },
  {
    name: "Apr 26",
    volume: 40,
    inbox: 39,
    spam: 1,
    reputation: 88,
  },
  {
    name: "Apr 27",
    volume: 45,
    inbox: 44,
    spam: 1,
    reputation: 90,
  },
];

const accounts = [
  {
    id: 1,
    email: "john@example.com",
    status: "Active",
    sentToday: 39,
    inboxRate: 97.5,
    spamRate: 2.5,
    reputation: 90,
    dailyLimit: 45,
    daysActive: 8,
  },
  {
    id: 2,
    email: "sales@example.com",
    status: "Active",
    sentToday: 68,
    inboxRate: 95.5,
    spamRate: 4.5,
    reputation: 85,
    dailyLimit: 70,
    daysActive: 14,
  },
  {
    id: 3,
    email: "marketing@example.com",
    status: "Paused",
    sentToday: 1,
    inboxRate: 92.0,
    spamRate: 8.0,
    reputation: 78,
    dailyLimit: 30,
    daysActive: 6,
  },
];

export default function WarmupPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Email Warmup</h1>
          <p className="text-muted-foreground">
            Warm up your email accounts to improve deliverability
          </p>
        </div>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Accounts Warming
            </CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">2 / 3</div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              Good progress
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Inbox Rate
            </CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">95.0%</div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              2.5% this week
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Reputation
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">84.3%</div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              5.2% this week
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Emails Sent Today
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">107</div>
            <div className="stat-label">
              of 115 limit
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Warmup Progress</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
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
                <CardTitle>Reputation Growth</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  { data.length > 0 ? (<LineChart
                    data={data}
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
              <CardTitle>Daily Warmup Stats</CardTitle>
            </CardHeader>
            <CardContent>
              {data.length > 0 ? (<Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Emails Sent</TableHead>
                    <TableHead>Inbox</TableHead>
                    <TableHead>Spam</TableHead>
                    <TableHead>Inbox Rate</TableHead>
                    <TableHead>Reputation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...data].reverse().map((day) => (
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
              <CardTitle>Email Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              {accounts.length > 0 ?(<Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Sent Today</TableHead>
                    <TableHead>Inbox Rate</TableHead>
                    <TableHead>Reputation</TableHead>
                    <TableHead>Days Active</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
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
                      <TableCell>{account.daysActive} days</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Switch checked={account.status === "Active"} />
                          <Button variant="outline" size="sm">Details</Button>
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
              <CardTitle>Warmup Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Warmup Schedule</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure how your email accounts are warmed up over time.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="initial-volume">Initial Daily Volume</Label>
                      <Input id="initial-volume" type="number" defaultValue="10" />
                      <p className="text-xs text-muted-foreground">
                        Number of emails sent on day one
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="increase-rate">Daily Increase Rate</Label>
                      <Input id="increase-rate" type="number" defaultValue="5" />
                      <p className="text-xs text-muted-foreground">
                        Emails added each day
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="max-volume">Maximum Daily Volume</Label>
                      <Input id="max-volume" type="number" defaultValue="100" />
                      <p className="text-xs text-muted-foreground">
                        Maximum number of daily emails
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="warmup-speed">Warmup Speed</Label>
                      <Select defaultValue="moderate">
                        <SelectTrigger id="warmup-speed">
                          <SelectValue placeholder="Select speed" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="slow">Slow (Safe)</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="fast">Fast (Aggressive)</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        How aggressively to increase volume
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Seed Network</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure how your emails interact with our network of seed accounts.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="reply-rate">Reply Rate</Label>
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
                        Percentage of emails that receive replies
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="thread-depth">Thread Depth</Label>
                      <Select defaultValue="3">
                        <SelectTrigger id="thread-depth">
                          <SelectValue placeholder="Select thread depth" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 reply</SelectItem>
                          <SelectItem value="2">2 replies</SelectItem>
                          <SelectItem value="3">3 replies</SelectItem>
                          <SelectItem value="5">5 replies</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        How many back-and-forth replies in each thread
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center space-x-2">
                      <Switch id="auto-adjust" defaultChecked />
                      <Label htmlFor="auto-adjust">Auto-adjust warmup based on performance</Label>
                    </div>
                    <p className="pl-7 text-xs text-muted-foreground mt-1">
                      Automatically adjust warmup parameters based on email performance
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Reset to Defaults</Button>
                  <Button>Save Settings</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
