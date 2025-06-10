import * as Dialog from "@radix-ui/react-dialog";
import { DataTableFacetedFilter } from "./datatable-faceted-filter";
import { Check, Filter, Package, RotateCcw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";

export function ModalFilter({
  table,
  campaigns,
  from,
  emails,
  filterValue,
  setFilterValue,
  fetchAllMessages,
}) {
  const clearFilters = () => {
    table.resetColumnFilters();
    table.setGlobalFilter("");
    setFilterValue({});
  };
  const [hiddenMessages, setHiddenMessages] = React.useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm" className="px-2">
          <Filter className="mr-2 size-3" />
          Open Filters
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 max-h-[90vh] w-[90vw] max-w-md translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-6 shadow-lg focus:outline-none">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-lg font-semibold">
              Filter Options
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon">
                <X className="size-4" />
              </Button>
            </Dialog.Close>
          </div>

          <div className="flex flex-col gap-y-4">
            {table.getColumn("campaign") && campaigns.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("campaign")}
                title="Campaign"
                options={campaigns}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
              />
            )}
            {table.getColumn("client") && from.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("client")}
                title="From"
                options={from}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
              />
            )}
            {table.getColumn("client") && emails.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("client")}
                title="Email"
                options={emails}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
              />
            )}
            <div className="flex items-center justify-center">
              <Package className="mr-2 h-5 w-5" />
              <Label htmlFor="airplane-mode">Show hidden messages</Label>
              <div className="pl-2 transform scale-125">
                <Switch
                  id="airplane-mode"
                  checked={hiddenMessages}
                  onCheckedChange={(checked) => {
                    setHiddenMessages(checked);
                    setFilterValue((prev) => ({
                      ...prev,
                      hidden: !hiddenMessages,
                    }));
                  }}
                  className="data-[state=checked]:bg-black cursor-pointer"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                className="w-1/2 p-5"
                onClick={() => {
                  clearFilters();
                }}
              >
                <RotateCcw className="mr-2 size-4" />
                Clear All
              </Button>
              <Dialog.Close asChild>
                <Button
                  size="sm"
                  className="bg-black text-white hover:bg-black/90 w-1/2 p-5"
                  onClick={() => {
                    fetchAllMessages();
                  }}
                >
                  <Check className="mr-2 size-4" />
                  Apply Filters
                </Button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
