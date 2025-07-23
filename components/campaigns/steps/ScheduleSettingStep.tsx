"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddCampaignContext } from "@/context/AddCampaignContext";
import { Calendar } from "lucide-react";

const daysOfWeek = [
  { value: "monday", label: "Mon" },
  { value: "tuesday", label: "Tue" },
  { value: "wednesday", label: "Wed" },
  { value: "thursday", label: "Thu" },
  { value: "friday", label: "Fri" },
  { value: "saturday", label: "Sat" },
  { value: "sunday", label: "Sun" },
] as const;

function ScheduleSettingStep() {
  const { form } = useAddCampaignContext();
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;
  const selectedDays = watch("schedule.days") || [];

  const handleDayToggle = (day: string, checked: boolean) => {
    const currentDays = selectedDays || [];
    const dayValue = day as
      | "monday"
      | "tuesday"
      | "wednesday"
      | "thursday"
      | "friday"
      | "saturday"
      | "sunday";
    if (checked) {
      setValue("schedule.days", [...currentDays, dayValue]);
    } else {
      setValue(
        "schedule.days",
        currentDays.filter((d) => d !== dayValue)
      );
    }
  };

  return (
    <Card className="max-w-3xl mx-auto space-y-8">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-8 h-8 text-pink-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Set Sending Schedule
        </h2>
        <p className="text-gray-600">
          Configure when and how your emails will be sent
        </p>
        <Alert variant={"default"} className="bg-blue-100 ">
          <AlertDescription className="text-blue-800 text-sm font-medium">
            📝 Changes will apply to next scheduled emails
          </AlertDescription>
        </Alert>
      </CardHeader>

      <CardContent className="space-y-8">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-4 block">
            Sending Days
          </Label>
          <div className="grid grid-cols-7 gap-3">
            {daysOfWeek.map((day) => (
              <div
                key={day.value}
                className="flex flex-col items-center space-y-2 p-3 border border-gray-200 rounded-xl hover:bg-gray-50"
              >
                <Checkbox
                  id={day.value}
                  checked={selectedDays.includes(day.value)}
                  onCheckedChange={(checked) =>
                    handleDayToggle(day.value, checked as boolean)
                  }
                />
                <Label
                  htmlFor={day.value}
                  className="text-sm font-medium text-gray-700 cursor-pointer"
                >
                  {day.label}
                </Label>
              </div>
            ))}
          </div>
          {errors.schedule?.days && (
            <p className="text-red-500 text-sm mt-2">
              {errors.schedule.days.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label
              htmlFor="start-time"
              className="text-sm font-medium text-gray-700 mb-2 block"
            >
              Start Time
            </Label>
            <Input
              {...register("schedule.startTime")}
              id="start-time"
              type="time"
              className="w-full"
            />
            {errors.schedule?.startTime && (
              <p className="text-red-500 text-sm mt-1">
                {errors.schedule.startTime.message}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor="end-time"
              className="text-sm font-medium text-gray-700 mb-2 block"
            >
              End Time
            </Label>
            <Input
              {...register("schedule.endTime")}
              id="end-time"
              type="time"
              className="w-full"
            />
            {errors.schedule?.endTime && (
              <p className="text-red-500 text-sm mt-1">
                {errors.schedule.endTime.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label
              htmlFor="daily-limit"
              className="text-sm font-medium text-gray-700 mb-2 block"
            >
              Daily Email Limit
            </Label>
            <Input
              {...register("schedule.dailyLimit", { valueAsNumber: true })}
              id="daily-limit"
              type="number"
              className="w-full"
              min="1"
            />
            {errors.schedule?.dailyLimit && (
              <p className="text-red-500 text-sm mt-1">
                {errors.schedule.dailyLimit.message}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor="delay"
              className="text-sm font-medium text-gray-700 mb-2 block"
            >
              Delay Between Emails (minutes)
            </Label>
            <Input
              {...register("schedule.delayBetween", { valueAsNumber: true })}
              id="delay"
              type="number"
              className="w-full"
              min="0"
            />
            {errors.schedule?.delayBetween && (
              <p className="text-red-500 text-sm mt-1">
                {errors.schedule.delayBetween.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Timezone
          </Label>
          <Select
            onValueChange={(value) => setValue("schedule.timezone", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="UTC-08:00">
                UTC-08:00 (Pacific Time)
              </SelectItem>
              <SelectItem value="UTC-05:00">
                UTC-05:00 (Eastern Time)
              </SelectItem>
              <SelectItem value="UTC+00:00">UTC+00:00 (UTC)</SelectItem>
              <SelectItem value="UTC+01:00">
                UTC+01:00 (Central European Time)
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.schedule?.timezone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.schedule.timezone.message}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
export default ScheduleSettingStep;
