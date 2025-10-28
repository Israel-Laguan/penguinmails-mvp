"use client";

import React, { useState } from "react";
import { CircleCheck, XCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

interface ModalPricingPlansProps {
  isModalOpen: boolean;
  checkout: string | null;
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function CheckoutDialog({ isModalOpen, checkout, setIsModalOpen }: ModalPricingPlansProps) {

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="sm:max-w-sm max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {checkout === 'success' ?
              'Checkout Success' : 'Checkout Cancelled'
            }
          </DialogTitle>
          <DialogDescription>
            The payment made for the subscription has been successfully completed.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center gap-6 mt-6">
          {checkout === 'success' ?
            <CircleCheck className="h-15 w-15 mb-2 text-green-600 flex-shrink-0" /> :
            <XCircle className="h-15 w-15 mb-2 text-red-600 flex-shrink-0" />
          }
        </div>
      </DialogContent>
    </Dialog>
  );
}
