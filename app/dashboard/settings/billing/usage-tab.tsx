import AddStorageTrigger from "@/components/settings/billing/add-storge-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  getColorClasses,
  storageOptions,
  usageCards,
} from "@/lib/data/usage.mock";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

function UsageTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="flex justify-between items-center p-6">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold">
              Usage Statistics
            </CardTitle>
            <p className="text-muted-foreground">
              Your usage limits will reset on
              <strong> February 25, 2024</strong>
            </p>
          </div>
          <Badge variant="secondary" className="bg-primary/20 text-primary">
            23 days remaining
          </Badge>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usageCards.map((card) => {
          const Icon = card.icon;
          const colors = getColorClasses(card.color, card.warning);

          return (
            <Card
              key={card.title}
              className={cn(
                "relative transition-all duration-200 hover:shadow-md",
                colors.border
              )}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={cn("p-2 rounded-lg", colors.bg)}>
                    <Icon className={cn("h-5 w-5", colors.icon)} />
                  </div>
                  {card.warning && (
                    <Badge variant="destructive" className="text-xs">
                      Low Storage
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-foreground">
                      {card.value}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / {card.limit}
                    </span>
                  </div>
                </div>

                {card.showProgress && card.percentage && (
                  <div className="space-y-2">
                    <Progress
                      value={card.percentage}
                      className={cn(
                        "h-2",
                        card.warning && "[&>div]:bg-destructive"
                      )}
                    />
                    <p className="text-xs text-muted-foreground">
                      {Math.round(card.percentage)}% used
                    </p>
                  </div>
                )}

                {card.title === "Storage Used" && card.warning && (
                  <AddStorageTrigger>
                    <Button variant="destructive" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Storage
                    </Button>
                  </AddStorageTrigger>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
      <Card>
        <CardHeader className="flex-center-between">
          <div>
            <CardTitle className="text-xl font-semibold ">
              Add Storage
            </CardTitle>
            <CardDescription className="text-gray-600">
              Purchase additional storage at $3 per GB
            </CardDescription>
          </div>

          <AddStorageTrigger>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Storage
            </Button>
          </AddStorageTrigger>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {storageOptions.map((gb) => (
            <Card
              key={gb.gb}
              className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer"
            >
              <CardContent>
                <div className="text-lg font-semibold text-gray-900">
                  {gb.gb} GB
                </div>
                <div className="text-sm text-gray-600">${gb.gb * 3}/month</div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default UsageTab;
