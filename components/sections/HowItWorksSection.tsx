import React from "react";
import content from "@/app/content";
import { Mail, Layout, BarChart } from "lucide-react";
import { StepCard } from "./StepCard";

export const HowItWorksSection: React.FC = () => {
  const steps = content.howItWorks.steps;

  return (
    <section className="bg-[#0f172a] text-white py-20 px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {content.howItWorks.badge}{" "}
          <span className="text-blue-400">
            {content.howItWorks.badgeHighlight}
          </span>{" "}
          {content.howItWorks.badgeDescription}
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          {content.howItWorks.title}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
        {steps.map((step, index) => {
          const IconComp = [Mail, Layout, BarChart][index];
          return (
            <StepCard
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              IconComponent={IconComp}
              isLast={index === steps.length - 1}
            />
          );
        })}
      </div>
    </section>
  );
};
