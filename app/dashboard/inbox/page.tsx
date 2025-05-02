import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Star, Settings, Filter, ArrowUp, ArrowDown, RefreshCcw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample inbox data
const emails = [
  {
    id: 1,
    from: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    subject: "Re: Quick question about your software proposal",
    preview: "Hi John, I had a chance to review your proposal and I'm interested in learning more about...",
    date: "10:30 AM",
    isStarred: true,
    isRead: false,
    campaign: "Software CEOs Outreach"
  },
  {
    id: 2,
    from: "Michael Chen",
    email: "michael.chen@techcorp.com",
    subject: "Re: Introduction to our services",
    preview: "Thanks for reaching out. I'd be happy to schedule a call next week to discuss...",
    date: "Yesterday",
    isStarred: false,
    isRead: true,
    campaign: "SaaS Decision Makers"
  },
  {
    id: 3,
    from: "Emily Williams",
    email: "ewilliams@innovate.org",
    subject: "Re: Following up on our conversation",
    preview: "John, I appreciate the follow-up. We're still evaluating options but I'd like to...",
    date: "Yesterday",
    isStarred: true,
    isRead: true,
    campaign: "Marketing Directors Follow-up"
  },
  {
    id: 4,
    from: "David Rodriguez",
    email: "drodriguez@finance.co",
    subject: "Re: Partnership opportunity",
    preview: "I've forwarded your email to our head of partnerships. She should be in touch shortly...",
    date: "Apr 25",
    isStarred: false,
    isRead: true,
    campaign: "Software CEOs Outreach"
  },
  {
    id: 5,
    from: "Alex Patel",
    email: "alex.patel@startup.io",
    subject: "Re: Your cold email actually worked!",
    preview: "I rarely respond to cold emails, but your timing was perfect. We've been looking for...",
    date: "Apr 24",
    isStarred: false,
    isRead: false,
    campaign: "Startup Founders Introduction"
  },
  {
    id: 6,
    from: "Jennifer Lee",
    email: "jlee@enterprise.com",
    subject: "Re: Quick question about {Company}",
    preview: "Hi John, Thanks for reaching out. I think there might be some potential for us to...",
    date: "Apr 23",
    isStarred: false,
    isRead: true,
    campaign: "Enterprise IT Directors"
  },
  {
    id: 7,
    from: "Robert Wilson",
    email: "rwilson@global.corp",
    subject: "Re: Introducing our solution",
    preview: "This sounds interesting. Can you send over some case studies relevant to our industry?...",
    date: "Apr 22",
    isStarred: false,
    isRead: true,
    campaign: "Software CEOs Outreach"
  },
  {
    id: 8,
    from: "Sophia Martinez",
    email: "smartinez@tech.io",
    subject: "Re: Following up",
    preview: "I meant to reply earlier. Yes, I'd like to schedule a demo. How does next Tuesday look?...",
    date: "Apr 20",
    isStarred: false,
    isRead: true,
    campaign: "SaaS Decision Makers"
  }
];

export default function InboxPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Inbox</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>
      
      <div className="bg-white border rounded-md">
        <div className="border-b px-4 py-3 flex items-center justify-between">
          <Tabs defaultValue="all" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">
                Unread
                <span className="ml-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
                  2
                </span>
              </TabsTrigger>
              <TabsTrigger value="starred">Starred</TabsTrigger>
            </TabsList>
            
            <div className="divide-y">
              <TabsContent value="all" className="m-0">
                {emails.map((email) => (
                  <div
                    key={email.id}
                    className={`px-4 py-4 flex items-start hover:bg-gray-50 cursor-pointer ${
                      !email.isRead ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="mr-4 pt-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Star
                          className={`h-4 w-4 ${
                            email.isStarred ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                          }`}
                        />
                      </Button>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className={`font-medium ${!email.isRead ? "font-semibold" : ""}`}>
                          {email.from}
                        </h3>
                        <span className="text-xs text-muted-foreground">{email.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{email.email}</p>
                      <h4 className={`text-sm mb-1 ${!email.isRead ? "font-medium" : ""}`}>
                        {email.subject}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-1">{email.preview}</p>
                      <div className="mt-2">
                        <span className="inline-block bg-blue-100 text-xs text-blue-800 px-2 py-1 rounded-full">
                          {email.campaign}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="unread" className="m-0">
                {emails
                  .filter((email) => !email.isRead)
                  .map((email) => (
                    <div
                      key={email.id}
                      className="px-4 py-4 flex items-start hover:bg-gray-50 cursor-pointer bg-blue-50"
                    >
                      <div className="mr-4 pt-1">
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Star
                            className={`h-4 w-4 ${
                              email.isStarred ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                            }`}
                          />
                        </Button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="font-semibold">{email.from}</h3>
                          <span className="text-xs text-muted-foreground">{email.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{email.email}</p>
                        <h4 className="text-sm font-medium mb-1">{email.subject}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-1">{email.preview}</p>
                        <div className="mt-2">
                          <span className="inline-block bg-blue-100 text-xs text-blue-800 px-2 py-1 rounded-full">
                            {email.campaign}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>
              
              <TabsContent value="starred" className="m-0">
                {emails
                  .filter((email) => email.isStarred)
                  .map((email) => (
                    <div
                      key={email.id}
                      className={`px-4 py-4 flex items-start hover:bg-gray-50 cursor-pointer ${
                        !email.isRead ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="mr-4 pt-1">
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </Button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className={`font-medium ${!email.isRead ? "font-semibold" : ""}`}>
                            {email.from}
                          </h3>
                          <span className="text-xs text-muted-foreground">{email.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{email.email}</p>
                        <h4 className={`text-sm mb-1 ${!email.isRead ? "font-medium" : ""}`}>
                          {email.subject}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-1">{email.preview}</p>
                        <div className="mt-2">
                          <span className="inline-block bg-blue-100 text-xs text-blue-800 px-2 py-1 rounded-full">
                            {email.campaign}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>
            </div>
          </Tabs>
          
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search emails..." className="pl-8 w-64 h-9" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
        
        <div className="px-4 py-2 border-b flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center">
            <span>8 conversations</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Sort by: Date</span>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
