"use client";

import { useRef } from "react";
import { ColumnMeta, Row, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Check,
  CheckIcon,
  Cross,
  FileText,
  Group,
  Locate,
  Mail,
  ShieldCheck,
  Timer,
  TrashIcon,
  User,
  UserCheck,
  Wrench,
  X,
} from "lucide-react";
import { DataTableViewOptions } from "./datatable-view-options";
import { DataTableFacetedFilter } from "./datatable-faceted-filter";

interface CustomColumnMeta<TData> extends ColumnMeta<TData, unknown> {
  name?: string;
}

export const categories = [
  {
    value: "income",
    label: "Income",
  },
  {
    value: "food",
    label: "Food",
  },
  {
    value: "utilities",
    label: "Utilities",
  },
  {
    value: "housing",
    label: "Housing",
  },
  {
    value: "health",
    label: "Health",
  },
  {
    value: "transport",
    label: "Transport",
  },
  {
    value: "work",
    label: "Work",
  },
  {
    value: "entertainment",
    label: "Entertainment",
  },
  {
    value: "education",
    label: "Education",
  },
  {
    value: "gifts",
    label: "Gifts",
  },
];

export const roleType = [
  {
    label: "Administrador",
    value: "ADMIN",
    icon: ShieldCheck,
  },
  {
    label: "Técnico",
    value: "TECH",
    icon: Wrench,
  },
  {
    label: "Cliente",
    value: "CLIENT",
    icon: User,
  },
];

export const statusType = [
  {
    label: "Nueva",
    value: "NEW",
    icon: FileText,
  },
  {
    label: "Asignada",
    value: "ASSIGNED",
    icon: UserCheck,
  },
  {
    label: "En progreso",
    value: "IN_PROGRESS",
    icon: Timer,
  },
  {
    label: "Completada",
    value: "DONE",
    icon: Check,
  },
  {
    label: "Cancelada",
    value: "CANCELLED",
    icon: X,
  },
];

export const organizationStatusType = [
  {
    label: "Activas",
    value: "true",
    icon: CheckIcon,
  },
  {
    label: "Inactivas",
    value: "false",
    icon: X,
  },
];

export const freeTimeStatusType = [
  {
    label: "Aprobado",
    value: "APPROVED",
    icon: CheckIcon,
  },
  {
    label: "Rechazados",
    value: "REJECTED",
    icon: X,
  },
  {
    label: "En progreso",
    value: "IN_PROGRESS",
    icon: X,
  },
  {
    label: "Pendiente",
    value: "PENDING",
    icon: X,
  },
];

export const priorityType = [
  {
    label: "Baja",
    value: "LOW",
    icon: CheckIcon,
  },
  {
    label: "Media",
    value: "MEDIUM",
    icon: X,
  },
  {
    label: "Alta",
    value: "HIGH",
    icon: X,
  },
];

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  disabled: boolean;
  onDelete: (rows: Row<TData>[]) => void;
}

