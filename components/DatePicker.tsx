"use client";
import { ChevronDownIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

function DatePicker({
  date,
  label = "Select Date",
  calendarProps = {},
}: {
  date: Date | undefined;
  calendarProps?: React.ComponentProps<typeof DayPicker>;
  label?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        {label}
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            captionLayout={"dropdown"}
            navLayout="around"
            {...calendarProps}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
export default DatePicker;
