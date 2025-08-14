import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

function Filter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4 p-4 bg-white border rounded-lg shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

function SearchInput() {
  return (
    <div className="flex items-center space-x-2 border shadow-sm rounded-lg px-2 bg-gray-50 peer-focus-within:border-ring-primary focus-within:ring-1 focus-within:ring-primary w-full lg:w-auto">
      <Search className="text-gray-400 w-5 h-5" />
      <Input
        type="text"
        placeholder="Search leads..."
        className="w-full lg:max-w-md border-none shadow-none focus-visible:border-none focus-visible:ring-0 peer"
      />
    </div>
  );
}
function DropDownFilter({
  options,
  placeholder,
  value,
  onValueChange,
}: {
  options: { value: string; label: string }[];
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}) {
  return (
    <Select
      value={value}
      defaultValue={value || (!placeholder ? options[0].value : undefined)}
      onValueChange={onValueChange}
    >
      <SelectTrigger className="w-full sm:w-auto">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
export { DropDownFilter, Filter, SearchInput };
