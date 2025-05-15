"use client";

import React from "react";
import { copyText as t } from "./copy";
import { CampaignFormValues } from "./types";

interface CampaignDetailsProps {
  readOnly: boolean;
  initialData: CampaignFormValues | undefined;
}

export function CampaignDetails({ readOnly, initialData }: CampaignDetailsProps) {

  if (!readOnly || !initialData?.id) {
    return;
  }

  return (
    <div className="mb-6 space-y-2 text-sm text-muted-foreground border-b pb-4">
      <div>
        <span className="font-medium">{t.metadata.id}:</span> {initialData.id}
      </div>
      {initialData.createdAt && (
        <div>
          <span className="font-medium">{t.metadata.created}:</span>{" "}
          {new Date(initialData.createdAt).toLocaleString()}
        </div>
      )}
      {initialData.updatedAt && (
        <div>
          <span className="font-medium">{t.metadata.lastUpdated}:</span>{" "}
          {new Date(initialData.updatedAt).toLocaleString()}
        </div>
      )}
    </div>
  );
}

