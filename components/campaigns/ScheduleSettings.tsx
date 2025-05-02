"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

// TODO: Potentially fetch timezone list dynamically
const timezones = [
  "(GMT-12:00) International Date Line West",
  "(GMT-11:00) Midway Island, Samoa",
  "(GMT-10:00) Hawaii",
  "(GMT-09:00) Alaska",
  "(GMT-08:00) Pacific Time (US & Canada)",
  "(GMT-07:00) Mountain Time (US & Canada)",
  "(GMT-06:00) Central Time (US & Canada)",
  "(GMT-05:00) Eastern Time (US & Canada)",
  "(GMT-04:00) Atlantic Time (Canada)",
  "(GMT-03:00) Buenos Aires, Georgetown",
  "(GMT-02:00) Mid-Atlantic",
  "(GMT-01:00) Azores",
  "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London",
  "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
  "(GMT+02:00) Athens, Bucharest, Istanbul",
  "(GMT+03:00) Moscow, St. Petersburg, Volgograd",
  "(GMT+04:00) Abu Dhabi, Muscat",
  "(GMT+05:00) Islamabad, Karachi, Tashkent",
  "(GMT+06:00) Almaty, Novosibirsk",
  "(GMT+07:00) Bangkok, Hanoi, Jakarta",
  "(GMT+08:00) Beijing, Perth, Singapore, Hong Kong",
  "(GMT+09:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
  "(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
  "(GMT+11:00) Magadan, Solomon Is., New Caledonia",
  "(GMT+12:00) Auckland, Wellington",
  "(GMT+13:00) Nuku'alofa"
];

const daysOfWeek = [
  { id: "mon", label: "Mon" },
  { id: "tue", label: "Tue" },
  { id: "wed", label: "Wed" },
  { id: "thu", label: "Thu" },
  { id: "fri", label: "Fri" },
  { id: "sat", label: "Sat" },
  { id: "sun", label: "Sun" },
];

export function ScheduleSettings() {
  // TODO: Connect these states/defaults to react-hook-form or parent state
  const [selectedDays, setSelectedDays] = React.useState<string[]>(["mon", "tue", "wed", "thu", "fri"]);
  const [startTime, setStartTime] = React.useState("09:00");
  const [endTime, setEndTime] = React.useState("17:00");
  const [timezone, setTimezone] = React.useState(timezones[7]); // Default to ET

  const handleDayChange = (dayId: string) => {
    setSelectedDays(prev =>
      prev.includes(dayId)
        ? prev.filter(d => d !== dayId)
        : [...prev, dayId]
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sending Schedule</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Sending Days</Label>
          <div className="flex flex-wrap gap-2">
            {daysOfWeek.map((day) => (
              <Button
                key={day.id}
                variant={selectedDays.includes(day.id) ? "default" : "outline"}
                size="sm"
                onClick={() => handleDayChange(day.id)}
                className="w-12"
              >
                {day.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="start-time">Start Time</Label>
            <Input
              id="start-time"
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-time">End Time</Label>
            <Input
              id="end-time"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timezone">Timezone</Label>
          <Select value={timezone} onValueChange={setTimezone}>
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {timezones.map((tz) => (
                <SelectItem key={tz} value={tz}>
                  {tz}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Optional: Add options for throttling, etc. */}
      </CardContent>
    </Card>
  );
}

