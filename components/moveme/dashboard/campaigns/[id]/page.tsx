'use client';

import React from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Mail,
  MousePointer,
  MessageSquare,
  XCircle,
  ArrowUpRight,
  Pause,
  Edit,
  Copy,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dailyData = [
  { name: "Apr 20", opens: 15, clicks: 8, replies: 3 },
  { name: "Apr 21", opens: 28, clicks: 12, replies: 5 },
  { name: "Apr 22", opens: 35, clicks: 19, replies: 8 },
  { name: "Apr 23", opens: 42, clicks: 22, replies: 10 },
  { name: "Apr 24", opens: 38, clicks: 20, replies: 7 },
  { name: "Apr 25", opens: 45, clicks: 25, replies: 12 },
  { name: "Apr 26", opens: 50, clicks: 28, replies: 15 },
];

const sequenceData = [
  { name: "Email 1", opens: 840, clicks: 210, replies: 84 },
  { name: "Email 2", opens: 580, clicks: 145, replies: 62 },
  { name: "Email 3", opens: 320, clicks: 80, replies: 35 },
];

export default function CampaignDetail() {
  const { id } = useParams();
  
  // This would typically be fetched from an API
  const campaign = {
    id: Number(id),
    name: "Software CEOs Outreach",
    status: "Running",
    sent: 1285,
    total: 2500,
    opens: 840,
    clicks: 210,
    replies: 84,
    bounces: 12,
    openRate: 65.4,
    clickRate: 25.0,
    replyRate: 10.0,
    sequence: [
      {
        id: 1,
        name: "Initial Outreach",
        subject: "Quick question about {Company}'s software strategy",
        sent: 1285,
        opens: 840,
        clicks: 210,
        replies: 84,
      },
      {
        id: 2,
        name: "Follow Up #1",
        subject: "Following up on my message, {First Name}",
        sent: 880,
        opens: 580,
        clicks: 145,
        replies: 62,
      },
      {
        id: 3,
        name: "Last Attempt",
        subject: "Closing the loop, {First Name}",
        sent: 480,
        opens: 320,
        clicks: 80,
        replies: 35,
      }
    ]
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{campaign.name}</h1>
          <p className="text-muted-foreground">Campaign ID: {id}</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button variant="outline" size="sm">
            <Copy className="mr-2 h-4 w-4" />
            Duplicate
          </Button>
          <Button variant="outline" size="sm" className="text-amber-500">
            <Pause className="mr-2 h-4 w-4" />
            Pause Campaign
          </Button>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Open Rate
            </CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">{campaign.openRate}%</div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              12% from average
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Click Rate
            </CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">{campaign.clickRate}%</div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              3% from average
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Reply Rate
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">{campaign.replyRate}%</div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              1.5% from average
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Bounce Rate
            </CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">0.9%</div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              0.3% below average
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-grid md:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sequence">Sequence</TabsTrigger>
          <TabsTrigger value="recipients">Recipients</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Daily Performance</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={dailyData}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="opens"
                    stroke="#0284c7"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="clicks" stroke="#0ea5e9" strokeWidth={2} />
                  <Line type="monotone" dataKey="replies" stroke="#7dd3fc" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Sequence Performance</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={sequenceData}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="opens" fill="#0284c7" />
                  <Bar dataKey="clicks" fill="#0ea5e9" />
                  <Bar dataKey="replies" fill="#7dd3fc" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sequence" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Sequence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {campaign.sequence.map((email, index) => (
                  <div key={email.id} className="relative">
                    {index < campaign.sequence.length - 1 && (
                      <div className="absolute left-6 top-14 h-16 border-l-2 border-dashed border-gray-300" />
                    )}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 grid place-items-center text-blue-600">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{email.name}</h3>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Subject: {email.subject}
                        </p>
                        <div className="flex items-center gap-6 mt-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3 text-muted-foreground" />
                            <span>{email.sent}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3 text-blue-500" />
                            <span>{email.opens} ({((email.opens / email.sent) * 100).toFixed(1)}%)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MousePointer className="h-3 w-3 text-blue-500" />
                            <span>{email.clicks} ({((email.clicks / email.sent) * 100).toFixed(1)}%)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3 text-blue-500" />
                            <span>{email.replies} ({((email.replies / email.sent) * 100).toFixed(1)}%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {index < campaign.sequence.length - 1 && (
                      <div className="ml-6 pl-10 mt-2 mb-2 text-xs text-muted-foreground">
                        Wait 3 days if no reply
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recipients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Recipients</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This campaign was sent to 2,500 recipients.
              </p>
              <div className="mt-4">
                <Button variant="outline" size="sm">View Recipients</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">General Settings</h3>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <p className="text-sm font-medium">Campaign Name</p>
                      <p className="text-sm text-muted-foreground">Software CEOs Outreach</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Status</p>
                      <p className="text-sm text-muted-foreground">Running</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Created</p>
                      <p className="text-sm text-muted-foreground">April 20, 2023</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Sending Account</p>
                      <p className="text-sm text-muted-foreground">john@example.com</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium">Sending Schedule</h3>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <p className="text-sm font-medium">Sending Window</p>
                      <p className="text-sm text-muted-foreground">9:00 AM - 5:00 PM</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Days</p>
                      <p className="text-sm text-muted-foreground">Monday - Friday</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Emails Per Day</p>
                      <p className="text-sm text-muted-foreground">Up to 200</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}