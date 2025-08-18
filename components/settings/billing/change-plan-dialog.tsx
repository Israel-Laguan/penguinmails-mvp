import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { Separator } from "@/components/ui/separator";
import { Crown } from "lucide-react";

const plans = [
  { name: "Starter", price: 35, contacts: 3000, storage: 1 },
  { name: "Growth", price: 55, contacts: 10000, storage: 2 },
  { name: "Scale", price: 89, contacts: 50000, storage: 4 },
  { name: "Pro", price: 189, contacts: "Unlimited", storage: 7 },
];

function ChangePlanTrigger({ title }: { title: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">{title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-5xl  max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center space-y-3">
          <DialogTitle className="text-2xl font-bold">
            Choose Your Plan
          </DialogTitle>
          <p className="text-muted-foreground">
            Select the perfect plan for your email marketing needs
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <div className="mt-3">
                  <span className="text-3xl font-bold text-primary">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="text-sm">
                  {plan.storage} GB Storage
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Contacts
                    </span>
                    <span className="font-semibold text-foreground">
                      {typeof plan.contacts === "number"
                        ? plan.contacts.toLocaleString()
                        : plan.contacts}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Storage
                    </span>
                    <span className="font-semibold text-foreground">
                      {plan.storage} GB
                    </span>
                  </div>
                </div>
                <ConfirmDialog />
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
function ConfirmDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"outline"} className="w-full">
          Change Plan
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Crown className="text-green-500" />
            </div>
          </div>
          <AlertDialogTitle className="text-center">
            Confirm Plan Upgrade
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            You're about to switch from Growth to Pro. You will be charged the
            prorated difference immediately.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>Confirm Upgrade</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export { ChangePlanTrigger };
