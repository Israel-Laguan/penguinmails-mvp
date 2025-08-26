"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type PasswordFormValues = z.infer<typeof passwordSchema>;

interface PasswordStrength {
  level: "weak" | "medium" | "strong" | "very-strong";
  text: string;
  color: string;
  percentage: number;
}

const getPasswordStrength = (password: string): PasswordStrength => {
  if (!password) {
    return { level: "weak", color: "bg-red-500", text: "Weak", percentage: 0 };
  }

  let strength = 0;
  const checks = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ];

  strength = checks.filter(Boolean).length;

  const strengthMap: Record<number, PasswordStrength> = {
    0: { level: "weak", color: "bg-red-500", text: "Very Weak", percentage: 0 },
    1: { level: "weak", color: "bg-red-500", text: "Weak", percentage: 20 },
    2: { level: "weak", color: "bg-red-500", text: "Weak", percentage: 40 },
    3: {
      level: "medium",
      color: "bg-yellow-500",
      text: "Medium",
      percentage: 60,
    },
    4: {
      level: "strong",
      color: "bg-green-500",
      text: "Strong",
      percentage: 80,
    },
    5: {
      level: "very-strong",
      color: "bg-green-600",
      text: "Very Strong",
      percentage: 100,
    },
  };

  return strengthMap[strength] || strengthMap[0];
};

interface PasswordToggleProps {
  show: boolean;
  onToggle: () => void;
}

const PasswordToggle = ({ show, onToggle }: PasswordToggleProps) => (
  <Button
    type="button"
    variant="ghost"
    size="sm"
    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
    onClick={onToggle}
  >
    {show ? (
      <EyeOff className="h-4 w-4 text-muted-foreground" />
    ) : (
      <Eye className="h-4 w-4 text-muted-foreground" />
    )}
  </Button>
);

interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator = ({
  password,
}: PasswordStrengthIndicatorProps) => {
  const passwordStrength = getPasswordStrength(password);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Password strength:</span>
        <span
          className={cn("font-medium", {
            "text-red-600": passwordStrength.level === "weak",
            "text-yellow-600": passwordStrength.level === "medium",
            "text-green-600":
              passwordStrength.level === "strong" ||
              passwordStrength.level === "very-strong",
          })}
        >
          {passwordStrength.text}
        </span>
      </div>
      <Progress
        value={passwordStrength.percentage}
        className={cn("h-2", {
          "[&>div]:bg-red-500": passwordStrength.level === "weak",
          "[&>div]:bg-yellow-500": passwordStrength.level === "medium",
          "[&>div]:bg-green-500":
            passwordStrength.level === "strong" ||
            passwordStrength.level === "very-strong",
        })}
      />
    </div>
  );
};

function ChangePasswordForm() {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = form.watch("newPassword");

  const handlePasswordChange = (data: PasswordFormValues) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handlePasswordChange)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type={showPassword.current ? "text" : "password"}
                    placeholder="Enter current password"
                    className="pr-10"
                  />
                  <PasswordToggle
                    show={showPassword.current}
                    onToggle={() =>
                      setShowPassword((p) => ({ ...p, current: !p.current }))
                    }
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type={showPassword.new ? "text" : "password"}
                    placeholder="Enter new password"
                    className="pr-10"
                  />
                  <PasswordToggle
                    show={showPassword.new}
                    onToggle={() =>
                      setShowPassword((p) => ({ ...p, new: !p.new }))
                    }
                  />
                </div>
              </FormControl>
              {newPassword && (
                <PasswordStrengthIndicator password={newPassword} />
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm New Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type={showPassword.confirm ? "text" : "password"}
                    placeholder="Confirm new password"
                    className="pr-10"
                  />
                  <PasswordToggle
                    show={showPassword.confirm}
                    onToggle={() =>
                      setShowPassword((p) => ({ ...p, confirm: !p.confirm }))
                    }
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-2 flex justify-end">
          <Button
            type="submit"
            className="w-full sm:w-auto"
            disabled={!form.formState.isValid}
          >
            Update Password
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ChangePasswordForm;
