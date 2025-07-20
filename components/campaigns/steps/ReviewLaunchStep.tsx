"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAddCampaignContext } from "@/context/AddCampaignContext";
import { Check } from "lucide-react";

function ReviewLaunchStep() {
  const { form } = useAddCampaignContext();
  const campaignData = form.watch();

  return (
    <Card className="max-w-3xl mx-auto space-y-8">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Review & Launch
        </h2>
        <p className="text-gray-600">
          Final review of your campaign before launching
        </p>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4">
            Campaign Overview
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Name:</span>
              <span className="font-medium">
                {campaignData.name || "Untitled Campaign"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Lead List:</span>
              <span className="font-medium">
                {campaignData.leadsList?.name || "None selected"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Contacts:</span>
              <span className="font-medium">
                {campaignData.leadsList?.contacts?.toLocaleString() || "0"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mailboxes:</span>
              <span className="font-medium">
                {campaignData.selectedMailboxes?.length || 0}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4">
            Sequence & Schedule
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Sequence Steps:</span>
              <span className="font-medium">
                {campaignData.sequence?.length || 0}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Daily Limit:</span>
              <span className="font-medium">
                {campaignData.schedule?.dailyLimit || 0} emails/day
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sending Hours:</span>
              <span className="font-medium">
                {campaignData.schedule?.startTime || "N/A"} -{" "}
                {campaignData.schedule?.endTime || "N/A"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Timezone:</span>
              <span className="font-medium">
                {campaignData.schedule?.timezone || "Not set"}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export default ReviewLaunchStep;
