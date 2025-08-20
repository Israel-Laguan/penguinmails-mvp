"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { glossaryTerms } from "@/lib/data/knowledge.mock";
import { DropDownFilter, Filter, SearchInput } from "../Filter";
import { useState, useMemo } from "react";

const getTypeVariant = (type: string) => {
  switch (type) {
    case "Tech":
      return "destructive";
    case "Email":
      return "default";
    case "UI":
      return "secondary";
    default:
      return "outline";
  }
};
function GlossaryTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((term) => {
      const matchesSearch =
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.tag.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        selectedType === "all" ||
        term.type.toLowerCase() === selectedType.toLowerCase();

      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  return (
    <div className="space-y-4">
      <Filter>
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <div>
          <DropDownFilter
            placeholder="Types"
            value={selectedType}
            onChange={setSelectedType}
            options={[
              {
                label: "All",
                value: "all",
              },
              {
                label: "Tech",
                value: "tech",
              },
              {
                label: "Email",
                value: "email",
              },
              {
                label: "UI",
                value: "ui",
              },
            ]}
          />
        </div>
      </Filter>
      <Card className="p-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Term</TableHead>
                <TableHead>Meaning</TableHead>
                <TableHead>Tag</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTerms.map((term) => (
                <TableRow key={term.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold ">{term.term}</span>
                      <Badge
                        variant={getTypeVariant(term.type)}
                        className="ml-auto"
                      >
                        {term.type}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-break-spaces">
                    {term.meaning}
                  </TableCell>
                  <TableCell>
                    <Badge variant={"outline"}>{term.tag}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
export default GlossaryTab;
