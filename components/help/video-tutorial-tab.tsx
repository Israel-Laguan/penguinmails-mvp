"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { videoTutorials } from "@/lib/data/knowledge.mock";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Image from "next/image";
import { DropDownFilter, Filter } from "../Filter";
import { useState, useMemo } from "react";

function VideoTutorialsTab() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredVideos = useMemo(() => {
    return videoTutorials.filter((video) => {
      return selectedCategory === "all" || video.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <div className="space-y-4">
      <Filter className="shadow-none border-none justify-end">
        <DropDownFilter
          placeholder="Category"
          value={selectedCategory}
          onChange={setSelectedCategory}
          options={[
            {
              label: "All",
              value: "all",
            },
            {
              label: "Setup",
              value: "Setup",
            },
            {
              label: "Campaigns",
              value: "Campaigns",
            },
            {
              label: "Warmup",
              value: "Warmup",
            },
            {
              label: "Analytics",
              value: "Analytics",
            },
          ]}
        />
      </Filter>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <Card
            key={video.id}
            className="overflow-hidden hover:shadow-md transition-all duration-200 group p-0"
          >
            <div className="relative">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={100}
                height={48}
                className="w-full object-cover"
              />
              <div
                className={cn(
                  "absolute inset-0 bg-black/40 flex items-center justify-center",
                  "opacity-0 group-hover:opacity-100 transition-opacity"
                )}
              >
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
                  <Play className="w-6 h-6" />
                </Button>
              </div>
              <div className="absolute bottom-2 right-2 rounded bg-black/50 px-1.5 py-0.5 text-xs text-white">
                {video.duration}
              </div>
            </div>
            <CardContent className="space-y-4 pb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {video.category}
              </Badge>
              <h3 className="font-semibold ">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.description}</p>
              <Button
                variant="secondary"
                className="w-full bg-primary/10 text-primary"
              >
                <Play className="w-4 h-4 " />
                <span>Watch Video</span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default VideoTutorialsTab;
