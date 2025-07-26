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

function Filter({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4 p-4 bg-white border rounded-lg shadow-sm"
      )}
    >
      {children}
    </div>
  );
}

function SearchInput() {
  return (
    <div className="flex items-center space-x-2 border shadow-sm rounded-lg px-2 bg-gray-50 peer-focus-within:border-priring-primary focus-within:ring-1 focus-within:ring-primary w-full lg:w-auto">
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
}: {
  options: { value: string; label: string }[];
  placeholder: string;
}) {
  return (
    <Select>
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
