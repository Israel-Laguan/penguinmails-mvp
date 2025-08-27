"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useCallback } from "react";

interface VideoTutorialProps {
  stepTitle: string;
}

export function VideoTutorial({ stepTitle }: VideoTutorialProps) {
  const handlePlayVideo = useCallback(() => {
    console.log("Play video tutorial:", stepTitle);
  }, [stepTitle]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">📹 Video Tutorial</h3>
      <Card className="bg-gradient-to-br from-muted/50 to-muted w-full">
        <CardContent className="p-8 text-center space-y-4">
          <Button
            variant="destructive"
            size="lg"
            className="rounded-full w-24 h-24"
            onClick={handlePlayVideo}
            aria-label={`Play video tutorial for ${stepTitle}`}
          >
            <Play className="h-12 w-12 text-white" />
          </Button>
          <div className="space-y-2">
            <h4 className="font-semibold">Step-by-Step Guide: {stepTitle}</h4>
            <p className="text-muted-foreground">
              Watch our detailed tutorial to complete this step
            </p>
          </div>
          <Button variant="destructive" onClick={handlePlayVideo}>
            ▶ Watch Video Tutorial
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
