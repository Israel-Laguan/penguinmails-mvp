"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAddCampaignContext } from "@/context/AddCampaignContext";
import { leadLists } from "@/lib/data/leads";
import { cn } from "@/lib/utils";
import { Users } from "lucide-react";

function LeadsSelectionStep() {
  const { form, editingMode } = useAddCampaignContext();
  const { setValue, watch } = form;
  const selectedLeadsList = watch("leadsList");
  const handleLeadsListChange = (listId: string) => {
    const selectedList = leadLists.find((list) => list.id === listId);
    if (selectedList) {
      setValue("leadsList", selectedList);
    }
  };

  return (
    <>
      <Card className="max-w-2xl mx-auto p-6">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Select Lead List
          </h2>
          <p className="text-gray-600">
            Choose which leads you want to target with this campaign
          </p>
          {editingMode ? (
            <Alert className="mt-4 bg-blue-100">
              <AlertDescription className="text-blue-800 text-sm font-medium">
                Lead list cannot be changed after launch
              </AlertDescription>
            </Alert>
          ) : null}
        </CardHeader>

        <CardContent className="grid gap-4">
          <RadioGroup
            value={selectedLeadsList?.id.toString()}
            onValueChange={handleLeadsListChange}
            disabled={editingMode}
          >
            {leadLists.map((list) => (
              <Label
                key={list.id}
                className={cn(
                  "flex items-center p-6 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md has-[[aria-checked=true]]:border-purple-500 has-[[aria-checked=true]]:bg-purple-50 border-gray-200 hover:border-gray-300 bg-gray-50   disabled:opacity-50 disabled:cursor-not-allowed",
                  {
                    "border-purple-500 bg-purple-50":
                      selectedLeadsList?.id === list.id,
                    "bg-gray-200  cursor-not-allowed": editingMode,
                  }
                )}
              >
                <RadioGroupItem
                  value={list.id}
                  className="w-5 h-5 text-purple-600 focus:ring-purple-500 border-gray-300 disabled:opacity-50"
                />
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {list.name}
                    </h4>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {list.contacts.toLocaleString()} contacts
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1">{list.description}</p>
                </div>
              </Label>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </>
  );
}
export default LeadsSelectionStep;
