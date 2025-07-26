"use client";
import { sampleLeads } from "@/lib/data/leads";
import {
  ArrowUpDown,
  Download,
  Edit,
  Eye,
  MoreHorizontal,
  Send,
  Tag,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { DropDownFilter, Filter, SearchInput } from "../Filter";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const getStatusColor = (status: string) => {
  const statusLower = status.toLowerCase().replaceAll(" ", "_");
  const colors = {
    replied: "bg-green-100 text-green-800 border-green-200",
    sent: "bg-blue-100 text-blue-800 border-blue-200",
    bounced: "bg-red-100 text-red-800 border-red-200",
    not_used_yet: "bg-yellow-100 text-yellow-800 border-yellow-200",
  };
  return colors[statusLower as keyof typeof colors] || colors.not_used_yet;
};

function ContactsTab() {
  const [selectedContacts, setSelectedContacts] = useState<number[]>([]);
  const [filteredContacts] = useState(sampleLeads);
  const [sortField, setSortField] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedContacts(filteredContacts.map((c) => c.id));
    } else {
      setSelectedContacts([]);
    }
  };

  const handleSelectContact = (contactId: number, checked: boolean) => {
    if (checked) {
      setSelectedContacts([...selectedContacts, contactId]);
    } else {
      setSelectedContacts(selectedContacts.filter((id) => id !== contactId));
    }
  };

  const isSelect = selectedContacts.length;

  const isAllSelected =
    selectedContacts.length === filteredContacts.length &&
    filteredContacts.length > 0;
  return (
    <Card>
      <CardHeader>
        <Filter>
          <SearchInput />
          <div className="flex items-center space-x-2">
            <DropDownFilter
              options={[
                { value: "all", label: "All" },
                { value: "bounced", label: "Bounced" },
                { value: "replied", label: "Replied" },
                { value: "sent", label: "Sent" },
              ]}
              placeholder="Status"
            />
            <DropDownFilter
              options={[
                { value: "Q1 SaaS Outreach", label: "Q1 SaaS Outreach" },
                {
                  value: "Enterprise Prospects",
                  label: "Enterprise Prospects",
                },
                { value: "SMB Follow-up", label: "SMB Follow-up" },
              ]}
              placeholder="Campaigns"
            />
            {isSelect > 0 && (
              <div className="flex items-center space-x-2">
                <div>
                  <span>{selectedContacts.length} selected</span>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Bulk Actions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="assign-tag">
                      <Tag className="w-4 h-4" />
                      <span>Assign Tag</span>
                    </SelectItem>
                    <SelectItem value="add-to-campaign">
                      <Send className="w-4 h-4" />
                      <span>Add to Campaign</span>
                    </SelectItem>
                    <SelectItem value="export-selected">
                      <Download className="w-4 h-4" />
                      <span>Export Selected</span>
                    </SelectItem>
                    <SelectItem value="delete" className="text-destructive ">
                      <Trash2 className="w-4 h-4 text-inherit" />
                      <span>Delete</span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </Filter>
      </CardHeader>

      <CardContent>
        <div className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={isAllSelected}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort("name")}
                    className="h-auto p-0 font-semibold"
                  >
                    Contact
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead>List</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort("lastContact")}
                    className="h-auto p-0 font-semibold"
                  >
                    Last Contact
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContacts.map((contact) => (
                <TableRow key={contact.id} className="group">
                  <TableCell>
                    <Checkbox
                      checked={selectedContacts.includes(contact.id)}
                      onCheckedChange={(checked) =>
                        handleSelectContact(contact.id, checked as boolean)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                          {contact.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{contact.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {contact.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant="outline"
                      className={getStatusColor(contact.status)}
                    >
                      {contact.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {contact.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{contact.campaign}</div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {contact.lastContact
                      ? new Date(contact.lastContact).toLocaleDateString()
                      : "Not Used Yet"}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        title="View Contact"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        title="Edit Contact"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default ContactsTab;
