import * as Dialog from '@radix-ui/react-dialog';
import { DataTableFacetedFilter } from "./datatable-faceted-filter";
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ModalFilter({ table, campaigns, from, emails, filterValue, setFilterValue, fetchAllMessages }) {
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
                  column={table.getColumn("from")}
                  title="From"
                  options={from}
                  filterValue={filterValue}
                  setFilterValue={setFilterValue}
                />
              )}
              {table.getColumn("client") && emails.length > 0 && (
                <DataTableFacetedFilter
                  column={table.getColumn("email")}
                  title="Email"
                  options={emails}
                  filterValue={filterValue}
                  setFilterValue={setFilterValue}
                />
              )}
              <Dialog.Close asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    table.resetColumnFilters();
                    table.setGlobalFilter("");
                    fetchAllMessages();
                  }}
                  className="w-full"
                >
                  Apply Filters
                </Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
}