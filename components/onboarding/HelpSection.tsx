"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { faqItems } from "@/lib/data/onboarding.mock";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useCallback, useState } from "react";

export function HelpSection() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleContactSupport = useCallback(() => {
    console.log("Contact support clicked");
  }, []);

  const handleToggleFAQ = useCallback(() => {
    setShowFAQ(!showFAQ);
  }, [showFAQ]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
              <HelpCircle className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <CardTitle className="font-semibold">Need Help?</CardTitle>
              <p className="text-sm text-muted-foreground">
                We&apos;re here to support your success
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              onClick={handleContactSupport}
              className="bg-purple-600 hover:bg-purple-700"
              size="sm"
            >
              Contact Support
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleFAQ}
              className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
            >
              FAQ
              {showFAQ ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardHeader>

      <Collapsible open={showFAQ} onOpenChange={setShowFAQ}>
        <CollapsibleContent>
          <Separator />
          <CardContent className="py-4">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="p-0 rounded-md">
                  <Collapsible
                    open={expandedFAQ === index}
                    onOpenChange={(open) => setExpandedFAQ(open ? index : null)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-between"
                      >
                        <span className="text-sm ">{item.question}</span>
                        {expandedFAQ === index ? (
                          <ChevronUp className="h-4 w-4 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 flex-shrink-0" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <Separator className="mb-3" />
                      <p className="text-sm leading-relaxed">{item.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
