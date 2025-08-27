import NewDomainHeaderDetails from "@/components/domains/new/NewDomainHeaderDetails";
import NewDomainNavigation from "@/components/domains/new/NewDomainNavigation";
import NewDomainStep from "@/components/domains/new/NewDomainStep";
import NewDomainStepper from "@/components/domains/new/NewDomainStepper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AddDomainProvider } from "@/context/AddDomainContext";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
function page() {
  return (
    <AddDomainProvider>
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
                <h1 className="text-2xl font-bold">Add New Domain</h1>
                <p className="text-muted-foreground">
                  Connect your domain to start creating mailboxes and sending
                  cold emails
                </p>
              </div>
            </div>
            <NewDomainHeaderDetails />
          </div>
        </CardHeader>

        <CardContent>
          <NewDomainStepper />
          <NewDomainStep />
        </CardContent>
        <CardFooter>
          <NewDomainNavigation />
        </CardFooter>
      </Card>
    </AddDomainProvider>
  );
}
export default page;
