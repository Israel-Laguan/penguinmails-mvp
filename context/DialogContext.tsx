"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Maximize2, XIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import { createContext, useContext, useState } from "react";

type DialogContextType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  close: () => void;
  redirect: (url: string) => void;
  back: () => void;
};

const DialogContext = createContext<DialogContextType>({
  open: false,
  onOpenChange: () => {},
  close: () => {},
  redirect: () => {},
  back: () => {},
});

export function DialogContextProvider({
  openDefault = false,
  forceOpen = false,
  children,
}: {
  openDefault?: boolean;
  forceOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(openDefault);
  const router = useRouter();

  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const close = () => {
    setOpen(false);
  };

  const redirect = (url: string) => {
    router.push(url);
    close();
  };

  const back = () => {
    router.back();
  };

  return (
    <DialogContext.Provider
      value={{ open, onOpenChange, close, redirect, back }}
    >
      <Dialog
        open={forceOpen ? true : open}
        onOpenChange={forceOpen ? () => {} : onOpenChange}
      >
        <DialogOverlay className="fixed inset-0 bg-black/20" />
        {children}
      </Dialog>
    </DialogContext.Provider>
  );
}

export function useDialogContext() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error(
      "useDialogContext must be used within a DialogContextProvider"
    );
  }
  return context;
}

export function DialogContextProviderContent({
  className,
  url,
  back: backBoolean = false,
  children,
}: {
  className?: string;
  url?: string;
  back?: boolean;
  fullScreen?: boolean;
  children: React.ReactNode;
}) {
  const { close, back, redirect } = useDialogContext();
  const router = useRouter();

  function handleClose() {
    if (backBoolean) {
      back();
    } else if (url) {
      redirect(url);
    } else {
      close();
    }
  }
  function handleFullScreen() {
    router.forward();
  }
  return (
    <DialogContent className={cn("min-w-11/12 h-11/12", className)}>
      <div className="absolute right-2 z-10 bg-white  cursor-pointer top-2 flex items-center justify-center ">
        <Button
          variant="link"
          className="cursor-pointer"
          onClick={handleFullScreen}
        >
          <Maximize2 className="w-4 h-4" />
        </Button>
        <Button variant="link" className="cursor-pointer" onClick={handleClose}>
          <XIcon className="w-4 h-4" />
        </Button>
      </div>

      {children}
    </DialogContent>
  );
}
