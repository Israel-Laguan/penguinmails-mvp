"use client";

import React from "react";
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
import { ScheduleSettingsProps } from "./types";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

const daysOfWeek = [
  { id: 0, label: t.schedule.days.mon },
  { id: 1, label: t.schedule.days.tue },
  { id: 2, label: t.schedule.days.wed },
  { id: 3, label: t.schedule.days.thu },
  { id: 4, label: t.schedule.days.fri },
  { id: 5, label: t.schedule.days.sat },
  { id: 6, label: t.schedule.days.sun },
];

export function ScheduleSettings({ control, timezones, selectedTimezone, selectedSendDays, register, handleDayChange }: ScheduleSettingsProps) {

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
            <FormField
              control={control}
              name="sendTimeStart"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.schedule.startTime}</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={control}
              name="sendTimeEnd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.schedule.endTime}</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-2">
          <FormField
            control={control}
            name="timezone"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="timezone">{t.schedule.timezone}</Label>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder={t.schedule.selectTimezone} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {timezones.map((tz) => (
                      <SelectItem key={tz} value={tz}>
                        {tz}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Optional: Add options for throttling, etc. */}
      </CardContent>
    </Card>
  );
}

