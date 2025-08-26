"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Check, Smartphone } from "lucide-react";
import { createContext, useContext, useState } from "react";

interface TwoAuthContextType {
  isEnabled: boolean;
  setIsEnabled: (enabled: boolean) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  onChangeSwitch: () => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const TwoAuthContext = createContext<TwoAuthContextType | undefined>(undefined);

function TwoAuthProvider({ children }: { children: React.ReactNode }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [open, setOpen] = useState(false);
  function onChangeSwitch() {
    if (isEnabled) {
      setIsEnabled(false);
    } else {
      setOpen(!open);
    }
  }

  function onSubmit() {
    setOpen(false);
    setIsEnabled(true);
  }
  function onCancel() {
    setOpen(false);
  }
  return (
    <TwoAuthContext.Provider
      value={{
        isEnabled,
        setIsEnabled,
        open,
        setOpen,
        onChangeSwitch,
        onSubmit,
        onCancel,
      }}
    >
      {children}
      <DialogTwoAuth />
    </TwoAuthContext.Provider>
  );
}
function useTwoAuthContext() {
  const context = useContext(TwoAuthContext);
  if (!context) {
    throw new Error("useTwoAuthContext must be used within a TwoAuthProvider");
  }
  return context;
}

function TwoFactorAuthenticationSwitch() {
  const { isEnabled, onChangeSwitch } = useTwoAuthContext();
  return <Switch checked={isEnabled} onCheckedChange={onChangeSwitch} />;
}

function AlertSuccessTwoAuth() {
  const { isEnabled } = useTwoAuthContext();
  if (isEnabled) {
    return (
      <Alert className="bg-green-50 text-green-900">
        <AlertTitle className="flex space-x-2">
          <Check className="w-5 h-5 text-green-600" />
          <span>Two-factor authentication is active</span>
        </AlertTitle>
        <AlertDescription className="text-green-700">
          Your account is protected with two-factor authentication using your
          authenticator app.
        </AlertDescription>
      </Alert>
    );
  }
}
function DialogTwoAuth() {
  const { open, setOpen, onSubmit, onCancel } = useTwoAuthContext();
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (verificationCode.length !== 6) {
      setError("Please enter a 6-digit verification code");
      return;
    }

    setIsVerifying(true);
    setError("");

    try {
      if (verificationCode === "123456") {
        onSubmit();
        setVerificationCode("");
      } else {
        setError("Invalid verification code. Please try again.");
      }
    } catch (err) {
      setError("Verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleCancel = () => {
    setVerificationCode("");
    setError("");
    onCancel();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enable Two-Factor Authentication</DialogTitle>
        </DialogHeader>
        <div className="space-y-5">
          <div className="text-center space-y-5">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto ">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold ">Scan QR Code</h4>
            <p className="text-sm text-gray-600 ">
              Use your authenticator app to scan this QR code
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
            <div className="w-32 h-32 bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">QR Code</span>
            </div>
          </div>
          <div className="space-y-4">
            <Label>Enter verification code</Label>
            <Input
              type="text"
              placeholder="000000"
              maxLength={6}
              value={verificationCode}
              onChange={(e) =>
                setVerificationCode(e.target.value.replace(/\D/g, ""))
              }
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>
        </div>
        <DialogFooter>
          <Button variant={"ghost"} onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isVerifying || verificationCode.length !== 6}
          >
            {isVerifying ? "Verifying..." : "Enable 2FA"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export {
  TwoAuthProvider,
  TwoFactorAuthenticationSwitch,
  AlertSuccessTwoAuth,
  DialogTwoAuth,
  useTwoAuthContext,
};
