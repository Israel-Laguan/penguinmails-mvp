"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getTagColor, knowledgeBaseArticles } from "@/lib/data/knowledge.mock";
import { ArrowRight, ExternalLink } from "lucide-react";
import { DropDownFilter, Filter, SearchInput } from "../Filter";
import { useState, useMemo } from "react";

function KnowledgeTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredArticles = useMemo(() => {
    return knowledgeBaseArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tag.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        article.tag.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-5">
      <Filter>
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <div>
          <DropDownFilter
            placeholder="Select a category"
            value={selectedCategory}
            onChange={setSelectedCategory}
            options={[
              {
                label: "All",
                value: "all",
              },
              {
                label: "Campaigns",
                value: "campaigns",
              },
              {
                label: "Domains",
                value: "domains",
              },
              {
                label: "Warmup",
                value: "warmup",
              },
              {
                label: "Templates",
                value: "templates",
              },
              {
                label: "Leads",
                value: "leads",
              },
              {
                label: "Deliverability",
                value: "deliverability",
              },
            ]}
          />
        </div>
      </Filter>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <Card
            key={article.id}
            className="group hover:shadow-md transition-all duration-200 p-0 "
          >
            <CardContent className="p-6 h-full">
              <div className="flex items-start justify-between mb-3">
                <Badge className={getTagColor(article.tag)}>
                  {article.tag}
                </Badge>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {article.description}
              </p>

              <Button variant="secondary" className="w-full">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 " />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default KnowledgeTab;
