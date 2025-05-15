import { CampaignEventContition } from "@/app/api/generated/prisma";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { copyText as t } from "./copy";

interface DelaySettingsProps {
  delayDays: number;
  delayHours: number;
  condition: CampaignEventContition;
  onUpdate: (updates: { delayDays?: number; delayHours?: number; condition?: CampaignEventContition }) => void;
}

export function DelaySettings({ delayDays, delayHours, condition, onUpdate }: DelaySettingsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div>
          <Label>{t.delay.waitFor}</Label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min={0}
              value={delayDays}
              onChange={(e) => onUpdate({ delayDays: parseInt(e.target.value) })}
              className="w-20"
            />
            <span>{t.delay.days}</span>
            <Input
              type="number"
              min={0}
              max={23}
              value={delayHours}
              onChange={(e) => onUpdate({ delayHours: parseInt(e.target.value) })}
              className="w-20"
            />
            <span>{t.delay.hours}</span>
          </div>
        </div>

        <div className="flex-1">
          <Label>{t.delay.condition}</Label>
          <Select value={condition} onValueChange={(value) => onUpdate({ condition: value as CampaignEventContition })}>
            <SelectTrigger>
              <SelectValue placeholder={t.delay.selectCondition} />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(CampaignEventContition).map(([key, value]) => (
                <SelectItem key={key} value={value}>
                  {t.conditions[key.toLowerCase() as keyof typeof t.conditions]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
