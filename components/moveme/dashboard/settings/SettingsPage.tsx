"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const profileFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  bio: z.string().max(160).optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  username: "johndoe",
  email: "john@example.com",
  name: "John Doe",
  bio: "Email marketing specialist focused on SaaS growth.",
};

export default function SettingsPage() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });
  
  function onSubmit(data: ProfileFormValues) {
    console.log(data);
    // Submit to API
  }
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
      </div>
      
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                Update your personal information and profile settings.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage alt="User" src="" />
                      <AvatarFallback className="text-xl">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" size="sm">Change Avatar</Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="space-y-2">
                      <Label>Role</Label>
                      <Select disabled defaultValue="admin">
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="viewer">Viewer</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">Contact support to change your role</p>
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us a little about yourself" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end">
                    <Button type="submit">Save Changes</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password or enable two-factor authentication.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="new-password">New Password</Label>
                      <Button variant="link" className="p-0 h-auto text-xs" type="button">
                        Generate Strong Password
                      </Button>
                    </div>
                    <Input id="new-password" type="password" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Two-factor Authentication</h4>
                      <p className="text-xs text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Session Management</h4>
                      <p className="text-xs text-muted-foreground">
                        You are currently logged in on 2 devices
                      </p>
                    </div>
                    <Button variant="outline" size="sm">Manage Sessions</Button>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the appearance of the application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                    Light
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                    Dark
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                      <path d="M12 12 2 12" />
                      <path d="M12 22 12 12" />
                    </svg>
                    System
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Density</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="justify-start">Compact</Button>
                  <Button variant="outline" className="justify-start bg-blue-100/50">Default</Button>
                  <Button variant="outline" className="justify-start">Comfortable</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t pt-4">
                <div>
                  <h4 className="text-sm font-medium">Show Campaign Previews</h4>
                  <p className="text-xs text-muted-foreground">
                    Show previews when hovering over campaign names
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure how and when you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Campaign Completions</h4>
                    <p className="text-xs text-muted-foreground">
                      Receive notifications when a campaign is completed
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">New Replies</h4>
                    <p className="text-xs text-muted-foreground">
                      Get notified when someone replies to your campaigns
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Weekly Reports</h4>
                    <p className="text-xs text-muted-foreground">
                      Receive weekly performance reports via email
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">System Announcements</h4>
                    <p className="text-xs text-muted-foreground">
                      Important updates about the platform and new features
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <div className="space-y-4 border-t pt-6">
                <h3 className="text-lg font-medium">In-App Notifications</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Real-time Campaign Alerts</h4>
                    <p className="text-xs text-muted-foreground">
                      Show notifications for campaign events in real-time
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Email Account Alerts</h4>
                    <p className="text-xs text-muted-foreground">
                      Notifications for email account issues or warnings
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="compliance" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Settings</CardTitle>
              <CardDescription>
                Email compliance and regulatory settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Unsubscribe Settings</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Auto-add Unsubscribe Link</h4>
                    <p className="text-xs text-muted-foreground">
                      Automatically add unsubscribe link to all emails
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="unsubscribe-text">Unsubscribe Text</Label>
                    <Input 
                      id="unsubscribe-text" 
                      defaultValue="Click here to unsubscribe from future emails."
                    />
                    <p className="text-xs text-muted-foreground">
                      Custom text for the unsubscribe link
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unsubscribe-page">Unsubscribe Landing Page</Label>
                    <Input 
                      id="unsubscribe-page" 
                      defaultValue="https://example.com/unsubscribe"
                    />
                    <p className="text-xs text-muted-foreground">
                      Where users will land after unsubscribing
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 border-t pt-6">
                <h3 className="text-lg font-medium">Physical Address</h3>
                <p className="text-sm text-muted-foreground">
                  Required by CAN-SPAM regulations. This address will appear in your emails.
                </p>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" defaultValue="Example, Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address-line-1">Address Line 1</Label>
                    <Input id="address-line-1" defaultValue="123 Main St" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address-line-2">Address Line 2 (Optional)</Label>
                    <Input id="address-line-2" defaultValue="Suite 101" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" defaultValue="San Francisco" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" defaultValue="CA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP / Postal Code</Label>
                    <Input id="zip" defaultValue="94103" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="US">
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="US">United States</SelectItem>
                        <SelectItem value="CA">Canada</SelectItem>
                        <SelectItem value="UK">United Kingdom</SelectItem>
                        <SelectItem value="AU">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Compliance Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>
                Manage your subscription and billing details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Pro Plan</h3>
                    <p className="text-sm text-muted-foreground">
                      $49.00 / month \u2022 Renews on May 15, 2023
                    </p>
                  </div>
                  <Button variant="outline">Change Plan</Button>
                </div>
                
                <div className="mt-4 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Email accounts</span>
                    <span>3 / 5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Campaigns</span>
                    <span>Unlimited</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Emails per month</span>
                    <span>10,000</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Payment Method</h3>
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-14 rounded-md bg-gray-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <line x1="2" x2="22" y1="10" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4242</p>
                      <p className="text-xs text-muted-foreground">Expires 04/25</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Change</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Billing History</h3>
                <div className="rounded-md border">
                  <div className="p-4 flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium">April 15, 2023</p>
                      <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$49.00</p>
                      <p className="text-xs text-muted-foreground">Visa \u2022\u2022\u2022\u2022 4242</p>
                    </div>
                  </div>
                  <div className="border-t p-4 flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium">March 15, 2023</p>
                      <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$49.00</p>
                      <p className="text-xs text-muted-foreground">Visa \u2022\u2022\u2022\u2022 4242</p>
                    </div>
                  </div>
                  <div className="border-t p-4 flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium">February 15, 2023</p>
                      <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$49.00</p>
                      <p className="text-xs text-muted-foreground">Visa \u2022\u2022\u2022\u2022 4242</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button variant="link" size="sm">View All Invoices</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
