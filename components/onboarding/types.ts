import { LucideIcon } from "lucide-react";

export interface OnboardingStep {
  id: number;
  title: string;
  subtitle: string;
  explanation: string;
  icon: LucideIcon;
  color: string;
  href: string;
  buttonText: string;
  kbLink: string;
  videoId: string;
  completed: boolean;
  promotion?: {
    title: string;
    description: string;
    link: string;
  };
}
