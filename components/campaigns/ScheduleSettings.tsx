"use client";

import React, { MouseEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { copyText as t } from "./copy";
import { timezones } from "./const-mock";

interface ScheduleSettingsProps {
  timezone: string;
  sendTimeStart: string;
  sendTimeEnd: string;
  selectedSendDays: number[];
  handleDayChange: (dayId: number, evt: MouseEvent<HTMLButtonElement>) => void;
  handleChangeScheduleSettings: (field: 'sendTimeEnd' | 'sendTimeStart' | 'timezone', value: string) => void;
}

const daysOfWeek = [
  { id: 0, label: t.schedule.days.mon },
  { id: 1, label: t.schedule.days.tue },
  { id: 2, label: t.schedule.days.wed },
  { id: 3, label: t.schedule.days.thu },
  { id: 4, label: t.schedule.days.fri },
  { id: 5, label: t.schedule.days.sat },
  { id: 6, label: t.schedule.days.sun },
];

export function ScheduleSettings({ timezone, sendTimeStart, sendTimeEnd, selectedSendDays, handleDayChange, handleChangeScheduleSettings }: ScheduleSettingsProps) {

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.schedule.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>{t.schedule.sendingDays}</Label>
          <div className="flex flex-wrap gap-2">
            {daysOfWeek.map((day) => (
              <Button
                key={day.id}
                variant={selectedSendDays.includes(day.id) ? "default" : "outline"}
                size="sm"
                onClick={(evt) => handleDayChange(day.id, evt)}
                className="w-12"
              >
                {day.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="start-time">{t.schedule.startTime}</Label>
            <Input
              id="start-time"
              type="time"
              value={sendTimeStart}
              onChange={(e) => handleChangeScheduleSettings('sendTimeStart', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-time">{t.schedule.endTime}</Label>
            <Input
              id="end-time"
              type="time"
              value={sendTimeEnd}
              onChange={(e) => handleChangeScheduleSettings('sendTimeEnd', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timezone">{t.schedule.timezone}</Label>
          <Select value={timezone} onValueChange={(value) => handleChangeScheduleSettings('timezone', value)}>
            <SelectTrigger id="timezone">
              <SelectValue placeholder={t.schedule.selectTimezone} />
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

