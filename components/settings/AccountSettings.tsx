'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import PasswordSettingsForm from './PasswordSettingsForm';
import { ProfileFormValues, ProfileSettingsForm } from './ProfileSettingsForm';

interface AccountSettingsProps extends React.HTMLAttributes<HTMLDivElement> {
  userProfile: ProfileFormValues & { role: string, avatarUrl?: string };
}

export default function AccountSettings({ userProfile, ...props }: AccountSettingsProps) {
  return (
    <div className="grid gap-6" {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            Update your personal information and profile settings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProfileSettingsForm userProfile={userProfile} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>
            Change your password or enable two-factor authentication.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PasswordSettingsForm />
        </CardContent>
      </Card>
    </div>
  );
}