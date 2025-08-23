"use client";
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
import { useState } from "react";

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

function SearchInput({
  value,
  onChange,
  placeholder,
}: {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState(value || "");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
    onChange?.(e.target.value);
  }
  return (
    <div className="flex items-center space-x-2 border shadow-sm rounded-lg px-2 bg-gray-50 peer-focus-within:border-ring-primary focus-within:ring-1 focus-within:ring-primary w-full lg:w-auto">
      <Search className="text-gray-400 w-5 h-5" />
      <Input
        value={searchTerm}
        onChange={handleChange}
        type="text"
        placeholder={placeholder || "Search "}
        className="w-full lg:max-w-md border-none shadow-none focus-visible:border-none focus-visible:ring-0 peer"
      />
    </div>
  );
}
function DropDownFilter({
  options,
  placeholder,
  value,
  onChange,
}: {
  options: { value: string; label: string; default?: boolean }[];
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  const [selectedValue, setSelectedValue] = useState(value);
  function handleChange(value: string) {
    setSelectedValue(value);
    onChange?.(value);
  }
  const defaultValue = options.find((option) => option.default)?.value;
  return (
    <Select
      value={selectedValue}
      onValueChange={handleChange}
      defaultValue={selectedValue || defaultValue}
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
