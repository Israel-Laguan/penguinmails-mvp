"use client";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import { Email } from "../schemas/schemas";
import EmailActions from "./actions-email";
import Link from "next/link";

type Props = {
  emails: Email[];
};

export default function InboxMessages({ emails }: Props) {
  if (!emails || emails.length === 0) {
    return (
      <div className="px-4 py-4 flex items-start">
        <p className="text-sm text-muted-foreground">No emails found.</p>
      </div>
    );
  }

  const renderEmail = (email: Email) => (
    <div
      key={email.id}
      className={`px-4 py-4 flex flex-col hover:bg-gray-50 cursor-pointer border rounded-md ${
        !email.read ? "bg-blue-50" : "bg-white"
      }`}
    >
      <Link href={`/dashboard/inbox/${email.id}`}>
        <div className="flex items-start">
          <div className="mr-4 pt-1">
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Star
                className={`h-4 w-4 ${
                  email.starred
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted-foreground"
                }`}
              />
            </Button>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-baseline mb-1">
              <h3
                className={`font-medium ${
                  !email.read ? "font-semibold" : ""
                }`}
              >
                {email.client.firstName && email.client.lastName}
              </h3>
              <div className="flex items-center space-x-2 justify-content-center">
                <EmailActions email={email} />
                <span className="text-xs text-muted-foreground">
                  {email.date}
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{email.client.email}</p>
            <h4
              className={`text-sm mb-1 ${!email.read ? "font-medium" : ""}`}
            >
              {email.subject}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {email.preview}
            </p>
            <div className="mt-2">
              <span className="inline-block bg-blue-100 text-xs text-blue-800 px-2 py-1 rounded-full">
                {email.campaign.name}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div>
      <TabsContent value="all" className="m-0">
        {emails.map(renderEmail)}
      </TabsContent>

      <TabsContent value="unread" className="m-0">
        {emails.filter((email) => !email.read).map(renderEmail)}
      </TabsContent>

      <TabsContent value="starred" className="m-0">
        {emails.filter((email) => email.starred).map(renderEmail)}
      </TabsContent>
    </div>
  );
}