export function DataTableToolbar<TData>({
  table,
  onDelete,
}: // disabled,
DataTableToolbarProps<TData>) {

  const searchRef = useRef<HTMLInputElement>(null);
  const isFiltered = table.getState().columnFilters.length > 0;

  const clearSearchInput = () => {
    if (searchRef.current) {
      searchRef.current.value = "";
      table.setGlobalFilter("");
    }
  };

  const handleBulkDelete = async () => {
    const ok = await confirm();
    if (ok) {
      onDelete(table.getFilteredSelectedRowModel().rows);
      table.resetRowSelection();
    }
  };

  const roleColumn = !!table
    .getAllColumns()
    .find((column) => column.id === "role");
  const statusColumn = !!table
    .getAllColumns()
    .find((column) => column.id === "status");
  const siteNumber = !!table
    .getAllColumns()
    .find((column) => column.id === "site_number");
  const sector = !!table
    .getAllColumns()
    .find((column) => column.id === "sector");
  const freeTime = !!table
    .getAllColumns()
    .find((column) => column.id === "status");
  const priority = !!table
    .getAllColumns()
    .find((column) => column.id === "priority");
  const freeTimeColumn = !!table
    .getAllColumns()
    .find(
      ({ columnDef }) =>
        (columnDef.meta as CustomColumnMeta<TData>)?.name === "status_free_time"
    );
  const location = Array.from(
    new Set(table.getRowModel().rows.map((row) => row.getValue("location")))
  ).map((location: string) => ({
    label: location,
    value: location,
    icon: Locate,
  }));
  const users = Array.from(
    new Set(table.getRowModel().rows.map((row) => row.getValue("name")))
  ).map((user: string) => ({
    label: user,
    value: user,
    icon: User,
  }));
  const emails = Array.from(
    new Set(table.getRowModel().rows.map((row) => row.getValue("email")))
  ).map((email: string) => ({
    label: email,
    value: email,
    icon: Mail,
  }));
  const from = Array.from(
    new Set(table.getRowModel().rows.map((row) => row.getValue("from")))
  ).map((from: string) => ({
    label: from,
    value: from,
    icon: Mail,
  }));
  const categories = Array.from(
    new Set(
      table
        .getRowModel()
        .rows.flatMap((row) => row.getValue("categories") || []) // Asegura que no haya `undefined`
    )
  ).map((category: string) => ({
    label: category,
    value: category,
    icon: Group,
  }));

  // const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
  //   from: new Date(new Date().getFullYear(), 0, 1),
  //   to: new Date(),
  // });

  // const handleDateSelect = ({ from, to }: { from: Date; to: Date }) => {
  //   setDateRange({ from, to });
  //   // Filter table data based on selected date range
  //   table.getColumn("date")?.setFilterValue([from, to]);
  // };

  return (
    <>
      <div className="flex items-start lg:items-center md:justify-between w-full flex-col md:flex-row space-y-2 md:space-y-0">
        <div className="flex items-start md:items-center gap-2 flex-col md:flex-row w-full md:w-fit">
          <div className="relative w-full">
            <Input
              ref={searchRef}
              placeholder="Buscar..."
              onChange={(event) => {
                table.setGlobalFilter(event.target.value);
              }}
              className="h-8 w-full md:w-[250px]"
            />
            {searchRef.current && searchRef.current?.value.length > 0 && (
              <Cross
                onClick={clearSearchInput}
                className="absolute right-0 top-0 m-2 size-4 text-muted-foreground hover:cursor-pointer"
              />
            )}
          </div>
          <div className="flex items-center gap-2">
            {roleColumn && (
              <DataTableFacetedFilter
                column={table.getColumn("role")}
                title="Roles"
                options={roleType}
              />
            )}
            {statusColumn && siteNumber && (
              <DataTableFacetedFilter
                column={table.getColumn("status")}
                title="Estado"
                options={statusType}
              />
            )}
            {statusColumn && sector && (
              <DataTableFacetedFilter
                column={table.getColumn("status")}
                title="Estado"
                options={organizationStatusType}
              />
            )}
            {freeTimeColumn && freeTime && (
              <DataTableFacetedFilter
                column={table.getColumn("status")}
                title="Estado"
                options={freeTimeStatusType}
              />
            )}
            {priority && (
              <DataTableFacetedFilter
                column={table.getColumn("priority")}
                title="Prioridad"
                options={priorityType}
              />
            )}
            {table.getColumn("name") && users.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("name")}
                title="Nombre"
                options={users}
              />
            )}
            {table.getColumn("email") && emails.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("email")}
                title="Sender"
                options={emails}
              />
            )}
            {table.getColumn("from") && from.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("from")}
                title="From"
                options={from}
              />
            )}
            {table.getColumn("location") && location.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("location")}
                title="Lugar"
                options={location}
              />
            )}
            {table.getColumn("categories") && categories.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("categories")}
                title="Categorías"
                options={categories}
              />
            )}
            {isFiltered && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  table.resetColumnFilters();
                }}
                className="px-2"
              >
                Resetear
                <Cross className="ml-2 siz-3" />
              </Button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {table.getFilteredSelectedRowModel().rows.length > 0 ? (
            <Button variant="outline" size="sm" onClick={handleBulkDelete}>
              <TrashIcon className="mr-2 size-4" aria-hidden="true" />
              Eliminar ({table.getFilteredSelectedRowModel().rows.length})
            </Button>
          ) : null}
          <DataTableViewOptions table={table} />
        </div>
      </div>
    </>
  );
}
