"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { storageOptions } from "@/lib/data/usage.mock";
import { cn } from "@/lib/utils";
import { HardDrive, Plus } from "lucide-react";
import { useState } from "react";

function AddStorageTrigger({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(
    storageOptions[0]?.gb || 1
  );

  const handleSubmit = () => {
    console.log("Purchasing storage:", selectedAmount, "GB");
    setOpen(false);
  };

  const selectedOption = storageOptions.find(
    (option) => option.gb === selectedAmount
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Storage</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <HardDrive className="h-6 w-6 text-blue-600" />
                <div>
                  <CardTitle className="text-base text-blue-900">
                    Additional Storage
                  </CardTitle>
                  <CardDescription className="text-blue-700">
                    $3 per GB per month • Cancel anytime
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="space-y-3">
            <Label className="text-sm font-medium">Select storage amount</Label>
            <div className="grid grid-cols-2 gap-3">
              {storageOptions.map((option) => (
                <Button
                  key={option.gb}
                  variant="outline"
                  onClick={() => setSelectedAmount(option.gb)}
                  className={cn(
                    "h-auto p-4 flex-col space-y-1 transition-all",
                    selectedAmount === option.gb
                      ? "border-primary bg-primary/5 text-primary"
                      : "hover:border-muted-foreground/50"
                  )}
                >
                  <div className="text-lg font-semibold">{option.gb} GB</div>
                  <div className="text-sm text-muted-foreground">
                    ${option.price}/month
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">
                  Additional Storage ({selectedAmount} GB)
                </span>
                <span className="font-semibold text-foreground">
                  ${selectedOption?.price || selectedAmount * 3}/month
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Billing starts immediately and continues monthly
              </p>
            </CardContent>
          </Card>

          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button className="flex-1" onClick={handleSubmit}>
              Purchase {selectedAmount} GB
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddStorageTrigger;
