import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Client } from '@/app/api/generated/prisma'
import { copyText as t } from "./copy";

interface RemoveClientDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  client: Client | null;
  onConfirm: () => void;
}

export function RemoveClientDialog({
  isOpen,
  onOpenChange,
  client,
  onConfirm,
}: RemoveClientDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t.modal.removeClient.title}</DialogTitle>
          <DialogDescription>
            {t.modal.removeClient.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="my-4">
          <pre className="bg-muted p-4 rounded-md text-sm overflow-auto">
            {client && JSON.stringify(client, null, 2)}
          </pre>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => client && navigator.clipboard.writeText(JSON.stringify(client, null, 2))}
            className="mt-2"
          >
            {t.buttons.copyClipboard}
          </Button>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            {t.buttons.cancel}
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
          >
            {t.buttons.removeClient}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
