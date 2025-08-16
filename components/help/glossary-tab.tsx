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
  return (
    <div className="space-y-4">
      <Filter>
        <SearchInput />
        <div>
          <DropDownFilter
            placeholder="Types"
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
              {glossaryTerms.map((term) => (
                <TableRow key={term.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold ">{term.term}</span>
                      <Badge variant={getTypeVariant(term.type)} className="ml-auto">
                        {term.type}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-break-spaces">
                    {term.meaning}
                  </TableCell>
                  <TableCell>
                    <Badge variant={"outline"} >{term.tag}</Badge>
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
