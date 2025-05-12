"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlusCircle, MoreHorizontal, Search, Copy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getTemplateUsage, type TemplateUsage } from "@/components/templates/mocks";
import { Template, TemplateCategory } from "@/app/api/generated/prisma";
import { copyText as t } from "@/components/templates/copy";

interface TemplatesContentProps {
  userTemplates: Template[];
  builtInTemplates: Template[];
  categories: TemplateCategory[];
}

export function TemplatesContent({ 
  userTemplates, 
  builtInTemplates, 
  categories 
}: TemplatesContentProps) {
  const [activeTab, setActiveTab] = useState("my-templates");

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{t.page.title}</h1>
        <Button asChild>
          <Link href="/dashboard/templates/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            {t.page.newTemplate}
          </Link>
        </Button>
      </div>

      <Tabs
        defaultValue="my-templates"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-[400px] grid-cols-2">
          <TabsTrigger value="my-templates">{t.tabs.myTemplates}</TabsTrigger>
          <TabsTrigger value="built-in">{t.tabs.builtIn}</TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={
                  activeTab === "my-templates"
                    ? t.search.myTemplates
                    : t.search.builtIn
                }
                className="pl-8"
              />
            </div>
            <Select defaultValue="All">
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder={t.categories.placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">{t.categories.all}</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {t.categories.labels[category]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="my-templates" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {userTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  formatDate={formatDate}
                  variant="user"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="built-in" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {builtInTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  formatDate={formatDate}
                  variant="builtin"
                />
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

function TemplateCard({
    template,
    formatDate,
    variant,
  }: {
    template: Template;
    formatDate: (date: Date) => string;
    variant: "user" | "builtin";
  }) {
    const bgColor = variant === "user" ? "bg-blue-50" : "bg-emerald-50";
    const tagColor =
      variant === "user"
        ? "bg-blue-100 text-blue-700"
        : "bg-emerald-100 text-emerald-700";
    const hoverColor =
      variant === "user" ? "hover:text-blue-600" : "hover:text-emerald-600";
  
    const usage = variant === "builtin" ? getTemplateUsage(template.id) : null;
    const usageColors: Record<TemplateUsage, string> = {
      high: "bg-amber-100 text-amber-700",
      medium: "bg-blue-100 text-blue-700",
      low: "bg-gray-100 text-gray-700",
    };
  
    return (
      <Card className="overflow-hidden py-0 justify-between">
        <div className={`${bgColor} p-2 flex justify-between items-center`}>
          <div className="flex gap-2 items-center">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${tagColor}`}
            >
              {t.categories.labels[template.category]}
            </span>
          </div>
          {usage && (
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${usageColors[usage]}`}
            >
              {usage} {t.templateCard.usage}
            </span>
          )}
          {variant === "user" && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/dashboard/templates/${template.id}/view`}>
                    {t.templateCard.actions.view}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/dashboard/templates/${template.id}/edit`}>
                    {t.templateCard.actions.edit}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Copy className="mr-2 h-4 w-4" /> {t.templateCard.actions.duplicate}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  {t.templateCard.actions.delete}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <CardContent className="px-6">
          <h3 className="font-medium text-lg mb-2">
            <Link
              href={`/dashboard/templates/${template.id}`}
              className={hoverColor}
            >
              {template.name}
            </Link>
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {template.description}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between items-center text-xs text-muted-foreground pb-4">
            <span>{t.templateCard.dates.created} {formatDate(template.createdAt)}</span>
            {variant === "builtin" ? (
              <Button variant="outline" size="sm">
                <Copy className="mr-2 h-4 w-4" />
                {t.templateCard.actions.useTemplate}
              </Button>
            ) : (
              <span>{t.templateCard.dates.lastUpdated} {formatDate(template.updatedAt)}</span>
            )}
        </CardFooter>
      </Card>
    );
  }
