"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type Props = {
  onFilterChange: (filters: { type: string; campaignId?: string }) => void;
};

const campaigns = [
  { id: "1", name: "Campaña Navidad" },
  { id: "2", name: "Campaña Black Friday" },
  { id: "3", name: "Campaña Verano" },
];

export const EmailFilters: React.FC<Props> = ({ onFilterChange }) => {
  const [type, setType] = React.useState("all");
  const [campaignId, setCampaignId] = React.useState<string | undefined>();

  React.useEffect(() => {
    if (type !== "campaign") {
      onFilterChange({ type });
    } else if (type === "campaign" && campaignId) {
      onFilterChange({ type, campaignId });
    }
  }, [type, campaignId]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" />
          Filtros
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 space-y-4">
        <div>
          <Label>Tipo de Email</Label>
          <Select value={type} onValueChange={(val) => setType(val)}>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Seleccionar tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="unread">Sin leer</SelectItem>
              <SelectItem value="starred">Importantes</SelectItem>
              <SelectItem value="campaign">Por campaña</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {type === "campaign" && (
          <div>
            <Label>Campaña</Label>
            <Select value={campaignId} onValueChange={(val) => setCampaignId(val)}>
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Seleccionar campaña" />
              </SelectTrigger>
              <SelectContent>
                {campaigns.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
