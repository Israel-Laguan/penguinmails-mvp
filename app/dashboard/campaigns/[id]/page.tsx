'use client';

import { copyText as t } from "@/components/campaigns/copy";
import { mockDailyData, mockSequenceData, mockCampaign, mockStatsComparison, mockChartConfig, mockSettings } from "@/components/campaigns/mock-data";
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

export default function CampaignDetail() {
  const { id } = useParams();
  
  const campaign = {
    ...mockCampaign,
    id: Number(id),
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{campaign.name}</h1>
          <p className="text-muted-foreground">{t.campaignDetail.id} {id}</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            {t.buttons.edit}
          </Button>
          <Button variant="outline" size="sm">
            <Copy className="mr-2 h-4 w-4" />
            {t.buttons.duplicate}
          </Button>
          <Button variant="outline" size="sm" className="text-amber-500">
            <Pause className="mr-2 h-4 w-4" />
            {t.buttons.pauseCampaign}
          </Button>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t.stats.openRate}
            </CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">{campaign.openRate}%</div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              {mockStatsComparison.openRate.value}% {t.stats.fromAverage}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t.stats.clickRate}
            </CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">{campaign.clickRate}%</div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              {mockStatsComparison.clickRate.value}% {t.stats.fromAverage}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t.stats.replyRate}
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">{campaign.replyRate}%</div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              {mockStatsComparison.replyRate.value}% {t.stats.fromAverage}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t.stats.bounceRate}
            </CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="stat-value">0.9%</div>
            <div className="stat-change-positive">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              {mockStatsComparison.bounceRate.value}% {t.stats.belowAverage}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-grid md:grid-cols-4">
          <TabsTrigger value="overview">{t.tabs.overview}</TabsTrigger>
          <TabsTrigger value="sequence">{t.tabs.sequence}</TabsTrigger>
          <TabsTrigger value="recipients">{t.tabs.recipients}</TabsTrigger>
          <TabsTrigger value="settings">{t.tabs.settings}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t.charts.dailyPerformance}</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={mockDailyData}
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
                    dataKey={mockChartConfig.dataKeys.opens}
                    stroke={mockChartConfig.colors.opens}
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey={mockChartConfig.dataKeys.clicks}
                    stroke={mockChartConfig.colors.clicks}
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey={mockChartConfig.dataKeys.replies}
                    stroke={mockChartConfig.colors.replies}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>{t.charts.sequencePerformance}</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={mockSequenceData}
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
              <CardTitle>{t.sequence.title}</CardTitle>
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
                          <Button variant="ghost" size="sm">{t.buttons.edit}</Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {t.sequence.subject} {email.subject}
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
                        {t.sequence.waitMessage}
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
              <CardTitle>{t.recipients.settingsTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {t.recipients.settingsDescription}
              </p>
              <div className="mt-4">
                <Button variant="outline" size="sm">{t.buttons.viewRecipients}</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t.settings.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">{t.settings.sections.general.title}</h3>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <p className="text-sm font-medium">{t.settings.sections.general.campaignName}</p>
                      <p className="text-sm text-muted-foreground">{campaign.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.settings.sections.general.status}</p>
                      <p className="text-sm text-muted-foreground">{campaign.status}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.settings.sections.general.created}</p>
                      <p className="text-sm text-muted-foreground">{mockSettings.created}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.settings.sections.general.sendingAccount}</p>
                      <p className="text-sm text-muted-foreground">{mockSettings.sendingAccount}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium">{t.settings.sections.schedule.title}</h3>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <p className="text-sm font-medium">{t.settings.sections.schedule.sendingWindow}</p>
                      <p className="text-sm text-muted-foreground">{mockSettings.sendingWindow}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.settings.sections.schedule.days}</p>
                      <p className="text-sm text-muted-foreground">{mockSettings.workingDays}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.settings.sections.schedule.emailsPerDay}</p>
                      <p className="text-sm text-muted-foreground">{mockSettings.emailsPerDay}</p>
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