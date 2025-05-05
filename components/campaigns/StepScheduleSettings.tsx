import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { copyText as t } from "./copy";

interface ScheduleSettingsProps {
  sendDays: number[];
  sendTimeStart?: string;
  sendTimeEnd?: string;
  emailsPerDay?: number;
  timezone: string;
  onUpdate: (updates: Partial<Pick<ScheduleSettingsProps, 'sendDays' | 'sendTimeStart' | 'sendTimeEnd' | 'emailsPerDay' | 'timezone'>>) => void;
}

export function ScheduleSettings(props: ScheduleSettingsProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label>{t.schedule.sendingDays}</Label>
        <div className="flex gap-2 mt-2">
          {[0, 1, 2, 3, 4, 5, 6].map((day) => (
            <Toggle
              key={day}
              pressed={props.sendDays.includes(day)}
              onPressedChange={(pressed) => {
                const newDays = pressed
                  ? [...props.sendDays, day]
                  : props.sendDays.filter(d => d !== day);
                props.onUpdate({ sendDays: newDays });
              }}
            >
              {t.schedule.days[(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const)[day] as keyof typeof t.schedule.days]}
            </Toggle>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>{t.schedule.startTime}</Label>
          <Input
            type="time"
            value={props.sendTimeStart}
            onChange={(e) => props.onUpdate({ sendTimeStart: e.target.value })}
          />
        </div>
        <div>
          <Label>{t.schedule.endTime}</Label>
          <Input
            type="time"
            value={props.sendTimeEnd}
            onChange={(e) => props.onUpdate({ sendTimeEnd: e.target.value })}
          />
        </div>
      </div>

      <div>
        <Label>{t.schedule.emailsPerDay}</Label>
        <Input
          type="number"
          min={1}
          value={props.emailsPerDay}
          onChange={(e) => props.onUpdate({ emailsPerDay: parseInt(e.target.value) })}
        />
      </div>
    </div>
  );
}
