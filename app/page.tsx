import React from "react";
import { LandingLayout } from "@/components/layout/landing";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FAQSection } from "@/components/sections/FAQSection";
import "../app/globals.css";

export default function LandingPage() {
  return (
    <LandingLayout fullWidth={true}>
      <HeroSection />
      <HowItWorksSection />
      <FAQSection />
    </LandingLayout>
  );
}
