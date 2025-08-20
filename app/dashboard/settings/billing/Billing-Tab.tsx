import { ChangePlanTrigger } from "@/components/settings/billing/change-plan-dialog";
import EditAddressTrigger from "@/components/settings/billing/edit-trigger-dialog";
import InvoicesTable from "@/components/settings/billing/invocies-table";
import UpdateCardDialogTrigger from "@/components/settings/billing/update-card-dialog";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CreditCard, Crown } from "lucide-react";

function BillingTab() {
  const currentPlan = {
    name: "Growth",
    price: 55,
    contacts: 10000,
    storage: 2,
  };

  return (
    <div className="space-y-5">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Current Plan</CardTitle>
          <Badge>
            <Crown />
            <span>Active</span>
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <Card
              className={cn(
                "border-primary/70 bg-gradient-to-br from-primary/20 to-indigo-50"
              )}
            >
              <CardContent>
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {currentPlan.name} Plan
                </h3>
                <p className="text-2xl font-bold text-primary ">
                  ${currentPlan.price}/month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent>
                <h4 className="mb-1 text-sm font-medium text-muted-foreground">
                  Contacts Limit
                </h4>
                <p className="text-xl font-semibold text-foreground">
                  {currentPlan.contacts.toLocaleString()}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent>
                <h4 className="mb-1 text-sm font-medium text-muted-foreground">
                  Storage Limit
                </h4>
                <p className="text-xl font-semibold text-foreground">
                  {currentPlan.storage} GB
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
        <CardFooter className="ml-auto">
          <ChangePlanTrigger title="Change Plan" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg border">
                <CreditCard className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Visa ending in 4242</p>
                <p className="text-sm text-gray-600">Expires 12/25</p>
              </div>
            </div>
            <UpdateCardDialogTrigger title="Update Card" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex-center-between">
          <CardTitle>Billing Address</CardTitle>
          <EditAddressTrigger title={"Edit Addresss"} />
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-1">
              <p className="font-medium text-gray-900">Acme Corporation</p>
              <p className="text-gray-600">123 Business Street</p>
              <p className="text-gray-600">San Francisco, CA 94105</p>
              <p className="text-gray-600">United States</p>
              <p className="text-sm text-gray-500 mt-2">VAT ID: US123456789</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <InvoicesTable />
        </CardContent>
      </Card>
    </div>
  );
}

export default BillingTab;
