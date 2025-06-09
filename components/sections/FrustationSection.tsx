import React from "react";
import Image from "next/image";
import content from "@/app/content";

export const FrustrationSection: React.FC = () => {
  return (
    <section className="bg-[#F9FAFB] text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left column - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-['Labora_Rounded']">
            {content.frustration.title}
          </h2>
          <ul className="space-y-4 text-black font-['Labora_Rounded']">
            {content.frustration.painPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-400 text-xl">❌</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column - Image */}
        <div className="flex justify-center">
          <Image
            src="/img/sad-penguin.png"
            alt="Sad Penguin in Spam Snow"
            width={50}
            height={50}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
