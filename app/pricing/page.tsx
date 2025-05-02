import React from 'react';
import Link from 'next/link'; // Import Link
import { Button } from '@/components/ui/button'; // Assuming shadcn setup
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming shadcn setup
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'; // Assuming shadcn setup
import { Check, Star, Briefcase, MailQuestion, HelpCircle } from 'lucide-react'; // Icons
import { pricingContent } from './content';
import { LandingLayout } from '@/components/layout/landing';

export default function PricingPage() {
  return (
      <LandingLayout>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{pricingContent.hero.title}</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {pricingContent.hero.description}
            </p>
          </div>

          <div className="mx-auto grid max-w-sm gap-8 md:max-w-4xl md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 lg:gap-12">
            {/* Business Plan */}
            <Card className="flex flex-col">
              <CardHeader className="pb-4">
                <Briefcase className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>{pricingContent.plans.business.title}</CardTitle>
                <CardDescription>{pricingContent.plans.business.description}</CardDescription>
                <div className="text-4xl font-bold mt-2">{pricingContent.plans.business.price}<span className="text-xl font-normal text-muted-foreground">{pricingContent.plans.business.interval}</span></div>
              </CardHeader>
              <CardContent className="grid gap-4 flex-grow">
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  {pricingContent.plans.business.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" /> {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/signup?plan=business">{pricingContent.plans.business.ctaText}</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Plan */}
            <Card className="flex flex-col border-primary ring-2 ring-primary">
              <CardHeader className="pb-4">
                <Star className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>{pricingContent.plans.premium.title}</CardTitle>
                <CardDescription>{pricingContent.plans.premium.description}</CardDescription>
                <div className="text-4xl font-bold mt-2">{pricingContent.plans.premium.price}<span className="text-xl font-normal text-muted-foreground">{pricingContent.plans.premium.interval}</span></div>
              </CardHeader>
              <CardContent className="grid gap-4 flex-grow">
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  {pricingContent.plans.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" /> {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/signup?plan=premium">{pricingContent.plans.premium.ctaText}</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Custom Plan */}
            <Card className="flex flex-col">
              <CardHeader className="pb-4">
                <MailQuestion className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>{pricingContent.plans.custom.title}</CardTitle>
                <CardDescription>{pricingContent.plans.custom.description}</CardDescription>
                <div className="text-4xl font-bold mt-2">{pricingContent.plans.custom.price}</div>
              </CardHeader>
              <CardContent className="grid gap-4 flex-grow">
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  {pricingContent.plans.custom.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" /> {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">{pricingContent.plans.custom.ctaText}</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing FAQ Section */}
      <section id="pricing-faq" className="w-full py-12 md:py-24 lg:py-32 border-t bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{pricingContent.faq.title}</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {pricingContent.faq.items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>
                    <span className="flex items-center">
                      <HelpCircle className="mr-2 h-4 w-4" />{item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
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
