"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAddCampaignContext } from "@/context/AddCampaignContext";
import { Mail, Info } from "lucide-react";
import { mailboxes } from "@/lib/data/mailboxes";


function MailboxAssignmentStep() {
  const { form, editingMode, campaign } = useAddCampaignContext();

  const { setValue, watch } = form;
  const selectedMailboxes = watch("selectedMailboxes") || [];

  const initiallySelectedEmails = editingMode
    ? campaign?.assignedMailboxes || []
    : [];

  const handleMailboxToggle = (
    mailbox: (typeof mailboxes)[0],
    checked: boolean
  ) => {
    if (editingMode && initiallySelectedEmails.includes(mailbox.email)) {
      return;
    }

    if (checked) {
      setValue("selectedMailboxes", [...selectedMailboxes, mailbox]);
    } else {
      setValue(
        "selectedMailboxes",
        selectedMailboxes.filter((m) => m.email !== mailbox.email)
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
          {editingMode && (
            <Alert className="mb-4 bg-blue-100 text-blue-800">
              <Info className="h-4 w-4" />
              <AlertDescription className="text-sm font-medium text-inherit">
                You can add new mailboxes to this active campaign, but cannot
                remove mailboxes that are already assigned and actively sending
                emails.
              </AlertDescription>
            </Alert>
          )}

          {mailboxes.map((mailbox) => {
            const isSelected =
              selectedMailboxes.some((m) => m.email === mailbox.email) ||
              initiallySelectedEmails.includes(mailbox.email);
            const isInitiallySelected =
              editingMode && initiallySelectedEmails.includes(mailbox.email);
            const isDisabled = editingMode && isInitiallySelected;

            return (
              <Label
                key={mailbox.id}
                className={`flex items-center p-6 border-2 rounded-xl transition-all bg-gray-50 border-gray-200 ${
                  isDisabled
                    ? "opacity-75 cursor-not-allowed"
                    : "cursor-pointer hover:shadow-md hover:border-gray-300 has-[[aria-checked=true]]:border-green-500 has-[[aria-checked=true]]:bg-green-50"
                }`}
              >
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={(checked) =>
                    handleMailboxToggle(mailbox, checked as boolean)
                  }
                  disabled={isDisabled}
                  className="w-5 h-5 data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white disabled:opacity-50"
                />
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {mailbox.email}
                      {isInitiallySelected && (
                        <span className="ml-2 text-xs text-green-600 font-medium">
                          (Active)
                        </span>
                      )}
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
            );
          })}
        </CardContent>
      </Card>
    </>
  );
}
export default MailboxAssignmentStep;
