import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import content from "@/app/content";

export function FAQSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 border-t bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {content.faq.title}
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {content.faq.questions.map((faq, index) => (
              <AccordionItem key={`faq-item-${index}`} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <span className="flex items-center">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
