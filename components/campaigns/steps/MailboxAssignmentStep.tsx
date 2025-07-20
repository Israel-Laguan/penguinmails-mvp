"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useAddCampaignContext } from "@/context/AddCampaignContext";
import { Mail } from "lucide-react";

const mailboxes = [
  {
    id: "1",
    email: "john@mycompany.com",
    name: "John Doe",
    status: "ready",
    dailyLimit: 50,
    reputation: "excellent",
  },
  {
    id: "2",
    email: "sarah@mycompany.com",
    name: "Sarah Smith",
    status: "ready",
    dailyLimit: 30,
    reputation: "good",
  },
  {
    id: "3",
    email: "mike@mycompany.com",
    name: "Mike Johnson",
    status: "warming",
    dailyLimit: 25,
    reputation: "building",
  },
];

function MailboxAssignmentStep() {
  const { form } = useAddCampaignContext();
  const { setValue, watch } = form;
  const selectedMailboxes = watch("selectedMailboxes") || [];

  const handleMailboxToggle = (
    mailbox: (typeof mailboxes)[0],
    checked: boolean
  ) => {
    if (checked) {
      setValue("selectedMailboxes", [...selectedMailboxes, mailbox]);
    } else {
      setValue(
        "selectedMailboxes",
        selectedMailboxes.filter((m) => m.id !== mailbox.id)
      );
    }
  };

  return (
    <>
      <Card className="max-w-3xl mx-auto space-y-8">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Assign Mailboxes
          </h2>
          <p className="text-gray-600">
            Select which mailboxes will send emails for this campaign
          </p>
        </CardHeader>

        <CardContent className="grid gap-4">
          {mailboxes.map((mailbox) => (
            <Label
              key={mailbox.id}
              className="flex items-center p-6 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md has-[[aria-checked=true]]:border-green-500 has-[[aria-checked=true]]:bg-green-50 border-gray-200 hover:border-gray-300"
            >
              <Checkbox
                checked={selectedMailboxes.some((m) => m.id === mailbox.id)}
                onCheckedChange={(checked) =>
                  handleMailboxToggle(mailbox, checked as boolean)
                }
                className="w-5 h-5 data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white"
              />
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {mailbox.email}
                  </h4>
                  <div className="flex items-center space-x-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        mailbox.status === "ready"
                          ? "bg-green-100 text-green-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {mailbox.status}
                    </span>
                    <span className="text-sm text-gray-500">
                      {mailbox.dailyLimit} emails/day
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-sm text-gray-600">
                    Reputation: {mailbox.reputation}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      mailbox.reputation === "excellent"
                        ? "bg-green-500"
                        : mailbox.reputation === "good"
                        ? "bg-yellow-500"
                        : "bg-orange-500"
                    }`}
                  ></div>
                </div>
              </div>
            </Label>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
export default MailboxAssignmentStep;
