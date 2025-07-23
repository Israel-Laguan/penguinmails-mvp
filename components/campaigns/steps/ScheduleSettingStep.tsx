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
import { allTimezones, calculateMaxEmails, cn } from "@/lib/utils";
import { Calendar, Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

enum DayOfWeek {
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
  Sunday = "sunday",
}

const daysOfWeek = [
  { value: DayOfWeek.Monday, label: "Mon" },
  { value: DayOfWeek.Tuesday, label: "Tue" },
  { value: DayOfWeek.Wednesday, label: "Wed" },
  { value: DayOfWeek.Thursday, label: "Thu" },
  { value: DayOfWeek.Friday, label: "Fri" },
  { value: DayOfWeek.Saturday, label: "Sat" },
  { value: DayOfWeek.Sunday, label: "Sun" },
] as const;

function ScheduleSettingStep() {
  const { form } = useAddCampaignContext();
  const ref = useRef<HTMLInputElement>(null);
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;
  const selectedDays = watch("schedule.days") || [];

  const handleDayToggle = (day: DayOfWeek, checked: boolean) => {
    const currentDays = selectedDays || [];
    if (checked) {
      setValue("schedule.days", [...currentDays, day]);
    } else {
      setValue(
        "schedule.days",
        currentDays.filter((d) => d !== day)
      );
    }
  };
  const startTime = watch("schedule.startTime") || "09:00";
  const endTime = watch("schedule.endTime") || "17:00";
  const delayMinutes = watch("schedule.delayBetween") || 1;
  const maxEmails = calculateMaxEmails(startTime, endTime, delayMinutes);
  useEffect(() => {
    ref.current?.setAttribute("value", maxEmails.toString());
  }, [maxEmails]);
  const allTimeZones = allTimezones;
  const [openTimezone, setOpenTimezone] = useState(false);
  const timezoneValue = watch("schedule.timezone");

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
              {...register("schedule.dailyLimit", {
                valueAsNumber: true,
                max: maxEmails,
              })}
              id="daily-limit"
              type="number"
              className="w-full"
              min="1"
              ref={ref}
              max={maxEmails}
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
        <Alert>
          <AlertDescription className="text-blue-800 text-sm font-medium">
            Daily limit cannot exceed {maxEmails} emails based on your time
            range and delay settings.
          </AlertDescription>
        </Alert>
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Timezone
          </Label>
          <Popover open={openTimezone} onOpenChange={setOpenTimezone}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openTimezone}
                className="w-full justify-between"
              >
                {timezoneValue
                  ? allTimeZones.find((zone) => zone.value === timezoneValue)
                      ?.label
                  : "Select timezone..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
              <Command>
                <CommandInput placeholder="Search timezone..." />
                <CommandEmpty>No timezone found.</CommandEmpty>
                <CommandGroup className="max-h-60 overflow-y-auto">
                  {allTimeZones.map((zone) => (
                    <CommandItem
                      key={zone.value}
                      value={zone.value}
                      onSelect={(currentValue) => {
                        setValue("schedule.timezone", currentValue);
                        setOpenTimezone(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          timezoneValue === zone.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {zone.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
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
