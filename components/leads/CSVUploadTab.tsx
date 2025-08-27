"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CSV_COLUMNS, SAMPLE_CSV_DATA } from "@/lib/data/leads";
import { AlertCircle, Download, Loader2, Upload, X } from "lucide-react";
import Papa from "papaparse";
import { useRef, useState } from "react";

const downloadSampleCSV = () => {
  const csvContent = SAMPLE_CSV_DATA.map((row) =>
    row.map((cell) => `"${cell}"`).join(",")
  ).join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "sample-leads.csv";
  a.click();
  URL.revokeObjectURL(url);
};

function FileUploadZone({
  onFileUpload,
  error,
}: {
  onFileUpload: (file: File) => void;
  error?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | undefined) => {
    if (!file) return;

    if (!file.name.endsWith(".csv")) return;
    if (file.size > 10 * 1024 * 1024) return; // 10MB limit

    onFileUpload(file);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <input
        type="file"
        ref={inputRef}
        onChange={(e) => handleFileChange(e.target.files?.[0])}
        accept=".csv"
        className="hidden"
      />

      <Card
        className="border-2 border-dashed border-gray-300 hover:border-primary hover:bg-muted/50 transition-all cursor-pointer"
        onDrop={(e) => {
          e.preventDefault();
          handleFileChange(e.dataTransfer.files[0]);
        }}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
      >
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Drop your CSV file here
          </h3>
          <p className="text-muted-foreground mb-4">
            or click to browse from your computer
          </p>
          <Button type="button">Choose File</Button>
          <p className="text-xs text-muted-foreground mt-4">
            Supports CSV files up to 10MB
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function FilePreview({
  file,
  data,
  onClearFile,
  onImport,
}: {
  file: File;
  data: any[];
  onClearFile: () => void;
  onImport: (params: {
    listName: string;
    tags: string;
    columnMapping: Record<string, string>;
  }) => void;
}) {
  const [columnMapping, setColumnMapping] = useState<Record<string, string>>(
    {}
  );
  const [listName, setListName] = useState("");
  const [tags, setTags] = useState("");

  // Auto-map columns on mount
  useState(() => {
    if (data.length > 0) {
      const headers = Object.keys(data[0]);
      const mapping: Record<string, string> = {};

      CSV_COLUMNS.forEach((col) => {
        const found = headers.find(
          (h) =>
            h.toLowerCase().replace(/[^a-z0-9]/g, "_") ===
            col.label.toLowerCase().replace(/[^a-z0-9]/g, "_")
        );
        if (found) mapping[col.key] = found;
      });

      setColumnMapping(mapping);
    }
  });

  const isValid = () => {
    const requiredMapped = CSV_COLUMNS.filter((col) => col.required).every(
      (col) => columnMapping[col.key]
    );
    return requiredMapped && listName.trim();
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>File Preview</CardTitle>
            <CardDescription>
              {file.name} • {data.length} contacts
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClearFile}>
            <X className="w-5 h-5" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Column Mapping */}
        <div>
          <h4 className="font-medium mb-4">Map Your Columns</h4>
          <div className="grid grid-cols-2 gap-4">
            {CSV_COLUMNS.map((col) => (
              <div key={col.key} className="space-y-2">
                <Label>
                  {col.label}{" "}
                  {col.required && <span className="text-red-500">*</span>}
                </Label>
                <Select
                  value={columnMapping[col.key] || ""}
                  onValueChange={(value) =>
                    setColumnMapping((prev) => ({ ...prev, [col.key]: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select column..." />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(data[0] || {}).map((key) => (
                      <SelectItem key={key} value={key}>
                        {key}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </div>

        {/* Preview Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                {Object.keys(data[0] || {}).map((key) => (
                  <TableHead key={key}>{key}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.slice(0, 3).map((row, index) => (
                <TableRow key={index}>
                  {Object.values(row).map((value: any, i) => (
                    <TableCell key={i}>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Import Section */}
        <div className="flex items-end justify-between">
          <div className="flex gap-4">
            <div className="space-y-2">
              <Label>List Name *</Label>
              <Input
                placeholder="Enter list name..."
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                className={!listName.trim() ? "border-red-300" : ""}
              />
            </div>
            <div className="space-y-2">
              <Label>Tags (Optional)</Label>
              <Input
                placeholder="enterprise, tech, etc."
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
          </div>
          <Button
            onClick={() =>
              onImport({
                listName: listName.trim(),
                tags: tags.trim(),
                columnMapping,
              })
            }
            disabled={!isValid()}
          >
            Import Contacts
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function CSVUploadTab() {
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [csvData, setCsvData] = useState<any[]>([]);
  const [error, setError] = useState("");

  const parseCSV = (text: string) => {
    return new Promise<any[]>((resolve, reject) => {
      interface CSVError {
        type: string;
        code: string;
        message: string;
        row?: number;
      }

      interface CSVParseResult {
        data: Record<string, string>[];
        errors: CSVError[];
        meta: {
          delimiter: string;
          linebreak: string;
          aborted: boolean;
          truncated: boolean;
          cursor: number;
        };
      }

      Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header: string): string => header.trim(),
        transform: (value: string): string => value.trim(),
        complete: (results: CSVParseResult): void => {
          if (results.errors.length > 0) {
            const criticalErrors: CSVError[] = results.errors.filter(
              (error: CSVError) =>
                error.type === "Delimiter" || error.type === "Quotes"
            );
            if (criticalErrors.length > 0) {
              reject(
                new Error(`CSV parsing error: ${criticalErrors[0].message}`)
              );
              return;
            }
          }

          if (!results.data || results.data.length === 0) {
            reject(new Error("File is empty or contains no valid data"));
            return;
          }

          const filteredData: Record<string, string>[] = results.data.filter(
            (row: Record<string, string>) =>
              Object.values(row).some(
                (val: string) => val && val.toString().trim()
              )
          );

          resolve(filteredData);
        },
        error: (error: Error): void => {
          reject(new Error(`Failed to parse CSV: ${error.message}`));
        },
      });
    });
  };

  const handleFileUpload = async (file: File) => {
    if (!file.name.endsWith(".csv")) {
      setError("Please select a valid CSV file.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10MB.");
      return;
    }

    setError("");
    setCsvFile(file);
    setIsUploading(true);

    try {
      const text = await file.text();
      const data = await parseCSV(text);
      setCsvData(data);
      setIsUploading(false);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to parse CSV file. Please check the format."
      );
      setIsUploading(false);
      setCsvFile(null);
    }
  };

  const handleImport = ({
    listName,
    tags,
    columnMapping,
  }: {
    listName: string;
    tags: string;
    columnMapping: Record<string, string>;
  }) => {
    console.log({ listName, tags, columnMapping, data: csvData });
    // Send to backend here

    // Reset after import
    setCsvFile(null);
    setCsvData([]);
    setError("");
  };

  const clearFile = () => {
    setCsvFile(null);
    setCsvData([]);
    setError("");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Upload Lead List</h2>
        <p className="text-muted-foreground">
          Upload a CSV file with your leads. We'll automatically validate and
          process them.
        </p>
      </div>

      {!csvFile ? (
        <FileUploadZone onFileUpload={handleFileUpload} error={error} />
      ) : isUploading ? (
        <Card>
          <CardContent className="p-8 text-center">
            <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Processing your file...
            </h3>
            <p className="text-muted-foreground">
              Analyzing columns and validating data
            </p>
          </CardContent>
        </Card>
      ) : (
        <FilePreview
          file={csvFile}
          data={csvData}
          onClearFile={clearFile}
          onImport={handleImport}
        />
      )}

      {/* Format Guide */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-blue-900">
              CSV Format Requirements
            </h3>
            <Button variant="outline" size="sm" onClick={downloadSampleCSV}>
              <Download className="w-4 h-4 mr-2" />
              Download Sample
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">
                Required Columns:
              </h4>
              <ul className="text-blue-700 space-y-1">
                <li>
                  • <strong>Email Address</strong> - Valid email
                </li>
                <li>
                  • <strong>First Name</strong> - Contact's first name
                </li>
                <li>
                  • <strong>Last Name</strong> - Contact's last name
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">
                Optional Columns:
              </h4>
              <ul className="text-blue-700 space-y-1">
                <li>
                  • <strong>Company</strong> - Company name
                </li>
                <li>
                  • <strong>Job Title</strong> - Job title
                </li>
                <li>
                  • <strong>Website</strong> - Company website
                </li>
                <li>
                  • <strong>Phone Number</strong> - Phone number
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
