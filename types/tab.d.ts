import { LucideIcon } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  count?: number;
  icon?: LucideIcon;
  Component?: React.ComponentType;
}
