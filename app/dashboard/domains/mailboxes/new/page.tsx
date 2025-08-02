import AddMailboxesNavigation from "@/components/domains/mailboxes/new/AddMailboxesNavigation";
import AddMailboxesStep from "@/components/domains/mailboxes/new/AddMailboxesStep";
import AddMailboxesStepper from "@/components/domains/mailboxes/new/AddMailboxesStepper";
import NewMailboxHeaderDetails from "@/components/domains/mailboxes/new/NewMailboxHeaderDetails";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AddMailboxesProvider } from "@/context/AddMailboxesContext";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <AddMailboxesProvider>
      <Card>
        <CardHeader className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href={"/dashboard/domains"}>
                  <ArrowLeft className="w-6 h-6" />
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Create New Mailbox
                </h1>
                <p className="text-gray-600">
                  Set up a mailbox to start sending cold emails
                </p>
              </div>
            </div>
            <NewMailboxHeaderDetails />
          </div>
        </CardHeader>
        <CardContent>
          <AddMailboxesStepper />
          <AddMailboxesStep />
        </CardContent>
        <CardFooter>
          <AddMailboxesNavigation />
        </CardFooter>
      </Card>
    </AddMailboxesProvider>
  );
}
export default page;
