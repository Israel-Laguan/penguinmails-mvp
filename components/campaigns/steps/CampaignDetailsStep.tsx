"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAddCampaignContext } from "@/context/AddCampaignContext";
import { Target } from "lucide-react";

function CampaignDetailsStep() {
  const { form } = useAddCampaignContext();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <Card className="max-w-2xl mx-auto p-6">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Target className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Campaign Details
        </h2>
        <p className="text-gray-600">
          Give your campaign a name and description to get started
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-3">
            Campaign Name *
          </Label>
          <Input
            {...register("name")}
            type="text"
            placeholder="Enter campaign name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-3">
            Description (Optional)
          </Label>
          <Textarea
            {...register("description")}
            placeholder="Enter campaign description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
export default CampaignDetailsStep;
