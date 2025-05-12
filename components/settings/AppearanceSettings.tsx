"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";

interface AppearanceSettingsProps {
  // Define props for appearance settings data if needed
  // For now, using mock data structure based on the JSX
  theme: "light" | "dark" | "system" | string;
  density: "compact" | "default" | "comfortable" | string;
  showCampaignPreviews: boolean;
}

const AppearanceSettings: React.FC<AppearanceSettingsProps> = ({
  theme,
  density,
  showCampaignPreviews
}) => {
  // You would typically use state and handlers to manage the settings
  // For now, we are just displaying the initial props

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize the appearance of the application.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Theme</Label>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              className="justify-start"
              aria-pressed={theme === "light"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
              Light
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              aria-pressed={theme === "dark"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              Dark
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              aria-pressed={theme === "system"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 2a10 10 0 0 1 10 10" />
                <path d="M12 12 2 12" />
                <path d="M12 22 12 12" />
              </svg>
              System
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Density</Label>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              className="justify-start"
              aria-pressed={density === "compact"}
            >
              Compact
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              aria-pressed={density === "default"}
            >
              Default
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              aria-pressed={density === "comfortable"}
            >
              Comfortable
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <h4 className="text-sm font-medium">Show Campaign Previews</h4>
            <p className="text-xs text-muted-foreground">
              Show previews when hovering over campaign names
            </p>
          </div>
          <Switch checked={showCampaignPreviews} />
        </div>
      </CardContent>
    </Card>
  );
};

export default AppearanceSettings;
