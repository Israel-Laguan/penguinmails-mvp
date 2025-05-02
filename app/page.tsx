import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Assuming shadcn setup
import {
  Rocket,
  HelpCircle,
} from "lucide-react"; // Icons
import { LandingLayout } from "@/components/layout/landing";
import content from "@/app/content";
// Import Image from next/image if you plan to add images
// import Image from 'next/image';

export default function LandingPage() {
  return (
    <LandingLayout>
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {content.hero.title}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {content.hero.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {/* Use Link within Button asChild */}
                  <Button size="lg" asChild>
                    <Link href="/signup">{content.hero.buttons.getStarted}</Link>
                  </Button>
                  {/* Use Link within Button asChild */}
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/pricing">{content.hero.buttons.viewPricing}</Link>
                  </Button>
                </div>
              </div>
              {/* Placeholder for an image or illustration */}
              {/* If adding an image, use <Image /> from next/image */}
              {/* Example: <Image src="/path/to/your/image.png" alt="Hero Illustration" width={600} height={400} className="rounded-lg object-cover" /> */}
              <div className="flex items-center justify-center">
                <Rocket className="h-48 w-48 text-primary/30 animate-bounce-slow" />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  {content.howItWorks.badge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {content.howItWorks.title}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {content.howItWorks.description}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {content.howItWorks.steps.map((step, index) => (
                <div key={index} className="grid gap-1 text-center">
                  {/* Keep the icon component as is */}
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Home FAQ Section */}
        <section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 border-t bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {content.faq.title}
              </h2>
            </div>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {content.faq.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger>
                      <span className="flex items-center">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
    </LandingLayout>
  );
}
